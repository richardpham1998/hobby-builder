process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Tag = require('../models/tag');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


//"mocha tag" to test
chai.use(chaiHttp);

 describe('Tags', () => {
     beforeEach((done) => {
          Tag.remove({}, (err) => {
             done();
         });
     });

 /*
   * Test the /GET route
   */
   describe('/GET tags', () => {
       it('it should GET all the tags', (done) => {
         chai.request(server)
             .get('/api/tags')
             .end((err, res) => {
                   res.should.have.status(200);
                   should.exist(res.body);
                   res.body.should.be.a('array');
                   res.body.length.should.be.eql(0);
               done();
             });
       });
   });

    /*
    * Test the /POST route
    */
   describe('/POST tag', () => {
         it('Tags must have name', (done) => {
             let tag = new Tag({
                 name:"Surfing",
             })
         chai.request(server)
             .post('/api/tag')
             .send(tag)
             .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     res.body.should.have.property('tag');
                     res.body.tag.should.have.property('name');
                 done();
             });
         });

         it('Adding tag with no name will fail', (done) => {
            let tag = new Tag({
                name:null,
            })
         chai.request(server)
             .post('/api/tag')
             .send(tag)
             .end((err, res) => {
                     res.body.should.have.property('errors');
                     res.body.name.should.equal('ValidationError');
                     done();
             });
         });

 });

  /*
   * Test the /DELETE:id route
   */
  describe('/DELETE/:id tag', () => {
    it('it will DELETE tag', (done) => {
        let tag = new Tag({
            name:"Surfing",
        })


        tag.save((err, tag) => {

            const id = tag.id;
            chai.request(server)
            .delete('/api/tag/' + id)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('deletedCount').eql(1);
              done();
            });
        });
        });
    });

  /*
   * Test the /PATCH:id route
   */
  describe('/PATCH/:id tag', () => {
    it('it will PATCH tag by editing name', (done) => {
        let tag = new Tag({
            name:"Surfing",
        })
        tag.save((err, user) => {
              chai.request(server)
              .patch('/api/tag/' + tag.id)
              .send(
                {
                    "name": "Running"
                })
                .end((err, res) => {
                });

                const id = user.id;
                chai.request(server)
                .get('/api/tag/' + id)
                .timeout(500)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name').eql("Running");
                    done();
                });
        });
    });


        it('it will not PATCH name since it is null', (done) => {
            let tag = new Tag({
                        "name":"Jumping",
                    })
            tag.save((err, user) => {
                  chai.request(server)
                  .patch('/api/tag/' + tag.id)
                  .send(
                    {
                        "name": null
                    })
                    .end((err, res) => {
                    });
    
                    const id = user.id;
                    chai.request(server)
                    .get('/api/tag/' + id)
                    .timeout(500)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name').eql("Jumping");
                        done();
                    });
            });
        });
    });
   
 });


