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
    mostrarAutos(autos);
    cargarSelect();
    filtrar_auto();

})

marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    filtrar_auto();
});

year.addEventListener('change', (e) => {
    datosBusqueda.year = Number(e.target.value);
    filtrar_auto();
});
minimo.addEventListener('change', (e) => { datosBusqueda.minimo = e.target.value;
    filtrar_auto(); })

maximo.addEventListener('change', (e) => { datosBusqueda.maximo = e.target.value; 
    filtrar_auto(); 
})

puertas.addEventListener('input', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);

    filtrar_auto();
});
transmision.addEventListener('change', (e) => { datosBusqueda.transmision = e.target.value; 
    filtrar_auto();
})

color.addEventListener('change', (e) => { datosBusqueda.color = e.target.value; 
    
    filtrar_auto();
})

//functions

function mostrarAutos(autos) {

    limpiarHTML();

    autos.forEach(autos => {
        const { marca, modelo, year, precio, puertas, color, transmision } = autos;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = ` Marca:  ${marca} Modelo: ${modelo} Año:  ${year} Precio: ${precio} Puertas: ${puertas} Color: ${color} Transmision: ${transmision}`

        resultado.appendChild(autoHTML);
        
    });
}

function limpiarHTML(){
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
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
    const resultado = autos.filter(filtrar_marca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if (resultado.length) {
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
    
}

function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}

function filtrar_marca(auto) {
    const { marca } = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    } else {
        return auto;
    }
}


function filtrarYear(auto) {
    if (datosBusqueda.year) {
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }

    return auto;
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }

    return auto;
}

function filtrarPuertas(auto) {
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    } 
    return auto;
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    } 
    return  auto;
}