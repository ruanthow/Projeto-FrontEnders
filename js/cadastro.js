console.log('andrew');

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const rgRegex = /(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$)/;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  nameValidate();
  emailValidate();
  firstPasswordValidate();
  comparePassword();
  rgValidate();
  pesquisarCep();
});

function setError(index) {
  campos[index].style.border = '2px solid red'
  spans[index].style.display = 'block';
}
function removeError(index) {
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

function nameValidate() {
  if (campos[0].value.length < 3) {
    setError(0);
  } else {
    removeError(0);
  }
}

function emailValidate() {
  if (!emailRegex.test(campos[3].value)) {
    setError(3);
  } else {
    removeError(3);
  }
}

function firstPasswordValidate() {
  if (campos[1].value.length < 8) {
    setError(1);
  } else {
    removeError(1);
    comparePassword();
  }
}

function comparePassword() {
  if (campos[1].value == campos[4].value && campos[4].value.length >= 8) {
    removeError(4);
  } else {
    setError(4);
  }
}

function rgValidate() {
  if (!rgRegex.test(campos[2].value)) {
    setError(2);
  } else {
    removeError(2);
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
      setError(5);
    } else {
      removeError(5);
      preencherForm(endereco);
    }
  } else {
    setError(5);
  }
}

document.querySelector('#cep')
  .addEventListener('focusout', pesquisarCep);


