pragma solidity >=0.4.21 <0.6.0;

contract Voting {

    address[] voterAddresses;
    address[] candidateAddresses;
    mapping (address => uint) candidateVoteCount;
    mapping (address => uint) voterVoteCount;

    function addVoter(address _voterAddress) returns (bool){
        voterAddresses.push(_voterAddress);
        voterVoteCount[_voterAddress] = 0;
        return true;
    }

    function addCandidate(address _candidateAddress) returns (bool) {
        candidateAddresses.push(_candidateAddress);
        candidateVoteCount[_candidateAddress] = 0;
        return true;
    }

    function vote(address _candidateAddress) returns (bool) {

        if(voterHashAddressList[hash]!=msg.sender)
            return false;

        else if(voterVoteCount[msg.sender] != 0)
            return false;
        else{
            voterVoteCount[msg.sender]++;
            candidateVoteCount[_candidateAddress]++;
            return true;
        }
    }

    function reset()
    {
        for(uint i=0;i<voterAddresses.length; i++)
        {
            voterVoteCount[voterAddresses[i]] = 0;
        }

        for(uint i=0;i<candidateAddresses.length; i++)
        {
            candidateVoteCount[candidateAddresses[i]] = 0;
        }
    }

    function getVoteCount(address _candidateAddress) view returns (uint) {
        return candidateVoteCount[_candidateAddress];
    }
}