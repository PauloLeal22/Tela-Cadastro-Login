//Array que recebe os inputs de "cadastro.html"
let dados = [
    document.querySelector('input#nome'),
    document.querySelector('input#sobrenome'),
    document.querySelector('input#email'),
    document.querySelector('input#senha'),
    document.querySelector('input#rSenha')
]

let botao = document.querySelector('input#botao')
botao.addEventListener('click', validar)

//Função que verifica se os inputs estão preenchidos 
function validar(){
    if(dados[0].value == '' || dados[1].value == '' || dados[2].value == '' || dados[3].value == '' || dados[4].value == ''){
        Swal.fire({
            icon: 'error',
            title: 'Preencha os campos necessários!',
          })
    }else if(dados[3].value !== dados[4].value){
        Swal.fire({
            icon: 'error',
            title: 'As senhas não estão idênticas!',
          })
    }else{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cadastro realizado com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
    }
}