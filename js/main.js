const navButtons = document.querySelectorAll('.navbar button');
const sections = document.querySelectorAll('.view-section');


navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        
     
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
     
        document.getElementById(targetId).classList.add('active');
        limpiarFormularios(targetId);
    });
});

function limpiarFormularios(sectionId) {
    const section = document.getElementById(sectionId);
    if(!section) return;
    
    const inputs = section.querySelectorAll('input');
    const errores = section.querySelectorAll('.error-msg');
    const resultados = section.querySelector('.resultados');
    
    inputs.forEach(input => {
        input.value = '';
        input.classList.remove('is-invalid');
    });
    
    errores.forEach(error => error.classList.add('hidden'));
    
    if(resultados) {
        resultados.classList.add('hidden');
    }
}

function validarInput(inputId) {
    const input = document.getElementById(inputId);
    const errorMsg = input.nextElementSibling;
    const valor = parseFloat(input.value);

    if (input.value.trim() === '' || isNaN(valor) || valor <= 0) {
        input.classList.add('is-invalid');
        errorMsg.classList.remove('hidden');
        return null;
    } else {
        input.classList.remove('is-invalid');
        errorMsg.classList.add('hidden');
        return valor;
    }
}

// Función para mostrar resultados
function mostrarResultados(sectionId, exito) {
    const resultados = document.querySelector(`#${sectionId} .resultados`);
    if (exito) {
        resultados.classList.remove('hidden');
    } else {
        resultados.classList.add('hidden');
    }
}

// CÁLCULOS MATEMÁTICOS

// Figuras Planas
function calcularCuadrado() {
    const lado = validarInput('lado-cuadrado');
    if (lado !== null) {
        document.getElementById('res-per-cuadrado').innerText = (4 * lado).toFixed(2);
        document.getElementById('res-area-cuadrado').innerText = (lado * lado).toFixed(2);
        mostrarResultados('cuadrado', true);
    } else {
        mostrarResultados('cuadrado', false);
    }
}

function calcularRectangulo() {
    const base = validarInput('base-rect');
    const altura = validarInput('altura-rect');
    
    if (base !== null && altura !== null) {
        document.getElementById('res-per-rect').innerText = (2 * (base + altura)).toFixed(2);
        document.getElementById('res-area-rect').innerText = (base * altura).toFixed(2);
        mostrarResultados('rectangulo', true);
    } else {
        mostrarResultados('rectangulo', false);
    }
}

function calcularCirculo() {
    const radio = validarInput('radio-circulo');
    if (radio !== null) {
        document.getElementById('res-per-circulo').innerText = (2 * Math.PI * radio).toFixed(2);
        document.getElementById('res-area-circulo').innerText = (Math.PI * Math.pow(radio, 2)).toFixed(2);
        mostrarResultados('circulo', true);
    } else {
        mostrarResultados('circulo', false);
    }
}

//Cuerpos Geométricos
function calcularCubo() {
    const arista = validarInput('arista-cubo');
    if (arista !== null) {
        document.getElementById('res-area-cubo').innerText = (6 * Math.pow(arista, 2)).toFixed(2);
        document.getElementById('res-vol-cubo').innerText = (Math.pow(arista, 3)).toFixed(2);
        mostrarResultados('cubo', true);
    } else {
        mostrarResultados('cubo', false);
    }
}

function calcularCilindro() {
    const radio = validarInput('radio-cil');
    const altura = validarInput('altura-cil');
    
    if (radio !== null && altura !== null) {
        const areaBase = Math.PI * Math.pow(radio, 2);
        const areaLateral = 2 * Math.PI * radio * altura;
        const areaTotal = (2 * areaBase) + areaLateral;
        const volumen = areaBase * altura;
        
        document.getElementById('res-area-cil').innerText = areaTotal.toFixed(2);
        document.getElementById('res-vol-cil').innerText = volumen.toFixed(2);
        mostrarResultados('cilindro', true);
    } else {
        mostrarResultados('cilindro', false);
    }
}

function calcularEsfera() {
    const radio = validarInput('radio-esfera');
    if (radio !== null) {
        document.getElementById('res-area-esfera').innerText = (4 * Math.PI * Math.pow(radio, 2)).toFixed(2);
        document.getElementById('res-vol-esfera').innerText = ((4/3) * Math.PI * Math.pow(radio, 3)).toFixed(2);
        mostrarResultados('esfera', true);
    } else {
        mostrarResultados('esfera', false);
    }
}

document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        this.classList.remove('is-invalid');
        this.nextElementSibling.classList.add('hidden');
    });
});
