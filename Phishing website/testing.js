// Function to check quiz answers
function checkAnswers() {
    // Define correct answers for all quiz questions
    const correctAnswers = {
        q1: 'a', // Urgent request for personal information
        q2: 'b', // Human psychology
        q3: 'b', // Regularly updating software and security patches
        q4: 'a'  // Redirecting a website's traffic to malicious websites
    };

    let score = 0;
    let total = Object.keys(correctAnswers).length;
    let resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    resultDiv.className = 'result';

    // Loop through each question
    for (let question in correctAnswers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        const questionLabel = selected ? selected.parentElement : null;

        if (selected) {
            // Remove any existing feedback classes
            if (questionLabel) {
                questionLabel.classList.remove('correct', 'incorrect');
            }

            // Check if answer is correct and update styling
            if (selected.value === correctAnswers[question]) {
                score++;
                if (questionLabel) {
                    questionLabel.classList.add('correct');
                    questionLabel.innerHTML += ' <span class="emoji">✅</span>';
                }
            } else {
                if (questionLabel) {
                    questionLabel.classList.add('incorrect');
                    questionLabel.innerHTML += ' <span class="emoji">❌</span>';
                }
            }
        }
    }

    // Create result message with appropriate feedback
    let resultText = `You scored ${score}/${total} `;
    if (score === total) {
        resultText += '🏆 Perfect! You\'re a cybersecurity expert!';
        resultDiv.className = 'result correct';
    } else if (score >= total/2) {
        resultText += '👍 Good job! Keep learning about cybersecurity.';
        resultDiv.className = 'result correct';
    } else {
        resultText += '📚 Keep studying! Cybersecurity awareness is important.';
        resultDiv.className = 'result incorrect';
    }

    // Display result
    resultDiv.textContent = resultText;
    
    // Remove existing result if present
    const existingResult = document.getElementById('result');
    if (existingResult) {
        existingResult.remove();
    }

    // Add new result to the quiz section
    const quizSection = document.querySelector('.quiz-section');
    quizSection.appendChild(resultDiv);
    resultDiv.style.display = 'block';

    // Disable all radio buttons after submission
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(button => {
        button.disabled = true;
    });

    // Disable the submit button
    const submitButton = document.querySelector('button');
    if (submitButton) {
        submitButton.disabled = true;
    }
}

// Function to handle scenario check (Phishing Scenarios)
function checkScenario(scenarioId, isPhishing) {
    const feedbackDiv = document.getElementById(`feedback${scenarioId}`);
    const warningsDiv = document.getElementById(`warnings${scenarioId}`);
    const scenario = document.getElementById(`scenario${scenarioId}`);
    const buttons = scenario.getElementsByTagName('button');

    // Disable all buttons after selection
    for (let button of buttons) {
        button.disabled = true;
    }

    // Updated logic: Scenario 1 is phishing, Scenario 2 is legitimate
    const isCorrect = (scenarioId === 1 && isPhishing) || (scenarioId === 2 && !isPhishing);

    if (isCorrect) {
        feedbackDiv.textContent = "Correct! Good job identifying this email.";
        feedbackDiv.className = "feedback correct";
    } else {
        feedbackDiv.textContent = "Incorrect. Please review the warning signs below.";
        feedbackDiv.className = "feedback incorrect";
    }

    // Show the feedback and warning signs
    feedbackDiv.style.display = "block";
    warningsDiv.style.display = "block";
}