console.log('andrew');

let senha = document.getElementById('senha');
let senhaC = document.getElementById('confirmarSenha');

function validarSenha() {
  if (senha.value != senhaC.value) {
    senhaC.setCustomValidity("Senhas diferentes!");
    senhaC.reportValidity();
    return false;
  } else {
    senhaC.setCustomValidity("");
    return true;
  }
}


const preencherForm = (endereco) => {
  document.querySelector('#rua').value = endereco.logradouro;
  document.querySelector('#bairro').value = endereco.bairro;
  document.querySelector('#municipio').value = endereco.localidade;
  document.querySelector('#uf').value = endereco.uf;
};

const limparForm = (endereco) => {
  document.querySelector('#rua').value = '';
  document.querySelector('#bairro').value = '';
  document.querySelector('#municipio').value = '';
  document.querySelector('#uf').value = '';
};

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length === 8 && eNumero(cep);

const pesquisarCep = async () => {

  limparForm();

  const cep = document.querySelector('#cep').value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  if (cepValido(cep)) {
    const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty('erro')) {
      document.querySelector('#cep').value = 'Por favor, insira um CEP válido.'
    } else {
      preencherForm(endereco);
    }
  } else {
    document.querySelector('#cep').value = 'Por favor, insira um CEP válido.'
  }
}

document.querySelector('#cep')
  .addEventListener('focusout', pesquisarCep);


