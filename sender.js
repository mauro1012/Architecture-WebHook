const axios = require('axios');

// Emular un evento que dispara un webhook
const sendWebhook = async () => {
  const data = {
    event: 'order_created',
    data: {
      order_id: 6565,
      customer: 'Mauricio Correa',
      items: ['Coca cola grande', 'Lonchys de pollo']
    }
  };

  try {
    const response = await axios.post('http://localhost:3000/webhook', data);
    console.log('Respuesta del servidor B:', response.data);
  } catch (error) {
    console.error('Error al enviar el webhook:', error);
  }
};

// Enviar el webhook
sendWebhook();
