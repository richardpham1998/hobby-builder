process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Comment = require('../models/comment');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


//"mocha comment" to test
chai.use(chaiHttp);

 describe('Comments', () => {
     beforeEach((done) => {
          Comment.remove({}, (err) => {
             done();
         });
     });

 /*
   * Test the /GET route
   */
   describe('/GET comments', () => {
       it('it should GET all the comments', (done) => {
         chai.request(server)
             .get('/api/comments')
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
   describe('/POST comment', () => {
         it('Comments must have content', (done) => {
             let comment = new Comment({
                 content: "This is a great idea!",
                 user:"sj12",
                 name:"Michael",
                  date_created: Date.now()
             })
         chai.request(server)
             .post('/api/comment')
             .send(comment)
             .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     res.body.should.have.property('comment');
                     res.body.comment.should.have.property('content');
                 done();
             });
         });

         it('Adding comment with no content will fail', (done) => {
             let comment = new Comment({
                 content: null,
                 user:"sj12",
                 name:"Michael",
                 date_created: Date.now()
             })
         chai.request(server)
             .post('/api/comment')
             .send(comment)
             .end((err, res) => {
                     res.body.should.have.property('errors');
                     res.body.name.should.equal('ValidationError');
                     done();
             });
         });

        it('Comments can have post id', (done) => {
            let comment = new Comment({
                content: "This is a great idea!",
                user:"sj12",
                post:"dj892",
                name:"Michael",
                date_created: Date.now()
            })
        chai.request(server)
            .post('/api/comment')
            .send(comment)
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('comment');
                    res.body.comment.should.have.property('post').eql("dj892");
                done();
            });
        });

        it('Comments can have event id', (done) => {
            let comment = new Comment({
                content: "This is a great idea!",
                user:"sj12",
                event:"dj892",
                name:"Michael",
                date_created: Date.now()
            })
        chai.request(server)
            .post('/api/comment')
            .send(comment)
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('comment');
                    res.body.comment.should.have.property('event').eql("dj892");
                done();
            });
        });

 });

  /*
   * Test the /DELETE:id route
   */
  describe('/DELETE/:id comment', () => {
    it('it will DELETE comment', (done) => {
        let comment = new Comment({
            content: "I agree!",
            user: "dj923",
            name:"Michael",
            date_created: Date.now()
        })


        comment.save((err, comment) => {

            const id = comment.id;
            chai.request(server)
            .delete('/api/comment/' + id)
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
  describe('/PATCH/:id comment', () => {
    it('it will PATCH comment by editing content', (done) => {
        let comment = new Comment({
                    content: "This is a great idea!",
                    user:"sj12",
                    event: "jf8943",
                    name:"Michael",
                    date_created: Date.now()
                })
        comment.save((err, user) => {
              chai.request(server)
              .patch('/api/comment/' + comment.id)
              .send(
                {
                    "content": "I do not like this idea"
                })
                .end((err, res) => {
                });

                const id = user.id;
                chai.request(server)
                .get('/api/comment/' + id)
                .timeout(500)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('content').eql("I do not like this idea");
                    done();
                });
        });
    });

    it('it will PATCH comment by adding post and removing event', (done) => {
        let comment = new Comment({
                    content: "This is a great idea!",
                    user:"sj12",
                    event: "jf8943",
                    name:"Michael",
                    date_created: Date.now()
                })
        comment.save((err, user) => {
              chai.request(server)
              .patch('/api/comment/' + comment.id)
              .send(
                {
                    "post": "9i8u",
                    "event": null
                })
                .end((err, res) => {
                });

                const id = user.id;
                chai.request(server)
                .get('/api/comment/' + id)
                .timeout(500)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('event').eql(null);
                    res.body.should.have.property('post').eql("9i8u");
                    done();
                });
        });
    });


    //     it('it will not PATCH content since it is null', (done) => {
    //         let comment = new Comment({
    //                     content: "This is a great idea!",
    //                     user:"sj12",
    //                     event: "jf8943",
    //                     name:"Michael",
    //                     date_created: Date.now()
    //                 })
    //         comment.save((err, user) => {
    //               chai.request(server)
    //               .patch('/api/comment/' + comment.id)
    //               .send(
    //                 {
    //                     "content": null
    //                 })
    //                 .end((err, res) => {
    //                 });
    
    //                 const id = user.id;
    //                 chai.request(server)
    //                 .get('/api/comment/' + id)
    //                 .timeout(500)
    //                 .end((err, res) => {
    //                     res.should.have.status(200);
    //                     res.body.should.be.a('object');
    //                     res.body.should.have.property('content').eql("This is a great idea!");
    //                     done();
    //                 });
    //         });
    //     });
    // });
   
});
 });


