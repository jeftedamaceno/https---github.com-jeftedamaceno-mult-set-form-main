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
// next step 
const nexts = document.querySelectorAll('.button-next')
nextStepAndGoBack(nexts, 1)

const go_backs = document.querySelectorAll('.go-back')
nextStepAndGoBack(go_backs, 0)
//  criando borda para input type radiio selecionado

const radios = document.querySelectorAll('.radio-plano')

radios.forEach((radio,)=>{
    radio.addEventListener('click', ()=>{
        desselecionarRadio();
        radio.classList.add("radio-selecionado"); 
    });
});

//  criando borda para input type radiio checkbox


const servicos = document.querySelectorAll('.tipos-servicos');
const servicos_inputs = document.querySelectorAll('#complementos');

servicos.forEach((servico, indice)=>{ 
    servico.addEventListener('click', function() {
        if(!servico.classList.contains('div-selecionada')){
            servico.classList.add('div-selecionada')
            servicos_inputs[indice].checked = true
        }else{
            servico.classList.remove('div-selecionada')
            servicos_inputs[indice].checked = false
        }
    })
});

// criando alteracao de texto ao clicar em input type checkbox

const checkbox_time = document.querySelector('#switch');
const months = document.querySelectorAll('.check-monthly');
const years = document.querySelectorAll('.check-year.desativado');
const year_check_paragrafo = document.getElementById('yearly')
const monthly_check_paragrafo = document.getElementById('monthly')
// variaveis do step 3 

const months_step3 = document.querySelectorAll('.check-preco');
const years_step3 = document.querySelectorAll('.check-preco-year.desativado');


checkbox_time.addEventListener('click', ()=>{
    if(months[0].classList.contains('desativado')){
        alteraTextoCheckbox(months, years)
        alteraTextoCheckbox(months_step3, years_step3)

        monthly_check_paragrafo.classList.add('input-seleceinado')
        year_check_paragrafo.classList.remove('input-seleceinado')
    }else{
        alteraTextoCheckbox(years, months)
        alteraTextoCheckbox(years_step3, months_step3)
        
        monthly_check_paragrafo.classList.remove('input-seleceinado')
        year_check_paragrafo.classList.add('input-seleceinado')
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
        lista.classList.remove('desativado')
        lista_check2[indice].classList.add('desativado')
    });
}

function nextStepAndGoBack(lista,regulador) {
    lista.forEach((item, indice)=>{
        item.addEventListener('click', ()=>{
            desselecionarPagina()
            desselecionarStep()
            paginas[indice+regulador].classList.add("pagina-selecionada");
            steps[indice+regulador].classList.add("botao_ativado");
        })
    })
}