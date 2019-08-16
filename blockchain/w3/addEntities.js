const Web3 = require('web3');
const VotingContractArtifact = require('../build/contracts/Voting.json');

const networkAddr = "ws://localhost:8545";
const contractABI = VotingContractArtifact["abi"];
const contractAddress = VotingContractArtifact["networks"]["10101010"]["address"];

const web3 = new Web3(networkAddr);
const contract = new web3.eth.Contract(contractABI, contractAddress);


const addVoter = async (hash) => {
    const accounts = await web3.eth.getAccounts();
    const defaultSender = accounts[0];

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
    const accounts = await web3.eth.getAccounts();
    const defaultSender = accounts[0];

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