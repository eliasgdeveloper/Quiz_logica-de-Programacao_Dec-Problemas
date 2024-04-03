const questions = [
    {
        question: "01 - O que é Decomposição de Problemas na Programação?",
        choices: [
            "a) Um processo para  fragmentar  problemas complexos em partes menores e mais gerenciáveis.",
            "b) Um método para adicionar solução permanente aos problemas de programação.",
            "c) Uma abordagem para ignorar problemas difíceis e focar apenas nos simples.",
            "d) Um procedimento para misturar diferentes problemas em um único código."
        ],
        correctAnswer: "a) Um processo para  fragmentar  problemas complexos em partes menores e mais gerenciáveis.",
        explanation: "A decomposição de problemas na programação envolve a quebra de problemas complexos em partes menores e mais fáceis de entender e resolver. Isso facilita a solução do problema como um todo, tornando-o mais gerenciável e menos assustador para o desenvolvedor."
    },
    {
        question: "02 - Qual é o principal objetivo da decomposição de problemas na programação?",
        choices: [
            "a) Aumentar a compreenção dos problemas.",
            "b) Desmembrar problemas extensos em componentes menores, tornando-os mais simples de resolver.",
            "c) Criar problemas mais tangíveis de serem entendidos.",
            "d) Tornar a programação mais eficiente."
        ],
        correctAnswer: "b) Desmembrar problemas extensos em componentes menores, tornando-os mais simples de resolver.",
        explanation: "O objetivo principal da decomposição de problemas é dividir problemas grandes e complexos em partes menores e mais gerenciáveis. Isso facilita a resolução de cada parte individualmente e, eventualmente, a solução do problema como um todo."
    },
    {
        question: "03 - Como a decomposição de problemas pode ajudar na resolução de um problema complexo?",
        choices: [
            "a) Tornando fácil a solução de problemas complexos, integrando-os.",
            "b) Misturando diferentes problemas para formar um único problema.",
            "c) Ignorando partes do problema que são difíceis de resolver.",
            "d) Dividindo o problema em partes menores e mais simples de entender.",
        ],
        correctAnswer: "d) Dividindo o problema em partes menores e mais simples de entender.",
        explanation: "Ao decompor um problema complexo em partes menores, cada parte se torna mais simples de entender e resolver. Isso torna a resolução do problema geral mais viável, pois o desenvolvedor pode lidar com cada parte separadamente."
    },
    {
        question: "04 - Quais são algumas das vantagens da decomposição de problemas na programação?",
        choices: [
            "a) Tornar os problemas mais agrupados e em ordem.",
            "b) Aumentar a faixa de testes dos programas.",
            "c) Facilitar a compreensão e resolução de problemas complexos.",
            "d) Minimizar a eficiência do desenvolvimento de software."
        ],
        correctAnswer: "c) Facilitar a compreensão e resolução de problemas complexos.",
        explanation: "A decomposição de problemas torna os problemas complexos mais fáceis de entender e resolver, facilitando o processo de desenvolvimento de software. Isso leva a uma melhor eficiência e qualidade do código produzido."
    },
    {
        question: "05 - Como você identifica partes de um problema que podem ser decompostas?",
        choices: [
            "a) Procurando partes do problema que são simples e fáceis de entender.",
            "b) Analisando o problema como um todo e identificando partes que podem ser tratadas separadamente.",
            "c) Ignorando partes do problema que parecem difíceis de resolver.",
            "d) Tentando resolver o problema sem quebrá-lo em partes menores."
        ],
        correctAnswer: "b) Analisando o problema como um todo e identificando partes que podem ser tratadas separadamente.",
        explanation: "Para identificar partes de um problema que podem ser decompostas, é necessário analisar o problema como um todo e identificar partes que podem ser tratadas separadamente. Isso geralmente envolve encontrar aspectos do problema que podem ser isolados e resolvidos independentemente um do outro."
    },
    {
        question: "06 - Qual é o papel das funções na decomposição de problemas?",
        choices: [
            "a) Desagregar o problema em partes menores e reutilizáveis.",
            "b) Aumentar a credibilidade do problema.",
            "c) Ignorar partes do problema que são difíceis de resolver.",
            "d) Misturar diferentes problemas em uma única entidade."
        ],
        correctAnswer: "a) Desagregar o problema em partes menores e reutilizáveis.",
        explanation: "Funções são usadas para dividir um problema em partes menores e mais gerenciáveis, que podem ser reutilizadas em diferentes partes do código. Isso ajuda na decomposição do problema em componentes mais simples e fáceis de entender."
    },
    {
        question: "07 - Por que é importante documentar o processo de decomposição de problemas?",
        choices: [
            "a) Para tornar o problema mais complexo.",
            "b) Para esconder partes do problema que são difíceis de resolver.",
            "c) Para ajudar outros desenvolvedores a entender como o problema foi dividido e resolvido.",
            "d) Para facilitar ainda mais a resolução do problema em parte única."
        ],
        correctAnswer: "c) Para ajudar outros desenvolvedores a entender como o problema foi dividido e resolvido.",
        explanation: "Documentar o processo de decomposição de problemas é importante para que outros desenvolvedores possam entender como o problema foi dividido e resolvido. Isso facilita a colaboração e o trabalho em equipe, além de permitir a manutenção e o aprimoramento do código no futuro."
    },
    {
        question: "08 - Como você pode testar cada parte de um problema decomposto?",
        choices: [
            "a) Não é necessário testar cada parte separadamente.",
            "b) Testando cada função ou componente individualmente para garantir que funcione corretamente.",
            "c) Testando apenas o problema como um todo, sem se preocupar com partes individuais.",
            "d) Implantar novas tecnologias para o processo de teste."
        ],
        correctAnswer: "b) Testando cada função ou componente individualmente para garantir que funcione corretamente.",
        explanation: "Testar cada parte de um problema decomposto é importante para garantir que cada função ou componente funcione corretamente e produza os resultados esperados. Isso ajuda a identificar e corrigir erros em estágios iniciais do desenvolvimento."
    },
    {
        question: "09 - Quais são algumas técnicas comuns de decomposição de problemas na programação?",
        choices: [
            "a) Divisão e conquista, modularização, abstração.",
            "b) Partilha, mistura, solução.",
            "c) Divisão e aleatoriedade.",
            "d) Subtração e multiplicação."
        ],
        correctAnswer: "a) Divisão e conquista, modularização, abstração.",
        explanation: "Algumas técnicas comuns de decomposição de problemas incluem a aplicação de estratégias de divisão e conquista, modularização de código em funções reutilizáveis e abstração de detalhes irrelevantes para focar apenas nos aspectos importantes do problema."
    },
    {
        question: "10 - Como a decomposição de problemas pode contribuir para um desenvolvimento de software mais eficiente?",
        choices: [
            "a) Através de algoritmos complexos que aumentam a eficiência do código.",
            "b) Facilitando a colaboração entre membros da equipe.",
            "c) Utilizando técnicas de criptografia avançada para simplificar a lógica do software.",
            "d) Dividindo problemas grandes em partes menores mais gerenciáveis e fáceis de entender.",
        ],
        correctAnswer: "d) Dividindo problemas grandes em partes menores mais gerenciáveis e fáceis de entender.",
        explanation: "A decomposição de problemas permite dividir problemas grandes e complexos em partes menores e mais gerenciáveis, o que facilita a compreensão, o desenvolvimento e a manutenção do código. Isso leva a um desenvolvimento de software mais eficiente e de alta qualidade."
    }
];




