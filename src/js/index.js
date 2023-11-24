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

//  criando borda para input selecionado

const radios = document.querySelectorAll('.radio-plano')

radios.forEach((radio,)=>{
    radio.addEventListener('click', ()=>{
        desselecionarRadio();
        radio.classList.add("radio-selecionado"); 
    });
});

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