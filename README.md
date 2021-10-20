# Admin.Passwords-Fullstack:lock:
Administrador de contraseñas con React ,Node ,Express y Mysql

<p>React Js para Frontend,Node Js Y Express para (crear api)Backend Y Mysql para guardar datos</p>
Proyecto en dos carpetas client para react app y server para node y express.
<p>Caracteristicas:agrega a la base de datos y tambien elimina contraseñas ,encripta:key: y desencripta:unlock: la contraseña con <strong>Cripto</strong> de Node Js,muestra
debajo del formulario el nombre del sitio y clickeanodolo la contraseña desencriptada:closed_lock_with_key:.</p>

<p>El punto de entrada al servidor es el index.js.Axios para las peticiones a la api.</p>
Úse el evento onchange con una funcion que capture todo lo que cambiara en el formulario.

<p>El metodo map para que por cada elemento de la  lista de contraseñas, retorne el valor y el titulo del sitio que corresponda a una contraseña
y se muestre en la parte inferior del sitio.</p>

<img src="client/public/img/password.jpg" >

Base de datos con una tabla:
|id|password|titulo|iv|
|--|--------|-------|--|

<p>Comentarios en el codigo:clipboard:</p>
Para ejecutar desde el directorio del cliente ,yarn start y para ejecutar el servidor desde el directorio server, npm start.Cambiar 
contraseña de la configuracion de mysql en index.js y copiar archivo sql de la carpeta db.


<img src="client/public/img/stack_full.jpg" height="100" width="390">
