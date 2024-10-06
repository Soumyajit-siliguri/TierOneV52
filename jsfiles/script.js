function showAlert() {
    alert("Did you know? All humans belong to the phylum Chordata!");
}

document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Correct answers
    const correctAnswers = {
        q1: "b", // Correct answer for Question 1
        q2: "c", // Correct answer for Question 2
        q3: ["a","b", "c"] // Correct answers for Question 3 (multiple correct)
    };

    let score = 0;
    let totalQuestions = 3;

    // Check answers for MCQs
    if (document.querySelector('input[name="q1"]:checked')?.value === correctAnswers.q1) {
        score++;
    }
    if (document.querySelector('input[name="q2"]:checked')?.value === correctAnswers.q2) {
        score++;
    }

    // Check answers for MSQ (multiple selection)
    const selectedAnswers = Array.from(document.querySelectorAll('input[name="q3"]:checked')).map(input => input.value);
    const isCorrect = correctAnswers.q3.every(answer => selectedAnswers.includes(answer)) && selectedAnswers.length === correctAnswers.q3.length;
    if (isCorrect) {
        score++;
    }

    let correctCount = score;
    let incorrectCount = totalQuestions - score;
    let scorePercentage = (score / totalQuestions) * 100;

    document.getElementById('correct-count').innerText = `Correct Answers: ${correctCount}`;
    document.getElementById('incorrect-count').innerText = `Incorrect Answers: ${incorrectCount}`;
    document.getElementById('score-percentage').innerText = `Score: ${scorePercentage.toFixed(2)}%`;

    // Display correct answers
    const correctAnswersList = document.getElementById('correct-answers-list');
    correctAnswersList.innerHTML = `
        Question 1: Correct answer is b) Presence of a notochord<br>
        Question 2: Correct answer is c) Echinodermata<br>
        Question 3: Correct answers are a) Annelida, b) Arthropoda and c) Echinodermata
    `;

    document.getElementById('result').style.display = 'block';
});

function resetQuiz() {
    document.getElementById('quizForm').reset();
    document.getElementById('result').style.display = 'none'; // Hide the results
    document.getElementById('correct-count').innerText = '';
    document.getElementById('incorrect-count').innerText = '';
    document.getElementById('score-percentage').innerText = '';
    document.getElementById('correct-answers-list').innerText = '';
}
