const Web3 = require('web3');
const VotingContractArtifact = require('../build/contracts/Voting.json');

const networkAddr = "http://ethdnxd24-dns-reg1.eastus.cloudapp.azure.com:8540";
const contractABI = VotingContractArtifact["abi"];
const contractAddress = VotingContractArtifact["networks"]["10101010"]["address"];

const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(networkAddr));

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
        .then(async (result) => {
            console.log(await result);
            return result;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
};

const getVoters = async () => {

    contract.methods.getVoters().call()
        .then(async (result) => {
            console.log(await result);
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