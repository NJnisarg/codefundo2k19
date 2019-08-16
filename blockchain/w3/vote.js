const Web3 = require('web3');
const VotingContractArtifact = require('../build/contracts/Voting.json');

const networkAddr = "ws://localhost:8545";
const contractABI = VotingContractArtifact["abi"];
const contractAddress = VotingContractArtifact["networks"]["10101010"]["address"];

const web3 = new Web3(networkAddr);
const contract = new web3.eth.Contract(contractABI, contractAddress);


const vote = async (candidateHash, voterHash) => {
    const accounts = await web3.eth.getAccounts();
    const defaultSender = accounts[0];

    contract.methods.vote(candidateHash, voterHash).send({from: defaultSender})
        .then((result) => {
            console.log(result);
            return true;
        })
        .catch((error) => {
            console.log(error);
            return false;
        });
};

const getVoteCount = async (candidateHash) => {

    contract.methods.getVoteCount(candidateHash).call()
        .then((result) => {
            console.log(result);
            return result;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
};

const getVoters = async () => {

    contract.methods.getVoters().call()
        .then((result) => {
            console.log(result);
            return result;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
};

const getCandidates = async () => {

    contract.methods.getCandidates().call()
        .then((result) => {
            console.log(result);
            return result;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
};

module.exports = {
    vote,
    getVoteCount,
    getVoters,
    getCandidates
};