const express = require('express');
const cors = require('cors');
const _ = require('underscore');
const axios = require('axios');

const {addVoter, addCandidate} = require('./w3/addEntities');
const {vote, getVoteCount,getCandidates, getVoters} = require('./w3/vote');

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

    axios.post('http://localhost:8000/getAllContestingCandidatesOfUserConstituency/', req.body)
        .then((response) => {
            let result_array = [];
            response.data.map(async (obj, index) => {
                try{
                    obj.vote_count = await getVoteCount(obj.aadhar_num);
                    console.log(obj);
                    result_array.push(obj);

                    if(index===response.data.length-1)
                    {
                        res.json(result_array);
                    }
                }catch(err)
                {
                    console.log(err);
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });

    // let candidateHash = req.body.candidateHash;
    // console.log(result);
    // res.json({result});
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