process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Post = require('../models/post');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


//"mocha post" to test
chai.use(chaiHttp);

 describe('Posts', () => {
     beforeEach((done) => {
         Post.remove({}, (err) => {
            done();
         });
     });

 /*
   * Test the /GET route
   */
  describe('/GET posts', () => {
      it('it should GET all the posts', (done) => {
        chai.request(server)
            .get('/api/posts')
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
  describe('/POST post', () => {
        it('Post must have title and description', (done) => {
            let post = {
                title: "Board Game Ideas",
                description: "Hey everyone! I just wanted to know if anyone had any recommendations for board games!",
                post_comments: []
            }
        chai.request(server)
            .post('/api/post')
            .send(post)
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('post');
                    res.body.post.should.have.property('title');
                    res.body.post.should.have.property('description');
                done();
            });
        });

        it('Adding post with no title will fail', (done) => {
            let post = {
                title: null,
                description: "Hey everyone! I just wanted to know if anyone had any recommendations for board games!",
                post_comments: []
            }
        chai.request(server)
            .post('/api/post')
            .send(post)
            .end((err, res) => {
                    res.body.should.have.property('errors');
                    res.body.name.should.equal('ValidationError');
                    done();
            });
        });


        it('Adding post with no description will fail', (done) => {
            let post = {
                title: "Board Game Ideas",
                description: null,
                post_comments: []
            }
        chai.request(server)
            .post('/api/post')
            .send(post)
            .end((err, res) => {
                    res.body.should.have.property('errors');
                    res.body.name.should.equal('ValidationError');
                    done();
            });
        });

        it('Posts can have a comment', (done) => {
            let post = {
                title: "Board Game Ideas",
                description: "Hey everyone! I just wanted to know if anyone had any recommendations for board games!",
                post_comments: ["122231"]
            }
          chai.request(server)
              .post('/api/post')
              .send(post)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('post');
                    res.body.post.should.have.property('title');
                    res.body.post.should.have.property('description');
                    res.body.post.should.have.property('post_comments');
                done();
              });
        });

        it('Posts with number as title will work', (done) => {
            let post = {
                title: 123,
                description: "Hey everyone! I just wanted to know if anyone had any recommendations for board games!",
                post_comments: ["122231"]
            }
          chai.request(server)
              .post('/api/post')
              .send(post)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('post');
                    res.body.post.should.have.property('title');
                    res.body.post.should.have.property('description');
                    res.body.post.should.have.property('post_comments');
                done();
              });
        });

        it('Posts with number as description will work', (done) => {
            let post = {
                title: "Board Game Ideas",
                description: 123,
                post_comments: ["122231"]
            }
          chai.request(server)
              .post('/api/post')
              .send(post)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('post');
                    res.body.post.should.have.property('title');
                    res.body.post.should.have.property('description');
                    res.body.post.should.have.property('post_comments');
                done();
              });
        });

    });

 });

  /*
   * Test the /DELETE:id route
   */
 describe('/DELETE/:id post', () => {
    it('it will DELETE post', (done) => {
        let post = new Post(
            {
                title: "Board Game Ideas",
                description: 123,
                post_comments: ["1234"],
                date_created: Date.now(),
                date_modified: null
            }
            )
            post.save((err, post) => {
                const id = post.id;
                chai.request(server)
                .delete('/api/post/' + id)
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
 describe('/PATCH/:id post', () => {
    it('it will PATCH post by editing post_comments', (done) => {
        let post = new Post(
            {
                title: "Board Game Ideas",
                description: 123,
                post_comments: ['ss'],
                date_created: Date.now(),
                date_modified: null
            }
            )
        post.save((err, post) => {
              chai.request(server)
              .patch('/api/post/' + post.id)
              .send(
                {
                    "title": "Board Game Ideas",
                    "description": 123,
                    "post_comments": ["dhui23h9h93", "ap12"]
                })
                .end((err, res) => {
                });

                const id = post.id;
                chai.request(server)
                .get('/api/post/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('post_comments').eql(["dhui23h9h93", "ap12"]);
                    done();
                });
        });
    });

    it('it will PATCH post by editing title', (done) => {
        let post = new Post(
            {
                title: "Board Game Ideas",
                description: 123,
                post_comments: [],
                date_created: Date.now(),
                date_modified: null
            }
            )
        post.save((err, post) => {
              chai.request(server)
              .patch('/api/post/' + post.id)
              .send(
                {
                    "title": 123,
                    "description": 123,
                    "post_comments": ["122231"]
                })
                .end((err, res) => {
                });
                

                const id = post.id;
                chai.request(server)
                .get('/api/post/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('title').eql('123');
                    done();
                });
        });
    });

    it('it will PATCH post by editing description', (done) => {
        let post = new Post(
            {
                title: "Board Game Ideas",
                description: 123,
                post_comments: [],
                date_created: Date.now(),
                date_modified: null
            }
            )
        post.save((err, post) => {
              chai.request(server)
              .patch('/api/post/' + post.id)
              .send(
                {
                    "title": "Board Game Ideas",
                    "description": "I need some new board game ideas",
                    "post_comments": ["122231"]
                })
                .end((err, res) => {
                });

                const id = post.id;
                chai.request(server)
                .get('/api/post/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('description').eql("I need some new board game ideas");
                    done();
                });
        });
        
    });

    it('it will fail from PATCH post by setting title to null', (done) => {
        let post = new Post(
            {
                title: "Board Game Ideas",
                description: 123,
                post_comments: [],
                date_created: Date.now(),
                date_modified: null
            }
            )
        post.save((err, post) => {
              chai.request(server)
              .patch('/api/post/' + post.id)
              .send(
                {
                    "title": null,
                    "description": 123,
                    "post_comments": ["122231"]
                })
                .end((err, res) => {
                });

                 const id = post.id;
                 chai.request(server)
                 .get('/api/post/' + id)
                 .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('title').eql("Board Game Ideas");
                    done();
                });
        });
    });

    it('it will fail from PATCH post by setting description to null', (done) => {
        let post = new Post(
            {
                title: "Board Game Ideas",
                description: 123,
                post_comments: [],
                date_created: Date.now(),
                date_modified: null
            }
            )
        post.save((err, post) => {
              chai.request(server)
              .patch('/api/post/' + post.id)
              .send(
                {
                    "title": "Board Game Ideas",
                    "description": null,
                    "post_comments": ["122231"]
                })
                .end((err, res) => {
                });

                 const id = post.id;
                 chai.request(server)
                 .get('/api/post/' + id)
                 .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('description').eql('123');
                    done();
                });
        });
    });
});