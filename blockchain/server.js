const {addVoter, addCandidate} = require('./w3/addEntities');
const {vote, getVoteCount,getCandidates, getVoters} = require('./w3/vote');
const _ = require('underscore');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;


//+913067720576

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
  

app.use(express.json());
app.use(cors());

app.post('/addVoter',async (req, res) => {
    let voterHash = req.body.voterHash;
    let voterList = await getVoters();
    let result = false;
    if(!_.contains(voterList,voterHash))
    {
        try{
            result = await addVoter(voterHash);
            console.log(result);
            result = true;
        }catch(err){
            result = false;
        }
    }
    else
        result = false;

    console.log(result);
    res.json({result});
});
app.post('/addCandidate',async (req, res) => {
    let candidateHash = req.body.candidateHash;
    let candidateList = await getCandidates();
    let result = false;
    if(!_.contains(candidateList, candidateHash))
    {
        try{
            result = await addCandidate(candidateHash);
            console.log(result);
            result = true;
        }catch(err){
            result = false;
        }
    }
    else
        result = false;

    console.log(result);
    res.json({result});
});
app.post('/vote',async (req, res) => {
    let voterHash = req.body.voterHash;
    let candidateHash = req.body.candidateHash;
    let result = await vote(candidateHash, voterHash);
    console.log(result);
    res.json({result});
});
app.post('/getVoteCount',async (req, res) => {
    let candidateHash = req.body.candidateHash;
    let result = await getVoteCount(candidateHash);
    console.log(result);
    res.json({result});
});

app.post('/getVoters',async (req, res) => {
    let result = await getVoters();
    console.log(result);
    res.json({result});
});
app.post('/getCandidates',async (req, res) => {
    let result = await getCandidates();
    console.log(result);
    res.json({result});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))