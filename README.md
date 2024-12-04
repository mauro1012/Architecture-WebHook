# Guía para Ejecutar el Servidor Webhooks y Realizar Pruebas

## Requisitos Previos
para de comenzar, asegurarnos de tener con los siguientes requisitos:
1. **Node.js** instalado en tu sistema (versión recomendada: >=16.x).
2. **NPM** o **Yarn** instalado como gestor de paquetes.
3. Una terminal o editor de texto con soporte para JavaScript.

---

## Pasos para Ejecutar el Servidor

### 1. Configurar el Proyecto
1. Clona tu repositorio o crea una carpeta nueva:
   ```bash
   git clone <URL del repositorio>
   cd <nombre-del-proyecto>
2. instalamos las dependencias del proyecto:
   ```bash
        npm install express
3. ejecutamos el servidor usando el siguiente comando en el terminal
Tamar en cuanta q toca estar dentro de la carpeta donde se encuentra la clase **server.js**
   ```bash
         node <nombre-del-archivo>.js
4. Abrimos otro cmd y usamos el siguiente comando en el terminal
   ```bash
        node sender.js
5. Siempre antes de iniciar este comando tiene que estar en ejecución el servidor de lo contrario nos salen errores.

6. si todo se ejecuta de manera correcta nos saldrá el siguiente e mensaje en la terminal donde se ejecuta el cliente: 
   ```bash
      const data = {
    event: 'order_created',
    data: {
      order_id: 6565,
      customer: 'Mauricio Correa',
      items: ['Coca cola grande', 'Lonchys de pollo']
    }

7. para finalizar el servidor nos dirigimos al cmd y realizamos la siguiente combinación de teclas **crtl + c** don se este jecutnado la clase server.js