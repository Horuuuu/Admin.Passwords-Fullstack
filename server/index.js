//BACKEND
const express=require('express');
const app=express()
const mysql=require('mysql')
const cors=require('cors')
const PORT=3001;

const{encrypt,decrypt}=require('./EncryptionHandler')//import


app.use(cors());
app.use(express.json());
//conexion a la base de datos
const db=mysql.createConnection({//objeto con props que define  conexion a la DB
    user:'root',
    host:'localhost',
    password:'chichita2',
    database:'passwordmanager',
})
//ruta inicial
app.post("/addpassword", (req, res) => {//a travez del objeto body pasa datps del front al back
    const { password, title } = req.body;//pasa props y el valor de éstas, el titulo y contraseña escritas en el form
    const hashedPassword=encrypt(password);//variable que encripta antes de insertar en DB
//query
    db.query(//inserta en tabla ,columnas y valores(variables)
        "INSERT INTO passwords (password, title, iv ) VALUES (?,?,?)",// ? son reemplazados por 
        [hashedPassword.password, title,hashedPassword.iv ],//éste arreglo*hashed contraseña y iv
        (err, result) => {//resultado del query
          if (err) {
            console.log(err);
          } else {
            res.send("envio exitoso");
          }
        }
      );
    });
//ruta para tomar datos de la DB y mostrarlos en la parte inferior del frontend
    app.get('/showpasswords',(req,res)=>{//retorna todos las contraseñas
      db.query('SELECT * FROM passwords;',(error,result)=>{
        if(error){
          console.log(error);
        }else{
          res.send(result);//result retorna elementos de la DB
        }
        
      })
    })
    //peticion para la contraseña desencriptada para mostrar en el front
app.post('/decryptpassword',(req,res)=>{//recibe iv
  res.send(decrypt(req.body))//y lo envia desencriptado
})

app.listen(PORT,()=>{
    console.log('SERVER RUNNING servidor funcionando')
})