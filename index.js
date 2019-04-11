const express = require('express'); //Referencia de Express
const http = require('http');	//Referencia al protocolo http
const path = require('path'); //Referencia a la ruta del proyecto 

//Inicializar el servidor
const app = express();
const server= http.createServer(app);		//Crea el servidor

//Establecer la configuración del servidor
app.set('port', process.env.PORT || 3000);	//Se establece el puerto de trabajo

//Establecer las rutas estáticas del proyecto 
app.use(express.static(path.join(__dirname, 'public'))); 

//Iniciar el servidor
server.listen(app.get('port'), () => {
  console.log('Servidor ejecutándose en el puerto 3000');
});
