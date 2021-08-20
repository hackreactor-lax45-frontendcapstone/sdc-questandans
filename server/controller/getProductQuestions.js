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
// let response = [];
await db.raw(`SELECT product_id, question_id, questions.q_body, questions.date_written, questions.asker_name, questions.reported, questions.q_helpful, answers.question_id, answers.a_body, answers.date_written, answers.answerer_name, answers.a_helpful, answers_photos.answer_id, answers_photos.id, answers_photos.url from answers_photos FULL JOIN answers on answers_photos.answer_id = answers.id FULL JOIN questions on answers.question_id = questions.id where product_id = ${req.query.product_id}`)
.then((questions) => {
//   questions.rows.forEach((question) => {
// console.log(question.product_id)
res.send(questions);
// })
});



//       // const response = {
//       //   product_id: req.query.product_id,
//       //   results: [{question_id: data.question_id,
//       //     question_body: data.questions.body,
//       //     question_date: moment(data.questions.date_written).toISOString(),
//       //     asker_name: data.questions.asker_name,
//       //     question_helpfulness: data.questions.helpful,
//       //     reported: Boolean(data.questions.reported)

//       //   }]
//       // }
//       console.log('yes');
//     });
};