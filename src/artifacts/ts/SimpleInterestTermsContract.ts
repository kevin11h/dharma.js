export const SimpleInterestTermsContract = {
    contractName: "SimpleInterestTermsContract",
    abi: [
        {
            constant: true,
            inputs: [
                {
                    name: "parameters",
                    type: "bytes32",
                },
            ],
            name: "unpackParameters",
            outputs: [
                {
                    name: "_principalPlusInterest",
                    type: "uint128",
                },
                {
                    name: "_amortizationUnitType",
                    type: "uint8",
                },
                {
                    name: "_termLengthInAmortizationUnits",
                    type: "uint120",
                },
            ],
            payable: false,
            stateMutability: "pure",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "HOUR_BLOCK_LENGTH",
            outputs: [
                {
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    name: "amortizationUnitType",
                    type: "uint8",
                },
            ],
            name: "getAmortizationUnitLengthInBlocks",
            outputs: [
                {
                    name: "_amortizationUnitLengthInBlocks",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "pure",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "agreementId",
                    type: "bytes32",
                },
                {
                    name: "payer",
                    type: "address",
                },
                {
                    name: "beneficiary",
                    type: "address",
                },
                {
                    name: "unitsOfRepayment",
                    type: "uint256",
                },
                {
                    name: "tokenAddress",
                    type: "address",
                },
            ],
            name: "registerRepayment",
            outputs: [
                {
                    name: "_success",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    name: "agreementId",
                    type: "bytes32",
                },
                {
                    name: "blockNumber",
                    type: "uint256",
                },
            ],
            name: "getExpectedRepaymentValue",
            outputs: [
                {
                    name: "_expectedRepaymentValue",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "MONTH_BLOCK_LENGTH",
            outputs: [
                {
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "YEAR_BLOCK_LENGTH",
            outputs: [
                {
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "DAY_BLOCK_LENGTH",
            outputs: [
                {
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "WEEK_BLOCK_LENGTH",
            outputs: [
                {
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    name: "agreementId",
                    type: "bytes32",
                },
                {
                    name: "blockNumber",
                    type: "uint256",
                },
            ],
            name: "getValueRepaid",
            outputs: [
                {
                    name: "_valueRepaid",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    name: "_debtRegistry",
                    type: "address",
                },
                {
                    name: "_repaymentToken",
                    type: "address",
                },
                {
                    name: "_repaymentRouter",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor",
        },
    ],
    bytecode:
        "0x6060604052341561000f57600080fd5b6040516060806109ef8339810160405280805190602001909190805190602001909190805190602001909190505082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506108dd806101126000396000f3006060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063113d81c0146100a9578063175458111461013e5780632cfd6f9c146101675780635f0280ba146101a157806399114d8414610246578063a70e19051461028a578063df25db13146102b3578063e51b1808146102dc578063ed3caa1914610305578063f03a423c1461032e575b600080fd5b34156100b457600080fd5b6100ce600480803560001916906020019091905050610372565b60405180846fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020018360ff1660ff168152602001826effffffffffffffffffffffffffffff166effffffffffffffffffffffffffffff168152602001935050505060405180910390f35b341561014957600080fd5b6101516103e9565b6040518082815260200191505060405180910390f35b341561017257600080fd5b61018b600480803560ff169060200190919050506103ef565b6040518082815260200191505060405180910390f35b34156101ac57600080fd5b61022c60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104ab565b604051808215151515815260200191505060405180910390f35b341561025157600080fd5b6102746004808035600019169060200190919080359060200190919050506105c5565b6040518082815260200191505060405180910390f35b341561029557600080fd5b61029d6107e5565b6040518082815260200191505060405180910390f35b34156102be57600080fd5b6102c66107ec565b6040518082815260200191505060405180910390f35b34156102e757600080fd5b6102ef6107f3565b6040518082815260200191505060405180910390f35b341561031057600080fd5b6103186107f9565b6040518082815260200191505060405180910390f35b341561033957600080fd5b61035c6004808035600019169060200190919080359060200190919050506107ff565b6040518082815260200191505060405180910390f35b600080600080600080600435925060143591506015359050827001000000000000000000000000000000009004827f01000000000000000000000000000000000000000000000000000000000000009004827101000000000000000000000000000000000090049550955095505050509193909250565b61010181565b60008060048111156103fd57fe5b60ff168260ff1614156104145761010190506104a6565b6001600481111561042157fe5b60ff168260ff1614156104385761181b90506104a6565b6002600481111561044557fe5b60ff168260ff16141561045c5761a8c090506104a6565b6003600481111561046957fe5b60ff168260ff161415610481576202d33690506104a6565b60048081111561048d57fe5b60ff168260ff1614156104a5576202d33690506104a6565b5b919050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561050d57600090506105bc565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156105b7576105908360008089600019166000191681526020019081526020016000205461082490919063ffffffff16565b600080886000191660001916815260200190815260200160002081905550600190506105bc565b600090505b95945050505050565b600080600080600080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663314a522e8b6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b151561067257600080fd5b6102c65a03f1151561068357600080fd5b505050604051805190509650600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663703427858b6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b151561073057600080fd5b6102c65a03f1151561074157600080fd5b50505060405180519050955061075687610372565b945094509450610765846103ef565b915061078c8261077e888c61084290919063ffffffff16565b61085b90919063ffffffff16565b90506107d6836effffffffffffffffffffffffffffff166107c8876fffffffffffffffffffffffffffffffff168461087690919063ffffffff16565b61085b90919063ffffffff16565b97505050505050505092915050565b6202d33681565b6202d33681565b61181b81565b61a8c081565b6000806000846000191660001916815260200190815260200160002054905092915050565b600080828401905083811015151561083857fe5b8091505092915050565b600082821115151561085057fe5b818303905092915050565b600080828481151561086957fe5b0490508091505092915050565b600080600084141561088b57600091506108aa565b828402905082848281151561089c57fe5b041415156108a657fe5b8091505b50929150505600a165627a7a72305820fdc3d2a25355b88660b5558c375e6133e72f68a753ecf1f281a4beedcdad87880029",
    deployedBytecode:
        "0x6060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063113d81c0146100a9578063175458111461013e5780632cfd6f9c146101675780635f0280ba146101a157806399114d8414610246578063a70e19051461028a578063df25db13146102b3578063e51b1808146102dc578063ed3caa1914610305578063f03a423c1461032e575b600080fd5b34156100b457600080fd5b6100ce600480803560001916906020019091905050610372565b60405180846fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020018360ff1660ff168152602001826effffffffffffffffffffffffffffff166effffffffffffffffffffffffffffff168152602001935050505060405180910390f35b341561014957600080fd5b6101516103e9565b6040518082815260200191505060405180910390f35b341561017257600080fd5b61018b600480803560ff169060200190919050506103ef565b6040518082815260200191505060405180910390f35b34156101ac57600080fd5b61022c60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104ab565b604051808215151515815260200191505060405180910390f35b341561025157600080fd5b6102746004808035600019169060200190919080359060200190919050506105c5565b6040518082815260200191505060405180910390f35b341561029557600080fd5b61029d6107e5565b6040518082815260200191505060405180910390f35b34156102be57600080fd5b6102c66107ec565b6040518082815260200191505060405180910390f35b34156102e757600080fd5b6102ef6107f3565b6040518082815260200191505060405180910390f35b341561031057600080fd5b6103186107f9565b6040518082815260200191505060405180910390f35b341561033957600080fd5b61035c6004808035600019169060200190919080359060200190919050506107ff565b6040518082815260200191505060405180910390f35b600080600080600080600435925060143591506015359050827001000000000000000000000000000000009004827f01000000000000000000000000000000000000000000000000000000000000009004827101000000000000000000000000000000000090049550955095505050509193909250565b61010181565b60008060048111156103fd57fe5b60ff168260ff1614156104145761010190506104a6565b6001600481111561042157fe5b60ff168260ff1614156104385761181b90506104a6565b6002600481111561044557fe5b60ff168260ff16141561045c5761a8c090506104a6565b6003600481111561046957fe5b60ff168260ff161415610481576202d33690506104a6565b60048081111561048d57fe5b60ff168260ff1614156104a5576202d33690506104a6565b5b919050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561050d57600090506105bc565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156105b7576105908360008089600019166000191681526020019081526020016000205461082490919063ffffffff16565b600080886000191660001916815260200190815260200160002081905550600190506105bc565b600090505b95945050505050565b600080600080600080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663314a522e8b6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b151561067257600080fd5b6102c65a03f1151561068357600080fd5b505050604051805190509650600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663703427858b6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b151561073057600080fd5b6102c65a03f1151561074157600080fd5b50505060405180519050955061075687610372565b945094509450610765846103ef565b915061078c8261077e888c61084290919063ffffffff16565b61085b90919063ffffffff16565b90506107d6836effffffffffffffffffffffffffffff166107c8876fffffffffffffffffffffffffffffffff168461087690919063ffffffff16565b61085b90919063ffffffff16565b97505050505050505092915050565b6202d33681565b6202d33681565b61181b81565b61a8c081565b6000806000846000191660001916815260200190815260200160002054905092915050565b600080828401905083811015151561083857fe5b8091505092915050565b600082821115151561085057fe5b818303905092915050565b600080828481151561086957fe5b0490508091505092915050565b600080600084141561088b57600091506108aa565b828402905082848281151561089c57fe5b041415156108a657fe5b8091505b50929150505600a165627a7a72305820fdc3d2a25355b88660b5558c375e6133e72f68a753ecf1f281a4beedcdad87880029",
    sourceMap:
        "697:5614:9:-;;;1233:306;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1431:13;1403:12;;:42;;;;;;;;;;;;;;;;;;1473:15;1456:14;;:32;;;;;;;;;;;;;;;;;;1516:16;1498:15;;:34;;;;;;;;;;;;;;;;;;1233:306;;;697:5614;;;;;;",
    deployedSourceMap:
        "697:5614:9:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4810:735;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;839:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5551:758;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2250:509;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3387:783;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;991:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1045:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;889:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;939:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4600:204;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4810:735;4914:30;4958:27;4999:38;5062:29;5101:27;5138:37;5247:1;5234:12;5209:40;;5299:2;5286:12;5262:40;;5361:2;5348:12;5315:49;;5413:21;5405:30;;;5455:20;5449:27;;;5498:29;5490:38;;;5384:154;;;;;;4810:735;;;;;;;;:::o;839:44::-;880:3;839:44;:::o;5551:758::-;5667:36;5753:26;5747:33;;;;;;;;5723:57;;:20;:57;;;5719:584;;;880:3;5796:24;;;;5719:584;5871:25;5865:32;;;;;;;;5841:56;;:20;:56;;;5837:466;;;929:4;5913:23;;;;5837:466;5987:26;5981:33;;;;;;;;5957:57;;:20;:57;;;5953:350;;;980:5;6030:24;;;;5953:350;6105:27;6099:34;;;;;;;;6075:58;;:20;:58;;;6071:232;;;1033:6;6149:25;;;;6071:232;6225:26;6219:33;;;;;;;;6195:57;;:20;:57;;;6191:112;;;1086:6;6268:24;;;;6191:112;5551:758;;;;:::o;2250:509::-;2460:13;2507:15;;;;;;;;;;;2493:29;;:10;:29;;;;2489:72;;;2545:5;2538:12;;;;2489:72;2591:14;;;;;;;;;;;2575:30;;:12;:30;;;2571:159;;;2648:46;2677:16;2648:11;:24;2660:11;2648:24;;;;;;;;;;;;;;;;;;:28;;:46;;;;:::i;:::-;2621:11;:24;2633:11;2621:24;;;;;;;;;;;;;;;;;:73;;;;2715:4;2708:11;;;;2571:159;2747:5;2740:12;;2250:509;;;;;;;;:::o;3387:783::-;3531:28;3575:18;3658:24;3749:21;3772:20;3794:29;3878:27;3973:24;3596:12;;;;;;;;;;;:39;;;3636:11;3596:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3575:73;;3685:12;;;;;;;;;;;:35;;;3721:11;3685:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3658:75;;3839:28;3856:10;3839:16;:28::i;:::-;3744:123;;;;;;3908:55;3942:20;3908:33;:55::i;:::-;3878:85;;4000:64;4041:22;4000:36;4016:19;4000:11;:15;;:36;;;;:::i;:::-;:40;;:64;;;;:::i;:::-;3973:91;;4082:81;4133:29;4082:81;;:46;4106:21;4082:46;;:19;:23;;:46;;;;:::i;:::-;:50;;:81;;;;:::i;:::-;4075:88;;3387:783;;;;;;;;;;;:::o;991:48::-;1033:6;991:48;:::o;1045:47::-;1086:6;1045:47;:::o;889:44::-;929:4;889:44;:::o;939:46::-;980:5;939:46;:::o;4600:204::-;4733:17;4773:11;:24;4785:11;4773:24;;;;;;;;;;;;;;;;;;4766:31;;4600:204;;;;:::o;1008:129:26:-;1066:7;1081:9;1097:1;1093;:5;1081:17;;1116:1;1111;:6;;1104:14;;;;;;1131:1;1124:8;;1008:129;;;;;:::o;836:110::-;894:7;921:1;916;:6;;909:14;;;;;;940:1;936;:5;929:12;;836:110;;;;:::o;458:265::-;516:7;605:9;621:1;617;:5;;;;;;;;605:17;;717:1;710:8;;458:265;;;;;:::o;203:173::-;261:7;316:9;285:1;280;:6;276:35;;;303:1;296:8;;;;276:35;332:1;328;:5;316:17;;355:1;350;346;:5;;;;;;;;:10;339:18;;;;;;370:1;363:8;;203:173;;;;;;:::o",
    source:
        '/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the "License");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an "AS IS" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport "zeppelin-solidity/contracts/math/SafeMath.sol";\nimport "../DebtRegistry.sol";\n\n\ncontract SimpleInterestTermsContract {\n    using SafeMath for uint;\n\n    enum AmortizationUnitType { HOURS, DAYS, WEEKS, MONTHS, YEARS }\n\n    uint public constant HOUR_BLOCK_LENGTH = 257;\n    uint public constant DAY_BLOCK_LENGTH = 6171;\n    uint public constant WEEK_BLOCK_LENGTH = 43200;\n    uint public constant MONTH_BLOCK_LENGTH = 185142;\n    uint public constant YEAR_BLOCK_LENGTH = 185142;\n\n    mapping (bytes32 => uint) valueRepaid;\n\n    DebtRegistry debtRegistry;\n\n    address repaymentToken;\n    address repaymentRouter;\n\n    function SimpleInterestTermsContract(\n        address _debtRegistry,\n        address _repaymentToken,\n        address _repaymentRouter\n    )\n        public\n    {\n        debtRegistry = DebtRegistry(_debtRegistry);\n\n        repaymentToken = _repaymentToken;\n        repaymentRouter = _repaymentRouter;\n    }\n\n     /// When called, the registerRepayment function records the debtor\'s\n     ///  repayment, as well as any auxiliary metadata needed by the contract\n     ///  to determine ex post facto the value repaid (e.g. current USD\n     ///  exchange rate)\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  payer address. The address of the payer.\n     /// @param  beneficiary address. The address of the payment\'s beneficiary.\n     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    )\n        public\n        returns (bool _success)\n    {\n        if (msg.sender != repaymentRouter) {\n            return false;\n        }\n\n        if (tokenAddress == repaymentToken) {\n            valueRepaid[agreementId] = valueRepaid[agreementId].add(unitsOfRepayment);\n            return true;\n        }\n\n        return false;\n    }\n\n     /// Returns the cumulative units-of-value expected to be repaid by any given blockNumber.\n     ///  Note this is not a constant function -- this value can vary on basis of any number of\n     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  blockNumber uint. The block number for which repayment expectation is being queried.\n     /// @return uint256 The cumulative units-of-value expected to be repaid by the time the given blockNumber lapses.\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 blockNumber\n    )\n        public\n        view\n        returns (uint _expectedRepaymentValue)\n    {\n        bytes32 parameters = debtRegistry.getTermsContractParameters(agreementId);\n        uint issuanceBlockNumber = debtRegistry.getIssuanceBlockNumber(agreementId);\n\n        var (principalPlusInterest, amortizationUnitType, termLengthInAmortizationUnits) =\n            unpackParameters(parameters);\n\n        uint amortizationUnitLength = getAmortizationUnitLengthInBlocks(amortizationUnitType);\n        uint numRepaymentPeriods = blockNumber.sub(issuanceBlockNumber).div(amortizationUnitLength);\n\n        return numRepaymentPeriods.mul(principalPlusInterest).div(termLengthInAmortizationUnits);\n    }\n\n     /// Returns the cumulative units-of-value repaid by the point at which a given blockNumber has lapsed.\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param blockNumber uint. The block number for which repayment value is being queried.\n     /// @return uint256 The cumulative units-of-value repaid by the time the given blockNumber lapsed.\n    function getValueRepaid(\n        bytes32 agreementId,\n        uint256 blockNumber\n    )\n        public\n        view\n        returns (uint _valueRepaid)\n    {\n        return valueRepaid[agreementId];\n    }\n\n    function unpackParameters(bytes32 parameters)\n        public\n        pure\n        returns (\n            uint128 _principalPlusInterest,\n            uint8 _amortizationUnitType,\n            uint120 _termLengthInAmortizationUnits\n        )\n    {\n        bytes16 principalPlusInterest;\n        bytes1 amortizationUnitType;\n        bytes15 termLengthInAmortizationUnits;\n\n        assembly {\n            principalPlusInterest := calldataload(4)\n            amortizationUnitType := calldataload(20)\n            termLengthInAmortizationUnits := calldataload(21)\n        }\n\n        return (\n            uint128(principalPlusInterest),\n            uint8(amortizationUnitType),\n            uint120(termLengthInAmortizationUnits)\n        );\n    }\n\n    function getAmortizationUnitLengthInBlocks(uint8 amortizationUnitType)\n        public\n        pure\n        returns (uint _amortizationUnitLengthInBlocks)\n    {\n        if (amortizationUnitType == uint8(AmortizationUnitType.HOURS)) {\n            return HOUR_BLOCK_LENGTH;\n        } else if (amortizationUnitType == uint8(AmortizationUnitType.DAYS)) {\n            return DAY_BLOCK_LENGTH;\n        } else if (amortizationUnitType == uint8(AmortizationUnitType.WEEKS)) {\n            return WEEK_BLOCK_LENGTH;\n        } else if (amortizationUnitType == uint8(AmortizationUnitType.MONTHS)) {\n            return MONTH_BLOCK_LENGTH;\n        } else if (amortizationUnitType == uint8(AmortizationUnitType.YEARS)) {\n            return YEAR_BLOCK_LENGTH;\n        }\n    }\n}\n',
    sourcePath:
        "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/examples/SimpleInterestTermsContract.sol",
    ast: {
        attributes: {
            absolutePath:
                "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/examples/SimpleInterestTermsContract.sol",
            exportedSymbols: {
                SimpleInterestTermsContract: [2793],
            },
        },
        children: [
            {
                attributes: {
                    literals: ["solidity", "0.4", ".18"],
                },
                id: 2528,
                name: "PragmaDirective",
                src: "584:23:9",
            },
            {
                attributes: {
                    SourceUnit: 5554,
                    absolutePath: "zeppelin-solidity/contracts/math/SafeMath.sol",
                    file: "zeppelin-solidity/contracts/math/SafeMath.sol",
                    scope: 2794,
                    symbolAliases: [null],
                    unitAlias: "",
                },
                id: 2529,
                name: "ImportDirective",
                src: "609:55:9",
            },
            {
                attributes: {
                    SourceUnit: 1605,
                    absolutePath:
                        "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/DebtRegistry.sol",
                    file: "../DebtRegistry.sol",
                    scope: 2794,
                    symbolAliases: [null],
                    unitAlias: "",
                },
                id: 2530,
                name: "ImportDirective",
                src: "665:29:9",
            },
            {
                attributes: {
                    baseContracts: [null],
                    contractDependencies: [null],
                    contractKind: "contract",
                    documentation: null,
                    fullyImplemented: true,
                    linearizedBaseContracts: [2793],
                    name: "SimpleInterestTermsContract",
                    scope: 2794,
                },
                children: [
                    {
                        children: [
                            {
                                attributes: {
                                    contractScope: null,
                                    name: "SafeMath",
                                    referencedDeclaration: 5553,
                                    type: "library SafeMath",
                                },
                                id: 2531,
                                name: "UserDefinedTypeName",
                                src: "746:8:9",
                            },
                            {
                                attributes: {
                                    name: "uint",
                                    type: "uint256",
                                },
                                id: 2532,
                                name: "ElementaryTypeName",
                                src: "759:4:9",
                            },
                        ],
                        id: 2533,
                        name: "UsingForDirective",
                        src: "740:24:9",
                    },
                    {
                        attributes: {
                            canonicalName: "SimpleInterestTermsContract.AmortizationUnitType",
                            name: "AmortizationUnitType",
                        },
                        children: [
                            {
                                attributes: {
                                    name: "HOURS",
                                },
                                id: 2534,
                                name: "EnumValue",
                                src: "798:5:9",
                            },
                            {
                                attributes: {
                                    name: "DAYS",
                                },
                                id: 2535,
                                name: "EnumValue",
                                src: "805:4:9",
                            },
                            {
                                attributes: {
                                    name: "WEEKS",
                                },
                                id: 2536,
                                name: "EnumValue",
                                src: "811:5:9",
                            },
                            {
                                attributes: {
                                    name: "MONTHS",
                                },
                                id: 2537,
                                name: "EnumValue",
                                src: "818:6:9",
                            },
                            {
                                attributes: {
                                    name: "YEARS",
                                },
                                id: 2538,
                                name: "EnumValue",
                                src: "826:5:9",
                            },
                        ],
                        id: 2539,
                        name: "EnumDefinition",
                        src: "770:63:9",
                    },
                    {
                        attributes: {
                            constant: true,
                            name: "HOUR_BLOCK_LENGTH",
                            scope: 2793,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "uint256",
                            visibility: "public",
                        },
                        children: [
                            {
                                attributes: {
                                    name: "uint",
                                    type: "uint256",
                                },
                                id: 2540,
                                name: "ElementaryTypeName",
                                src: "839:4:9",
                            },
                            {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "323537",
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    lValueRequested: false,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 257",
                                    value: "257",
                                },
                                id: 2541,
                                name: "Literal",
                                src: "880:3:9",
                            },
                        ],
                        id: 2542,
                        name: "VariableDeclaration",
                        src: "839:44:9",
                    },
                    {
                        attributes: {
                            constant: true,
                            name: "DAY_BLOCK_LENGTH",
                            scope: 2793,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "uint256",
                            visibility: "public",
                        },
                        children: [
                            {
                                attributes: {
                                    name: "uint",
                                    type: "uint256",
                                },
                                id: 2543,
                                name: "ElementaryTypeName",
                                src: "889:4:9",
                            },
                            {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "36313731",
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    lValueRequested: false,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 6171",
                                    value: "6171",
                                },
                                id: 2544,
                                name: "Literal",
                                src: "929:4:9",
                            },
                        ],
                        id: 2545,
                        name: "VariableDeclaration",
                        src: "889:44:9",
                    },
                    {
                        attributes: {
                            constant: true,
                            name: "WEEK_BLOCK_LENGTH",
                            scope: 2793,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "uint256",
                            visibility: "public",
                        },
                        children: [
                            {
                                attributes: {
                                    name: "uint",
                                    type: "uint256",
                                },
                                id: 2546,
                                name: "ElementaryTypeName",
                                src: "939:4:9",
                            },
                            {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "3433323030",
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    lValueRequested: false,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 43200",
                                    value: "43200",
                                },
                                id: 2547,
                                name: "Literal",
                                src: "980:5:9",
                            },
                        ],
                        id: 2548,
                        name: "VariableDeclaration",
                        src: "939:46:9",
                    },
                    {
                        attributes: {
                            constant: true,
                            name: "MONTH_BLOCK_LENGTH",
                            scope: 2793,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "uint256",
                            visibility: "public",
                        },
                        children: [
                            {
                                attributes: {
                                    name: "uint",
                                    type: "uint256",
                                },
                                id: 2549,
                                name: "ElementaryTypeName",
                                src: "991:4:9",
                            },
                            {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "313835313432",
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    lValueRequested: false,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 185142",
                                    value: "185142",
                                },
                                id: 2550,
                                name: "Literal",
                                src: "1033:6:9",
                            },
                        ],
                        id: 2551,
                        name: "VariableDeclaration",
                        src: "991:48:9",
                    },
                    {
                        attributes: {
                            constant: true,
                            name: "YEAR_BLOCK_LENGTH",
                            scope: 2793,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "uint256",
                            visibility: "public",
                        },
                        children: [
                            {
                                attributes: {
                                    name: "uint",
                                    type: "uint256",
                                },
                                id: 2552,
                                name: "ElementaryTypeName",
                                src: "1045:4:9",
                            },
                            {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "313835313432",
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    lValueRequested: false,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 185142",
                                    value: "185142",
                                },
                                id: 2553,
                                name: "Literal",
                                src: "1086:6:9",
                            },
                        ],
                        id: 2554,
                        name: "VariableDeclaration",
                        src: "1045:47:9",
                    },
                    {
                        attributes: {
                            constant: false,
                            name: "valueRepaid",
                            scope: 2793,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "mapping(bytes32 => uint256)",
                            value: null,
                            visibility: "internal",
                        },
                        children: [
                            {
                                attributes: {
                                    type: "mapping(bytes32 => uint256)",
                                },
                                children: [
                                    {
                                        attributes: {
                                            name: "bytes32",
                                            type: "bytes32",
                                        },
                                        id: 2555,
                                        name: "ElementaryTypeName",
                                        src: "1108:7:9",
                                    },
                                    {
                                        attributes: {
                                            name: "uint",
                                            type: "uint256",
                                        },
                                        id: 2556,
                                        name: "ElementaryTypeName",
                                        src: "1119:4:9",
                                    },
                                ],
                                id: 2557,
                                name: "Mapping",
                                src: "1099:25:9",
                            },
                        ],
                        id: 2558,
                        name: "VariableDeclaration",
                        src: "1099:37:9",
                    },
                    {
                        attributes: {
                            constant: false,
                            name: "debtRegistry",
                            scope: 2793,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "contract DebtRegistry",
                            value: null,
                            visibility: "internal",
                        },
                        children: [
                            {
                                attributes: {
                                    contractScope: null,
                                    name: "DebtRegistry",
                                    referencedDeclaration: 1604,
                                    type: "contract DebtRegistry",
                                },
                                id: 2559,
                                name: "UserDefinedTypeName",
                                src: "1143:12:9",
                            },
                        ],
                        id: 2560,
                        name: "VariableDeclaration",
                        src: "1143:25:9",
                    },
                    {
                        attributes: {
                            constant: false,
                            name: "repaymentToken",
                            scope: 2793,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "address",
                            value: null,
                            visibility: "internal",
                        },
                        children: [
                            {
                                attributes: {
                                    name: "address",
                                    type: "address",
                                },
                                id: 2561,
                                name: "ElementaryTypeName",
                                src: "1175:7:9",
                            },
                        ],
                        id: 2562,
                        name: "VariableDeclaration",
                        src: "1175:22:9",
                    },
                    {
                        attributes: {
                            constant: false,
                            name: "repaymentRouter",
                            scope: 2793,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "address",
                            value: null,
                            visibility: "internal",
                        },
                        children: [
                            {
                                attributes: {
                                    name: "address",
                                    type: "address",
                                },
                                id: 2563,
                                name: "ElementaryTypeName",
                                src: "1203:7:9",
                            },
                        ],
                        id: 2564,
                        name: "VariableDeclaration",
                        src: "1203:23:9",
                    },
                    {
                        attributes: {
                            constant: false,
                            implemented: true,
                            isConstructor: true,
                            modifiers: [null],
                            name: "SimpleInterestTermsContract",
                            payable: false,
                            scope: 2793,
                            stateMutability: "nonpayable",
                            superFunction: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_debtRegistry",
                                            scope: 2588,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 2565,
                                                name: "ElementaryTypeName",
                                                src: "1279:7:9",
                                            },
                                        ],
                                        id: 2566,
                                        name: "VariableDeclaration",
                                        src: "1279:21:9",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_repaymentToken",
                                            scope: 2588,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 2567,
                                                name: "ElementaryTypeName",
                                                src: "1310:7:9",
                                            },
                                        ],
                                        id: 2568,
                                        name: "VariableDeclaration",
                                        src: "1310:23:9",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_repaymentRouter",
                                            scope: 2588,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 2569,
                                                name: "ElementaryTypeName",
                                                src: "1343:7:9",
                                            },
                                        ],
                                        id: 2570,
                                        name: "VariableDeclaration",
                                        src: "1343:24:9",
                                    },
                                ],
                                id: 2571,
                                name: "ParameterList",
                                src: "1269:104:9",
                            },
                            {
                                attributes: {
                                    parameters: [null],
                                },
                                children: [],
                                id: 2572,
                                name: "ParameterList",
                                src: "1393:0:9",
                            },
                            {
                                children: [
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "=",
                                                    type: "contract DebtRegistry",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2560,
                                                            type: "contract DebtRegistry",
                                                            value: "debtRegistry",
                                                        },
                                                        id: 2573,
                                                        name: "Identifier",
                                                        src: "1403:12:9",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            isStructConstructorCall: false,
                                                            lValueRequested: false,
                                                            names: [null],
                                                            type: "contract DebtRegistry",
                                                            type_conversion: true,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: [
                                                                        {
                                                                            typeIdentifier:
                                                                                "t_address",
                                                                            typeString: "address",
                                                                        },
                                                                    ],
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1604,
                                                                    type:
                                                                        "type(contract DebtRegistry)",
                                                                    value: "DebtRegistry",
                                                                },
                                                                id: 2574,
                                                                name: "Identifier",
                                                                src: "1418:12:9",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2566,
                                                                    type: "address",
                                                                    value: "_debtRegistry",
                                                                },
                                                                id: 2575,
                                                                name: "Identifier",
                                                                src: "1431:13:9",
                                                            },
                                                        ],
                                                        id: 2576,
                                                        name: "FunctionCall",
                                                        src: "1418:27:9",
                                                    },
                                                ],
                                                id: 2577,
                                                name: "Assignment",
                                                src: "1403:42:9",
                                            },
                                        ],
                                        id: 2578,
                                        name: "ExpressionStatement",
                                        src: "1403:42:9",
                                    },
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "=",
                                                    type: "address",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2562,
                                                            type: "address",
                                                            value: "repaymentToken",
                                                        },
                                                        id: 2579,
                                                        name: "Identifier",
                                                        src: "1456:14:9",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2568,
                                                            type: "address",
                                                            value: "_repaymentToken",
                                                        },
                                                        id: 2580,
                                                        name: "Identifier",
                                                        src: "1473:15:9",
                                                    },
                                                ],
                                                id: 2581,
                                                name: "Assignment",
                                                src: "1456:32:9",
                                            },
                                        ],
                                        id: 2582,
                                        name: "ExpressionStatement",
                                        src: "1456:32:9",
                                    },
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "=",
                                                    type: "address",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2564,
                                                            type: "address",
                                                            value: "repaymentRouter",
                                                        },
                                                        id: 2583,
                                                        name: "Identifier",
                                                        src: "1498:15:9",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2570,
                                                            type: "address",
                                                            value: "_repaymentRouter",
                                                        },
                                                        id: 2584,
                                                        name: "Identifier",
                                                        src: "1516:16:9",
                                                    },
                                                ],
                                                id: 2585,
                                                name: "Assignment",
                                                src: "1498:34:9",
                                            },
                                        ],
                                        id: 2586,
                                        name: "ExpressionStatement",
                                        src: "1498:34:9",
                                    },
                                ],
                                id: 2587,
                                name: "Block",
                                src: "1393:146:9",
                            },
                        ],
                        id: 2588,
                        name: "FunctionDefinition",
                        src: "1233:306:9",
                    },
                    {
                        attributes: {
                            constant: false,
                            implemented: true,
                            isConstructor: false,
                            modifiers: [null],
                            name: "registerRepayment",
                            payable: false,
                            scope: 2793,
                            stateMutability: "nonpayable",
                            superFunction: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "agreementId",
                                            scope: 2632,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "bytes32",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "bytes32",
                                                    type: "bytes32",
                                                },
                                                id: 2589,
                                                name: "ElementaryTypeName",
                                                src: "2286:7:9",
                                            },
                                        ],
                                        id: 2590,
                                        name: "VariableDeclaration",
                                        src: "2286:19:9",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "payer",
                                            scope: 2632,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 2591,
                                                name: "ElementaryTypeName",
                                                src: "2315:7:9",
                                            },
                                        ],
                                        id: 2592,
                                        name: "VariableDeclaration",
                                        src: "2315:13:9",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "beneficiary",
                                            scope: 2632,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 2593,
                                                name: "ElementaryTypeName",
                                                src: "2338:7:9",
                                            },
                                        ],
                                        id: 2594,
                                        name: "VariableDeclaration",
                                        src: "2338:19:9",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "unitsOfRepayment",
                                            scope: 2632,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint256",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint256",
                                                    type: "uint256",
                                                },
                                                id: 2595,
                                                name: "ElementaryTypeName",
                                                src: "2367:7:9",
                                            },
                                        ],
                                        id: 2596,
                                        name: "VariableDeclaration",
                                        src: "2367:24:9",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "tokenAddress",
                                            scope: 2632,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 2597,
                                                name: "ElementaryTypeName",
                                                src: "2401:7:9",
                                            },
                                        ],
                                        id: 2598,
                                        name: "VariableDeclaration",
                                        src: "2401:20:9",
                                    },
                                ],
                                id: 2599,
                                name: "ParameterList",
                                src: "2276:151:9",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_success",
                                            scope: 2632,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "bool",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "bool",
                                                    type: "bool",
                                                },
                                                id: 2600,
                                                name: "ElementaryTypeName",
                                                src: "2460:4:9",
                                            },
                                        ],
                                        id: 2601,
                                        name: "VariableDeclaration",
                                        src: "2460:13:9",
                                    },
                                ],
                                id: 2602,
                                name: "ParameterList",
                                src: "2459:15:9",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            falseBody: null,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    commonType: {
                                                        typeIdentifier: "t_address",
                                                        typeString: "address",
                                                    },
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "!=",
                                                    type: "bool",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "sender",
                                                            referencedDeclaration: null,
                                                            type: "address",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 6133,
                                                                    type: "msg",
                                                                    value: "msg",
                                                                },
                                                                id: 2603,
                                                                name: "Identifier",
                                                                src: "2493:3:9",
                                                            },
                                                        ],
                                                        id: 2604,
                                                        name: "MemberAccess",
                                                        src: "2493:10:9",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2564,
                                                            type: "address",
                                                            value: "repaymentRouter",
                                                        },
                                                        id: 2605,
                                                        name: "Identifier",
                                                        src: "2507:15:9",
                                                    },
                                                ],
                                                id: 2606,
                                                name: "BinaryOperation",
                                                src: "2493:29:9",
                                            },
                                            {
                                                children: [
                                                    {
                                                        attributes: {
                                                            functionReturnParameters: 2602,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    hexvalue: "66616c7365",
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    subdenomination: null,
                                                                    token: "bool",
                                                                    type: "bool",
                                                                    value: "false",
                                                                },
                                                                id: 2607,
                                                                name: "Literal",
                                                                src: "2545:5:9",
                                                            },
                                                        ],
                                                        id: 2608,
                                                        name: "Return",
                                                        src: "2538:12:9",
                                                    },
                                                ],
                                                id: 2609,
                                                name: "Block",
                                                src: "2524:37:9",
                                            },
                                        ],
                                        id: 2610,
                                        name: "IfStatement",
                                        src: "2489:72:9",
                                    },
                                    {
                                        attributes: {
                                            falseBody: null,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    commonType: {
                                                        typeIdentifier: "t_address",
                                                        typeString: "address",
                                                    },
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "==",
                                                    type: "bool",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2598,
                                                            type: "address",
                                                            value: "tokenAddress",
                                                        },
                                                        id: 2611,
                                                        name: "Identifier",
                                                        src: "2575:12:9",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2562,
                                                            type: "address",
                                                            value: "repaymentToken",
                                                        },
                                                        id: 2612,
                                                        name: "Identifier",
                                                        src: "2591:14:9",
                                                    },
                                                ],
                                                id: 2613,
                                                name: "BinaryOperation",
                                                src: "2575:30:9",
                                            },
                                            {
                                                children: [
                                                    {
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    lValueRequested: false,
                                                                    operator: "=",
                                                                    type: "uint256",
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            isConstant: false,
                                                                            isLValue: true,
                                                                            isPure: false,
                                                                            lValueRequested: true,
                                                                            type: "uint256",
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    overloadedDeclarations: [
                                                                                        null,
                                                                                    ],
                                                                                    referencedDeclaration: 2558,
                                                                                    type:
                                                                                        "mapping(bytes32 => uint256)",
                                                                                    value:
                                                                                        "valueRepaid",
                                                                                },
                                                                                id: 2614,
                                                                                name: "Identifier",
                                                                                src: "2621:11:9",
                                                                            },
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    overloadedDeclarations: [
                                                                                        null,
                                                                                    ],
                                                                                    referencedDeclaration: 2590,
                                                                                    type: "bytes32",
                                                                                    value:
                                                                                        "agreementId",
                                                                                },
                                                                                id: 2615,
                                                                                name: "Identifier",
                                                                                src: "2633:11:9",
                                                                            },
                                                                        ],
                                                                        id: 2616,
                                                                        name: "IndexAccess",
                                                                        src: "2621:24:9",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: false,
                                                                            isStructConstructorCall: false,
                                                                            lValueRequested: false,
                                                                            names: [null],
                                                                            type: "uint256",
                                                                            type_conversion: false,
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: [
                                                                                        {
                                                                                            typeIdentifier:
                                                                                                "t_uint256",
                                                                                            typeString:
                                                                                                "uint256",
                                                                                        },
                                                                                    ],
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: false,
                                                                                    lValueRequested: false,
                                                                                    member_name:
                                                                                        "add",
                                                                                    referencedDeclaration: 5552,
                                                                                    type:
                                                                                        "function (uint256,uint256) pure returns (uint256)",
                                                                                },
                                                                                children: [
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: null,
                                                                                            isConstant: false,
                                                                                            isLValue: true,
                                                                                            isPure: false,
                                                                                            lValueRequested: false,
                                                                                            type:
                                                                                                "uint256",
                                                                                        },
                                                                                        children: [
                                                                                            {
                                                                                                attributes: {
                                                                                                    argumentTypes: null,
                                                                                                    overloadedDeclarations: [
                                                                                                        null,
                                                                                                    ],
                                                                                                    referencedDeclaration: 2558,
                                                                                                    type:
                                                                                                        "mapping(bytes32 => uint256)",
                                                                                                    value:
                                                                                                        "valueRepaid",
                                                                                                },
                                                                                                id: 2617,
                                                                                                name:
                                                                                                    "Identifier",
                                                                                                src:
                                                                                                    "2648:11:9",
                                                                                            },
                                                                                            {
                                                                                                attributes: {
                                                                                                    argumentTypes: null,
                                                                                                    overloadedDeclarations: [
                                                                                                        null,
                                                                                                    ],
                                                                                                    referencedDeclaration: 2590,
                                                                                                    type:
                                                                                                        "bytes32",
                                                                                                    value:
                                                                                                        "agreementId",
                                                                                                },
                                                                                                id: 2618,
                                                                                                name:
                                                                                                    "Identifier",
                                                                                                src:
                                                                                                    "2660:11:9",
                                                                                            },
                                                                                        ],
                                                                                        id: 2619,
                                                                                        name:
                                                                                            "IndexAccess",
                                                                                        src:
                                                                                            "2648:24:9",
                                                                                    },
                                                                                ],
                                                                                id: 2620,
                                                                                name:
                                                                                    "MemberAccess",
                                                                                src: "2648:28:9",
                                                                            },
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    overloadedDeclarations: [
                                                                                        null,
                                                                                    ],
                                                                                    referencedDeclaration: 2596,
                                                                                    type: "uint256",
                                                                                    value:
                                                                                        "unitsOfRepayment",
                                                                                },
                                                                                id: 2621,
                                                                                name: "Identifier",
                                                                                src: "2677:16:9",
                                                                            },
                                                                        ],
                                                                        id: 2622,
                                                                        name: "FunctionCall",
                                                                        src: "2648:46:9",
                                                                    },
                                                                ],
                                                                id: 2623,
                                                                name: "Assignment",
                                                                src: "2621:73:9",
                                                            },
                                                        ],
                                                        id: 2624,
                                                        name: "ExpressionStatement",
                                                        src: "2621:73:9",
                                                    },
                                                    {
                                                        attributes: {
                                                            functionReturnParameters: 2602,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    hexvalue: "74727565",
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    subdenomination: null,
                                                                    token: "bool",
                                                                    type: "bool",
                                                                    value: "true",
                                                                },
                                                                id: 2625,
                                                                name: "Literal",
                                                                src: "2715:4:9",
                                                            },
                                                        ],
                                                        id: 2626,
                                                        name: "Return",
                                                        src: "2708:11:9",
                                                    },
                                                ],
                                                id: 2627,
                                                name: "Block",
                                                src: "2607:123:9",
                                            },
                                        ],
                                        id: 2628,
                                        name: "IfStatement",
                                        src: "2571:159:9",
                                    },
                                    {
                                        attributes: {
                                            functionReturnParameters: 2602,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    hexvalue: "66616c7365",
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: true,
                                                    lValueRequested: false,
                                                    subdenomination: null,
                                                    token: "bool",
                                                    type: "bool",
                                                    value: "false",
                                                },
                                                id: 2629,
                                                name: "Literal",
                                                src: "2747:5:9",
                                            },
                                        ],
                                        id: 2630,
                                        name: "Return",
                                        src: "2740:12:9",
                                    },
                                ],
                                id: 2631,
                                name: "Block",
                                src: "2479:280:9",
                            },
                        ],
                        id: 2632,
                        name: "FunctionDefinition",
                        src: "2250:509:9",
                    },
                    {
                        attributes: {
                            constant: true,
                            implemented: true,
                            isConstructor: false,
                            modifiers: [null],
                            name: "getExpectedRepaymentValue",
                            payable: false,
                            scope: 2793,
                            stateMutability: "view",
                            superFunction: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "agreementId",
                                            scope: 2687,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "bytes32",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "bytes32",
                                                    type: "bytes32",
                                                },
                                                id: 2633,
                                                name: "ElementaryTypeName",
                                                src: "3431:7:9",
                                            },
                                        ],
                                        id: 2634,
                                        name: "VariableDeclaration",
                                        src: "3431:19:9",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "blockNumber",
                                            scope: 2687,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint256",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint256",
                                                    type: "uint256",
                                                },
                                                id: 2635,
                                                name: "ElementaryTypeName",
                                                src: "3460:7:9",
                                            },
                                        ],
                                        id: 2636,
                                        name: "VariableDeclaration",
                                        src: "3460:19:9",
                                    },
                                ],
                                id: 2637,
                                name: "ParameterList",
                                src: "3421:64:9",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_expectedRepaymentValue",
                                            scope: 2687,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint256",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint",
                                                    type: "uint256",
                                                },
                                                id: 2638,
                                                name: "ElementaryTypeName",
                                                src: "3531:4:9",
                                            },
                                        ],
                                        id: 2639,
                                        name: "VariableDeclaration",
                                        src: "3531:28:9",
                                    },
                                ],
                                id: 2640,
                                name: "ParameterList",
                                src: "3530:30:9",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            assignments: [2642],
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    constant: false,
                                                    name: "parameters",
                                                    scope: 2687,
                                                    stateVariable: false,
                                                    storageLocation: "default",
                                                    type: "bytes32",
                                                    value: null,
                                                    visibility: "internal",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            name: "bytes32",
                                                            type: "bytes32",
                                                        },
                                                        id: 2641,
                                                        name: "ElementaryTypeName",
                                                        src: "3575:7:9",
                                                    },
                                                ],
                                                id: 2642,
                                                name: "VariableDeclaration",
                                                src: "3575:18:9",
                                            },
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "bytes32",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_bytes32",
                                                                    typeString: "bytes32",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name:
                                                                "getTermsContractParameters",
                                                            referencedDeclaration: 1521,
                                                            type:
                                                                "function (bytes32) view external returns (bytes32)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2560,
                                                                    type: "contract DebtRegistry",
                                                                    value: "debtRegistry",
                                                                },
                                                                id: 2643,
                                                                name: "Identifier",
                                                                src: "3596:12:9",
                                                            },
                                                        ],
                                                        id: 2644,
                                                        name: "MemberAccess",
                                                        src: "3596:39:9",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2634,
                                                            type: "bytes32",
                                                            value: "agreementId",
                                                        },
                                                        id: 2645,
                                                        name: "Identifier",
                                                        src: "3636:11:9",
                                                    },
                                                ],
                                                id: 2646,
                                                name: "FunctionCall",
                                                src: "3596:52:9",
                                            },
                                        ],
                                        id: 2647,
                                        name: "VariableDeclarationStatement",
                                        src: "3575:73:9",
                                    },
                                    {
                                        attributes: {
                                            assignments: [2649],
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    constant: false,
                                                    name: "issuanceBlockNumber",
                                                    scope: 2687,
                                                    stateVariable: false,
                                                    storageLocation: "default",
                                                    type: "uint256",
                                                    value: null,
                                                    visibility: "internal",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            name: "uint",
                                                            type: "uint256",
                                                        },
                                                        id: 2648,
                                                        name: "ElementaryTypeName",
                                                        src: "3658:4:9",
                                                    },
                                                ],
                                                id: 2649,
                                                name: "VariableDeclaration",
                                                src: "3658:24:9",
                                            },
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "uint256",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_bytes32",
                                                                    typeString: "bytes32",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "getIssuanceBlockNumber",
                                                            referencedDeclaration: 1554,
                                                            type:
                                                                "function (bytes32) view external returns (uint256)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2560,
                                                                    type: "contract DebtRegistry",
                                                                    value: "debtRegistry",
                                                                },
                                                                id: 2650,
                                                                name: "Identifier",
                                                                src: "3685:12:9",
                                                            },
                                                        ],
                                                        id: 2651,
                                                        name: "MemberAccess",
                                                        src: "3685:35:9",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2634,
                                                            type: "bytes32",
                                                            value: "agreementId",
                                                        },
                                                        id: 2652,
                                                        name: "Identifier",
                                                        src: "3721:11:9",
                                                    },
                                                ],
                                                id: 2653,
                                                name: "FunctionCall",
                                                src: "3685:48:9",
                                            },
                                        ],
                                        id: 2654,
                                        name: "VariableDeclarationStatement",
                                        src: "3658:75:9",
                                    },
                                    {
                                        attributes: {
                                            assignments: [2655, 2656, 2657],
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    constant: false,
                                                    name: "principalPlusInterest",
                                                    scope: 2687,
                                                    stateVariable: false,
                                                    storageLocation: "default",
                                                    type: "uint128",
                                                    typeName: null,
                                                    value: null,
                                                    visibility: "internal",
                                                },
                                                children: [],
                                                id: 2655,
                                                name: "VariableDeclaration",
                                                src: "3749:21:9",
                                            },
                                            {
                                                attributes: {
                                                    constant: false,
                                                    name: "amortizationUnitType",
                                                    scope: 2687,
                                                    stateVariable: false,
                                                    storageLocation: "default",
                                                    type: "uint8",
                                                    typeName: null,
                                                    value: null,
                                                    visibility: "internal",
                                                },
                                                children: [],
                                                id: 2656,
                                                name: "VariableDeclaration",
                                                src: "3772:20:9",
                                            },
                                            {
                                                attributes: {
                                                    constant: false,
                                                    name: "termLengthInAmortizationUnits",
                                                    scope: 2687,
                                                    stateVariable: false,
                                                    storageLocation: "default",
                                                    type: "uint120",
                                                    typeName: null,
                                                    value: null,
                                                    visibility: "internal",
                                                },
                                                children: [],
                                                id: 2657,
                                                name: "VariableDeclaration",
                                                src: "3794:29:9",
                                            },
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "tuple(uint128,uint8,uint120)",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_bytes32",
                                                                    typeString: "bytes32",
                                                                },
                                                            ],
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2734,
                                                            type:
                                                                "function (bytes32) pure returns (uint128,uint8,uint120)",
                                                            value: "unpackParameters",
                                                        },
                                                        id: 2658,
                                                        name: "Identifier",
                                                        src: "3839:16:9",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2642,
                                                            type: "bytes32",
                                                            value: "parameters",
                                                        },
                                                        id: 2659,
                                                        name: "Identifier",
                                                        src: "3856:10:9",
                                                    },
                                                ],
                                                id: 2660,
                                                name: "FunctionCall",
                                                src: "3839:28:9",
                                            },
                                        ],
                                        id: 2661,
                                        name: "VariableDeclarationStatement",
                                        src: "3744:123:9",
                                    },
                                    {
                                        attributes: {
                                            assignments: [2663],
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    constant: false,
                                                    name: "amortizationUnitLength",
                                                    scope: 2687,
                                                    stateVariable: false,
                                                    storageLocation: "default",
                                                    type: "uint256",
                                                    value: null,
                                                    visibility: "internal",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            name: "uint",
                                                            type: "uint256",
                                                        },
                                                        id: 2662,
                                                        name: "ElementaryTypeName",
                                                        src: "3878:4:9",
                                                    },
                                                ],
                                                id: 2663,
                                                name: "VariableDeclaration",
                                                src: "3878:27:9",
                                            },
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "uint256",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_uint8",
                                                                    typeString: "uint8",
                                                                },
                                                            ],
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2792,
                                                            type:
                                                                "function (uint8) pure returns (uint256)",
                                                            value:
                                                                "getAmortizationUnitLengthInBlocks",
                                                        },
                                                        id: 2664,
                                                        name: "Identifier",
                                                        src: "3908:33:9",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2656,
                                                            type: "uint8",
                                                            value: "amortizationUnitType",
                                                        },
                                                        id: 2665,
                                                        name: "Identifier",
                                                        src: "3942:20:9",
                                                    },
                                                ],
                                                id: 2666,
                                                name: "FunctionCall",
                                                src: "3908:55:9",
                                            },
                                        ],
                                        id: 2667,
                                        name: "VariableDeclarationStatement",
                                        src: "3878:85:9",
                                    },
                                    {
                                        attributes: {
                                            assignments: [2669],
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    constant: false,
                                                    name: "numRepaymentPeriods",
                                                    scope: 2687,
                                                    stateVariable: false,
                                                    storageLocation: "default",
                                                    type: "uint256",
                                                    value: null,
                                                    visibility: "internal",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            name: "uint",
                                                            type: "uint256",
                                                        },
                                                        id: 2668,
                                                        name: "ElementaryTypeName",
                                                        src: "3973:4:9",
                                                    },
                                                ],
                                                id: 2669,
                                                name: "VariableDeclaration",
                                                src: "3973:24:9",
                                            },
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "uint256",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_uint256",
                                                                    typeString: "uint256",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "div",
                                                            referencedDeclaration: 5508,
                                                            type:
                                                                "function (uint256,uint256) pure returns (uint256)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    isStructConstructorCall: false,
                                                                    lValueRequested: false,
                                                                    names: [null],
                                                                    type: "uint256",
                                                                    type_conversion: false,
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: [
                                                                                {
                                                                                    typeIdentifier:
                                                                                        "t_uint256",
                                                                                    typeString:
                                                                                        "uint256",
                                                                                },
                                                                            ],
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: false,
                                                                            lValueRequested: false,
                                                                            member_name: "sub",
                                                                            referencedDeclaration: 5528,
                                                                            type:
                                                                                "function (uint256,uint256) pure returns (uint256)",
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    overloadedDeclarations: [
                                                                                        null,
                                                                                    ],
                                                                                    referencedDeclaration: 2636,
                                                                                    type: "uint256",
                                                                                    value:
                                                                                        "blockNumber",
                                                                                },
                                                                                id: 2670,
                                                                                name: "Identifier",
                                                                                src: "4000:11:9",
                                                                            },
                                                                        ],
                                                                        id: 2671,
                                                                        name: "MemberAccess",
                                                                        src: "4000:15:9",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 2649,
                                                                            type: "uint256",
                                                                            value:
                                                                                "issuanceBlockNumber",
                                                                        },
                                                                        id: 2672,
                                                                        name: "Identifier",
                                                                        src: "4016:19:9",
                                                                    },
                                                                ],
                                                                id: 2673,
                                                                name: "FunctionCall",
                                                                src: "4000:36:9",
                                                            },
                                                        ],
                                                        id: 2674,
                                                        name: "MemberAccess",
                                                        src: "4000:40:9",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2663,
                                                            type: "uint256",
                                                            value: "amortizationUnitLength",
                                                        },
                                                        id: 2675,
                                                        name: "Identifier",
                                                        src: "4041:22:9",
                                                    },
                                                ],
                                                id: 2676,
                                                name: "FunctionCall",
                                                src: "4000:64:9",
                                            },
                                        ],
                                        id: 2677,
                                        name: "VariableDeclarationStatement",
                                        src: "3973:91:9",
                                    },
                                    {
                                        attributes: {
                                            functionReturnParameters: 2640,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "uint256",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_uint120",
                                                                    typeString: "uint120",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "div",
                                                            referencedDeclaration: 5508,
                                                            type:
                                                                "function (uint256,uint256) pure returns (uint256)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    isStructConstructorCall: false,
                                                                    lValueRequested: false,
                                                                    names: [null],
                                                                    type: "uint256",
                                                                    type_conversion: false,
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: [
                                                                                {
                                                                                    typeIdentifier:
                                                                                        "t_uint128",
                                                                                    typeString:
                                                                                        "uint128",
                                                                                },
                                                                            ],
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: false,
                                                                            lValueRequested: false,
                                                                            member_name: "mul",
                                                                            referencedDeclaration: 5490,
                                                                            type:
                                                                                "function (uint256,uint256) pure returns (uint256)",
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    overloadedDeclarations: [
                                                                                        null,
                                                                                    ],
                                                                                    referencedDeclaration: 2669,
                                                                                    type: "uint256",
                                                                                    value:
                                                                                        "numRepaymentPeriods",
                                                                                },
                                                                                id: 2678,
                                                                                name: "Identifier",
                                                                                src: "4082:19:9",
                                                                            },
                                                                        ],
                                                                        id: 2679,
                                                                        name: "MemberAccess",
                                                                        src: "4082:23:9",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 2655,
                                                                            type: "uint128",
                                                                            value:
                                                                                "principalPlusInterest",
                                                                        },
                                                                        id: 2680,
                                                                        name: "Identifier",
                                                                        src: "4106:21:9",
                                                                    },
                                                                ],
                                                                id: 2681,
                                                                name: "FunctionCall",
                                                                src: "4082:46:9",
                                                            },
                                                        ],
                                                        id: 2682,
                                                        name: "MemberAccess",
                                                        src: "4082:50:9",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2657,
                                                            type: "uint120",
                                                            value: "termLengthInAmortizationUnits",
                                                        },
                                                        id: 2683,
                                                        name: "Identifier",
                                                        src: "4133:29:9",
                                                    },
                                                ],
                                                id: 2684,
                                                name: "FunctionCall",
                                                src: "4082:81:9",
                                            },
                                        ],
                                        id: 2685,
                                        name: "Return",
                                        src: "4075:88:9",
                                    },
                                ],
                                id: 2686,
                                name: "Block",
                                src: "3565:605:9",
                            },
                        ],
                        id: 2687,
                        name: "FunctionDefinition",
                        src: "3387:783:9",
                    },
                    {
                        attributes: {
                            constant: true,
                            implemented: true,
                            isConstructor: false,
                            modifiers: [null],
                            name: "getValueRepaid",
                            payable: false,
                            scope: 2793,
                            stateMutability: "view",
                            superFunction: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "agreementId",
                                            scope: 2701,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "bytes32",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "bytes32",
                                                    type: "bytes32",
                                                },
                                                id: 2688,
                                                name: "ElementaryTypeName",
                                                src: "4633:7:9",
                                            },
                                        ],
                                        id: 2689,
                                        name: "VariableDeclaration",
                                        src: "4633:19:9",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "blockNumber",
                                            scope: 2701,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint256",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint256",
                                                    type: "uint256",
                                                },
                                                id: 2690,
                                                name: "ElementaryTypeName",
                                                src: "4662:7:9",
                                            },
                                        ],
                                        id: 2691,
                                        name: "VariableDeclaration",
                                        src: "4662:19:9",
                                    },
                                ],
                                id: 2692,
                                name: "ParameterList",
                                src: "4623:64:9",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_valueRepaid",
                                            scope: 2701,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint256",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint",
                                                    type: "uint256",
                                                },
                                                id: 2693,
                                                name: "ElementaryTypeName",
                                                src: "4733:4:9",
                                            },
                                        ],
                                        id: 2694,
                                        name: "VariableDeclaration",
                                        src: "4733:17:9",
                                    },
                                ],
                                id: 2695,
                                name: "ParameterList",
                                src: "4732:19:9",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            functionReturnParameters: 2695,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: true,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    type: "uint256",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2558,
                                                            type: "mapping(bytes32 => uint256)",
                                                            value: "valueRepaid",
                                                        },
                                                        id: 2696,
                                                        name: "Identifier",
                                                        src: "4773:11:9",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2689,
                                                            type: "bytes32",
                                                            value: "agreementId",
                                                        },
                                                        id: 2697,
                                                        name: "Identifier",
                                                        src: "4785:11:9",
                                                    },
                                                ],
                                                id: 2698,
                                                name: "IndexAccess",
                                                src: "4773:24:9",
                                            },
                                        ],
                                        id: 2699,
                                        name: "Return",
                                        src: "4766:31:9",
                                    },
                                ],
                                id: 2700,
                                name: "Block",
                                src: "4756:48:9",
                            },
                        ],
                        id: 2701,
                        name: "FunctionDefinition",
                        src: "4600:204:9",
                    },
                    {
                        attributes: {
                            constant: true,
                            implemented: true,
                            isConstructor: false,
                            modifiers: [null],
                            name: "unpackParameters",
                            payable: false,
                            scope: 2793,
                            stateMutability: "pure",
                            superFunction: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "parameters",
                                            scope: 2734,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "bytes32",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "bytes32",
                                                    type: "bytes32",
                                                },
                                                id: 2702,
                                                name: "ElementaryTypeName",
                                                src: "4836:7:9",
                                            },
                                        ],
                                        id: 2703,
                                        name: "VariableDeclaration",
                                        src: "4836:18:9",
                                    },
                                ],
                                id: 2704,
                                name: "ParameterList",
                                src: "4835:20:9",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_principalPlusInterest",
                                            scope: 2734,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint128",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint128",
                                                    type: "uint128",
                                                },
                                                id: 2705,
                                                name: "ElementaryTypeName",
                                                src: "4914:7:9",
                                            },
                                        ],
                                        id: 2706,
                                        name: "VariableDeclaration",
                                        src: "4914:30:9",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_amortizationUnitType",
                                            scope: 2734,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint8",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint8",
                                                    type: "uint8",
                                                },
                                                id: 2707,
                                                name: "ElementaryTypeName",
                                                src: "4958:5:9",
                                            },
                                        ],
                                        id: 2708,
                                        name: "VariableDeclaration",
                                        src: "4958:27:9",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_termLengthInAmortizationUnits",
                                            scope: 2734,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint120",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint120",
                                                    type: "uint120",
                                                },
                                                id: 2709,
                                                name: "ElementaryTypeName",
                                                src: "4999:7:9",
                                            },
                                        ],
                                        id: 2710,
                                        name: "VariableDeclaration",
                                        src: "4999:38:9",
                                    },
                                ],
                                id: 2711,
                                name: "ParameterList",
                                src: "4900:147:9",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            assignments: [null],
                                            initialValue: null,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    constant: false,
                                                    name: "principalPlusInterest",
                                                    scope: 2734,
                                                    stateVariable: false,
                                                    storageLocation: "default",
                                                    type: "bytes16",
                                                    value: null,
                                                    visibility: "internal",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            name: "bytes16",
                                                            type: "bytes16",
                                                        },
                                                        id: 2712,
                                                        name: "ElementaryTypeName",
                                                        src: "5062:7:9",
                                                    },
                                                ],
                                                id: 2713,
                                                name: "VariableDeclaration",
                                                src: "5062:29:9",
                                            },
                                        ],
                                        id: 2714,
                                        name: "VariableDeclarationStatement",
                                        src: "5062:29:9",
                                    },
                                    {
                                        attributes: {
                                            assignments: [null],
                                            initialValue: null,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    constant: false,
                                                    name: "amortizationUnitType",
                                                    scope: 2734,
                                                    stateVariable: false,
                                                    storageLocation: "default",
                                                    type: "bytes1",
                                                    value: null,
                                                    visibility: "internal",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            name: "bytes1",
                                                            type: "bytes1",
                                                        },
                                                        id: 2715,
                                                        name: "ElementaryTypeName",
                                                        src: "5101:6:9",
                                                    },
                                                ],
                                                id: 2716,
                                                name: "VariableDeclaration",
                                                src: "5101:27:9",
                                            },
                                        ],
                                        id: 2717,
                                        name: "VariableDeclarationStatement",
                                        src: "5101:27:9",
                                    },
                                    {
                                        attributes: {
                                            assignments: [null],
                                            initialValue: null,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    constant: false,
                                                    name: "termLengthInAmortizationUnits",
                                                    scope: 2734,
                                                    stateVariable: false,
                                                    storageLocation: "default",
                                                    type: "bytes15",
                                                    value: null,
                                                    visibility: "internal",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            name: "bytes15",
                                                            type: "bytes15",
                                                        },
                                                        id: 2718,
                                                        name: "ElementaryTypeName",
                                                        src: "5138:7:9",
                                                    },
                                                ],
                                                id: 2719,
                                                name: "VariableDeclaration",
                                                src: "5138:37:9",
                                            },
                                        ],
                                        id: 2720,
                                        name: "VariableDeclarationStatement",
                                        src: "5138:37:9",
                                    },
                                    {
                                        attributes: {
                                            externalReferences: [
                                                {
                                                    principalPlusInterest: {
                                                        declaration: 2713,
                                                        isOffset: false,
                                                        isSlot: false,
                                                        src: "5209:21:9",
                                                        valueSize: 1,
                                                    },
                                                },
                                                {
                                                    amortizationUnitType: {
                                                        declaration: 2716,
                                                        isOffset: false,
                                                        isSlot: false,
                                                        src: "5262:20:9",
                                                        valueSize: 1,
                                                    },
                                                },
                                                {
                                                    termLengthInAmortizationUnits: {
                                                        declaration: 2719,
                                                        isOffset: false,
                                                        isSlot: false,
                                                        src: "5315:29:9",
                                                        valueSize: 1,
                                                    },
                                                },
                                            ],
                                            operations:
                                                "{\n    principalPlusInterest := calldataload(4)\n    amortizationUnitType := calldataload(20)\n    termLengthInAmortizationUnits := calldataload(21)\n}",
                                        },
                                        children: [],
                                        id: 2721,
                                        name: "InlineAssembly",
                                        src: "5186:204:9",
                                    },
                                    {
                                        attributes: {
                                            functionReturnParameters: 2711,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isInlineArray: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    type: "tuple(uint128,uint8,uint120)",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            isStructConstructorCall: false,
                                                            lValueRequested: false,
                                                            names: [null],
                                                            type: "uint128",
                                                            type_conversion: true,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: [
                                                                        {
                                                                            typeIdentifier:
                                                                                "t_bytes16",
                                                                            typeString: "bytes16",
                                                                        },
                                                                    ],
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    type: "type(uint128)",
                                                                    value: "uint128",
                                                                },
                                                                id: 2722,
                                                                name:
                                                                    "ElementaryTypeNameExpression",
                                                                src: "5405:7:9",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2713,
                                                                    type: "bytes16",
                                                                    value: "principalPlusInterest",
                                                                },
                                                                id: 2723,
                                                                name: "Identifier",
                                                                src: "5413:21:9",
                                                            },
                                                        ],
                                                        id: 2724,
                                                        name: "FunctionCall",
                                                        src: "5405:30:9",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            isStructConstructorCall: false,
                                                            lValueRequested: false,
                                                            names: [null],
                                                            type: "uint8",
                                                            type_conversion: true,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: [
                                                                        {
                                                                            typeIdentifier:
                                                                                "t_bytes1",
                                                                            typeString: "bytes1",
                                                                        },
                                                                    ],
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    type: "type(uint8)",
                                                                    value: "uint8",
                                                                },
                                                                id: 2725,
                                                                name:
                                                                    "ElementaryTypeNameExpression",
                                                                src: "5449:5:9",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2716,
                                                                    type: "bytes1",
                                                                    value: "amortizationUnitType",
                                                                },
                                                                id: 2726,
                                                                name: "Identifier",
                                                                src: "5455:20:9",
                                                            },
                                                        ],
                                                        id: 2727,
                                                        name: "FunctionCall",
                                                        src: "5449:27:9",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            isStructConstructorCall: false,
                                                            lValueRequested: false,
                                                            names: [null],
                                                            type: "uint120",
                                                            type_conversion: true,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: [
                                                                        {
                                                                            typeIdentifier:
                                                                                "t_bytes15",
                                                                            typeString: "bytes15",
                                                                        },
                                                                    ],
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    type: "type(uint120)",
                                                                    value: "uint120",
                                                                },
                                                                id: 2728,
                                                                name:
                                                                    "ElementaryTypeNameExpression",
                                                                src: "5490:7:9",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2719,
                                                                    type: "bytes15",
                                                                    value:
                                                                        "termLengthInAmortizationUnits",
                                                                },
                                                                id: 2729,
                                                                name: "Identifier",
                                                                src: "5498:29:9",
                                                            },
                                                        ],
                                                        id: 2730,
                                                        name: "FunctionCall",
                                                        src: "5490:38:9",
                                                    },
                                                ],
                                                id: 2731,
                                                name: "TupleExpression",
                                                src: "5391:147:9",
                                            },
                                        ],
                                        id: 2732,
                                        name: "Return",
                                        src: "5384:154:9",
                                    },
                                ],
                                id: 2733,
                                name: "Block",
                                src: "5052:493:9",
                            },
                        ],
                        id: 2734,
                        name: "FunctionDefinition",
                        src: "4810:735:9",
                    },
                    {
                        attributes: {
                            constant: true,
                            implemented: true,
                            isConstructor: false,
                            modifiers: [null],
                            name: "getAmortizationUnitLengthInBlocks",
                            payable: false,
                            scope: 2793,
                            stateMutability: "pure",
                            superFunction: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "amortizationUnitType",
                                            scope: 2792,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint8",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint8",
                                                    type: "uint8",
                                                },
                                                id: 2735,
                                                name: "ElementaryTypeName",
                                                src: "5594:5:9",
                                            },
                                        ],
                                        id: 2736,
                                        name: "VariableDeclaration",
                                        src: "5594:26:9",
                                    },
                                ],
                                id: 2737,
                                name: "ParameterList",
                                src: "5593:28:9",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_amortizationUnitLengthInBlocks",
                                            scope: 2792,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint256",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint",
                                                    type: "uint256",
                                                },
                                                id: 2738,
                                                name: "ElementaryTypeName",
                                                src: "5667:4:9",
                                            },
                                        ],
                                        id: 2739,
                                        name: "VariableDeclaration",
                                        src: "5667:36:9",
                                    },
                                ],
                                id: 2740,
                                name: "ParameterList",
                                src: "5666:38:9",
                            },
                            {
                                children: [
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    commonType: {
                                                        typeIdentifier: "t_uint8",
                                                        typeString: "uint8",
                                                    },
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "==",
                                                    type: "bool",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2736,
                                                            type: "uint8",
                                                            value: "amortizationUnitType",
                                                        },
                                                        id: 2741,
                                                        name: "Identifier",
                                                        src: "5723:20:9",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: true,
                                                            isStructConstructorCall: false,
                                                            lValueRequested: false,
                                                            names: [null],
                                                            type: "uint8",
                                                            type_conversion: true,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: [
                                                                        {
                                                                            typeIdentifier:
                                                                                "t_enum$_AmortizationUnitType_$2539",
                                                                            typeString:
                                                                                "enum SimpleInterestTermsContract.AmortizationUnitType",
                                                                        },
                                                                    ],
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    type: "type(uint8)",
                                                                    value: "uint8",
                                                                },
                                                                id: 2742,
                                                                name:
                                                                    "ElementaryTypeNameExpression",
                                                                src: "5747:5:9",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    member_name: "HOURS",
                                                                    referencedDeclaration: null,
                                                                    type:
                                                                        "enum SimpleInterestTermsContract.AmortizationUnitType",
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 2539,
                                                                            type:
                                                                                "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                                                            value:
                                                                                "AmortizationUnitType",
                                                                        },
                                                                        id: 2743,
                                                                        name: "Identifier",
                                                                        src: "5753:20:9",
                                                                    },
                                                                ],
                                                                id: 2744,
                                                                name: "MemberAccess",
                                                                src: "5753:26:9",
                                                            },
                                                        ],
                                                        id: 2745,
                                                        name: "FunctionCall",
                                                        src: "5747:33:9",
                                                    },
                                                ],
                                                id: 2746,
                                                name: "BinaryOperation",
                                                src: "5723:57:9",
                                            },
                                            {
                                                children: [
                                                    {
                                                        attributes: {
                                                            functionReturnParameters: 2740,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2542,
                                                                    type: "uint256",
                                                                    value: "HOUR_BLOCK_LENGTH",
                                                                },
                                                                id: 2747,
                                                                name: "Identifier",
                                                                src: "5803:17:9",
                                                            },
                                                        ],
                                                        id: 2748,
                                                        name: "Return",
                                                        src: "5796:24:9",
                                                    },
                                                ],
                                                id: 2749,
                                                name: "Block",
                                                src: "5782:49:9",
                                            },
                                            {
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            commonType: {
                                                                typeIdentifier: "t_uint8",
                                                                typeString: "uint8",
                                                            },
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            operator: "==",
                                                            type: "bool",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2736,
                                                                    type: "uint8",
                                                                    value: "amortizationUnitType",
                                                                },
                                                                id: 2750,
                                                                name: "Identifier",
                                                                src: "5841:20:9",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    isStructConstructorCall: false,
                                                                    lValueRequested: false,
                                                                    names: [null],
                                                                    type: "uint8",
                                                                    type_conversion: true,
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: [
                                                                                {
                                                                                    typeIdentifier:
                                                                                        "t_enum$_AmortizationUnitType_$2539",
                                                                                    typeString:
                                                                                        "enum SimpleInterestTermsContract.AmortizationUnitType",
                                                                                },
                                                                            ],
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: true,
                                                                            lValueRequested: false,
                                                                            type: "type(uint8)",
                                                                            value: "uint8",
                                                                        },
                                                                        id: 2751,
                                                                        name:
                                                                            "ElementaryTypeNameExpression",
                                                                        src: "5865:5:9",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: true,
                                                                            lValueRequested: false,
                                                                            member_name: "DAYS",
                                                                            referencedDeclaration: null,
                                                                            type:
                                                                                "enum SimpleInterestTermsContract.AmortizationUnitType",
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    overloadedDeclarations: [
                                                                                        null,
                                                                                    ],
                                                                                    referencedDeclaration: 2539,
                                                                                    type:
                                                                                        "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                                                                    value:
                                                                                        "AmortizationUnitType",
                                                                                },
                                                                                id: 2752,
                                                                                name: "Identifier",
                                                                                src: "5871:20:9",
                                                                            },
                                                                        ],
                                                                        id: 2753,
                                                                        name: "MemberAccess",
                                                                        src: "5871:25:9",
                                                                    },
                                                                ],
                                                                id: 2754,
                                                                name: "FunctionCall",
                                                                src: "5865:32:9",
                                                            },
                                                        ],
                                                        id: 2755,
                                                        name: "BinaryOperation",
                                                        src: "5841:56:9",
                                                    },
                                                    {
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    functionReturnParameters: 2740,
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 2545,
                                                                            type: "uint256",
                                                                            value:
                                                                                "DAY_BLOCK_LENGTH",
                                                                        },
                                                                        id: 2756,
                                                                        name: "Identifier",
                                                                        src: "5920:16:9",
                                                                    },
                                                                ],
                                                                id: 2757,
                                                                name: "Return",
                                                                src: "5913:23:9",
                                                            },
                                                        ],
                                                        id: 2758,
                                                        name: "Block",
                                                        src: "5899:48:9",
                                                    },
                                                    {
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    commonType: {
                                                                        typeIdentifier: "t_uint8",
                                                                        typeString: "uint8",
                                                                    },
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    lValueRequested: false,
                                                                    operator: "==",
                                                                    type: "bool",
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 2736,
                                                                            type: "uint8",
                                                                            value:
                                                                                "amortizationUnitType",
                                                                        },
                                                                        id: 2759,
                                                                        name: "Identifier",
                                                                        src: "5957:20:9",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: true,
                                                                            isStructConstructorCall: false,
                                                                            lValueRequested: false,
                                                                            names: [null],
                                                                            type: "uint8",
                                                                            type_conversion: true,
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: [
                                                                                        {
                                                                                            typeIdentifier:
                                                                                                "t_enum$_AmortizationUnitType_$2539",
                                                                                            typeString:
                                                                                                "enum SimpleInterestTermsContract.AmortizationUnitType",
                                                                                        },
                                                                                    ],
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: true,
                                                                                    lValueRequested: false,
                                                                                    type:
                                                                                        "type(uint8)",
                                                                                    value: "uint8",
                                                                                },
                                                                                id: 2760,
                                                                                name:
                                                                                    "ElementaryTypeNameExpression",
                                                                                src: "5981:5:9",
                                                                            },
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: true,
                                                                                    lValueRequested: false,
                                                                                    member_name:
                                                                                        "WEEKS",
                                                                                    referencedDeclaration: null,
                                                                                    type:
                                                                                        "enum SimpleInterestTermsContract.AmortizationUnitType",
                                                                                },
                                                                                children: [
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: null,
                                                                                            overloadedDeclarations: [
                                                                                                null,
                                                                                            ],
                                                                                            referencedDeclaration: 2539,
                                                                                            type:
                                                                                                "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                                                                            value:
                                                                                                "AmortizationUnitType",
                                                                                        },
                                                                                        id: 2761,
                                                                                        name:
                                                                                            "Identifier",
                                                                                        src:
                                                                                            "5987:20:9",
                                                                                    },
                                                                                ],
                                                                                id: 2762,
                                                                                name:
                                                                                    "MemberAccess",
                                                                                src: "5987:26:9",
                                                                            },
                                                                        ],
                                                                        id: 2763,
                                                                        name: "FunctionCall",
                                                                        src: "5981:33:9",
                                                                    },
                                                                ],
                                                                id: 2764,
                                                                name: "BinaryOperation",
                                                                src: "5957:57:9",
                                                            },
                                                            {
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            functionReturnParameters: 2740,
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    overloadedDeclarations: [
                                                                                        null,
                                                                                    ],
                                                                                    referencedDeclaration: 2548,
                                                                                    type: "uint256",
                                                                                    value:
                                                                                        "WEEK_BLOCK_LENGTH",
                                                                                },
                                                                                id: 2765,
                                                                                name: "Identifier",
                                                                                src: "6037:17:9",
                                                                            },
                                                                        ],
                                                                        id: 2766,
                                                                        name: "Return",
                                                                        src: "6030:24:9",
                                                                    },
                                                                ],
                                                                id: 2767,
                                                                name: "Block",
                                                                src: "6016:49:9",
                                                            },
                                                            {
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            commonType: {
                                                                                typeIdentifier:
                                                                                    "t_uint8",
                                                                                typeString: "uint8",
                                                                            },
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: false,
                                                                            lValueRequested: false,
                                                                            operator: "==",
                                                                            type: "bool",
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    overloadedDeclarations: [
                                                                                        null,
                                                                                    ],
                                                                                    referencedDeclaration: 2736,
                                                                                    type: "uint8",
                                                                                    value:
                                                                                        "amortizationUnitType",
                                                                                },
                                                                                id: 2768,
                                                                                name: "Identifier",
                                                                                src: "6075:20:9",
                                                                            },
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: true,
                                                                                    isStructConstructorCall: false,
                                                                                    lValueRequested: false,
                                                                                    names: [null],
                                                                                    type: "uint8",
                                                                                    type_conversion: true,
                                                                                },
                                                                                children: [
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: [
                                                                                                {
                                                                                                    typeIdentifier:
                                                                                                        "t_enum$_AmortizationUnitType_$2539",
                                                                                                    typeString:
                                                                                                        "enum SimpleInterestTermsContract.AmortizationUnitType",
                                                                                                },
                                                                                            ],
                                                                                            isConstant: false,
                                                                                            isLValue: false,
                                                                                            isPure: true,
                                                                                            lValueRequested: false,
                                                                                            type:
                                                                                                "type(uint8)",
                                                                                            value:
                                                                                                "uint8",
                                                                                        },
                                                                                        id: 2769,
                                                                                        name:
                                                                                            "ElementaryTypeNameExpression",
                                                                                        src:
                                                                                            "6099:5:9",
                                                                                    },
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: null,
                                                                                            isConstant: false,
                                                                                            isLValue: false,
                                                                                            isPure: true,
                                                                                            lValueRequested: false,
                                                                                            member_name:
                                                                                                "MONTHS",
                                                                                            referencedDeclaration: null,
                                                                                            type:
                                                                                                "enum SimpleInterestTermsContract.AmortizationUnitType",
                                                                                        },
                                                                                        children: [
                                                                                            {
                                                                                                attributes: {
                                                                                                    argumentTypes: null,
                                                                                                    overloadedDeclarations: [
                                                                                                        null,
                                                                                                    ],
                                                                                                    referencedDeclaration: 2539,
                                                                                                    type:
                                                                                                        "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                                                                                    value:
                                                                                                        "AmortizationUnitType",
                                                                                                },
                                                                                                id: 2770,
                                                                                                name:
                                                                                                    "Identifier",
                                                                                                src:
                                                                                                    "6105:20:9",
                                                                                            },
                                                                                        ],
                                                                                        id: 2771,
                                                                                        name:
                                                                                            "MemberAccess",
                                                                                        src:
                                                                                            "6105:27:9",
                                                                                    },
                                                                                ],
                                                                                id: 2772,
                                                                                name:
                                                                                    "FunctionCall",
                                                                                src: "6099:34:9",
                                                                            },
                                                                        ],
                                                                        id: 2773,
                                                                        name: "BinaryOperation",
                                                                        src: "6075:58:9",
                                                                    },
                                                                    {
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    functionReturnParameters: 2740,
                                                                                },
                                                                                children: [
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: null,
                                                                                            overloadedDeclarations: [
                                                                                                null,
                                                                                            ],
                                                                                            referencedDeclaration: 2551,
                                                                                            type:
                                                                                                "uint256",
                                                                                            value:
                                                                                                "MONTH_BLOCK_LENGTH",
                                                                                        },
                                                                                        id: 2774,
                                                                                        name:
                                                                                            "Identifier",
                                                                                        src:
                                                                                            "6156:18:9",
                                                                                    },
                                                                                ],
                                                                                id: 2775,
                                                                                name: "Return",
                                                                                src: "6149:25:9",
                                                                            },
                                                                        ],
                                                                        id: 2776,
                                                                        name: "Block",
                                                                        src: "6135:50:9",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            falseBody: null,
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    commonType: {
                                                                                        typeIdentifier:
                                                                                            "t_uint8",
                                                                                        typeString:
                                                                                            "uint8",
                                                                                    },
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: false,
                                                                                    lValueRequested: false,
                                                                                    operator: "==",
                                                                                    type: "bool",
                                                                                },
                                                                                children: [
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: null,
                                                                                            overloadedDeclarations: [
                                                                                                null,
                                                                                            ],
                                                                                            referencedDeclaration: 2736,
                                                                                            type:
                                                                                                "uint8",
                                                                                            value:
                                                                                                "amortizationUnitType",
                                                                                        },
                                                                                        id: 2777,
                                                                                        name:
                                                                                            "Identifier",
                                                                                        src:
                                                                                            "6195:20:9",
                                                                                    },
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: null,
                                                                                            isConstant: false,
                                                                                            isLValue: false,
                                                                                            isPure: true,
                                                                                            isStructConstructorCall: false,
                                                                                            lValueRequested: false,
                                                                                            names: [
                                                                                                null,
                                                                                            ],
                                                                                            type:
                                                                                                "uint8",
                                                                                            type_conversion: true,
                                                                                        },
                                                                                        children: [
                                                                                            {
                                                                                                attributes: {
                                                                                                    argumentTypes: [
                                                                                                        {
                                                                                                            typeIdentifier:
                                                                                                                "t_enum$_AmortizationUnitType_$2539",
                                                                                                            typeString:
                                                                                                                "enum SimpleInterestTermsContract.AmortizationUnitType",
                                                                                                        },
                                                                                                    ],
                                                                                                    isConstant: false,
                                                                                                    isLValue: false,
                                                                                                    isPure: true,
                                                                                                    lValueRequested: false,
                                                                                                    type:
                                                                                                        "type(uint8)",
                                                                                                    value:
                                                                                                        "uint8",
                                                                                                },
                                                                                                id: 2778,
                                                                                                name:
                                                                                                    "ElementaryTypeNameExpression",
                                                                                                src:
                                                                                                    "6219:5:9",
                                                                                            },
                                                                                            {
                                                                                                attributes: {
                                                                                                    argumentTypes: null,
                                                                                                    isConstant: false,
                                                                                                    isLValue: false,
                                                                                                    isPure: true,
                                                                                                    lValueRequested: false,
                                                                                                    member_name:
                                                                                                        "YEARS",
                                                                                                    referencedDeclaration: null,
                                                                                                    type:
                                                                                                        "enum SimpleInterestTermsContract.AmortizationUnitType",
                                                                                                },
                                                                                                children: [
                                                                                                    {
                                                                                                        attributes: {
                                                                                                            argumentTypes: null,
                                                                                                            overloadedDeclarations: [
                                                                                                                null,
                                                                                                            ],
                                                                                                            referencedDeclaration: 2539,
                                                                                                            type:
                                                                                                                "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                                                                                            value:
                                                                                                                "AmortizationUnitType",
                                                                                                        },
                                                                                                        id: 2779,
                                                                                                        name:
                                                                                                            "Identifier",
                                                                                                        src:
                                                                                                            "6225:20:9",
                                                                                                    },
                                                                                                ],
                                                                                                id: 2780,
                                                                                                name:
                                                                                                    "MemberAccess",
                                                                                                src:
                                                                                                    "6225:26:9",
                                                                                            },
                                                                                        ],
                                                                                        id: 2781,
                                                                                        name:
                                                                                            "FunctionCall",
                                                                                        src:
                                                                                            "6219:33:9",
                                                                                    },
                                                                                ],
                                                                                id: 2782,
                                                                                name:
                                                                                    "BinaryOperation",
                                                                                src: "6195:57:9",
                                                                            },
                                                                            {
                                                                                children: [
                                                                                    {
                                                                                        attributes: {
                                                                                            functionReturnParameters: 2740,
                                                                                        },
                                                                                        children: [
                                                                                            {
                                                                                                attributes: {
                                                                                                    argumentTypes: null,
                                                                                                    overloadedDeclarations: [
                                                                                                        null,
                                                                                                    ],
                                                                                                    referencedDeclaration: 2554,
                                                                                                    type:
                                                                                                        "uint256",
                                                                                                    value:
                                                                                                        "YEAR_BLOCK_LENGTH",
                                                                                                },
                                                                                                id: 2783,
                                                                                                name:
                                                                                                    "Identifier",
                                                                                                src:
                                                                                                    "6275:17:9",
                                                                                            },
                                                                                        ],
                                                                                        id: 2784,
                                                                                        name:
                                                                                            "Return",
                                                                                        src:
                                                                                            "6268:24:9",
                                                                                    },
                                                                                ],
                                                                                id: 2785,
                                                                                name: "Block",
                                                                                src: "6254:49:9",
                                                                            },
                                                                        ],
                                                                        id: 2786,
                                                                        name: "IfStatement",
                                                                        src: "6191:112:9",
                                                                    },
                                                                ],
                                                                id: 2787,
                                                                name: "IfStatement",
                                                                src: "6071:232:9",
                                                            },
                                                        ],
                                                        id: 2788,
                                                        name: "IfStatement",
                                                        src: "5953:350:9",
                                                    },
                                                ],
                                                id: 2789,
                                                name: "IfStatement",
                                                src: "5837:466:9",
                                            },
                                        ],
                                        id: 2790,
                                        name: "IfStatement",
                                        src: "5719:584:9",
                                    },
                                ],
                                id: 2791,
                                name: "Block",
                                src: "5709:600:9",
                            },
                        ],
                        id: 2792,
                        name: "FunctionDefinition",
                        src: "5551:758:9",
                    },
                ],
                id: 2793,
                name: "ContractDefinition",
                src: "697:5614:9",
            },
        ],
        id: 2794,
        name: "SourceUnit",
        src: "584:5728:9",
    },
    compiler: {
        name: "solc",
        version: "0.4.18+commit.9cf6e910.Emscripten.clang",
    },
    networks: {},
    schemaVersion: "1.0.1",
    updatedAt: "2018-02-10T23:43:16.355Z",
};
