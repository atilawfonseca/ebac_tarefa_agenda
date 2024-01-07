const form = document.querySelector('#form-contatos');
const inputNome = document.querySelector('#input-nome-completo');
const inputTel = document.querySelector('#input-telefone');
let linhas = '';
let arrayContatos = [];
let contador = 0;

function inserirLinhaContato () {
    let linha = `<tr id = linha+${contador} >`;
    linha+= `<td>${inputNome.value}</td>`;
    linha+= `<td>${inputTel.value}</td>`;
    linha +='</tr>';
    
    linhas += linha;
    document.querySelector('tbody').innerHTML = linhas; 
}
function limparCampos(){
    inputNome.value = '';
    inputTel.value='';
}
function guardarQuantContatos() {
    arrayContatos.push(contador);
    contador ++;
}
function atualizarQuantiContatos() {
    let numContatos = '<tr>';
    numContatos+='<td>Total de contatos</td>';
    numContatos+= `<td>${arrayContatos.length}</td>`;
    numContatos += '</tr>'

    document.querySelector('tfoot').innerHTML = numContatos;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    inserirLinhaContato();
    guardarQuantContatos();
    limparCampos();
    atualizarQuantiContatos();
});

//faz com que não se possa inserir no campo texto valores numéricos
inputNome.addEventListener('keypress', function (e) {
    const keyCode = (e.keyCode ? e.keyCode : e.wich);
    if(keyCode >47 && keyCode <58) {
        e.preventDefault();
    }
});

inputTel.addEventListener('keypress', function (e) {
    const keyCode = (e.keyCode ? e.keyCode : e.wich);
    if(keyCode<47 || keyCode>57) {
        e.preventDefault();
    }
});