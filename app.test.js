

const chai = require('chai');
const expect = require('chai').expect;
const should = chai.should();
const request = require('supertest');
chai.use(require('chai-http'));

const app = require('../app.js'); // Our app

describe('Mean app Testing', function () {
  this.timeout(5000); // How long to wait for a response (ms)



  // GET - List all colors
  it('should return all student details', async () =>{

let finalResp={};
    finalResp = await request(app)
      .get('/mean/students')
      // .then(function (res) {
      //   //console.log(res);
      //   return res;
      // }).then(response => {
      //   finalResp= response.body;
      // });
      // console.log(finalResp.body);
    
      expect(finalResp).to.have.status(200);
      expect(finalResp.body[1].name).to.be.equal('uma');
      expect(finalResp).to.have.status(200);
      // expect(finalResp.body[0].name).should.include.keys(
      //   '_id', 'id','name','favlang','per','state','branch','__v'
      // );
    //  expect(res.body.name).to.be.equal('Java');
    //    expect(res.body).to.be.an('object');
    //expect(res.body.results).to.be.an('array');
  });


  it('should return all student details with id', async function () {

    let resfin = await request(app)
      .get('/mean/students/7451')
      // .then(function (res) {

        //  expect(res).to.have.status(200);
        //  expect(res).to.be.json;
        //  expect(data[0].id).to.equal('745'z);

        //  expect(res.body.name).to.be.equal('Java');
        //    expect(res.body).to.be.an('object');

      // }).catch(function (error) {
      //   // ops, mom don't buy it
      //   console.log(error.message);
      // });
      expect(resfin.body[0].name).to.be.equal('gunny');
      expect(resfin.body[0].favlang).to.be.equal('c++');
      expect(resfin.body[0].per).to.be.equal(62);
      expect(resfin.body[0].state).to.be.equal('Telangana');
      expect(resfin.body[0].branch).to.be.equal('mech');
      expect(resfin.body[0].id).to.be.equal(7451);
expect(resfin).to.have.status(200);
// expect(resfin.body).length.should.eql(1);
      // expect(resfin.body.name).to.be.equal('gunny');

  });





  it('should return Not Found', function () {
    return chai.request(app)
      .get('/INVALID_PATH')
      .then(function (res) {
        throw new Error('Path exists!');
      })
      .catch(function (err) {
        expect(err).to.have.status(404);

      });
  });

  //  // POST - Add new color


  //  POST - Bad Request
  //  it('Whether form', function() {
  //    return chai.request(app)
  //      .get('/api/student')
  //      .type('form')

  //      .then(function(res) {
  //        throw new Error('Invalid content type!');
  //      })
  //      .catch(function(err) {
  //        expect(err).to.have.status(404);
  //      });
  //     });


});
