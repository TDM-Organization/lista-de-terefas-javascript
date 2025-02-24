const btnCriarTarefa = document.querySelector('.btnCriarTarefa');
const btnAtualizarTarefa = document.querySelector('.btnAtualizarTarefa');
const conteudo = document.querySelector('.conteudo');
const listaTarefas = ['Limpar a casa', 'Fazer site', 'Lavar o quintal', 'Trabalho de geografia', 'Trabalho de Português', 'Trabalho de filisofia', 'Trabalho de sociologia'];
const form = document.querySelector('.form');
if (listaTarefas.length > 0) {
    CarregarTarefas();
}

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

function AdicionarTarefa() {
    const inputTarefa = document.getElementById('inputTarefa');
    listaTarefas.push(inputTarefa.value);
    CarregarTarefas();
    Limpar();
    CloseForm();
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
        CloseForm();
    }
}

function AbrirFormAtualizar(position) {
    form.innerHTML = `
        <input type='text' class='inputAtualizar' placeholder='tarefa' value='${listaTarefas[position]}'>
        <button class='btnConfirmar' onclick='Atualizar(${position})'>Confirmar</button>`;
}

function AbrirFormCriar() {
    form.innerHTML = `
        <input type="text" name="" id="inputTarefa" placeholder="Nova tarefa">
        <button class="btnCriarTarefa" onclick='AdicionarTarefa()'>Criar</button>`;
}

function Limpar() {
    inputTarefa.value = '';
}

function CloseForm(){
    form.innerHTML = '';
}