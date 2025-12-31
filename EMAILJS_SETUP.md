# Configuración de EmailJS para Prissma Café

## Pasos para Activar el Envío de Formularios

### 1. Crear Cuenta en EmailJS (Gratis)
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" y crea una cuenta gratuita
3. Verifica tu correo electrónico

### 2. Configurar el Servicio de Email
1. En el dashboard, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de email (Gmail recomendado)
4. Conecta tu cuenta de Gmail
5. Copia el **Service ID** (ejemplo: `service_abc123`)

### 3. Crear una Plantilla de Email
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Usa esta plantilla:

```
Asunto: Nuevo mensaje de contacto - {{from_name}}

Mensaje de: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}
```

4. Guarda y copia el **Template ID** (ejemplo: `template_xyz789`)

### 4. Obtener tu Public Key
1. Ve a "Account" > "General"
2. Copia tu **Public Key** (ejemplo: `abcdefg123456`)

### 5. Actualizar el Código

Abre `index.html` y reemplaza en la línea ~78:

```javascript
emailjs.init({
  publicKey: "TU_PUBLIC_KEY_AQUI", // Pega tu Public Key
});
```

Abre `js/script.js` y reemplaza en la línea ~127:

```javascript
emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', {
```

### 6. Probar el Formulario
1. Abre `index.html` en tu navegador
2. Ve a la sección "Contacto"
3. Llena el formulario y envía
4. Deberías recibir el email en tu bandeja de entrada

---

## Límites del Plan Gratuito
- **200 emails/mes** (suficiente para empezar)
- Si necesitas más, puedes actualizar a un plan de pago

## Alternativa: Formspree
Si prefieres no usar EmailJS, puedes usar [Formspree](https://formspree.io/):

```html
<form action="https://formspree.io/f/TU_FORM_ID" method="POST">
  <!-- campos del formulario -->
</form>
```

---

**¡Listo!** Tus formularios ahora enviarán correos reales.
