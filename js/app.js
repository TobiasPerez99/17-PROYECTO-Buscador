//variables
const resultado = document.querySelector('#resultado');
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

const max = new Date().getFullYear();
const min = max - 10;


//documentos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
    cargarSelect();
    filtrar_auto();

})

marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    filtrar_auto();
});

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    // filtrarYear();
})

minimo.addEventListener('change', e => { datosBusqueda.minimo = e.target.value; })
maximo.addEventListener('change', e => { datosBusqueda.maximo = e.target.value; })
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    console.log(datosBusqueda);
    filtrarPuertas();
})
transmision.addEventListener('change', e => { datosBusqueda.transmision = e.target.value; })
color.addEventListener('change', e => { datosBusqueda.color = e.target.value; })

//functions

function mostrarAutos() {
    autos.forEach(autos => {
        const { marca, modelo, year, precio, puertas, color, transmision } = autos;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = ` Marca:  ${marca} Modelo: ${modelo} Año:  ${year} Precio: ${precio} Puertas: ${puertas} Color: ${color} Transmision: ${transmision}`

        resultado.appendChild(autoHTML);
    });
}

function cargarSelect() {
    for (let i = max; i >= min; i--) {

        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);

    }
}


function filtrar_auto() {
    const resultado = autos.filter(filtrar_marca).filter(filtrarPuertas);

    console.log(resultado);
}

function filtrar_marca(autos) {
    const { marca } = datosBusqueda;
    if (marca) {
        return autos.marca === marca;
    } else {
        return autos;
    }
}


function filtrarYear(autos) {
    const { year } = datosBusqueda;
    if (year) {
        return autos.year === year;
    } else {
        return autos;
    }
}

function filtrarPuertas(autos) {
    const { puertas } = datosBusqueda;
    if (puertas) {
        return autos.puertas === puertas;
    } else {
        return autos;
    }
}