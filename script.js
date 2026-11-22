const quizzes = {
  math: { name: 'Mathematics', questions: [
    { q: 'What is 8 × 7?', options: ['54', '56', '64', '48'], answer: 1, note: '8 groups of 7 make 56.' },
    { q: 'Which number is a multiple of 9?', options: ['32', '45', '52', '61'], answer: 1, note: '9 × 5 = 45.' },
    { q: 'What is ¾ written as a decimal?', options: ['0.25', '0.5', '0.75', '1.25'], answer: 2, note: '¾ is the same as 75/100, or 0.75.' },
    { q: 'A triangle has angles of 60° and 70°. What is its third angle?', options: ['40°', '50°', '60°', '70°'], answer: 1, note: 'The angles in a triangle add up to 180°.' },
    { q: 'What is the perimeter of a square with sides of 5 cm?', options: ['10 cm', '15 cm', '20 cm', '25 cm'], answer: 2, note: 'A square has four equal sides: 4 × 5 = 20 cm.' }
  ]},
  science: { name: 'Science', questions: [
    { q: 'Which part of a plant absorbs most of its water?', options: ['Flower', 'Leaves', 'Roots', 'Stem'], answer: 2, note: 'Roots take in water and minerals from the soil.' },
    { q: 'What is the closest star to Earth?', options: ['Sirius', 'The Sun', 'Polaris', 'Alpha Centauri'], answer: 1, note: 'The Sun is our closest star.' },
    { q: 'At what temperature does water freeze in Celsius?', options: ['0°C', '10°C', '32°C', '100°C'], answer: 0, note: 'Water freezes at 0°C under standard conditions.' },
    { q: 'Which organ pumps blood around the body?', options: ['Lungs', 'Brain', 'Stomach', 'Heart'], answer: 3, note: 'The heart pumps blood through the circulatory system.' },
    { q: 'What force pulls objects towards Earth?', options: ['Friction', 'Gravity', 'Magnetism', 'Pressure'], answer: 1, note: 'Gravity attracts objects with mass towards one another.' }
  ]},
  english: { name: 'English', questions: [
    { q: 'Which word is a noun?', options: ['Quickly', 'Bright', 'Garden', 'Running'], answer: 2, note: 'A noun names a person, place, thing, or idea. A garden is a place.' },
    { q: 'Choose the correct spelling.', options: ['Neccessary', 'Necessary', 'Necesary', 'Necassary'], answer: 1, note: 'Necessary is spelled N-E-C-E-S-S-A-R-Y.' },
    { q: 'What is the past tense of “bring”?', options: ['Brang', 'Brung', 'Brought', 'Bringed'], answer: 2, note: '“Brought” is the simple past tense of “bring”.' },
    { q: 'Which word is closest in meaning to “curious”?', options: ['Eager to know', 'Very sleepy', 'Quite angry', 'Easily lost'], answer: 0, note: 'A curious person is eager to learn or know more.' },
    { q: 'Choose the correct sentence.', options: ['She have two books.', 'She has two books.', 'She having two books.', 'She are two books.'], answer: 1, note: 'Use “has” with the third-person singular subject “she”.' }
  ]},
  general: { name: 'General knowledge', questions: [
    { q: 'Which is the largest ocean on Earth?', options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'], answer: 3, note: 'The Pacific Ocean is the largest and deepest ocean.' },
    { q: 'How many days are there in a leap year?', options: ['364', '365', '366', '367'], answer: 2, note: 'A leap year has 366 days, including February 29.' },
    { q: 'Which instrument has black and white keys?', options: ['Flute', 'Piano', 'Drum', 'Trumpet'], answer: 1, note: 'A piano has a keyboard of black and white keys.' },
    { q: 'Which planet is known as the Red Planet?', options: ['Venus', 'Mars', 'Jupiter', 'Mercury'], answer: 1, note: 'Iron-rich dust gives Mars its reddish appearance.' },
    { q: 'What is the capital city of Japan?', options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'], answer: 2, note: 'Tokyo is the capital of Japan.' },
    { q: 'Which animal is the largest mammal in the world?', options: ['African elephant', 'Blue whale', 'Giraffe', 'Hippopotamus'], answer: 1, note: 'The blue whale is the largest mammal known to have lived.' },
    { q: 'How many sides does a hexagon have?', options: ['Five', 'Six', 'Seven', 'Eight'], answer: 1, note: 'A hexagon has six sides.' },
    { q: 'Which country is famous for the pyramids of Giza?', options: ['Egypt', 'Greece', 'Mexico', 'India'], answer: 0, note: 'The pyramids of Giza are in Egypt.' },
    { q: 'What do bees collect from flowers to make honey?', options: ['Sap', 'Nectar', 'Seeds', 'Dew'], answer: 1, note: 'Bees collect nectar from flowers and turn it into honey.' },
    { q: 'Which is the smallest continent by land area?', options: ['Europe', 'Antarctica', 'Australia', 'South America'], answer: 2, note: 'Australia is the smallest continent by land area.' },
    { q: 'What is the name of Earth’s natural satellite?', options: ['The Moon', 'Phobos', 'Europa', 'Titan'], answer: 0, note: 'The Moon is Earth’s natural satellite.' },
    { q: 'Which sport uses a racket and a shuttlecock?', options: ['Tennis', 'Badminton', 'Cricket', 'Hockey'], answer: 1, note: 'Players hit a shuttlecock over the net in badminton.' },
    { q: 'How many colours are traditionally named in a rainbow?', options: ['Five', 'Six', 'Seven', 'Eight'], answer: 2, note: 'A rainbow is traditionally described as having seven colours.' },
    { q: 'Which bird was historically used to carry messages?', options: ['Parrot', 'Pigeon', 'Peacock', 'Ostrich'], answer: 1, note: 'Pigeons were historically used to carry messages.' },
    { q: 'Which is the largest hot desert in the world?', options: ['Gobi Desert', 'Sahara Desert', 'Thar Desert', 'Kalahari Desert'], answer: 1, note: 'The Sahara is the world’s largest hot desert.' },
    { q: 'What is the currency of Japan?', options: ['Yuan', 'Won', 'Yen', 'Baht'], answer: 2, note: 'Japan uses the yen.' },
    { q: 'Which gas do plants take in from the air?', options: ['Oxygen', 'Carbon dioxide', 'Helium', 'Hydrogen'], answer: 1, note: 'Plants use carbon dioxide during photosynthesis.' },
    { q: 'How many players from one team are on the field in a football match?', options: ['9', '10', '11', '12'], answer: 2, note: 'A football team has 11 players on the field.' },
    { q: 'Which is the fastest land animal?', options: ['Lion', 'Cheetah', 'Horse', 'Leopard'], answer: 1, note: 'The cheetah is the fastest land animal over short distances.' },
    { q: 'Which shape has three sides?', options: ['Square', 'Circle', 'Triangle', 'Rectangle'], answer: 2, note: 'A triangle has three sides.' },
    { q: 'What is frozen water called?', options: ['Steam', 'Ice', 'Mist', 'Rain'], answer: 1, note: 'When water freezes, it becomes ice.' },
    { q: 'Which country is home to the Taj Mahal?', options: ['Pakistan', 'India', 'Nepal', 'Bangladesh'], answer: 1, note: 'The Taj Mahal is in Agra, India.' },
    { q: 'Which sense organ do we use to hear?', options: ['Eyes', 'Ears', 'Nose', 'Skin'], answer: 1, note: 'We use our ears to hear sounds.' },
    { q: 'How many months are there in a year?', options: ['10', '11', '12', '13'], answer: 2, note: 'There are 12 months in a year.' },
    { q: 'Which is the largest planet in our solar system?', options: ['Saturn', 'Earth', 'Jupiter', 'Neptune'], answer: 2, note: 'Jupiter is the largest planet in our solar system.' }
  ]}
};

const $ = (selector) => document.querySelector(selector);
const MCC_PROGRESS_EMAIL = 'drashiff.alii@gmail.com';
const setup = $('#setup-view');
const questionView = $('#question-view');
const resultView = $('#result-view');
const subjectCards = [...document.querySelectorAll('.subject-card')];
let selectedSubject = 'math';
let questions = [];
let current = 0;
let score = 0;
let worksheetNumber = 1;
let worksheetScore = 0;
let responses = [];
let selectedChoice = null;
let studentId = '';

$('#year').textContent = new Date().getFullYear();
subjectCards.forEach((card) => card.addEventListener('click', () => {
  selectedSubject = card.dataset.subject;
  subjectCards.forEach((item) => {
    const selected = item === card;
    item.classList.toggle('selected', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
}));

function show(view) {
  setup.hidden = view !== setup;
  questionView.hidden = view !== questionView;
  resultView.hidden = view !== resultView;
}

function startQuiz() {
  const input = $('#student-id');
  const status = $('#student-id-status');
  studentId = input.value.trim().toUpperCase();
  status.textContent = '';
  if (!/^MCC-[A-Z0-9]{8}$/.test(studentId)) {
    status.textContent = 'Enter the ID your teacher gave you (MCC- followed by 8 letters or numbers).';
    input.focus();
    return;
  }
  const approvedIds = (window.MCC_APPROVED_STUDENT_IDS || []).map((id) => String(id).trim().toUpperCase());
  if (!approvedIds.includes(studentId)) {
    status.textContent = 'That ID is not on the teacher-approved list. Please check it with your teacher.';
    input.focus();
    return;
  }
  questions = quizzes[selectedSubject].questions;
  current = 0;
  score = 0;
  worksheetNumber = 1;
  worksheetScore = 0;
  responses = [];
  $('#subject-label').textContent = quizzes[selectedSubject].name;
  $('.progress-track').setAttribute('aria-valuemax', String(questions.length));
  show(questionView);
  renderQuestion();
}

function renderQuestion() {
  const item = questions[current];
  const number = current + 1;
  selectedChoice = null;
  $('#question-count').textContent = `${String(number).padStart(2, '0')} / ${String(questions.length).padStart(2, '0')}`;
  $('.question-kicker').textContent = selectedSubject === 'general'
    ? `WORKSHEET ${Math.floor(current / 5) + 1} · QUESTION ${current % 5 + 1} OF 5`
    : `QUESTION ${String(number).padStart(2, '0')}`;
  $('#question-text').textContent = item.q;
  $('#progress-fill').style.width = `${(number / questions.length) * 100}%`;
  document.querySelector('.progress-track').setAttribute('aria-valuenow', String(number));
  $('#answered-count').textContent = 'Choose one answer';
  $('#answer-feedback').textContent = '';
  $('#answer-feedback').className = 'answer-feedback';
  $('#submit-answer').hidden = true;
  $('#next-button').hidden = true;
  const worksheetEnd = selectedSubject === 'general' && number % 5 === 0;
  $('#next-button').innerHTML = worksheetEnd
    ? 'Finish worksheet <span aria-hidden="true">→</span>'
    : number === questions.length ? 'See my result <span aria-hidden="true">→</span>' : 'Next question <span aria-hidden="true">→</span>';
  const list = $('#answer-list');
  list.replaceChildren();
  item.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-option';
    button.innerHTML = `<span class="letter">${String.fromCharCode(65 + index)}</span><span></span>`;
    button.lastElementChild.textContent = option;
    button.addEventListener('click', () => chooseAnswer(index));
    list.append(button);
  });
  $('#question-text').focus({ preventScroll: true });
}

function chooseAnswer(choice) {
  if (responses[current] !== undefined) return;
  selectedChoice = choice;
  [...$('#answer-list').children].forEach((button, index) => {
    button.classList.toggle('chosen', index === choice);
    button.setAttribute('aria-pressed', String(index === choice));
  });
  $('#submit-answer').hidden = false;
  $('#answered-count').textContent = 'Ready when you are';
}

function submitAnswer() {
  if (selectedChoice === null || responses[current] !== undefined) return;
  const item = questions[current];
  const correct = selectedChoice === item.answer;
  responses[current] = selectedChoice;
  if (correct) {
    score++;
    if (selectedSubject === 'general') worksheetScore++;
  }
  [...$('#answer-list').children].forEach((button, index) => {
    button.disabled = true;
    if (index === item.answer) button.classList.add('correct');
    if (index === selectedChoice && !correct) button.classList.add('wrong');
  });
  const feedback = $('#answer-feedback');
  feedback.textContent = `${correct ? 'That’s right!' : 'Good try.'} ${item.note}`;
  if (!correct) feedback.classList.add('wrong');
  $('#answered-count').textContent = `${score} ${score === 1 ? 'correct answer' : 'correct answers'} so far`;
  $('#submit-answer').hidden = true;
  $('#next-button').hidden = false;
  $('#next-button').focus();
}

function finishQuiz() {
  show(resultView);
  const percent = score / questions.length;
  const completionBonus = selectedSubject === 'general' ? 10 : 0;
  $('#result-kicker').textContent = selectedSubject === 'general' ? 'ALL FIVE WORKSHEETS COMPLETE' : 'ROUND COMPLETE';
  $('#result-title').textContent = percent === 1 ? 'Brilliant work!' : percent >= .6 ? 'Lovely effort!' : 'Keep that curiosity!';
  $('#result-score').textContent = selectedSubject === 'general'
    ? `${score} correct answers out of ${questions.length}`
    : `${score} out of ${questions.length} correct`;
  const progressKey = `mccQuizProgress:${studentId}`;
  let history = [];
  try { history = JSON.parse(localStorage.getItem(progressKey) || '[]'); } catch { history = []; }
  const completedAt = new Date().toISOString();
  history.push({ subject: quizzes[selectedSubject].name, score, total: questions.length, completedAt });
  try { localStorage.setItem(progressKey, JSON.stringify(history)); } catch { /* The current result can still be emailed if storage is unavailable. */ }
  const average = Math.round(history.reduce((sum, item) => sum + item.score / item.total, 0) / history.length * 100);
  const best = Math.round(Math.max(...history.map((item) => item.score / item.total)) * 100);
  $('#result-copy').textContent = selectedSubject === 'general'
    ? `You earned ${completionBonus} separate bonus marks for completing all five worksheets. Your quiz score remains out of ${questions.length}. Your average is ${average}% and your best is ${best}%.`
    : `${percent === 1 ? 'You got every question right!' : 'Every round is a chance to practise.'} Round ${history.length} complete. Your average is ${average}% and your best is ${best}%.`;
  const emailStatus = $('#email-status');
  emailStatus.className = 'email-status';
  emailStatus.textContent = 'Sending your progress to MCC…';
  fetch(`https://formsubmit.co/ajax/${MCC_PROGRESS_EMAIL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      _subject: `MCC Quiz progress: ${studentId}`,
      _template: 'table',
      student_id: studentId,
      subject: quizzes[selectedSubject].name,
      score: `${score} / ${questions.length}`,
      marks: selectedSubject === 'general' ? `${score} / ${questions.length} quiz marks` : `${score} / ${questions.length}`,
      quiz_score: selectedSubject === 'general' ? `${score} / ${questions.length} correct` : `${score} / ${questions.length}`,
      completion_bonus: selectedSubject === 'general' ? `${completionBonus} marks` : 'Not applicable',
      rounds_completed: history.length,
      average_score: `${average}%`,
      best_score: `${best}%`,
      completed_at: completedAt,
      _url: window.location.href
    })
  }).then(async (response) => {
    const result = await response.json();
    if (!response.ok || result.success === false || result.success === 'false') throw new Error('Email service rejected the report.');
    emailStatus.textContent = 'Progress emailed to MCC.';
  }).catch(() => {
    emailStatus.textContent = 'Your score is saved in this browser, but the email could not be sent.';
    emailStatus.classList.add('error');
  });
  $('#review-list').hidden = true;
  $('#review-list').replaceChildren();
  $('#review-button').textContent = 'Review answers';
  $('#review-button').setAttribute('aria-expanded', 'false');
  $('#next-worksheet-button').hidden = true;
  $('.result-actions').hidden = false;
  $('#retry-button').hidden = false;
  $('#review-button').hidden = false;
}

function renderReviewAnswers() {
  const list = $('#review-list');
  list.replaceChildren();
  const completedQuestions = questions.slice(0, Math.min(current + 1, questions.length));
  completedQuestions.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'review-item';
    const correct = responses[index] === item.answer;
    const heading = document.createElement('strong');
    heading.textContent = `${String(index + 1).padStart(2, '0')}  ${item.q}`;
    const answer = document.createElement('span');
    answer.className = correct ? 'right' : 'missed';
    const chosenAnswer = responses[index] === undefined ? 'Not answered' : item.options[responses[index]];
    answer.textContent = `${correct ? '✓ Your answer' : 'Your answer'}: ${chosenAnswer} · Correct answer: ${item.options[item.answer]}`;
    row.append(heading, answer);
    list.append(row);
  });
}

function finishWorksheet() {
  if (selectedSubject !== 'general') {
    finishQuiz();
    return;
  }
  if (worksheetNumber === 5) {
    finishQuiz();
    return;
  }
  show(resultView);
  $('#result-kicker').textContent = `WORKSHEET ${worksheetNumber} COMPLETE`;
  $('#result-title').textContent = `${worksheetNumber} ${worksheetNumber === 1 ? 'worksheet' : 'worksheets'} completed`;
  $('#result-score').textContent = `${worksheetScore} out of 5 correct`;
  $('#result-copy').textContent = 'Nice work! Continue when you are ready for the next worksheet.';
  $('#email-status').textContent = '';
  $('#next-worksheet-button').hidden = false;
  $('.result-actions').hidden = false;
  $('#retry-button').hidden = true;
  $('#review-button').hidden = false;
  $('#review-button').textContent = 'Review answers';
  $('#review-button').setAttribute('aria-expanded', 'false');
  $('#review-list').hidden = true;
}

function startNextWorksheet() {
  worksheetNumber++;
  worksheetScore = 0;
  current++;
  $('#review-list').hidden = true;
  $('#review-button').textContent = 'Review answers';
  $('#review-button').setAttribute('aria-expanded', 'false');
  show(questionView);
  renderQuestion();
}

$('#start-button').addEventListener('click', startQuiz);
$('#back-button').addEventListener('click', () => show(setup));
$('#submit-answer').addEventListener('click', submitAnswer);
$('#next-button').addEventListener('click', () => {
  if (selectedSubject === 'general' && (current + 1) % 5 === 0) finishWorksheet();
  else if (current + 1 < questions.length) { current++; renderQuestion(); }
  else finishQuiz();
});
$('#next-worksheet-button').addEventListener('click', startNextWorksheet);
$('#retry-button').addEventListener('click', () => show(setup));
$('#review-button').addEventListener('click', () => {
  const list = $('#review-list');
  const shouldShow = list.hidden;
  if (shouldShow) renderReviewAnswers();
  list.hidden = !shouldShow;
  $('#review-button').setAttribute('aria-expanded', String(shouldShow));
  $('#review-button').textContent = shouldShow ? 'Hide review' : 'Review answers';
});
