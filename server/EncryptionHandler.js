const crypto = require("crypto");//libreria de node
const secret = "pppppppppppppppppppppppppppppppp";//variable para mantener contraseña secreta,tiene 22 caracters
//funcion para encriptar
const encrypt = (password) => {//argumento contraseña
  const iv = Buffer.from(crypto.randomBytes(16));//iv,identificador de encriptado*genera una encriptacio de 16 digitos
  //variable de cifrado,con tres argumentos,1-el algoritmo de cifrado,2-convierte secreto en buffer y 3-el identificador iv
  const cipher = crypto.createCipheriv("aes-256-ctr", Buffer.from(secret), iv);
//variable con el resultado de la encriptacion
  const encryptedPassword = Buffer.concat([//dos argumentos
    cipher.update(password),//valor de la contraseña 
    cipher.final(),//contraseña encriptada
  ]);

  return {
    iv: iv.toString("hex"),
    password: encryptedPassword.toString("hex"),//numeros y caracteres
  };
};
//funcion para desencriptar
const decrypt = (encryption) => {//argumento contraseña encriptada
  const decipher = crypto.createDecipheriv(
    "aes-256-ctr",//tres argumentos
    Buffer.from(secret),
    Buffer.from(encryption.iv, "hex")
  );
//variable final de la contraseña desencriptada
  const decryptedPassword = Buffer.concat([
    decipher.update(Buffer.from(encryption.password, "hex")),
    decipher.final(),
  ]);

  return decryptedPassword.toString();
};

module.exports = { encrypt, decrypt };//para usar en index.js