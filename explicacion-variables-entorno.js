/*

Explicacion como subir el proyecto:
Las credenciales de la base de datos las tenemos en texto plano, eso no esta bien. Para desarrollo esta bien.

Vamos a leer variables de entornos:

Instalaremos un modulo al proyecto:

npm i dotenv

Creamos en la raiz del proyecto un archivo .env
Ahi colocaremos las variables de entorno.

Para poder leer las variables de entorno de .env tenemos que crear un archivo config.js dentro de src
Aqui importamos el paquete instalado y usando el objeto process vamos a leer las variables de entorno.

Cuando despleguemos en el servidor esos datos del archivo .env los proporciona es donde despleguemos.

Luego importamos en el archivo que vayamos a usar la variable.


*/
