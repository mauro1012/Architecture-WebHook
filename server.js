const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de la solicitud como JSON
app.use(bodyParser.json());

// Ruta para recibir el webhook
app.post('/webhook', (req, res) => {
  console.log('Webhook recibido:', req.body);
  
  // Hacer algo con los datos recibidos
  if (req.body.event === 'order_created') {
    console.log('Orden creada con ID:', req.body.data.order_id);
  }
  
  // Responder al emisor del webhook
  res.status(200).send('Webhook recibido correctamente');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor de Webhook ejecutándose en http://localhost:${port}`);
});
