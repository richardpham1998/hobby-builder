process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Event = require('../models/event');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


//"mocha event" to test
chai.use(chaiHttp);

 describe('Events', () => {
     beforeEach((done) => {
         Event.remove({}, (err) => {
            done();
         });
     });

 /*
   * Test the /GET route
   */
  describe('/GET events', () => {
      it('it should GET all the events', (done) => {
        chai.request(server)
            .get('/api/events')
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
  describe('/POST event', () => {
        it('Event must have the required information', (done) => {
            let event = new Event({
                title: "Sue's Birthday Party",
                description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
                location: "San Francisco, CA",
                attendees: [],
                hosts: [],
                comments: [],
                date_event: Date.now(),
                image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
            })
        chai.request(server)
            .post('/api/event')
            .send(event)
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('event');
                    res.body.event.should.have.property('title');
                    res.body.event.should.have.property('description');
                    res.body.event.should.have.property('location');
                    res.body.event.should.have.property('attendees');
                    res.body.event.should.have.property('hosts');
                    res.body.event.should.have.property('comments');
                    res.body.event.should.have.property('date_event');
                    res.body.event.should.have.property('date_created');
                    res.body.event.should.have.property('image');
                done();
            });
        });

        it('Adding event with no title will fail', (done) => {
            let event = new Event({
                title: null,
                description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
                location: "San Francisco, CA",
                attendees: [],
                hosts: [],
                comments: [],
                date_event: Date.now(),
                image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
            })
        chai.request(server)
            .post('/api/event')
            .send(event)
            .end((err, res) => {
                    res.body.should.have.property('errors');
                    res.body.name.should.equal('ValidationError');
                    done();
            });
        });

        it('Adding event with no description will fail', (done) => {
            let event = new Event({
                title: "Sue's Birthday Party",
                description: null,
                location: "San Francisco, CA",
                attendees: [],
                hosts: [],
                comments: [],
                date_event: Date.now(),
                image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
            })
        chai.request(server)
            .post('/api/event')
            .send(event)
            .end((err, res) => {
                    res.body.should.have.property('errors');
                    res.body.name.should.equal('ValidationError');
                    done();
            });
        });

        it('Adding event with no location will fail', (done) => {
            let event = new Event({
                title: "Sue's Birthday Party",
                description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
                location: null,
                attendees: [],
                hosts: [],
                comments: [],
                date_event: Date.now(),
                image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
            })
        chai.request(server)
            .post('/api/event')
            .send(event)
            .end((err, res) => {
                    res.body.should.have.property('errors');
                    res.body.name.should.equal('ValidationError');
                    done();
            });
        });
        it('Adding event with null attendees list will fail', (done) => {
            let event = new Event({
                title: "Sue's Birthday Party",
                description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
                location: "San Francisco, CA",
                attendees: null,
                hosts: [],
                comments: [],
                date_event: Date.now(),
                image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
            })
        chai.request(server)
            .post('/api/event')
            .send(event)
            .end((err, res) => {
                    res.body.should.have.property('errors');
                    res.body.name.should.equal('ValidationError');
                    done();
            });
        });
        it('Adding event with null hosts list will fail', (done) => {
            let event = new Event({
                title: "Sue's Birthday Party",
                description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
                location: "San Francisco, CA",
                attendees: [],
                hosts: null,
                comments: [],
                date_event: Date.now(),
                image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
            })
        chai.request(server)
            .post('/api/event')
            .send(event)
            .end((err, res) => {
                    res.body.should.have.property('errors');
                    res.body.name.should.equal('ValidationError');
                    done();
            });
        });
        it('Adding event with null comments list will fail', (done) => {
            let event = new Event({
                title: "Sue's Birthday Party",
                description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
                location: "San Francisco, CA",
                attendees: [],
                hosts: [],
                comments: null,
                date_event: Date.now(),
                image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
            })
        chai.request(server)
            .post('/api/event')
            .send(event)
            .end((err, res) => {
                    res.body.should.have.property('errors');
                    res.body.name.should.equal('ValidationError');
                    done();
            });
        });

        it('Adding event with no date_event will fail', (done) => {
            let event = new Event({
                title: "Sue's Birthday Party",
                description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
                location: "San Francisco, CA",
                attendees: [],
                hosts: [],
                comments: [],
                date_event: null,
                image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
            })
        chai.request(server)
            .post('/api/event')
            .send(event)
            .end((err, res) => {
                    res.body.should.have.property('errors');
                    res.body.name.should.equal('ValidationError');
                    done();
            });
        });

        it('Event can have null image reference', (done) => {
            let event = new Event({
                title: "Sue's Birthday Party",
                description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
                location: "San Francisco, CA",
                attendees: [],
                hosts: [],
                comments: [],
                date_event: Date.now(),
                image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
            })
        chai.request(server)
            .post('/api/event')
            .send(event)
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('event');
                    res.body.event.should.have.property('title');
                    res.body.event.should.have.property('description');
                    res.body.event.should.have.property('location');
                    res.body.event.should.have.property('attendees');
                    res.body.event.should.have.property('hosts');
                    res.body.event.should.have.property('comments');
                    res.body.event.should.have.property('date_event');
                    res.body.event.should.have.property('date_created');
                    res.body.event.should.have.property('image');
                done();
            });
        });

        it('Ensure event has created date', (done) => {
            let event = new Event({
                title: "Sue's Birthday Party",
                description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
                location: "San Francisco, CA",
                attendees: [],
                hosts: [],
                comments: [],
                date_event: Date.now(),
                image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
            })
        chai.request(server)
            .post('/api/event')
            .send(event)
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('event');
                    res.body.event.should.have.property('date_created');
                done();
            });
        });

        it('Events can have multiple array values inside each array', (done) => {
            let event = new Event({
                title: "Sue's Birthday Party",
                description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
                location: "San Francisco, CA",
                attendees: ["d12","d32"],
                hosts: ["32uh","d2"],
                comments: ["32ijd","d29dj","fdi20ji"],
                date_event: Date.now(),
                image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
            })
        chai.request(server)
            .post('/api/event')
            .send(event)
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('event');
                    res.body.event.should.have.property('attendees');
                    res.body.event.should.have.property('hosts');
                    res.body.event.should.have.property('comments');
                    res.body.event.attendees.length.should.equal(2);
                    res.body.event.hosts.length.should.equal(2);
                    res.body.event.comments.length.should.equal(3);
 
                done();
            });
        });
 });

  /*
   * Test the /DELETE:id route
   */
 describe('/DELETE/:id event', () => {
    it('it will DELETE event', (done) => {
        let event = new Event({
            title: "Sue's Birthday Party",
            description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
            location: "San Francisco, CA",
            attendees: [],
            hosts: [],
            comments: [],
            date_event: Date.now(),
            date_created: Date.now(),
            image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
        })
        event.save((err, event) => {
            const id = event.id;
            chai.request(server)
            .delete('/api/event/' + id)
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
 describe('/PATCH/:id event', () => {
    it('it will PATCH event and then have a date_modified time', (done) => {
        let event = new Event({
            title: "Sue's Birthday Party",
            description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
            location: "San Francisco, CA",
            attendees: [],
            hosts: [],
            comments: [],
            date_event: Date.now(),
            date_created: Date.now(),
            image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
        })
    event.save((err, event) => {
          chai.request(server)
          .patch('/api/event/' + event.id)
          .send(
            {
                "title": "Sue's Barbeque Birthday Celebration"
            })
            .end((err, res) => {
            });

            const id = event.id;
            chai.request(server)
            .get('/api/event/' + id)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('date_modified').not.eql(null);
                done();
            });
        });
    });

    it('it will PATCH event by editing title', (done) => {
            let event = new Event({
                title: "Sue's Birthday Party",
                description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
                location: "San Francisco, CA",
                attendees: [],
                hosts: [],
                comments: [],
                date_event: Date.now(),
                date_created: Date.now(),
                image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
            })
        event.save((err, event) => {
              chai.request(server)
              .patch('/api/event/' + event.id)
              .send(
                {
                    "title": "Sue's Barbeque Birthday Celebration"
                })
                .end((err, res) => {
                });

                const id = event.id;
                chai.request(server)
                .get('/api/event/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('title').eql("Sue's Barbeque Birthday Celebration");
                    done();
                });
        });
    });


    // it('it will PATCH event by editing description', (done) => {
    //     let event = new Event({
    //         title: "Sue's Birthday Party",
    //         description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
    //         location: "San Francisco, CA",
    //         attendees: [],
    //         hosts: [],
    //         comments: [],
    //         date_event: Date.now(),
    //         date_created: Date.now(),
    //         image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
    //     })


//     event.save((err, event) => {
//           chai.request(server)
//           .patch('/api/event/' + event.id)
//           .send(
//             {
//                 "description": "Sue is hosting a huge celebration at Golden Gate Park!"
//             })
//             .end((err, res) => {
//             });

//             const id = event.id;
//             chai.request(server)
//             .get('/api/event/' + id)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('description').eql("Sue is hosting a huge celebration at Golden Gate Park!");
//                 done();
//             });
//     });
// });

it('it will PATCH event by editing description', (done) => {
    let event = new Event({
        title: "Sue's Birthday Party",
        description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
        location: "San Francisco, CA",
        attendees: [],
        hosts: [],
        comments: [],
        date_event: Date.now(),
        date_created: Date.now(),
        image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
    })
event.save((err, event) => {
      chai.request(server)
      .patch('/api/event/' + event.id)
      .send(
        {
            "location": "Seattle, WA"
        })
        .end((err, res) => {
        });

        const id = event.id;
        chai.request(server)
        .get('/api/event/' + id)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('location').eql("Seattle, WA");
            done();
        });
});
});

it('it will PATCH event by filling out all arrays', (done) => {
    let event = new Event({
        title: "Sue's Birthday Party",
        description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
        location: "San Francisco, CA",
        attendees: [],
        hosts: [],
        comments: [],
        date_event: Date.now(),
        date_created: Date.now(),
        image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
    })
event.save((err, event) => {
      chai.request(server)
      .patch('/api/event/' + event.id)
      .send(
        {
            "attendees": ["sw2","dj239"],
            "hosts": ["d32"],
            "comments": ["dj2w","dh289qs","sjha9"]
        })
        .end((err, res) => {
        });

        const id = event.id;
        chai.request(server)
        .get('/api/event/' + id)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('attendees').eql(["sw2","dj239"]);
            res.body.should.have.property('hosts').eql(["d32"]);
            res.body.should.have.property('comments').eql(["dj2w","dh289qs","sjha9"]);
            done();
        });
});
});

it('it will not add null title after PATCH event by setting title to null', (done) => {
    let event = new Event({
        title: "Sue's Birthday Party",
        description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
        location: "San Francisco, CA",
        attendees: [],
        hosts: [],
        comments: [],
        date_event: Date.now(),
        date_created: Date.now(),
        image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
    })
event.save((err, event) => {
      chai.request(server)
      .patch('/api/event/' + event.id)
      .send(
        {
            "title": null
        })
        .end((err, res) => {
        });

        const id = event.id;
        chai.request(server)
        .get('/api/event/' + id)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('title').eql("Sue's Birthday Party");
            done();
        });
});
});


