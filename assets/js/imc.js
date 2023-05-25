const form = document.getElementById('form'); // Obtém a referência do elemento HTML com o ID 'form' e armazena na variável 'form'

form.addEventListener('submit', function(event) { // Adiciona um ouvinte de evento para o evento de envio do formulário
    event.preventDefault(); // Previne o comportamento padrão de atualização da página ao enviar o formulário

    const weight = document.getElementById('iweight').value; // Obtém o valor do campo de entrada (input) com o ID 'iweight' e armazena em 'weight'
    const height = document.getElementById('iheight').value; // Obtém o valor do campo de entrada (input) com o ID 'iheight' e armazena em 'height'

    const bmi = (weight / (height * height)).toFixed(2); // Calcula o IMC (Índice de Massa Corporal) com base no peso e altura fornecidos, arredondando-o para duas casas decimais e armazena em 'bmi'

    const value = document.getElementById('value'); // Obtém a referência do elemento HTML com o ID 'value' e armazena em 'value'
    let description = ''; // Inicializa a variável 'description' com uma string vazia

    value.classList.add('attencion'); // Adiciona a classe CSS 'attencion' ao elemento 'value'

    document.getElementById('infos').classList.remove('hidden'); // Remove a classe CSS 'hidden' do elemento com o ID 'infos'

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!'; // Define a descrição com base no valor do IMC calculado
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Você está no peso ideal!'; // Define a descrição com base no valor do IMC calculado
        value.classList.remove('attencion'); // Remove a classe CSS 'attencion' do elemento 'value'
        value.classList.add('normal'); // Adiciona a classe CSS 'normal' ao elemento 'value'
    } else if (bmi >= 25 && bmi <= 30) {
        description = 'Cuidado! Você está com sobrepeso!'; // Define a descrição com base no valor do IMC calculado
    } else if (bmi > 30 && bmi <= 35) {
        description = 'Cuidado! Você está com obesidade moderada!'; // Define a descrição com base no valor do IMC calculado
    } else if (bmi > 35 && bmi <= 40){
        description = 'Cuidado! Você está com obesidade severa!'; // Define a descrição com base no valor do IMC calculado
    } else {
        description = 'Cuidado! Você está com obesidade mórbida!'; // Define a descrição com base no valor do IMC calculado
    }

    value.textContent = bmi.replace('.', ','); // Atualiza o texto do elemento 'value' substituindo o ponto por vírgula no valor do IMC
    document.getElementById('description').textContent = description; // Atualiza o texto do elemento com o ID 'description' com a descrição do IMC
});
