function login() {
    // Obtener valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar el formulario 
    if (username === '' || password === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // agregar la lógica de autenticación con Firebase Authentication y lo q diga mi novio awadapollas

    // alerta para mostrar el inicio de sesión
    alert(`Inicio de sesión exitoso para ${username}`);
}

document.addEventListener('DOMContentLoaded', () => {
    // agregar aquí la lógica de inicialización
});
