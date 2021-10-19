# Admin.Passwords-Fullstack
Administrador de contraseñas con React ,Node ,Express y Mysql

<p>React Js para Frontend,Node Js Y Express para (crear api)Backend Y Mysql para guardar datos</p>
Proyecto en dos carpetas client para react app y server para node y express.
<p>Caracteristicas:agrega a la base de datos y tambien elimina contraseñas ,encripta y desencripta la contraseña con <strong>Cripto</strong> de Node Js,muestra
debajo del formulario el nombre del sitio y clickeanodolo la contraseña desencriptada.</p>

<p>El punto de entrada al servidor es el index.js.Axios para las peticiones a la api.</p>
Úse el evento onchange con una funcion que capture todo lo que cambiarara en el formulario.

<p>El metodo map para que por cada elemnto de la  lista de contraseñas retorne el valor y el titulo del sitio que corresponda a una contraseña
y se muestre en la parte inferior del sitio.</p>

Base de datos con una tabla:
|id|password|titulo1|iv|
|--|--------|-------|--|

Para ejecutar desde el directorio del cliente yarn start y tambien para ejecutar el servidor desde el directorio server npm start.Cambiar 
contraseña de la configuracion de mysql en index.js y copiar archivo sql de la carpeta db.
