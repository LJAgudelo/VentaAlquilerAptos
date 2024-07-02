// Arreglo de objetos para las card
let popiedadesEnAlquiler = [
    {
        nombre: 'AApartamento en el centro de la ciudad',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: '3 Habitaciones',
        baños: '2 Baños',
        precio: '100 USD',
        smoke: false,
        pets: false,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTab_DLGJsogMQQoYGrtdTRb9nIoL0676QXZw&s'
    },

    {
        nombre: 'Apartamento luminoso con vista al mar',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: '1 Habitacion',
        baños: '1 Baño',
        precio: '4000 USD',
        smoke: true,
        pets: true,
        src: 'https://www.inmobiliariacsc.com/wp-content/uploads/2020/08/alquiler-casas-amoblado-medellin-sabaneta-san-diego-envigado-laureles-metro-constructoras-trivago-frontera-casas-AP06-13-1200x680.jpg'
    },

    {
        nombre: 'Condominio moderno en zona residencial',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: '5 Habitaciones',
        baños: '3 Baños',
        precio: '7500 USD',
        smoke: false,
        pets: true,
        src: 'https://multimedia.metrocuadrado.com/687-M3224336/687-M3224336_1_p.jpg'
    },

    {
        nombre: 'Apartamento en el centro de la ciudad Medellin',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 Habitaciones',
        baños: '2 Baños',
        precio: '2000 USD',
        smoke: false,
        pets: true,
        src: 'https://apartamentosmadridplaza.es/wp-content/uploads/005-TERRACE-9H.jpg'
    },

    {
        nombre: 'Apartamento luminoso con vista al mar Isla de San Andres',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: '3 Habitaciones',
        baños: '3 Baños',
        precio: '2000 USD',
        smoke: true,
        pets: true,
        src: 'https://pics.nuroa.com/arriendo_apartamento_amoblado_tipo_suite_en_laureles_medellin_4800007704285781626.jpg'
    },

    {
        nombre: 'Condominio moderno en zona residencial Apartamentos Estelar',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 Habitaciones',
        baños: '2 Baños',
        precio: '1300 USD',
        smoke: false,
        pets: false,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qenLWerkfYAQgCYdEJGJco7gE7oEnqAO3g&s'
    },

]

// funcion para recorrer cada posicion del arreglo



const vistaTcAlquiler= function(){
    const cards = document.querySelector('.cards');
    let html = '';
    for (let tajeta of popiedadesEnAlquiler) {
        let fumar= "";
        
        // condicion para fumar
        if(tajeta.smoke === true){
            fumar=`<p style="color: green"><i class="fa-solid fa-smoking"></i>Permitido fumar</p>`
        }else{
            fumar= `<p style="color: red"><i class="fa-solid fa-ban-smoking"></i></i>Prohibido fumar</p>`
        }
        let mascotas= "";
        // condicion para mascotas
        if(tajeta.pets === true){
            mascotas=`<p style="color: green"><i class="fa-solid fa-dog"></i>Permitido mascotas</p>`
        }else{
            mascotas= `<p style="color: red"><i class="fa-solid fa-shield-dog"></i></i>Prohibido mascotas</p>`
        }

        html += `
        <div class="cardTarjeta">
            <h3>${tajeta.nombre}</h3>
            <h4>${tajeta.descripcion}</h4>
            <div>
            <i class="fa-solid fa-location-dot"></i>${tajeta.ubicacion}</i>
            </div>
            <hr>
            <div>
            <i class="fa-solid fa-bed"></i>${tajeta.habitaciones}, <i class="fa-solid fa-restroom"></i>${tajeta.baños} </i>
            </div>
            <hr>
            <div>
            <i class="fa-solid fa-comments-dollar"></i>${tajeta.precio}
            </div>            
            <h5>${fumar}</h5>
            <hr>
            <h5>${mascotas}</h5>
            <img src="${tajeta.src}" class="imagenPropiedad">
        </div>
        `;
    }
    cards.innerHTML=html;
}

vistaTcAlquiler();

volverInicio = function(){
    document.querySelector('#inicio').addEventListener('click', function(){
        window.location.href = 'index.html';
    })
}

volverInicio();