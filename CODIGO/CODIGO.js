function converter() {
  const textoInput = document.getElementById('texto');
  const tipoConversaoInput = document.getElementById('tipoConversao');
  const resultadoDiv = document.getElementById('resultado');

  const texto = textoInput.value.trim();
  const tipoConversao = tipoConversaoInput.value;

  if (texto === "") {
    alert("😡POR FAVOR, DIGITE ALGUM TEXTO!");
    return;
  }

  let resultado = '';

  if (tipoConversao === 'binario') {
    resultado = texto.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
  } else {
    const binarios = texto.split(' ');
    resultado = binarios.map(binario => String.fromCharCode(parseInt(binario, 2))).join('');
  }

  resultadoDiv.innerText = resultado;
  resultadoDiv.style.display = 'block';
}

function copiar() {
  const resultadoDiv = document.getElementById('resultado');
  const copiarMensagem = resultadoDiv.innerText;

  if (copiarMensagem === "") {
      alert("😡NADA PARA COPIAR!");
      return;
  }

  navigator.clipboard.writeText(copiarMensagem)
      .then(() => {
          const mensagem = document.createElement('div');
          mensagem.textContent = "COPIADO PARA A ÁREA DE TRANSFERÊNCIA!";
          mensagem.style.color = "white";
          document.getElementById('copiadoMensagem').appendChild(mensagem);

          setTimeout(() => {
              mensagem.remove();
          }, 3000);
      })
      .catch(err => console.error('Erro ao copiar: ', err));
}

function limpar() {
  const textoInput = document.getElementById('texto');
  const tipoConversaoInput = document.getElementById('tipoConversao');
  const resultadoDiv = document.getElementById('resultado');
  const copiadoMensagem = document.getElementById('copiadoMensagem');

  textoInput.value = '';
  tipoConversaoInput.value = 'binario';
  resultadoDiv.innerText = '';
  resultadoDiv.style.display = 'none';
  copiadoMensagem.innerHTML = ''; 
}
