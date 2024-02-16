let container = document.getElementById("container-quiz");
let btnStart = document.getElementById("start");
let questionHeader = document.getElementById("quiz-header");
let questionOptions = document.getElementById("quiz-options");

let kanyeImage = `<img src="../assets/kanye.webp" alt="Kanye West">`;

let currentQuestion = 1;
let currentScore = 0;
let currentQuestionIndex = 0;

const taylorQuestoes = [
    {
        pergunta: "Qual o nome completo da Taylor Swift?",
        alternativas: ["Taylor Woolridge Swift", "Taylor Alison Swift", "Taylor Swift Grant", "Taylor Alison"],
        resposta: "Taylor Alison Swift"
    },
    {
        pergunta: "Quando a Taylor Swift nasceu?",
        alternativas: ["12 de dezembro de 1989", "13 de dezembro de 1988", "13 de dezembro de 1989", "15 de dezembro de 1989"],
        resposta: "13 de dezembro de 1989"
    },
    {
        pergunta: "Qual o nome do primeiro álbum da Taylor Swift?",
        alternativas: ["Fearless", "Speak Now", "Taylor Swift", "Folklore"],
        resposta: "Taylor Swift"
    },
    {
        pergunta: "Qual o nome do primeiro single da Taylor Swift?",
        alternativas: ["Tim McGraw", "Teardrops on My Guitar", "Our Song"],
        resposta: "Tim McGraw"
    },
    {
        pergunta: "Qual o nome do álbum que a Taylor Swift lançou em 2014?",
        alternativas: ["Red", "Speak Now", "1989"],
        resposta: "1989"
    },
    {
        pergunta: "Kanye West é melhor que a Taylor Swift?",
        alternativas: ["Sim", "Claro"],
        resposta: "Claro"
    },
    {
        pergunta: "Qual o nome da música dela que tocou em Grey's Anatomy?",
        alternativas: ["White Horse", "Breathe", "You're Not Sorry", "The Way I Loved You"],
        resposta: "White Horse"
    },
    {
        pergunta: "Qual deles já foi o namorado da Taylor?",
        alternativas: ["Harry Styles", "Zayn Malik", "Niall Horan", "Liam Payne"],
        resposta: "Harry Styles"

    },
    {
        pergunta: "Qual o nome do álbum que a Taylor Swift lançou em 2017?",
        alternativas: ["Reputation", "Red", "Speak Now"],
        resposta: "Reputation"
    },
    {
        pergunta: "Qual dessas músicas Não está em 1989?",
        alternativas: ["Wildest Dreams", "Style", "New Romantics", "Back to December"],
        resposta: "Back to December"
    }
]

let currentQuestionObject;

btnStart.addEventListener("click", function() {
    btnStart.style.display = "none";
    renderNextQuestion();
});


function renderNextQuestion() {
    currentQuestionObject = taylorQuestoes[currentQuestionIndex];
    if (currentQuestionObject) {
        renderQuestion();
    } else {
        endQuiz();
    }
}

function renderQuestion() {
    let index = currentQuestion;
    questionHeader.innerHTML = `<h3>${index}. ${currentQuestionObject.pergunta}</h3>`;
    questionOptions.innerHTML = "";
    for (let i = 0; i < currentQuestionObject.alternativas.length; i++) {
        questionOptions.innerHTML += `<button id="options" onclick="checkAnswer(this)" class="btn btn-primary">${currentQuestionObject.alternativas[i]}</button>`;
    }
}

function checkAnswer(button) {
    if (isCorrectAnswer(button)) {
        changeColor(button, "#4ade80");
        currentScore++;
    }
    else {
        changeColor(button, "#ef4444");
    }

    setTimeout(renderNextQuestion, 600)
    currentQuestion++;
    currentQuestionIndex++;
}

function changeColor(button, color) {
    button.style.backgroundColor = color;
}

function isCorrectAnswer(button)
{
    if (button.innerHTML === currentQuestionObject.resposta)
        return true;
    return false;
}

function endQuiz() {
    questionHeader.innerHTML = `<h3>Acertou ${currentScore} de 10</h3>`;
    renderBanner();
}

if (currentQuestion === 10) {
    container.innerHTML = "";
    renderBanner();
}

function renderBanner() {
    let modalBackdrop = document.createElement("div");
    modalBackdrop.id = "modal-backdrop";

    let modal = document.createElement("div");
    modal.id = "modal";

    let modalContent = document.createElement("div");
    modalContent.id = "modal-content";
    modalContent.innerHTML = kanyeImage + "<h4>Parabéns! Você é uma verdadeira fã do Kanye West (seu mano Ye)!!</h4>";

    let modalCloseButton = document.createElement("button");
    modalCloseButton.id = "modal-close";
    modalCloseButton.innerHTML = "X";

    modal.appendChild(modalContent);
    modal.appendChild(modalCloseButton);
    modalBackdrop.appendChild(modal);
    document.body.appendChild(modalBackdrop);

    modalCloseButton.addEventListener("click", function() {
        modalBackdrop.style.display = "none";
    });
}
