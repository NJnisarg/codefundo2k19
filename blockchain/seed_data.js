const {addCandidate} = require('./w3/addEntities');
const {getCandidates, reset} = require('./w3/vote');

const faker = require('faker');
faker.locale = "en_IND";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('../db.sqlite3', (err) => {
   if(err){
       console.log(err)
   }
   else{
       console.log('Connected to Database')
   }
});

const constituencies = ['vadodara','surat','indore','ujjain', 'gwalior','bharuch','ahmedabad','mumbai','delhi','nagpur'];
const parties = ['BJP', 'Congress', 'AAP', 'Trinamool Congress', 'Shiv Sena', 'PDP'];
const elections = ['Lok Sabha Elections 2019', 'Gujarat Vidhan Sabha Elections 2018'];


db.serialize(() => {

    let stmt;

    // Inserting into constituency (id, name)
    stmt = db.prepare('insert into backend_constituency values (?,?)');
    constituencies.map((con, i) => {
        stmt.run(i+1,con);
    });

    // Inserting into party (id, name)
    stmt = db.prepare('insert into backend_party values (?,?, null)');
    parties.map((party, i) => {
        stmt.run(i+1, party);
    });

    // Inserting into election (id, name, description, start_date, end_date)
    stmt = db.prepare('insert into backend_election values (?,?,?,?,?)');
    stmt.run(1,elections[0], 'This is the upcoming election for the largest democracy in the world. The lok sabha election is the general election where the Indian democracy chooses its next ruling party.', '2019-08-20','2019-08-25');
    stmt.run(2,elections[1], 'This is the election of the state of gujarat. The vidhan sabha election is the election where the public of Gujarat state chooses its next ruling party.', '2018-08-20','2018-08-25');

    // Inserting into electionconstituency (id, constituency_id, election_id)
    stmt = db.prepare('insert into backend_electionconstituency values (?,?,?)');
    for(let i = 1; i <= 10; i++)
    {
        stmt.run(i,i,1);
    }
    stmt.run(11,1,2);
    stmt.run(12,2,2);
    stmt.run(13,6,2);
    stmt.run(14,7,2);

    // Inserting into aadharDetail (id, name, phoneNumber, aadharNum, fingerprint, age, gender, address, pincode, imageUrl, constituency_id)
    stmt = db.prepare('insert into backend_aadhardetail values (?,?,?,?,?,?,?,?,?,?,?)');
    for(let i=1;i<=30;i++)
    {
        stmt.run(i, faker.name.findName(), faker.phone.phoneNumber(), faker.phone.phoneNumber().slice(1,-1), faker.random.uuid(), 20, 'M', faker.address.streetAddress(), faker.address.zipCode(), '' , i%10 + 1);
    }

    // Inserting into the partycandidate (id, aadhar_id, constituency_id, election_id, party_id)
    stmt = db.prepare('insert into backend_partycandidate values(?,?,?,?,?)');

    stmt.run(1,3,1,1,1);
    stmt.run(2,7,1,1,2);
    stmt.run(3,11,1,1,3);
    stmt.run(4,16,1,1,4);
    stmt.run(5,24,1,1,5);
    stmt.run(6,27,1,1,6);

    stmt.finalize();

});

db.each('select bad.name as name, bp.name as party, bad.aadhar_num as aadhar_num from backend_partycandidate natural join backend_party as bp, backend_aadhardetail as bad where bad.id = aadhar_detail_id_id', async (err,row) => {

    console.log(row.party+"_"+row.aadhar_num);
    let candidateHash = row.party+"_"+row.aadhar_num;
    // console.log(await addCandidate(candidateHash));
});