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
function desselecionarPagina() {
    const personagemSelecionado = document.querySelector(".pagina-selecionada");
    personagemSelecionado.classList.remove("pagina-selecionada");
}
function desselecionarStep() {
    const botaoSelecionado = document.querySelector(".botao_ativado");
    botaoSelecionado.classList.remove("botao_ativado");
    
}
