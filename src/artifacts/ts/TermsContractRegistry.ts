export const TermsContractRegistry = {
    contractName: "TermsContractRegistry",
    abi: [
        {
            constant: false,
            inputs: [
                {
                    name: "tokenAddress",
                    type: "address",
                },
                {
                    name: "termsContract",
                    type: "address",
                },
            ],
            name: "setSimpleInterestTermsContractAddress",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    name: "tokenAddress",
                    type: "address",
                },
            ],
            name: "getSimpleInterestTermsContractAddress",
            outputs: [
                {
                    name: "",
                    type: "address",
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
                    name: "",
                    type: "bytes32",
                },
            ],
            name: "symbolToTermsContractAddress",
            outputs: [
                {
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
    ],
    bytecode:
        "0x6060604052341561000f57600080fd5b6103848061001e6000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631ad43dc01461005c5780636ae369c1146100b45780639ef3daf61461012d575b600080fd5b341561006757600080fd5b6100b2600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610194565b005b34156100bf57600080fd5b6100eb600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610269565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561013857600080fd5b610152600480803560001916906020019091905050610325565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b8060008084604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401807f53696d706c65496e7465726573745465726d73436f6e74726163740000000000815250601b0191505060405180910390206000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600080600083604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401807f53696d706c65496e7465726573745465726d73436f6e74726163740000000000815250601b0191505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a72305820f535492134015cd91f9e71c4e368a0441dce3fde62636542941668d15073631b0029",
    deployedBytecode:
        "0x606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631ad43dc01461005c5780636ae369c1146100b45780639ef3daf61461012d575b600080fd5b341561006757600080fd5b6100b2600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610194565b005b34156100bf57600080fd5b6100eb600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610269565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561013857600080fd5b610152600480803560001916906020019091905050610325565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b8060008084604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401807f53696d706c65496e7465726573745465726d73436f6e74726163740000000000815250601b0191505060405180910390206000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600080600083604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401807f53696d706c65496e7465726573745465726d73436f6e74726163740000000000815250601b0191505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a72305820f535492134015cd91f9e71c4e368a0441dce3fde62636542941668d15073631b0029",
    sourceMap: "26:607:10:-;;;;;;;;;;;;;;;;;",
    deployedSourceMap:
        "26:607:10:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;134:250;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;390:241;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;63:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;134:250;364:13;243:28;:118;295:12;272:88;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;243:118;;;;;;;;;;;;;;;;;;:134;;;;;;;;;;;;;;;;;;134:250;;:::o;390:241::-;480:7;506:28;:118;558:12;535:88;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;506:118;;;;;;;;;;;;;;;;;;;;;;;;;;;499:125;;390:241;;;:::o;63:64::-;;;;;;;;;;;;;;;;;;;;;;:::o",
    source:
        'pragma solidity 0.4.18;\n\n\ncontract TermsContractRegistry {\n    mapping (bytes32 => address) public symbolToTermsContractAddress;\n\n    function setSimpleInterestTermsContractAddress(address tokenAddress, address termsContract) public {\n        symbolToTermsContractAddress[keccak256(\n            tokenAddress,\n            "SimpleInterestTermsContract"\n        )] = termsContract;\n    }\n\n    function getSimpleInterestTermsContractAddress(address tokenAddress) public view returns (address) {\n        return symbolToTermsContractAddress[keccak256(\n            tokenAddress,\n            "SimpleInterestTermsContract"\n        )];\n    }\n}\n',
    sourcePath:
        "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/examples/TermsContractRegistry.sol",
    ast: {
        attributes: {
            absolutePath:
                "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/examples/TermsContractRegistry.sol",
            exportedSymbols: {
                TermsContractRegistry: [2832],
            },
        },
        children: [
            {
                attributes: {
                    literals: ["solidity", "0.4", ".18"],
                },
                id: 2795,
                name: "PragmaDirective",
                src: "0:23:10",
            },
            {
                attributes: {
                    baseContracts: [null],
                    contractDependencies: [null],
                    contractKind: "contract",
                    documentation: null,
                    fullyImplemented: true,
                    linearizedBaseContracts: [2832],
                    name: "TermsContractRegistry",
                    scope: 2833,
                },
                children: [
                    {
                        attributes: {
                            constant: false,
                            name: "symbolToTermsContractAddress",
                            scope: 2832,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "mapping(bytes32 => address)",
                            value: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                attributes: {
                                    type: "mapping(bytes32 => address)",
                                },
                                children: [
                                    {
                                        attributes: {
                                            name: "bytes32",
                                            type: "bytes32",
                                        },
                                        id: 2796,
                                        name: "ElementaryTypeName",
                                        src: "72:7:10",
                                    },
                                    {
                                        attributes: {
                                            name: "address",
                                            type: "address",
                                        },
                                        id: 2797,
                                        name: "ElementaryTypeName",
                                        src: "83:7:10",
                                    },
                                ],
                                id: 2798,
                                name: "Mapping",
                                src: "63:28:10",
                            },
                        ],
                        id: 2799,
                        name: "VariableDeclaration",
                        src: "63:64:10",
                    },
                    {
                        attributes: {
                            constant: false,
                            implemented: true,
                            isConstructor: false,
                            modifiers: [null],
                            name: "setSimpleInterestTermsContractAddress",
                            payable: false,
                            scope: 2832,
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
                                            name: "tokenAddress",
                                            scope: 2816,
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
                                                id: 2800,
                                                name: "ElementaryTypeName",
                                                src: "181:7:10",
                                            },
                                        ],
                                        id: 2801,
                                        name: "VariableDeclaration",
                                        src: "181:20:10",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "termsContract",
                                            scope: 2816,
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
                                                id: 2802,
                                                name: "ElementaryTypeName",
                                                src: "203:7:10",
                                            },
                                        ],
                                        id: 2803,
                                        name: "VariableDeclaration",
                                        src: "203:21:10",
                                    },
                                ],
                                id: 2804,
                                name: "ParameterList",
                                src: "180:45:10",
                            },
                            {
                                attributes: {
                                    parameters: [null],
                                },
                                children: [],
                                id: 2805,
                                name: "ParameterList",
                                src: "233:0:10",
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
                                                    type: "address",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            isConstant: false,
                                                            isLValue: true,
                                                            isPure: false,
                                                            lValueRequested: true,
                                                            type: "address",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2799,
                                                                    type:
                                                                        "mapping(bytes32 => address)",
                                                                    value:
                                                                        "symbolToTermsContractAddress",
                                                                },
                                                                id: 2806,
                                                                name: "Identifier",
                                                                src: "243:28:10",
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
                                                                                    typeIdentifier:
                                                                                        "t_address",
                                                                                    typeString:
                                                                                        "address",
                                                                                },
                                                                                {
                                                                                    typeIdentifier:
                                                                                        "t_stringliteral_8b4cb97860a0dbe2b88011c128ededd7ecf3885dfbcfa754c7192f454c8d53ae",
                                                                                    typeString:
                                                                                        'literal_string "SimpleInterestTermsContract"',
                                                                                },
                                                                            ],
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 6127,
                                                                            type:
                                                                                "function () pure returns (bytes32)",
                                                                            value: "keccak256",
                                                                        },
                                                                        id: 2807,
                                                                        name: "Identifier",
                                                                        src: "272:9:10",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 2801,
                                                                            type: "address",
                                                                            value: "tokenAddress",
                                                                        },
                                                                        id: 2808,
                                                                        name: "Identifier",
                                                                        src: "295:12:10",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            hexvalue:
                                                                                "53696d706c65496e7465726573745465726d73436f6e7472616374",
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: true,
                                                                            lValueRequested: false,
                                                                            subdenomination: null,
                                                                            token: "string",
                                                                            type:
                                                                                'literal_string "SimpleInterestTermsContract"',
                                                                            value:
                                                                                "SimpleInterestTermsContract",
                                                                        },
                                                                        id: 2809,
                                                                        name: "Literal",
                                                                        src: "321:29:10",
                                                                    },
                                                                ],
                                                                id: 2810,
                                                                name: "FunctionCall",
                                                                src: "272:88:10",
                                                            },
                                                        ],
                                                        id: 2811,
                                                        name: "IndexAccess",
                                                        src: "243:118:10",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2803,
                                                            type: "address",
                                                            value: "termsContract",
                                                        },
                                                        id: 2812,
                                                        name: "Identifier",
                                                        src: "364:13:10",
                                                    },
                                                ],
                                                id: 2813,
                                                name: "Assignment",
                                                src: "243:134:10",
                                            },
                                        ],
                                        id: 2814,
                                        name: "ExpressionStatement",
                                        src: "243:134:10",
                                    },
                                ],
                                id: 2815,
                                name: "Block",
                                src: "233:151:10",
                            },
                        ],
                        id: 2816,
                        name: "FunctionDefinition",
                        src: "134:250:10",
                    },
                    {
                        attributes: {
                            constant: true,
                            implemented: true,
                            isConstructor: false,
                            modifiers: [null],
                            name: "getSimpleInterestTermsContractAddress",
                            payable: false,
                            scope: 2832,
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
                                            name: "tokenAddress",
                                            scope: 2831,
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
                                                id: 2817,
                                                name: "ElementaryTypeName",
                                                src: "437:7:10",
                                            },
                                        ],
                                        id: 2818,
                                        name: "VariableDeclaration",
                                        src: "437:20:10",
                                    },
                                ],
                                id: 2819,
                                name: "ParameterList",
                                src: "436:22:10",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "",
                                            scope: 2831,
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
                                                id: 2820,
                                                name: "ElementaryTypeName",
                                                src: "480:7:10",
                                            },
                                        ],
                                        id: 2821,
                                        name: "VariableDeclaration",
                                        src: "480:7:10",
                                    },
                                ],
                                id: 2822,
                                name: "ParameterList",
                                src: "479:9:10",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            functionReturnParameters: 2822,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: true,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    type: "address",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2799,
                                                            type: "mapping(bytes32 => address)",
                                                            value: "symbolToTermsContractAddress",
                                                        },
                                                        id: 2823,
                                                        name: "Identifier",
                                                        src: "506:28:10",
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
                                                                            typeIdentifier:
                                                                                "t_address",
                                                                            typeString: "address",
                                                                        },
                                                                        {
                                                                            typeIdentifier:
                                                                                "t_stringliteral_8b4cb97860a0dbe2b88011c128ededd7ecf3885dfbcfa754c7192f454c8d53ae",
                                                                            typeString:
                                                                                'literal_string "SimpleInterestTermsContract"',
                                                                        },
                                                                    ],
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 6127,
                                                                    type:
                                                                        "function () pure returns (bytes32)",
                                                                    value: "keccak256",
                                                                },
                                                                id: 2824,
                                                                name: "Identifier",
                                                                src: "535:9:10",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2818,
                                                                    type: "address",
                                                                    value: "tokenAddress",
                                                                },
                                                                id: 2825,
                                                                name: "Identifier",
                                                                src: "558:12:10",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    hexvalue:
                                                                        "53696d706c65496e7465726573745465726d73436f6e7472616374",
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    subdenomination: null,
                                                                    token: "string",
                                                                    type:
                                                                        'literal_string "SimpleInterestTermsContract"',
                                                                    value:
                                                                        "SimpleInterestTermsContract",
                                                                },
                                                                id: 2826,
                                                                name: "Literal",
                                                                src: "584:29:10",
                                                            },
                                                        ],
                                                        id: 2827,
                                                        name: "FunctionCall",
                                                        src: "535:88:10",
                                                    },
                                                ],
                                                id: 2828,
                                                name: "IndexAccess",
                                                src: "506:118:10",
                                            },
                                        ],
                                        id: 2829,
                                        name: "Return",
                                        src: "499:125:10",
                                    },
                                ],
                                id: 2830,
                                name: "Block",
                                src: "489:142:10",
                            },
                        ],
                        id: 2831,
                        name: "FunctionDefinition",
                        src: "390:241:10",
                    },
                ],
                id: 2832,
                name: "ContractDefinition",
                src: "26:607:10",
            },
        ],
        id: 2833,
        name: "SourceUnit",
        src: "0:634:10",
    },
    compiler: {
        name: "solc",
        version: "0.4.18+commit.9cf6e910.Emscripten.clang",
    },
    networks: {
        "70": {
            events: {},
            links: {},
            address: "0xdf2b070f097c31cbbea7079c54bf5fd97a10df52",
        },
    },
    schemaVersion: "1.0.1",
    updatedAt: "2018-02-10T23:43:16.351Z",
};