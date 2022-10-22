console.log('andrew');
const cepInput = document.querySelector('#cep');
const addressInput = document.querySelector('#address');
const neighborhoodInput = document.querySelector('#neighborhood');
const countyInput = document.querySelector('#county');
const ufInput = document.querySelector('#uf');
const form = document.querySelector('#form');

// Validate CEP Input
cepInput.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]|\./;
    const key = String.fromCharCode(e.keyCode);
  
    console.log(key);
  
    console.log(onlyNumbers.test(key));
  
    // allow only numbers
    if (!onlyNumbers.test(key)) {
      e.preventDefault();
      return;
    }
  });

  // Evento to get address
cepInput.addEventListener("keyup", (e) => {
    const inputValue = e.target.value;
  
    //   Check if we have a CEP
    if (inputValue.length === 8) {
      getAddress(inputValue);
    }
  });

  // Get address from API
const getAddress = async (cep) => {
    cepInput.blur();
  
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
  
    const response = await fetch(apiUrl);
  
    const data = await response.json();
  
    console.log(data);
    console.log(data.erro);

    addressInput.value = data.logradouro;
    countyInput.value = data.localidade;
    neighborhoodInput.value = data.bairro;
    ufInput.value = data.uf;

    if (data.erro === "true") {
        form.reset();
        cepInput.value = ("CEP Inválido, tente novamente.");
      }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
});
// Show error and reset form
