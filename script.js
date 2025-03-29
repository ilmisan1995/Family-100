const questions = [
    { 
        question: "Sebutkan sesuatu yang biasa ada di meja makan!", 
        answers: [
            { text: "Piring", score: 30 },
            { text: "Sendok", score: 20 },
            { text: "Gelas", score: 15 },
            { text: "Nasi", score: 10 }
        ]
    },
    { 
        question: "Sebutkan sesuatu yang sering dibawa ke sekolah!", 
        answers: [
            { text: "Buku", score: 40 },
            { text: "Pensil", score: 25 },
            { text: "Tas", score: 20 },
            { text: "Penghapus", score: 15 }
        ]
    }
];

let currentQuestionIndex = 0;

function showQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");

    questionElement.innerText = questions[currentQuestionIndex].question;
    answersElement.innerHTML = "";

    questions[currentQuestionIndex].answers.forEach(answer => {
        let answerDiv = document.createElement("div");
        answerDiv.classList.add("answer");
        answerDiv.innerText = "???";
        answerDiv.onclick = function() {
            answerDiv.innerText = `${answer.text} - ${answer.score} Poin`;
        };
        answersElement.appendChild(answerDiv);
    });
}

function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    showQuestion();
}

showQuestion();
