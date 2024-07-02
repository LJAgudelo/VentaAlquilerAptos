// Arreglo de objetos para las card
let popiedadesEnVenta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: '4 Habitaciones',
        baños: '4 Baños',
        precio: '5000 USD',
        smoke: false,
        pets: false,
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60'
    },

    {
        nombre: 'Apartamento acogedor en la montaña',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: '2 Habitaciones',
        baños: '1 Baño',
        precio: '6000 USD',
        smoke: true,
        pets: true,
        src: 'https://website-aa-assets.s3.amazonaws.com/MLSPropertiesPhotos/245608/apartamento-para-venta-en-medellin-poblado_l01.jpg'
    },

    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: '3 Habitaciones',
        baños: '3 Baños',
        precio: '3500 USD',
        smoke: false,
        pets: true,
        src: 'https://website-aa-assets.s3.amazonaws.com/MLSPropertiesPhotos/242880/apartamento-para-venta-en-medellin-poblado_l01.jpg'
    },

    {
        nombre: 'Apartamento en el centro de la ciudad',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 Habitaciones',
        baños: '2 Baños',
        precio: '7000 USD',
        smoke: false,
        pets: true,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7p3DGonf6ldvOxUx0f62Rnh3pWJvX6I5gQ&s'
    },

    {
        nombre: 'Apartamento luminoso con vista al mar',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: '3 Habitaciones',
        baños: '3 Baños',
        precio: '8000 USD',
        smoke: true,
        pets: true,
        src: 'https://pics.nuroa.com/en_venta_apartamento_cedritos_lisboa_1210005714738994070.jpg'
    },

    {
        nombre: 'Condominio moderno en zona residencial',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 Habitaciones',
        baños: '2 Baños',
        precio: '4300 USD',
        smoke: false,
        pets: true,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3QBGHoecMSx1FNY0tZGFJhBaHxIhCJL4wXbe_4dcdQsPvdlwBgOJcbAtdXxtS1HEeMA&usqp=CAU'
    },

]

// funcion para recorrer cada posicion del arreglo



const vistaTcVEnta= function(){
    const cards = document.querySelector('.cards');
    let html = '';
    for (let tajeta of popiedadesEnVenta) {
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

vistaTcVEnta();

volverInicio = function(){
    document.querySelector('#inicio').addEventListener('click', function(){
        window.location.href = 'index.html';
    })
}

volverInicio();