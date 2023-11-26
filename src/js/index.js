//  criando efeito ao clicar no step
const steps = document.querySelectorAll('.botao');
const paginas = document.querySelectorAll('.pagina')
steps.forEach((step, indice)=>{
    step.addEventListener('click', ()=>{
        desselecionarPagina()
        desselecionarStep()
        step.classList.add("botao_ativado");
        paginas[indice].classList.add("pagina-selecionada");
    });
})

//  criando borda para input type radiio selecionado

const radios = document.querySelectorAll('.radio-plano')

radios.forEach((radio,)=>{
    radio.addEventListener('click', ()=>{
        desselecionarRadio();
        radio.classList.add("radio-selecionado"); 
    });
});

// criando alteracao de texto ao clicar em input type checkbox

const checkbox_time = document.querySelector('#switch');
const months = document.querySelectorAll('.check-monthly');
const years = document.querySelectorAll('.check-year.desativado');

checkbox_time.addEventListener('click', ()=>{
    if(months[0].classList.contains('desativado')){
        alteraTextoCheckbox(months, years)
    }else{
        alteraTextoCheckbox(years, months)
    }
});

// funcoes usadas
function desselecionarPagina() {
    const paginaSelecionado = document.querySelector(".pagina-selecionada");
    paginaSelecionado.classList.remove("pagina-selecionada");
}
function desselecionarStep() {
    const stepSelecionado = document.querySelector(".botao_ativado");
    stepSelecionado.classList.remove("botao_ativado");
}
function desselecionarRadio() {
    if(document.querySelector(".radio-plano.radio-selecionado")){
        const radioSelecionado = document.querySelector(".radio-plano.radio-selecionado");
        radioSelecionado.classList.remove("radio-selecionado");
    }
}
function alteraTextoCheckbox(lista_check1, lista_check2) {
    lista_check1.forEach((lista,indice)=>{ 
        console.log('oi')
        lista.classList.remove('desativado')
        lista_check2[indice].classList.add('desativado')
    });
}