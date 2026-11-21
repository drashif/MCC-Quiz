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
    { q: 'What is the capital city of Japan?', options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'], answer: 2, note: 'Tokyo is the capital of Japan.' }
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
  responses = [];
  $('#subject-label').textContent = quizzes[selectedSubject].name;
  show(questionView);
  renderQuestion();
}

function renderQuestion() {
  const item = questions[current];
  const number = current + 1;
  selectedChoice = null;
  $('#question-count').textContent = `${String(number).padStart(2, '0')} / ${String(questions.length).padStart(2, '0')}`;
  $('#question-number').textContent = String(number).padStart(2, '0');
  $('#question-text').textContent = item.q;
  $('#progress-fill').style.width = `${(number / questions.length) * 100}%`;
  document.querySelector('.progress-track').setAttribute('aria-valuenow', String(number));
  $('#answered-count').textContent = 'Choose one answer';
  $('#answer-feedback').textContent = '';
  $('#answer-feedback').className = 'answer-feedback';
  $('#submit-answer').hidden = true;
  $('#next-button').hidden = true;
  $('#next-button').innerHTML = number === questions.length ? 'See my result <span aria-hidden="true">→</span>' : 'Next question <span aria-hidden="true">→</span>';
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
  if (correct) score++;
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
  $('#result-title').textContent = percent === 1 ? 'Brilliant work!' : percent >= .6 ? 'Lovely effort!' : 'Keep that curiosity!';
  $('#result-score').textContent = `${score} out of ${questions.length} correct`;
  const progressKey = `mccQuizProgress:${studentId}`;
  let history = [];
  try { history = JSON.parse(localStorage.getItem(progressKey) || '[]'); } catch { history = []; }
  const completedAt = new Date().toISOString();
  history.push({ subject: quizzes[selectedSubject].name, score, total: questions.length, completedAt });
  try { localStorage.setItem(progressKey, JSON.stringify(history)); } catch { /* The current result can still be emailed if storage is unavailable. */ }
  const average = Math.round(history.reduce((sum, item) => sum + item.score / item.total, 0) / history.length * 100);
  const best = Math.round(Math.max(...history.map((item) => item.score / item.total)) * 100);
  $('#result-copy').textContent = `${percent === 1 ? 'You got every question right!' : 'Every round is a chance to practise.'} Round ${history.length} complete. Your average is ${average}% and your best is ${best}%.`;
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
  questions.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'review-item';
    const correct = responses[index] === item.answer;
    const heading = document.createElement('strong');
    heading.textContent = `${String(index + 1).padStart(2, '0')}  ${item.q}`;
    const answer = document.createElement('span');
    answer.className = correct ? 'right' : 'missed';
    answer.textContent = `${correct ? '✓ Your answer' : 'Your answer'}: ${item.options[responses[index]]} · Correct answer: ${item.options[item.answer]}`;
    row.append(heading, answer);
    $('#review-list').append(row);
  });
}

$('#start-button').addEventListener('click', startQuiz);
$('#back-button').addEventListener('click', () => show(setup));
$('#submit-answer').addEventListener('click', submitAnswer);
$('#next-button').addEventListener('click', () => current + 1 < questions.length ? (current++, renderQuestion()) : finishQuiz());
$('#retry-button').addEventListener('click', () => show(setup));
$('#review-button').addEventListener('click', () => {
  const list = $('#review-list');
  list.hidden = !list.hidden;
  $('#review-button').textContent = list.hidden ? 'Review answers' : 'Hide review';
});
