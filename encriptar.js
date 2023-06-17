function encriptar() {
    
  let textoEntrada = document.getElementById("textoEntrada").value;
  let textoEncrip = "";
  let cifrado = {a: "i", e: "nter", i: "mes", o: "ber", u: "fat", };

  for (let i = 0; i < textoEntrada.length; i++) {

    let char = textoEntrada[i];

    if (char in cifrado) {

      textoEncrip += cifrado[char];

    } else {

      textoEncrip += char;

    }

  }

  document.getElementById("textoSalida").value = textoEncrip;

}

function desencriptar() {

  let textoEncrip = document.getElementById("textoSalida").value;
  let textoDesencrip = "";
  let descifrado = { i: "a", nter: "e", mes: "i", ber: "o", fat: "u" };

  for (let i = 0; i < textoEncrip.length; i++) {

    let foundMatch = false;

    for (let key in descifrado) {

      let value = descifrado[key];

      if (textoEncrip.slice(i, i + key.length) === key) {

        textoDesencrip += value;
        i += key.length - 1;
        foundMatch = true;

        break;

      }

    }

    if (!foundMatch) {

      textoDesencrip += textoEncrip[i];

    }

  }

  document.getElementById("textoSalida").value = textoDesencrip;

}