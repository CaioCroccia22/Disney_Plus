document.addEventListener('DOMContentLoaded', function(){
    // Seleciona os botões que possuem o atributo
    const buttons = document.querySelectorAll('[data-tab-button]');

    // 
    const questions = document.querySelectorAll('[data-faq-question]');

    // Seleciona a section Hero
    const heroSection = document.querySelector('.hero');
//-------------------------------------------------------------------------
    // Section Herro

    
    // Pega a altura do Hero, para saber quando o mouse passou por ele
    const heroHeight = heroSection.clientHeight;

    // Evento que chama a função que localiza a posição do scrool
    window.addEventListener('scroll', function(){

        // Set a posição do scroll na variável position
       const position = window.scrollY;

    //   Condicional para quando a posição do mouse for menor que o heroHeight
        if (position < heroHeight){
            // Chama a função
            hiddenHeaderElements()
        }
        else {
            showHeaderElements()
        }
        
    })
    
    //  Section Atrações

    ///Para trocar o layout quando clicar nas abas
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            // console.log(buttons);
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            
            // Remover a Classe ativa de todos os butões
            buttons.forEach(btn => btn.classList.remove('shows__tabs__button--is-active'));

            //Adicionar a classe apenas no botão clicado
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // Section FAQ
    for (let i = 0; i<questions.length ; i++){
        questions[i].addEventListener("click", function(e){
            const classe = 'faq__questions__item--is-open';
            const elementoPai = e.target.closest('.faq__questions__item');
            elementoPai.classList.toggle(classe);
        })
    }

})
//------------------------------------------------------------------------------


//Function para adicionar a Classe 'Header--is--hidden'
function hiddenHeaderElements(){
    // Seleciona o Elemento Header
    const header = document.querySelector('header');
    // Adiciona a Classe 
    header.classList.add('header--is-hidden');
}

//Function para retirar a Classe 'Header--is--hidden'
function showHeaderElements(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
