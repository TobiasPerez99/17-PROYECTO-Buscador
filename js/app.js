//variables

const resultado = document.querySelector('#resultado');


//documentos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
})


//functions

function mostrarAutos() {
    autos.forEach(auto => {
        const { marca, modelo, year, precio, puertas, color, transmision } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = ` Marca:  ${marca} Modelo: ${modelo} Año:  ${year} Precio: ${precio} Puertas: ${puertas} Color: ${color} Transmision: ${transmision}`

        resultado.appendChild(autoHTML);
    });
}