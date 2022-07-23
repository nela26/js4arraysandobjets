const propiedadesJSON = [{ /*1*/
        name: "Casa de campo",
        description: "Un lugar ideal para descansar de la ciudad",
        src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        rooms: 2,
        m: 170
    },
    { /* 2 */
        name: "Casa de playa",
        description: "Despierta tus días oyendo el oceano",
        src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
        rooms: 2,
        m: 130
    },
    { /* 3 */
        name: "Casa en el centro",
        description: "Ten cerca de ti todo lo que necesitas",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        rooms: 1,
        m: 80
    },
    { /* 4 */
        name: "Casa rodante",
        description: "Conviertete en un nómada del mundo sin salir de tu casa",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        rooms: 1,
        m: 6
    },
    { /* 5 */
        name: "Departamento",
        description: "Desde las alturas todo se ve mejor",
        src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
        rooms: 3,
        m: 200
    },
    { /* 6 */
        name: "Mansión",
        description: "Vive una vida lujosa en la mansión de tus sueños ",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        rooms: 5,
        m: 500
    }
];
const btnSearch = document.querySelector('#btnSearch');

const totalPropiedades = document.querySelector('#totalPropiedades');
totalPropiedades.innerHTML = propiedadesJSON.length;
// muestra la cantidad de propiedades filtradas con el metodo .lenght

// Se crea un template para recibir todas las propiedades  
const listadoPropiedades = document.querySelector('.propiedades');
let template = '';

let clear = () => (listadoPropiedades.innerHTML = '');
//limpia el listado

const filtrar = function(prop = propiedadesJSON) {
    clear();
    for (let home of prop) {
        //interpolación - template string, es escribir string y variables juntas con comillas inversas
        template = `
        <div class="propiedad">
        <div class="img" style="background-image: url('${home.src}')"></div>       
        <section>
            <h5>${home.name}</h5>
            <div class="p-content d-flex justify-content-between">
            <p>Cuartos: ${home.rooms}</p>
            <p>Metros: ${home.m}</p>
            </div>
            <p class="my-3">${home.description}</p>
            <button class="btn btn-info ">Ver más</button>
        </section>
        </div>`;
        //  += es concatenar o va sumando en si, por ejemplo sobre cada objeto que son 6 en este caso
        listadoPropiedades.innerHTML += template;
    }
}

btnSearch.addEventListener('click', function() {
    // se definen la variables dentro de la función ya que al hacer click recién se crea las variables
    let cuartos = document.querySelector('#cuartos').value;
    let desde = document.querySelector('#desde').value;
    let hasta = document.querySelector('#hasta').value;

    if (cuartos != '' || desde != '' || hasta != '') {
        const propiedadesFiltradas = propiedadesJSON.filter(
            home => home.rooms >= cuartos &&
            home.m >= desde &&
            home.m <= hasta);

        filtrar(propiedadesFiltradas)


        totalPropiedades.innerHTML = propiedadesFiltradas.length;
        console.log(propiedadesFiltradas);
    } else {
        alert('No pueden haber campos vacíos')
    }
});
filtrar()