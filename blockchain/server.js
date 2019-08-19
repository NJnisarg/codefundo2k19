const {addVoter, addCandidate} = require('./w3/addEntities');
const {vote, getVoteCount,getCandidates, getVoters} = require('./w3/vote');

const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
  

app.use(express.json());
app.use(cors())

app.post('/addVoter',async (req, res) => {
    let voterHash = req.body.voterHash;
    let result = await addVoter(voterHash);
    console.log(result);
    res.json({result});
});
app.post('/addCandidate',async (req, res) => {
    let candidateHash = req.body.candidateHash;
    let result = await addCandidate(candidateHash);
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