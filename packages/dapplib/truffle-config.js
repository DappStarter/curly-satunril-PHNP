require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture strong radar spike punch include enter army genre'; 
let testAccounts = [
"0x57e58d82d865ad54d7306904978469374e54b7f93992089cdc2421bca3fc7c3c",
"0xe78d3eca41eab85b0383c90713ba485eb26ddfcfe0dbad9aab303d495fd9ce26",
"0xab5c740463d8671442254686004848a1d6dbd238ff3eef0683d49e123353396d",
"0xc7da1a4e66642f11742a450383689cc187e5a1f694480ed3dfd3f3a3f3242bdd",
"0x8bbac7b184b719ca68987bf02cb9970539112e8a9789fcf34544a3a024bcf032",
"0x17b2dc1d3cababd4bbfbed2c8884175312917199698b8633a1dd32c017337e8c",
"0xf95fcfe6af6e2f3b45fbe6fbe61f6ee943e9294591aea449679a2a2656fd0a14",
"0x623a94ec0a069e66caf18986791d8eb3b40474e09d738b0c34e51696e37cb376",
"0xb89c36ec53a499f885851057ebd5ff532b041b6e8eafd5c7109194d47d1e6215",
"0x14a85fbc2d83f4880806d98f964c3aeac7ce3037e493f77a965103b97052cbb9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

