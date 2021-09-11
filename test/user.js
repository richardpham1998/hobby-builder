process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let User = require('../models/user');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


//"mocha user" to test
chai.use(chaiHttp);

 describe('Users', () => {
     beforeEach((done) => {
         User.remove({}, (err) => {
            done();
         });
     });

 /*
   * Test the /GET route
   */
  describe('/GET users', () => {
      it('it should GET all the users', (done) => {
        chai.request(server)
            .get('/api/users')
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
  describe('/POST user', () => {
        it('User must have username, comments, events_created, events_hosting, events_attending, posts, hobbies', (done) => {
            let user = new User({
                user_name: "jason123",
                comments: [],
                events_created: [],
                events_hosting: [],
                events_attending: [],
                posts: [],
                hobbies: []
            })
        chai.request(server)
            .post('/api/user')
            .send(user)
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('user');
                    res.body.user.should.have.property('user_name');
                    res.body.user.should.have.property('comments');
                    res.body.user.should.have.property('events_created');
                    res.body.user.should.have.property('events_hosting');
                    res.body.user.should.have.property('events_attending');
                    res.body.user.should.have.property('posts');
                    res.body.user.should.have.property('hobbies');
                done();
            });
        });

        it('Adding user with no username will fail', (done) => {
            let user = new User({
                user_name: null,
                comments: [],
                events_created: [],
                events_hosting: [],
                events_attending: [],
                posts: [],
                hobbies: []
            })
        chai.request(server)
            .post('/api/user')
            .send(user)
            .end((err, res) => {
                    res.body.should.have.property('errors');
                    res.body.name.should.equal('ValidationError');
                    done();
            });
        });

        it('Adding user with null comments will fail', (done) => {
            let user = new User({
                user_name: "jason123",
                comments: null,
                events_created: [],
                events_hosting: [],
                events_attending: [],
                posts: [],
                hobbies: []
            })
        chai.request(server)
            .post('/api/user')
            .send(user)
            .end((err, res) => {
                    res.body.should.have.property('errors');
                    res.body.name.should.equal('ValidationError');
                    done();
            });
        });

        it('Adding user with null events_created will fail', (done) => {
            let user = new User({
                user_name: "jason123",
                comments: [],
                events_created: null,
                events_hosting: [],
                events_attending: [],
                posts: [],
                hobbies: []
            })
        chai.request(server)
            .post('/api/user')
            .send(user)
            .end((err, res) => {
                    res.body.should.have.property('errors');
                    res.body.name.should.equal('ValidationError');
                    done();
            });
        });

    });

    it('Adding user with null events_hosting will fail', (done) => {
        let user = new User({
            user_name: "jason123",
            comments: [],
            events_created: [],
            events_hosting: null,
            events_attending: [],
            posts: [],
            hobbies: []
        })
    chai.request(server)
        .post('/api/user')
        .send(user)
        .end((err, res) => {
                res.body.should.have.property('errors');
                res.body.name.should.equal('ValidationError');
                done();
        });
    });

    it('Adding user with null events_attending will fail', (done) => {
        let user = new User({
            user_name: "jason123",
            comments: [],
            events_created: [],
            events_hosting: [],
            events_attending: null,
            posts: [],
            hobbies: []
        })
    chai.request(server)
        .post('/api/user')
        .send(user)
        .end((err, res) => {
                res.body.should.have.property('errors');
                res.body.name.should.equal('ValidationError');
                done();
        });
    });

    it('Adding user with null posts will fail', (done) => {
        let user = new User({
            user_name: "jason123",
            comments: [],
            events_created: [],
            events_hosting: [],
            events_attending: [],
            posts: null,
            hobbies: []
        })
    chai.request(server)
        .post('/api/user')
        .send(user)
        .end((err, res) => {
                res.body.should.have.property('errors');
                res.body.name.should.equal('ValidationError');
                done();
        });
    });

    it('Adding user with null hobbies will fail', (done) => {
        let user = new User({
            user_name: "jason123",
            comments: [],
            events_created: [],
            events_hosting: [],
            events_attending: [],
            posts: [],
            hobbies: null
        })
    chai.request(server)
        .post('/api/user')
        .send(user)
        .end((err, res) => {
                res.body.should.have.property('errors');
                res.body.name.should.equal('ValidationError');
                done();
        });
    });

    it('Users can have one value in each array', (done) => {
        let user = new User({
            user_name: "jason123",
            comments: ["dd2"],
            events_created: ["df4"],
            events_hosting: ["fh29"],
            events_attending: ["f42fh"],
            posts: ["fh4283f"],
            hobbies: ["fh829f"]
        })
    chai.request(server)
        .post('/api/user')
        .send(user)
        .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('user');
                res.body.user.should.have.property('user_name');
                res.body.user.should.have.property('comments');
                res.body.user.should.have.property('events_created');
                res.body.user.should.have.property('events_hosting');
                res.body.user.should.have.property('events_attending');
                res.body.user.should.have.property('posts');
                res.body.user.should.have.property('hobbies');
            done();
        });
    });

    it('Users can have multiple values in each array', (done) => {
        let user = new User({
            user_name: "jason123",
            comments: ["dd2","d322w"],
            events_created: ["df4",'Kd2d'],
            events_hosting: ["fh29","d2dda"],
            events_attending: ["f42fh","w1df"],
            posts: ["fh4283f","f43f"],
            hobbies: ["fh829f","f2a"]
        })
    chai.request(server)
        .post('/api/user')
        .send(user)
        .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('user');
                res.body.user.should.have.property('user_name');
                res.body.user.should.have.property('comments');
                res.body.user.should.have.property('events_created');
                res.body.user.should.have.property('events_hosting');
                res.body.user.should.have.property('events_attending');
                res.body.user.should.have.property('posts');
                res.body.user.should.have.property('hobbies');
            done();
        });
    });

 });

  /*
   * Test the /DELETE:id route
   */
 describe('/DELETE/:id user', () => {
    it('it will DELETE user', (done) => {
        let user = new User({
            user_name: "jason123",
            comments: [],
            events_created: [],
            events_hosting: [],
            events_attending: [],
            posts: [],
            hobbies: []
        })
        user.save((err, user) => {
            const id = user.id;
            chai.request(server)
            .delete('/api/user/' + id)
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
 describe('/PATCH/:id user', () => {
    it('it will PATCH user by editing user_comments', (done) => {
        let user = new User({
            user_name: "jason123",
            comments: [],
            events_created: [],
            events_hosting: [],
            events_attending: [],
            posts: [],
            hobbies: []
        })
        user.save((err, user) => {
              chai.request(server)
              .patch('/api/user/' + user.id)
              .send(
                {
                    "user_name": "biker921"
                })
                .end((err, res) => {
                });

                const id = user.id;
                chai.request(server)
                .get('/api/user/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('user_name').eql("biker921");
                    done();
                });
        });
    });

    // it('it will PATCH user by filling out all arrays', (done) => {
    //     let user = new User({
    //         user_name: "park121",
    //         comments: [],
    //         events_created: [],
    //         events_hosting: [],
    //         events_attending: [],
    //         posts: [],
    //         hobbies: []
    //     })
    //     user.save((err, user) => {
    //           chai.request(server)
    //           .patch('/api/user/' + user.id)
    //           .send(
    //             {
    //                 "comments": ["18jd","d92d"],
    //                 "events_created": ["18jde2d","d92e02rd"],
    //                 "events_hosting": ["1r2rr3r8jd","d922d2d2d"],
    //                 "events_attending": ["d29283he18jd","DAHD(UF@d92d"],
    //                 "posts": ["3392r218jd","2r2d9232ed", "31"],
    //                 "hobbies": ["4r3r18jd","dhu9f43rd92d"],
    //             })
    //             .end((err, res) => {
    //             });

    //             const id = user.id;
    //             chai.request(server)
    //             .get('/api/user/' + id)
    //             .end((err, res) => {
    //                 res.should.have.status(200);
    //                 res.body.should.be.a('object');
    //                 res.body.should.have.property('user_name').eql("park121");
    //                 res.body.should.have.property('comments').eql(["18jd","d92d"]);
    //                 res.body.should.have.property('events_created').eql(["18jde2d","d92e02rd"]);
    //                 res.body.should.have.property('events_hosting').eql(["1r2rr3r8jd","d922d2d2d"]);
    //                 res.body.should.have.property('events_attending').eql(["d29283he18jd","DAHD(UF@d92d"]);
    //                 res.body.should.have.property('posts').eql(["3392r218jd","2r2d9232ed", "31"]);
    //                 res.body.should.have.property('hobbies').eql(["4r3r18jd","dhu9f43rd92d"]);
    //                 done();
    //             });
    //     });
    // });

   
    // it('it will not add null title after PATCH user by setting user_name to null', (done) => {
    //     let user = new User({
    //         user_name: "jason123",
    //         comments: [],
    //         events_created: [],
    //         events_hosting: [],
    //         events_attending: [],
    //         posts: [],
    //         hobbies: []
    //     })
    //     user.save((err, user) => {
    //         chai.request(server)
    //         .patch('/api/user/' + user.id)
    //         .send(
    //         {
    //             "title": null,
    //         })
    //         .end((err, res) => {
    //         });

    //         const id = user.id;
    //         chai.request(server)
    //         .get('/api/user/' + id)
    //         .end((err, res) => {
    //             res.should.have.status(200);
    //             res.body.should.be.a('object');
    //             res.body.should.have.property('user_name').eql('jason123');
    //             done();
    //         });
    //  });
    // });

    // it('it will not add null comments after PATCH user by setting comments to null', (done) => {
    //     let user = new User({
    //         user_name: "jason123",
    //         comments: [],
    //         events_created: [],
    //         events_hosting: [],
    //         events_attending: [],
    //         posts: [],
    //         hobbies: []
    //     })
    //     user.save((err, user) => {
    //         chai.request(server)
    //         .patch('/api/user/' + user.id)
    //         .send(
    //         {
    //             "comments": null,
    //         })
    //         .end((err, res) => {
    //         });

    //         const id = user.id;
    //         chai.request(server)
    //         .get('/api/user/' + id)
    //         .end((err, res) => {
    //             res.should.have.status(200);
    //             res.body.should.be.a('object');
    //             res.body.should.have.property('comments').eql([]);
    //             done();
    //         });
    //  });
    // });

    it('it will not add null events_created after PATCH user by setting events_created to null', (done) => {
        let user = new User({
            user_name: "jason123",
            comments: [],
            events_created: [],
            events_hosting: [],
            events_attending: [],
            posts: [],
            hobbies: []
        })
        user.save((err, user) => {
            chai.request(server)
            .patch('/api/user/' + user.id)
            .send(
            {
                "events_created": null,
            })
            .end((err, res) => {
            });

            const id = user.id;
            chai.request(server)
            .get('/api/user/' + id)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('events_created').eql([]);
                done();
            });
     });
    });


    // it('it will not add null events_hosting after PATCH user by setting events_hosting to null', (done) => {
    //     let user = new User({
    //         user_name: "jason123",
    //         comments: [],
    //         events_created: [],
    //         events_hosting: [],
    //         events_attending: [],
    //         posts: [],
    //         hobbies: []
    //     })
    //     user.save((err, user) => {
    //         chai.request(server)
    //         .patch('/api/user/' + user.id)
    //         .send(
    //         {
    //             "events_hosting": null,
    //         })
    //         .end((err, res) => {
    //         });

    //         const id = user.id;
    //         chai.request(server)
    //         .get('/api/user/' + id)
    //         .end((err, res) => {
    //             res.should.have.status(200);
    //             res.body.should.be.a('object');
    //             res.body.should.have.property('events_hosting').eql([]);
    //             done();
    //         });
    //  });
    // });


    // it('it will not add null events_attending after PATCH user by setting events_attending to null', (done) => {
    //     let user = new User({
    //         user_name: "jason123",
    //         comments: [],
    //         events_created: [],
    //         events_hosting: [],
    //         events_attending: [],
    //         posts: [],
    //         hobbies: []
    //     })
    //     user.save((err, user) => {
    //         chai.request(server)
    //         .patch('/api/user/' + user.id)
    //         .send(
    //         {
    //             "events_attending": null,
    //         })
    //         .end((err, res) => {
    //         });

    //         const id = user.id;
    //         chai.request(server)
    //         .get('/api/user/' + id)
    //         .end((err, res) => {
    //             res.should.have.status(200);
    //             res.body.should.be.a('object');
    //             res.body.should.have.property('events_attending').eql([]);
    //             done();
    //         });
    //  });
    // });


    // it('it will not add null posts after PATCH user by setting posts to null', (done) => {
    //     let user = new User({
    //         user_name: "jason123",
    //         comments: [],
    //         events_created: [],
    //         events_hosting: [],
    //         events_attending: [],
    //         posts: [],
    //         hobbies: []
    //     })
    //     user.save((err, user) => {
    //         chai.request(server)
    //         .patch('/api/user/' + user.id)
    //         .send(
    //         {
    //             "posts": null,
    //         })
    //         .end((err, res) => {
    //         });

    //         const id = user.id;
    //         chai.request(server)
    //         .get('/api/user/' + id)
    //         .end((err, res) => {
    //             res.should.have.status(200);
    //             res.body.should.be.a('object');
    //             res.body.should.have.property('posts').eql([]);
    //             done();
    //         });
    //  });
    // });

    // it('it will not add null hobbies after PATCH user by setting hobbies to null', (done) => {
    //     let user = new User({
    //         user_name: "jason123",
    //         comments: [],
    //         events_created: [],
    //         events_hosting: [],
    //         events_attending: [],
    //         posts: [],
    //         hobbies: []
    //     })
    //     user.save((err, user) => {
    //         chai.request(server)
    //         .patch('/api/user/' + user.id)
    //         .send(
    //         {
    //             "hobbies": null,
    //         })
    //         .end((err, res) => {
    //         });

    //         const id = user.id;
    //         chai.request(server)
    //         .get('/api/user/' + id)
    //         .end((err, res) => {
    //             res.should.have.status(200);
    //             res.body.should.be.a('object');
    //             res.body.should.have.property('hobbies').eql([]);
    //             done();
    //         });
    //  });
    // });



});