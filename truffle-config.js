require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remind modify good clip success trouble'; 
let testAccounts = [
"0x3976f07b7049d3a9bee4255d3762d1f05261131f9c1dc9c3ad45a777c9acb0cd",
"0xbbf856de791226780e42f355aab0ff3a885025abb0a89ae0df7c0d249a0f2c0a",
"0x6de900d2231e06508e1b112201318603214ef93ec6c63fd79283f7815792e98c",
"0x0b9c62b9987afbb8377cd88ef1579ef5f088735e1023b2779a5ab31cd2d84ab0",
"0xec667be62ecaf756448a19c21235cf5a58d60c58be810d85c7985ccf5158001c",
"0x04a54ea94a1879c6d8b9eef212c4d6a05555af95a9a3710cad7440edd79122b1",
"0x65cd67d98123baf2537bff801bc4e90b673e83df04e56181406a15e7801b448d",
"0x13c460f3aa42932722476134c7db9a37ed702417592c767aeb37f1541c2af13e",
"0x630a5a0419cdc08b2b3f59b9b3adcf8b577341dd6ade30b873bdf18755737120",
"0xaeeea5b225168965895249a0919dee80ff376a64e6fa36897d6ce061885f59c7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
