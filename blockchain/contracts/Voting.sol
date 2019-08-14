pragma solidity >=0.4.21 <0.6.0;

contract Voting {

    address[] voterAddresses;
    address[] candidateAddresses;
    mapping (address => uint) candidateVoteCount;
    mapping (address => uint) voterVoteCount;

    function addVoter(address _voterAddress) public returns (bool){
        voterAddresses.push(_voterAddress);
        voterVoteCount[_voterAddress] = 0;
        return true;
    }

    function addCandidate(address _candidateAddress) public returns (bool) {
        candidateAddresses.push(_candidateAddress);
        candidateVoteCount[_candidateAddress] = 0;
        return true;
    }

    function vote(address _candidateAddress) public returns (bool) {

        if(voterVoteCount[msg.sender] != 0)
            return false;
        else{
            voterVoteCount[msg.sender]++;
            candidateVoteCount[_candidateAddress]++;
            return true;
        }
    }

    function reset() public
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

    function getVoteCount(address _candidateAddress) public view returns (uint) {
        return candidateVoteCount[_candidateAddress];
    }
}