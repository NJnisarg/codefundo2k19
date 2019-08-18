const addEntities = require('./addEntities');
const voting = require('./vote');

const setup = async () => {
    console.log(await voting.getVoters());
};

