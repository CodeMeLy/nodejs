var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();
chai.use(chaiHttp);
describe('Blobs', function() {
  it('should list ALL blobs on /blobs GET', function(done) {
    chai.request(server)
      .get('/blobs')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('should list ALL blobs on /blobs POST',function(done){
    chai.request(server)
    .post('/blobs')
    .send({'id': 1, 'name': 'Java', 'lastName':'Script'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('Minh');
      res.body.Minh.should.be.a('object');
      res.body.Minh.should.have.property('id');
      res.body.Minh.should.have.property('name');
      res.body.Minh.should.have.property('lastName');
      res.body.Minh.name.should.equal('Java');
      res.body.Minh.lastName.should.equal('Script');
      done();
    })
  })
  it('should add a SINGLE blob on /blobs POST');
  it('should update a SINGLE blob on /blob/<id> PUT');
  it('should delete a SINGLE blob on /blob/<id> DELETE');
});