var currentQuestion = 0;
var score = 0;
var answerSelected = false;

function showQuestion(question) {
    var questionElement = document.getElementById('question');
    var choicesElement = document.getElementById('choices');

    questionElement.textContent = question.question;

    choicesElement.innerHTML = "";
    question.choices.forEach(choice => {
        const choiceDiv = document.createElement('div');
        choiceDiv.className = 'choice';
        choiceDiv.textContent = choice;
        choiceDiv.addEventListener('click', () => {
            if (!answerSelected) {
                const selectedAnswer = choiceDiv.textContent;
                const correct = selectedAnswer === question.correctAnswer;
                const color = correct ? "#190bdf" : "red";
                showModal(correct ? "RESPOSTA CORRETA: " + question.explanation : "RESPOSTA ERRADA: " + question.explanation, color);

                //showModal(correct ? "Resposta correta: " + question.explanation : "Resposta errada: " + question.explanation);

                if (correct) {
                    score++;
                }

                choiceDiv.style.backgroundColor = correct ? "#99ff99" : "#ff9999";
                answerSelected = true;

                if (currentQuestion === questions.length - 1) {
                    document.getElementById('next-btn').textContent = "Enviar";
                    document.getElementById('send-btn').style.display = "block";
                }
            }
        });
        choicesElement.appendChild(choiceDiv);
    });
}

function showNextQuestion() {
    currentQuestion++;
    answerSelected = false;
    if (currentQuestion < questions.length) {
        showQuestion(questions[currentQuestion]);
    } else {
        document.getElementById('next-btn').style.display = "none";
        salvarDadosAlunoNoLocalStorage();

        if (score >= 6) {
            window.location.href = "feedback.html?score=" + score + "&confetti=true";
        } else {
            window.location.href = "feedback.html?score=" + score;
        }
    }
}

function playConfetti() {
    let params = {
        particleCount: 500,
        spread: 90,
        startVelocity: 70,
        origin: { x: 0, y: 0.5 },
        angle: 45
    };

    confetti(params);

    params.origin.x = 1;
    params.angle = 135;
    confetti(params);
}

window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const confettiEnabled = urlParams.get('confetti');
    if (confettiEnabled === "true") {
        playConfetti();
    }
}

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentQuestion < questions.length) {
        if (!answerSelected) {
            showModal("Por favor, selecione uma resposta antes de continuar.");
            return;
        }
        showNextQuestion();
    }
});