it('it will not add null description after PATCH event by setting it to null', (done) => {
    let event = new Event({
        title: "Sue's Birthday Party",
        description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
        location: "San Francisco, CA",
        attendees: [],
        hosts: [],
        comments: [],
        date_event: Date.now(),
        date_created: Date.now(),
        image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
    })
event.save((err, event) => {
      chai.request(server)
      .patch('/api/event/' + event.id)
      .send(
        {
            "description": null
        })
        .end((err, res) => {
        });

        const id = event.id;
        chai.request(server)
        .get('/api/event/' + id)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('description').eql("Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!");
            done();
        });
});
});

it('it will not add null location after PATCH event by setting it to null', (done) => {
    let event = new Event({
        title: "Sue's Birthday Party",
        description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
        location: "San Francisco, CA",
        attendees: [],
        hosts: [],
        comments: [],
        date_event: Date.now(),
        date_created: Date.now(),
        image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
    })
event.save((err, event) => {
      chai.request(server)
      .patch('/api/event/' + event.id)
      .send(
        {
            "location": null
        })
        .end((err, res) => {
        });

        const id = event.id;
        chai.request(server)
        .get('/api/event/' + id)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('location').eql("San Francisco, CA");
            done();
        });
});
});

it('it will not add null attendees after PATCH event by setting it to null', (done) => {
    let event = new Event({
        title: "Sue's Birthday Party",
        description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
        location: "San Francisco, CA",
        attendees: [],
        hosts: [],
        comments: [],
        date_event: Date.now(),
        date_created: Date.now(),
        image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
    })
event.save((err, event) => {
      chai.request(server)
      .patch('/api/event/' + event.id)
      .send(
        {
            "attendees": null
        })
        .end((err, res) => {
        });

        const id = event.id;
        chai.request(server)
        .get('/api/event/' + id)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('attendees').eql([]);
            done();
        });
});
});

