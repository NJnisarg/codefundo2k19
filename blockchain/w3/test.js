const Web3 = require('web3');
const VotingContractArtifact = require('../build/contracts/Voting.json');

const networkAddr = "ws://ethdnxd24-dns-reg1-0.eastus.cloudapp.azure.com:8547";
const contractABI = VotingContractArtifact["abi"];
const contractAddress = VotingContractArtifact["networks"]["10101010"]["address"];

const web3 = new Web3(networkAddr);

const contract = new web3.eth.Contract(contractABI, '0x19F67B8e572EE23871A23481521caFf44Ef05d4E');

console.log(contract.methods.getVoters());
contract.methods.getVoteCount('nisarg').call().then(res => { console.log(res)}).catch(err => {console.log(err)});