document.getElementById('start-btn').addEventListener('click', () => {
    // Verifica se os campos obrigatórios foram preenchidos
    var nome = document.getElementById('nome').value;
    var curso = document.getElementById('curso').value;
    var email = document.getElementById('email').value;

    // Verifica se os campos obrigatórios estão preenchidos corretamente de acordo com as regras
    var nomeValido = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nome);
    var cursoValido = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(curso);
    var emailValido = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);

    if (nome && curso && email && nomeValido && cursoValido && emailValido) {
        document.getElementById('start-container').style.display = "none";
        document.getElementById('quiz-container').style.display = "block";
        showQuestion(questions[currentQuestion]);
    } else {
        // Mostra mensagem de erro específica para cada campo
        if (!nome) {
            showModal("Por favor, preencha o campo Nome.", "red");
        } else if (!nomeValido) {
            showModal("Por favor, digite um nome válido (somente letras, espaços e acentos).", "red");
        } else if (!curso) {
            showModal("Por favor, preencha o campo Curso.", "red");
        } else if (!cursoValido) {
            showModal("Por favor, digite um curso válido (somente letras, espaços e acentos).", "red");
        } else if (!email) {
            showModal("Por favor, preencha o campo Email.", "red");
        } else if (!emailValido) {
            showModal("Por favor, digite um email válido.", "red");
        }
    }
});



// document.getElementById('start-btn').addEventListener('click', () => {
//     document.getElementById('start-container').style.display = "none";
//     document.getElementById('quiz-container').style.display = "block";
//     showQuestion(questions[currentQuestion]);
// });

function showModal(message, color) {
    var modalText = document.getElementById('modal-text');
    var modal = document.getElementById('modal');
    modalText.style.color = color; // Define a cor do texto
    modalText.textContent = message;
    modal.style.display = "block";
}




// function showModal(message) {
//     var modalText = document.getElementById('modal-text');
//     var modal = document.getElementById('modal');
//     modalText.style.color = "red";
//     modalText.textContent = message;
//     modal.style.display = "block";
// }

document.getElementsByClassName('close')[0].addEventListener('click', () => {
    document.getElementById('modal').style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
});

function salvarDadosAlunoNoLocalStorage() {
    localStorage.setItem('nome', document.getElementById('nome').value);
    localStorage.setItem('curso', document.getElementById('curso').value);
    localStorage.setItem('email', document.getElementById('email').value);
    localStorage.setItem('pontuacao', score);
    if (score >= 6) {
        localStorage.setItem('mensagem', "Parabéns! Você foi aprovado." + ' 😊');
    } else {
        localStorage.setItem('mensagem', "Você não foi aprovado. Continue praticando!" + ' 😢');
    }
}








function startQuiz() {
    var countdownElement = document.getElementById('countdown');
    var time = 60;

    var countdownInterval = setInterval(function () {
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownElement.textContent = minutes + ':' + seconds;

        if (time <= 30) {
            if (countdownElement.style.color === 'red') {
                countdownElement.style.color = 'white';
            } else {
                countdownElement.style.color = 'red';
            }
        }

        if (time <= 15) {
            countdownElement.textContent = minutes + ':' + seconds + ' - Tempo Esgotando';
            countdownElement.style.color = 'red';
        }
        if (time <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = 'Tempo Esgotado';
            countdownElement.style.color = 'red';
            salvarDadosAlunoNoLocalStorage(); // Salva os dados do aluno antes de redirecionar para a página de feedback

            setTimeout(function () {
                if (score >= 6) {
                    window.location.href = "feedback.html?score=" + score + "&confetti=true";
                } else {
                    window.location.href = "feedback.html?score=" + score;
                }
            }, 2000); // Atraso de 2 segundos (2000 milissegundos)
        }

        time--; // Decrementa o tempo a cada intervalo
    }, 1000);
}










// document.addEventListener('DOMContentLoaded', function () {
//     var countdownElement = document.getElementById('countdown');
//     var time = 60;

//     var countdownInterval = setInterval(function () {
//         var minutes = Math.floor(time / 60);
//         var seconds = time % 60;

//         seconds = seconds < 10 ? '0' + seconds : seconds;

//         countdownElement.textContent = minutes + ':' + seconds;

//         if (time <= 30) {
//             if (countdownElement.style.color === 'red') {
//                 countdownElement.style.color = 'white';
//             } else {
//                 countdownElement.style.color = 'red';
//             }
//         }

//         if (time <= 15) {
//             countdownElement.textContent = minutes + ':' + seconds + ' - Tempo Esgotando';
//             // countdownElement.textContent = 'Tempo Esgotando';
//             countdownElement.style.color = 'red';
//         }
//         if (time <= 0) {
//             clearInterval(countdownInterval);
//             countdownElement.textContent = 'Tempo Esgotado';
//             countdownElement.style.color = 'red';
//             salvarDadosAlunoNoLocalStorage(); // Salva os dados do aluno antes de redirecionar para a página de feedback

//             setTimeout(function () {
//                 if (score >= 6) {
//                     window.location.href = "feedback.html?score=" + score + "&confetti=true";
//                 } else {
//                     window.location.href = "feedback.html?score=" + score;
//                 }
//             }, 2000); // Atraso de 2 segundos (2000 milissegundos)
//         }

//         time--; // Decrementa o tempo a cada intervalo
//     }, 1000);
// });


