// External
import { BigNumber } from "bignumber.js";

// Utils
import * as Units from "utils/units";
import { ERC20TokenSymbol } from "utils/constants";
import { ACCOUNTS } from "../../../accounts";

// Types
import { DebtTokenScenario } from "./";
import { SimpleInterestLoanOrder } from "src/adapters/simple_interest_loan_adapter";

// Errors
import { DebtTokenAPIErrors } from "src/apis/debt_token_api";

const CREDITOR = ACCOUNTS[0].address;
const DEBTOR = ACCOUNTS[1].address;
const RECIPIENT = ACCOUNTS[2].address;

const order: SimpleInterestLoanOrder = {
    principalAmount: Units.ether(10),
    principalTokenSymbol: ERC20TokenSymbol.ZRX,
    interestRate: new BigNumber(4.135),
    amortizationUnit: "months",
    termLength: new BigNumber(3),
    debtor: DEBTOR,
    creditor: CREDITOR,
};

const defaults: DebtTokenScenario.TransferFromScenario = {
    // Scenario Setup Parameters
    description: `Default Description`,
    orders: [order],
    debtor: DEBTOR,
    creditor: CREDITOR,
    succeeds: false,

    // TransferFrom Scenario parameters
    from: CREDITOR,
    to: RECIPIENT,
    tokenID: (ordersIssuanceHash: BigNumber, other: BigNumber) => ordersIssuanceHash,
    data: "0x123456789abcdef",
};

export const UNSUCCESSFUL_TRANSFER_FROM_SCENARIOS: DebtTokenScenario.TransferFromScenario[] = [
    {
        ...defaults,
        description: "account being transferred from does not own debt token",
        tokenID: (ordersIssuanceHash: BigNumber, other: BigNumber) => other,
        errorType: "TOKEN_DOES_NOT_BELONG_TO_ACCOUNT",
        errorMessage: "Specified debt token does not belong to account",
    },
];
