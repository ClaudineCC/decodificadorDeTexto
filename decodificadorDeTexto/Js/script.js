

alert("Bem vindo! Use o campo abaixo para escrever. Serão aceitos somente letras minúsculas e sem acento.");


const chave =3;


function criptografar(){
    const textoA= document.getElementById('ladoA').value;
    const textoB = cifrar(textoA, chave);
    document.getElementById('ladoB').value = textoB;
}


function copiarTexto(){
    const campoB = documentt.getElementById('ladoB');
    campoB.select();
    document.execCommand('copy');
}

function descriptografar(){
    const textoA= document.getElementById('ladoB').value;
    const textoB = cifrar(textoB, chave);
    document.getElementById('ladoA').value = textoA;

}


function cifrar(texto, chave) {
    return texto.split('').map(caracter => {
        const codigo = caracter.charCodeAt(0);
        if (codigo >= 65 && codigo <= 90) {
            return String.fromCharCode(((codigo - 65 + chave) % 26) + 65);
        } else if (codigo >= 97 && codigo <= 122) {
            return String.fromCharCode(((codigo - 97 + chave) % 26) + 97);
        } else {
            return caracter;
        }
    }).join('');
}

function decifrar(texto, chave) {
    return texto.split('').map(caracter => {
        const codigo = caracter.charCodeAt(0);
        if (codigo >= 65 && codigo <= 90) {
            return String.fromCharCode(((codigo - 65 - chave + 26) % 26) + 65);
        } else if (codigo >= 97 && codigo <= 122) {
            return String.fromCharCode(((codigo - 97 - chave + 26) % 26) + 97);
        } else {
            return caracter;
        }
    }).join('');
}










// // Função para criptografar usando cifra de César

//  function criptografar() {
//      let texto = document.getElementById("texto").value;
//      let resultado = " ";   // campo para receber resultado
//      let deslocar = 3;         // Exemplo de deslocamento, pode ser alterado


//      for (i = 0; i < texto.length; i++) {
//          let retorno = texto.charCodeAt(i);

      

// // Aplica o deslocamento  de tres casas apenas em letras minúsculas sem acentos
//          if (retorno >= 97 && retorno <= 122) {
//              resultado += String.fromCharCode((retorno - 97 + deslocar) % 26 + 97);
//          } else {
//              resultado += texto.charAt(i);
//          }
//      }


    

               
// // Função para descriptografar usando cifra de César

//      document.getElementById("textoResult").value = resultado;
//      document.getElementById("imagemResultado").style.display = "none";
//      document.getElementById("textoResult").style.display = "block";
//  }








//  function descriptografar() {
//      let textoCriptografado = document.getElementById("textoResult").value;
//      let resultado = " ";   //campo para receber resultado
//      let deslocar= 3;


// // Deslocamento deve ser o mesmo usado na criptografia

//      for (i = 0; i < textoCriptografado.length; i++) {
//          let retorno = textoCriptografado.charCodeAt(i);


        
//          // Aplica o deslocamento inverso para descriptografar
//          if (retorno >= 97 && retorno <= 122) {
//              resultado += String.fromCharCode((retorno - 97 - deslocar + 26) % 26 + 97);
//          } else {
//              resultado += textoCriptografado.charAt(i);
//          }
//      }

//      document.getElementById("texto").value = resultado;
//  }








//  function copiarTexto() {
    
//      // Seleciona o elemento de input
//      var input = document.getElementById('resultado');

//      // Seleciona o texto dentro do elemento de input
//      input.select();
//      input.setSelectionRange(0, 99999); // Para dispositivos móveis

//      // Copia o texto selecionado para a área de transferência
//      document.execCommand('copy');

// // Feedback visual (opcional)
//  alert('Texto copiado para a área de transferência: ' + input.value);
//  }



















    
// // Função para criptografar usando a cifra de César
// function criptografar(texto, deslocamento = 3) {
//     return texto.split('').map(char => {
//       const charCode = char.charCodeAt(0);
  
//       // Verifica se o caractere é uma letra minúscula
//       if (charCode >= 97 && charCode <= 122) {
//         return String.fromCharCode((charCode - 97 + deslocamento) % 26 + 97);
//       }
  
//       // Retorna o caractere original se não for uma letra
//       return char;
//     }).join('');
//   }


//   // Função para descriptografar usando a cifra de César
//   function descriptografar(texto, deslocamento = 3) {
//     return criptografar(texto, (26 - deslocamento) % 26);
//   }
  
//   // Função para criptografar o texto inserido na textarea
//   function criptografarTexto() {
//     const texto = document.getElementById('texto').value;
//     const textoCriptografado = criptografar(texto);
//     document.getElementById('textoResult').innerText = textoCriptografado;
//   }


//   // Função para descriptografar o texto inserido na textarea
//   function descriptografarTexto() {
//     const texto = document.getElementById('texto').value;
//     const textoDescriptografado = descriptografar(texto);
//     document.getElementById('textoResult').innerText = textoDescriptografado;
//   }

// //função para copiar o texto
//   function copiarTexto() {
//     const texto = document.getElementById('textoResult').innerText;
//     navigator.clipboard.writeText(texto).then(() => {
//       alert('Texto copiado para a área de transferência!');
//     }).catch(err => {
//       console.error('Erro ao copiar texto: ', err);
//     });
//   }
  


