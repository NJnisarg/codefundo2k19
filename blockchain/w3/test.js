const Web3 = require('web3');
const contractDetail = require('../build/contracts/Voting.json');

const contractAddress = "0xc06cB75C0950dBC9d46b45EC091AC7B17b2d834E";
const sender = "0xEccEe0d2De5b25bC2Be330cb35541c284694e817";

const ADDVOTERS = false;
const ADDCANDIDATES = false;

startApp();

function startApp(){

    let web3js = new Web3("ws://localhost:8545");
    let myABI = contractDetail["abi"];

    let myContract = new web3js.eth.Contract(myABI, contractAddress);

    if(ADDVOTERS)
    {
        myContract.methods.addVoter('shweta').send({from:sender});
        myContract.methods.addVoter('yash').send({from:sender});
        myContract.methods.addVoter('nisarg').send({from:sender});
        myContract.methods.addVoter('aman').send({from:sender});
    }

    if(ADDCANDIDATES)
    {
        myContract.methods.addCandidate('manan').send({from:sender});
        myContract.methods.addCandidate('arpita').send({from:sender});
    }

    console.log("Candidates:");
    myContract.methods.getCandidates().call().then( result => {
        console.log(result);
        console.log("Voters:");
        myContract.methods.getVoters().call().then( result => {
            console.log(result);

            myContract.methods.vote("manan","yash").send({from:sender}).then(()=> {
                myContract.methods.getVoteCount("manan").call().then((result)=> {
                    console.log(result);
                });
            })
            .catch(console.log);
        });
    });



}