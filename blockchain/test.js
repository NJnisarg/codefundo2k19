// alert("started");
// import { Web3 } from '../backend/frontend/node_modules/web3'
const Web3 = require('../backend/frontend/node_modules/web3');
const contractDetail = require('./build/contracts/Voting.json');
// import { contractDetail } from './build/contracts/Voting.json'

    // console.log(contractDetail);
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') { 
      // Use Mist/MetaMask's provider
      web3js = new Web3();
    } else {
      // Handle the case where the user doesn't have Metamask installed
      // Probably show them a message prompting them to install Metamask
    }

    // Now you can start your app & access web3 freely:
    startApp()


function startApp(){
    // myABI = asdf;
    web3js = new Web3("ws://localhost:8545");
    myABI = contractDetail["abi"];
    // console.log(myABI);
    // console.log(contractDetail);
    var myContract = new web3js.eth.Contract(myABI, "0x5018aad1825b61285885f7e158b6c43f57759dff");
    myContract.methods.addVoter("shweta");
    // myContract.methods.addCandidate("manan");
    myContract.methods.vote("manan","shweta").send({from:"0x4746d686316BA668CF6ccFe216aB61DF97f064A9"}).then(console.log)
    .catch(console.log);
    // myContract.methods.getVoteCount("manan").send();    
    myContract.methods.getVoteCount("manan").call().then((result)=>{
        console.log(result);
    });
    // console.log(count);




}