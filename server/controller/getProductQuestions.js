const db = require('../../database/db');
const moment = require('moment');

module.exports = (req, res) => {
  db('questions').where('product_id', Number(req.query.product_id))
    .then((results) => {
      const response = [];
      results.forEach((result) => {
        db('answers').where('question_id', result.id)
          .then((answers) => {
            answers.forEach((answer) => {
              db('answers_photos').where('answer_id', answer.id)
                .then((photos) => {
                  const photosArray = [];
                  photos.forEach((photo) => {
                    const photoObj = {
                      id: photo.id,
                      url: photo.url,
                    };
                    photosArray.push(photoObj);
                  })
                  console.log(photosArray)
                })
            })
          })
        // const question = {
        //   question_id: result.id,
        //   question_body: result.body,
        //   question_date: moment(result.date_written).toISOString(),
        //   asker_name: result.asker_name,
        //   // asker_email: result.asker_email,
        //   question_helpfulness: result.helpful,
        //   reported: Boolean(result.reported),
        // };
        // db('answers').where('question_id', result.id)
        //   .then((answers) => {
        //     answers.forEach((answer) => {
        //       db('answers_photo').where('answer_id', answer.id)
        //       .then((photos) => {
        //         photos.forEach((photo) => {
        //           console.log(photo)
        //         })
        //       })
        //     })
        // answers.forEach((answer) => {
        //   const answerObj = {
        //     id: answer.id,
        //     body: answer.body,
        //     date: moment(answer.date_written).toISOString(),
        //     answerer_name: answer.answerer_name,
        //     reported: Boolean(answer.reported),
        //     helpfulness: answer.helpful,
        //     photos: [],
        //   };
        //   question.answers = {
        //     [answer.id]: answerObj,
        //   };
        // });

        // response.push(question);
      })
      return response;
    })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(404).send(err));


  //     await db('answers').where('question_id', result.id)
  //       .then((answerResults) => {
  //         answerResults.map((answerResult) => {
  //           const answers = {
  //             [answerResult.id]: {
  //               id: answerResult.id,
  //               body: answerResult.body,
  //               date: moment(answerResult.date_written).toISOString(),
  //               answerer_name: answerResult.answerer_name,
  //               reported: Boolean(answerResult.reported),
  //               helpfulness: answerResult.helpful,
  //               photos: [],
  //             }
  //           };
  //           question.answers = answers;
  //         })
  //         return answerResults.id;
  //       })
  //       .then((id) => {
  //         await db('answers_photo').where('answer_id', id)
  //         .then((photos) => {
  //           photos.map((photo) => {
  //             const photoObj = {
  //               id: photo.id,
  //               url: photo.url
  //             }
  //           question.answers.photos.push(photoObj);
  //           })
  //         })
  //       })

  //     console.log(question, 'question');
  //     return question
  //   })
  //   .then((response) => res.status(200).send(response))
  // })
  // .catch((err) => res.status(404).send(err));
};


// server.get('qa/questions', (req, res) => {
//   db.getProductQuestions(Number(req.query.product_id), (err, data) => {
//     const results = [];
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       console.log(data);
//       res.status(200).send(data);
//     }
//   });
// });


// server.post('/api/qa/questions', (req, res) => {
//   db.addQuestions((err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).json(data);
//     }
//   });
// });

// server.get('/api/questions/:question_id/answers', (req, res) => {
//   db.getQuestionAnswers((err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).json(data);
//     }
//   });
// });

// server.post('/api/questions/:question_id/answers', (req, res) => {
//   db.addAnswer((err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).json(data);
//     }
//   });
// });

// server.put('/api/questions/:question_id/helpful', (req, res) => {
//   db.markQuestionHelpful((err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).json(data);
//     }
//   });
// });

// server.put('/api/questions/:question_id/report', (req, res) => {
//   db.reportQuestion((err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).json(data);
//     }
//   });
// });

// server.put('/api/answers/:answer_id/helpful', (req, res) => {
//   db.markAnswerHelpful((err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).json(data);
//     }
//   });
// });

// server.put('/api/answers/:answer_id/report', (req, res) => {
//   db.reportAnswer((err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).json(data);
//     }
//   });
// });
