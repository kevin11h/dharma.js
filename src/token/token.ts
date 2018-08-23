import { Dharma } from "../dharma";

import { EthereumAddress, TokenAmount } from "../types";

import { TokenAPI, TokenAttributes } from "../apis/token_api";

import { BigNumber } from "../../utils/bignumber";

export interface TokenData {
    symbol: string;
    balance: number;
    allowance: number;
    hasUnlimitedAllowance: boolean;
    name: string;
    numDecimals: number;
    address: string;
}

export async function all(dharma: Dharma, owner: string): Promise<TokenData[]> {
    EthereumAddress.assertValid(owner);

    const tokens = await dharma.token.getSupportedTokens();

    return Promise.all(
        tokens.map((attributes) => {
            return getDataPromise(dharma, attributes, owner);
        }),
    );
}

export async function getDataForSymbol(
    dharma: Dharma,
    symbol: string,
    owner: string,
): Promise<TokenData> {
    EthereumAddress.assertValid(owner);

    const attributes = await dharma.token.getTokenAttributesBySymbol(symbol);

    return getDataPromise(dharma, attributes, owner);
}

/**
 * If necessary, eventually sets the proxy's allowance for the specified token and user address
 * pair to unlimited. If an update occurs, the method returns a transaction hash. Otherwise, this is
 * a no op.
 *
 * @example
 * await Token.makeAllowanceUnlimitedIfNecessary(dharma, "0x...", "REP");
 * => "0x..."
 *
 * @returns {Promise<string | void>}
 */
export async function makeAllowanceUnlimitedIfNecessary(
    dharma: Dharma,
    tokenSymbol: string,
    owner: string,
): Promise<string | void> {
    EthereumAddress.assertValid(owner);

    const tokenAddress = await dharma.contracts.getTokenAddressBySymbolAsync(tokenSymbol);

    const hasUnlimitedAllowance = await dharma.token.hasUnlimitedAllowance(tokenAddress, owner);

    if (!hasUnlimitedAllowance) {
        return dharma.token.setUnlimitedProxyAllowanceAsync(tokenAddress, {
            from: owner,
        });
    }
}

/**
 * Eventually revokes the proxy's allowance for the specified token and user address pair.
 *
 * * @example
 * await Token.revokeAllowance(dharma, "0x...", "REP");
 * => "0x..."
 *
 * @returns {Promise<string>}
 */
export async function revokeAllowance(
    dharma: Dharma,
    tokenSymbol: string,
    owner: string,
): Promise<string> {
    EthereumAddress.assertValid(owner);

    const tokenAddress = await dharma.contracts.getTokenAddressBySymbolAsync(tokenSymbol);

    return dharma.token.setProxyAllowanceAsync(tokenAddress, new BigNumber(0), {
        from: owner,
    });
}

function getDataPromise(
    dharma: Dharma,
    tokenAttributes: TokenAttributes,
    owner: string,
): Promise<TokenData> {
    return new Promise((resolve) => {
        const { address, symbol, name, numDecimals } = tokenAttributes;

        const balancePromise = dharma.token.getBalanceAsync(address, owner);

        const allowancePromise = dharma.token.getProxyAllowanceAsync(address, owner);

        Promise.all([balancePromise, allowancePromise]).then((values) => {
            const [rawBalance, rawAllowance] = values;

            const balanceAmount = TokenAmount.fromRaw(rawBalance, symbol);

            const allowanceAmount = TokenAmount.fromRaw(rawAllowance, symbol);

            const hasUnlimitedAllowance = TokenAPI.isUnlimitedAllowance(allowanceAmount.rawAmount);

            resolve({
                symbol,
                name,
                address,
                numDecimals: numDecimals.toNumber(),
                balance: balanceAmount.decimalAmount,
                allowance: allowanceAmount.decimalAmount,
                hasUnlimitedAllowance,
            });
        });
    });
}
