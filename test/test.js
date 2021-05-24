const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');

chai.use(chaiHttp);

describe('/api/custom_random/:num', () => {
    it('should return status 200', (done) => {
        chai.request(server)
            .get('/api/custom_random/:num')
            .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });

    it('should return a json object', (done) => {
      chai.request(server)
         .get('/api/custom_random/:num')
         .end((err, res) => {
            res.should.be.json;
            done();
         });
   });

   const num = 17;
   
   it('should return value', (done) => {
      chai.request(server)
         .get('/api/custom_random/' + num)
         .end((err, res) => {
            res.body.should.have.property('num').and.be.a('number');
            done();
         });
   });
});

describe('/api/random', () => {
    it('should return status 200', (done) => {
        chai.request(server)
            .get('/api/random')
            .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });

    it('should return a json object', (done) => {
      chai.request(server)
         .get('/api/random')
         .end((err, res) => {
            res.should.be.json;
            done();
         });
   });
});

describe('/api/vowels/:word', () => {
    it('should return status 200', (done) => {
        chai.request(server)
            .get('/api/vowels/:word')
            .end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            done();
        });
    });

    it('should return a json object', (done) => {
      chai.request(server)
         .get('/api/vowels/:word')
         .end((err, res) => {
            res.should.be.json;
            done();
         });
   });

   const word = 'Webbkrypteringssystemet';

   it('should return vowels', (done) => {
      chai.request(server)
         .get('/api/vowels/' + word)
         .end((err, res) => {
            res.body.should.have.property('vowels').eq(7);
            done();
         });
   });
});

describe('/api/count/add', () => {
    it('should return status 200', (done) => {
        chai.request(server)
            .get('/api/count/add')
            .end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            done();
        });
    });

    it('should return a json object', (done) => {
      chai.request(server)
         .get('/api/count/add')
         .end((err, res) => {
            res.should.be.json;
            done();
         });
   });
});

describe('/api/count/show', () => {
    it('should return status 200', (done) => {
        chai.request(server)
            .get('/api/count/show')
            .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });

    it('should return a json object', (done) => {
      chai.request(server)
         .get('/api/count/show')
         .end((err, res) => {
            res.should.be.json;
            done();
         });
   });
});