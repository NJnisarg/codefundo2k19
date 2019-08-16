const Web3 = require('web3');
const VotingContractArtifact = require('../build/contracts/Voting.json');

const networkAddr = "http://ethdnxd24-dns-reg1.eastus.cloudapp.azure.com:8540";
const contractABI = VotingContractArtifact["abi"];
const contractAddress = VotingContractArtifact["networks"]["10101010"]["address"];

const web3 = new Web3(networkAddr);
const contract = new web3.eth.Contract(contractABI, contractAddress);


const addVoter = async (hash) => {
    // const accounts = await web3.eth.getAccounts();
    const defaultSender = '0x38D4010731de6dee73F15aF71c886AB0e49f5122';

    contract.methods.addVoter(hash).send({from: defaultSender})
        .then((result) => {
            console.log(result);
            return true;
        })
        .catch((error) => {
            console.log(error);
            return false;
        });
};

const addCandidate = async (hash) => {
    // const accounts = await web3.eth.getAccounts();
    const defaultSender = '0x38D4010731de6dee73F15aF71c886AB0e49f5122';

    contract.methods.addCandidate(hash).send({from: defaultSender})
        .then((result) => {
            console.log(result);
            return true;
        })
        .catch((error) => {
            console.log(error);
            return false;
        });
};

module.exports = {
    addVoter,
    addCandidate
};