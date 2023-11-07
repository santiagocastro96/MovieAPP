<template>
  <body>
    <div class="container">
        <div class="registration-container">
            <h1>Registro</h1>
            <form class="registration-form">
                <div class="input-group">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required>
                </div>
                <div class="input-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required>
                </div>
                <div class="input-group">
                    <label for="contrasena">Contraseña:</label>
                    <input type="password" id="contrasena" name="contrasena" placeholder="Tu contraseña" required>
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    </div>
</body>
</template>

<script setup>

</script>

<style scoped>
body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    text-align: center;
}

.registration-container {
    max-width: 350px;
    margin: 0 auto;
}

h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
}

.registration-form {
    text-align: left;
}

.input-group {
    margin: 10px 0;
}

label {
    display: block;
    font-weight: bold;
    color: #555;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 5px;
}

button {
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #0056b3;
}
</style>