it('it will not add null host after PATCH event by setting it to null', (done) => {
    let event = new Event({
        title: "Sue's Birthday Party",
        description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
        location: "San Francisco, CA",
        attendees: [],
        hosts: [],
        comments: [],
        date_event: Date.now(),
        date_created: Date.now(),
        image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
    })
event.save((err, event) => {
      chai.request(server)
      .patch('/api/event/' + event.id)
      .send(
        {
            "host": null
        })
        .end((err, res) => {
        });

        const id = event.id;
        chai.request(server)
        .get('/api/event/' + id)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('host').eql([]);
            done();
        });
});
});

it('it will not add null comments after PATCH event by setting it to null', (done) => {
    let event = new Event({
        title: "Sue's Birthday Party",
        description: "Come join us as we have Sue celebrate her 32nd birthday at the Golden Gate Park! We will be having a huge barbeque!",
        location: "San Francisco, CA",
        attendees: [],
        hosts: [],
        comments: [],
        date_event: Date.now(),
        date_created: Date.now(),
        image: "https://www.google.com/logos/doodles/2021/labor-day-2021-6753651837109056.2-l.webp"
    })
event.save((err, event) => {
      chai.request(server)
      .patch('/api/event/' + event.id)
      .send(
        {
            "comments": null
        })
        .end((err, res) => {
        });

        const id = event.id;
        chai.request(server)
        .get('/api/event/' + id)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('title').eql([]);
            done();
        });
});
});

   





 });
});