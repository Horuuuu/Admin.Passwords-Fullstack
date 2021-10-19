
import './App.css';
import {useState,useEffect}from 'react';
import Axios from 'axios';

function App() {
  const [password,setPassword]=useState('');//estado de la contraseña
  const [title,setTitle]=useState('');//estado del titulo del sitio
  const [passwordList,setPasswordList]=useState([]);//estado para mostrar la lista de  contraseñas y sitios


//useffect mustra inmediatamente el resultado de la peticion al cargarse el sitio o refrescarse
useEffect(()=>{
Axios.get('http://localhost:3001/showpasswords').then((response)=>{
  setPasswordList(response.data)
})
},[])
//hace peticion de la ruta addpassword
  const addPassword = () => {
    Axios.post("http://localhost:3001/addpassword", {
      password: password,//este es el body
      title: title,
    });
  };
  //peticion al backend para desencriptar la contraseña 
const decryptPassword=(encryption)=>{
Axios.post("http://localhost:3001/decryptpassword",{
  password:encryption.password,
  iv:encryption.iv
}).then((response)=>{
  setPasswordList(passwordList.map((value)=>{//para mostrar la contraseña en lugar del titulo
    return  value.id == encryption.id//si cada elemrnto el id es igual al encriptado devuelve
    ? {
        id: value.id,
        password: value.password,//contraseña
        title: response.data,//response.data es la version desencriptada
        iv: value.iv,
      }
    : value;//sino devuelve el valor
})
);
  })
}

  return (
    <div className="App">
      <img src="../img/key.png"   /> <h1>Administrador de contraseñas </h1> <img src="../img/lock.png"   />
      <div className="AddingPassword">
        <input type="text" placeholder="...Contraseña" 
        onChange={(event=>setPassword(event.target.value))}/>

        <input type="text" placeholder="...Sitio Web" 
        onChange={(event=>setTitle(event.target.value))}
        />

        <button onClick={addPassword}>Agregar Contraseña</button>

      </div>
      <div className="passwords">
        {passwordList.map((value,key)=>{//
          return <div className="password" onClick={() => {
            decryptPassword({
              password: value.password,
              iv: value.iv,
              id: value.id,
            });
          }}
          key={key} >
            <h4>{value.title}</h4></div>

        })}

      </div>
    </div>
  );
}

export default App;
