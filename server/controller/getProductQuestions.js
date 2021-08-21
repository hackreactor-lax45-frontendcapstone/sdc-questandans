const moment = require('moment');
const db = require('../../database/db');

// module.exports = async (req, res) => {
//   const count = req.query.count || 5;
//   const page = req.query.page || 1;
//   const offset = (page - 1) * count;

//   const response = {
//     product_id: req.query.product_id,
//   };
//   await db('questions')
// .select('id', 'body', 'date_written', 'asker_name', 'reported', 'helpful')
// .where({ product_id: Number(req.query.product_id), reported: false })
// .limit(count)
// .offset(offset)
// .then((questions) => {
//   response.results = questions.map((question) => {
//     const questionObj = {
//       question_id: question.id,
//       question_body: question.body,
//       question_date: moment(question.date_written).toISOString(),
//       asker_name: question.asker_name,
//       question_helpfulness: question.helpful,
//       reported: Boolean(question.reported),
//     };
//     return questionObj;
//   });
//   const questionIds = questions.map((q) => q.id);
//   return questionIds;
// })
// .then(async (questionIds) => {
//   await db('answers').whereIn('question_id', questionIds)
//     .select('id', 'question_id', 'body', 'date_written', 'answerer_name', 'helpful')
//     .then((answers) => {
//       answers.forEach((answer) => {
//         response.results.forEach((question) => {
//           const answerObj = {
//             id: answer.id,
//             body: answer.body,
//             date: moment(answer.date_written).toISOString(),
//             answerer_name: answer.answerer_name,
//             helpfulness: answer.helpful,
//           };
//           if (!question.answers) question.answers = {};
//           if (answer.question_id === question.question_id) {
//             question.answers[answer.id] = answerObj;
//           }
//         });
//       });
//       const answerIds = answers.map((a) => a.id);
//       return answerIds;
//     })
//     .then(async (answerIds) => {
//       await db('answers_photos').whereIn('answer_id', answerIds)
//         .select('*')
//         .then((photos) => {
//           photos.forEach((photo) => {
//             const url = {
//               id: photo.id,
//               url: photo.url,
//             };
//                 response.results.forEach((question) => {
//                   for (const a in question.answers) {
//                     if (!question.answers[a].photos) question.answers[a].photos = [];
//                     if (photo.answer_id === question.answers[a].id) {
//                       question.answers[a].photos.push(url);
//                     }
//                   }
//                 });
//               });
//             });
//         })
//         .then(() => res.status(200).json(response))
//         .catch((err) => res.status(404).send(err));
//     });
// };

module.exports = async (req, res) => {
  const response = {
    product_id: req.query.product_id,
    results: [],
  };

  const allQuestions = {};

  await db.raw(`SELECT q_id, q_body, q_date_written, asker_name, questions.reported, q_helpful, a_id, a_body, answers.a_date_written, answers.answerer_name, answers.a_helpful, p_id, url from answers_photos FULL JOIN answers on answers_photos.answer_id = answers.a_id FULL JOIN questions on answers.question_id = questions.q_id where questions.product_id = ${req.query.product_id}`)
    .then((questions) => {
      questions.rows.forEach((question) => {
        if (question.q_id && !allQuestions[question.q_id]) {
          allQuestions[question.q_id] = {
            question_id: question.q_id,
            question_body: question.q_body,
            question_date: moment(question.q_date_written).toISOString(),
            asker_name: question.asker_name,
            question_helpfulness: question.q_helpful,
            reported: Boolean(question.reported),
          };
          if (question.a_id) {
            const answersObj = {
              id: question.a_id,
              body: question.a_body,
              date: moment(question.a_date_written).toISOString(),
              answerer_name: question.answerer_name,
              helpfulness: question.a_helpful,
              photos: [],
            };
            if (question.p_id) {
              const photosObj = {
                id: question.p_id,
                url: question.url,
              };
              answersObj.photos.push(photosObj);
            }
            allQuestions[question.q_id].answers = {
              [question.a_id]: answersObj,
            };
          }
        } else if ((question.q_id && allQuestions[question.q_id])) {
          if (question.a_id && !allQuestions[question.q_id].answers[question.a_id]) {
            const answersObj = {
              id: question.a_id,
              body: question.a_body,
              date: moment(question.a_date_written).toISOString(),
              answerer_name: question.answerer_name,
              helpfulness: question.a_helpful,
              photos: [],
            };
            allQuestions[question.q_id].answers[question.a_id] = answersObj;
          }
          if (question.p_id) {
            const photosObj = {
              id: question.p_id,
              url: question.url,
            };
            allQuestions[question.q_id].answers[question.a_id].photos.push(photosObj);
          }
        }
      });
      for (const q in allQuestions) {
        response.results.push(allQuestions[q]);
      }
    })
    .then(() => res.status(200).send(response))
    .catch((err) => res.status(404).send(err));
};
