const inputTarefa = document.getElementById('inputTarefa');
const btnCriarTarefa = document.querySelector('.btnCriarTarefa');
const btnAtualizarTarefa = document.querySelector('.btnAtualizarTarefa');
const conteudo = document.querySelector('.conteudo');
const listaTarefas = ['Limpar a casa', 'Fazer site', 'Lavar o quintal', 'Trabalho de geografia', 'Trabalho de Português', 'Trabalho de filisofia', 'Trabalho de sociologia'];
const formAtualizar = document.querySelector('.formAtualizar');
if (listaTarefas.length > 0) {
    CarregarTarefas();
}

btnCriarTarefa.addEventListener('click', () => {
    if (inputTarefa.value != '' && btnCriarTarefa.textContent == 'Criar') {
        AdicionarTarefa(inputTarefa.value);
    }
});



function CarregarTarefas() {
    conteudo.innerHTML = '';
    listaTarefas.forEach((tarefa, index) => {
        conteudo.innerHTML += `
        <div class='cardTarefa'>
            <p class='tituloTarefa'>${tarefa}</p>
            <div class='btnsGroup'>
                <button class='btnExcluirTarefa'  onclick='ExcluirTarefa(${index})'>excluir</button>
                <button class='btnAtualizarTarefa' onclick='AbrirFormAtualizar(${index})'>Atualizar</button>
            </div>
        </div>`;
    })
}

function AdicionarTarefa(tarefa) {
    listaTarefas.push(tarefa);
    CarregarTarefas();
    Limpar()
}

function ExcluirTarefa(position) {
    listaTarefas.splice(position, 1);
    CarregarTarefas();
}

function Atualizar(position) {
    const inputAtualizar = document.querySelector('.inputAtualizar');
    if (inputAtualizar.value != '') {
        listaTarefas[position] = inputAtualizar.value;
        CarregarTarefas();
        formAtualizar.innerHTML = '';
    }
}

function AbrirFormAtualizar(position) {
    formAtualizar.innerHTML = `
        <input type='text' class='inputAtualizar' placeholder='tarefa' value='${listaTarefas[position]}'>
        <button class='btnConfirmar' onclick='Atualizar(${position})'>Confirmar</button>`;
}

function Limpar() {
    inputTarefa.value = '';
}