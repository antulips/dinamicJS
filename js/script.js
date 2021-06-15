//creo la variable con el contendor padre
const contenedor = document.querySelector('.contenedor')

//creo una función que pida 3 url al usuario y usando el template arme la galería
function galeriaInteractiva() {
    for (let i = 1; i < 4; i++) {
        //pide url para las imágenes y lo almacena en la constante
        const linkPrompt = prompt(`Ingrese la URL de la imagen ${(i)}, por favor.`);

        //introduce la url en el template creando un elemento de la galería para esta iteración
        const template = `
        <div class="tarjeta">
            <a href="${linkPrompt}" target="_blank">
                <img src="${linkPrompt}" class="imagen" alt="imagen-${i}" id="imagen-${i}"/>
            </a>
        </div> 
        `;

        //aniAdo el template como hijo del contenedor.
        //contenedor.appendChild(template); //NO funciona, ¿es porque lo pasa al html como string?
        contenedor.innerHTML += template;
    }
}

//ejecución de la función para crear la galería al cargar la página
galeriaInteractiva();

//1er link: https://i.pinimg.com/736x/d6/0c/7e/d60c7e8983fdbd7c7a27fd42fb3d61ba.jpg
//2do link: https://i.ytimg.com/vi/317jz-PU7Mg/maxresdefault.jpg
//3er imagen: https://www.incimages.com/uploaded_files/image/1920x1080/getty_513189787_110007.jpg

//DEJO COMENTADAS DESDE AQUÍ LAS ETAPAS DE LA CONSIGNA CON SU CORRESPONDIENTE RESPUESTA
//ETAPA 1 - LA HICE EN FORMA DINÁMICA
//captura elementos para modificar la estructura del html
/* const imagenes = document.querySelectorAll('.imagen');
const tarjetas = document.querySelectorAll('.tarjeta') */

//comprobacion
/* console.log(tarjetas);
console.log(imagenes); */

/* tarjetas.forEach((tarjeta, i) => {
    //crea el enlace
    const link = document.createElement('a');
    //agrega la clase
    link.classList.add('rutas-img');

    //coloca los enlaces en el div correspondiente
    tarjeta.appendChild(link);

    //trae de tarjeta el img
    const imagen = tarjeta.querySelector('img');

    //coloca la imagen en el a correspondiente.
    link.appendChild(imagen)
}) */

//ETAPA 2 - 
//ALTERNATIVA 1 - AUNQUE SE PODRÍA HACER TODO EN EL MISMO FOREACH, QUISE INTENTAR MANTENER LA ESTRUCTURA QUE CREAMOS EN LA CLASE

//captura los links creados, esta variable tiene que crearse con posterioridad a la función que añade los 'a' al html.
/* const links = document.querySelectorAll('.rutas-img'); */

//comprobacion
/* console.log(links); */

//crea galería de imágenes
/* imagenes.forEach((imagen, i) => {
    //pide url para las imágenes y lo almacena en la constante
    const urlImagen = prompt(`Ingrese la URL de la imagen ${(i + 1)}, por favor.`);

    //aniade el atributo src a las imágenes a partir de la constante que almacena el retorno del prompkt
    imagen.setAttribute('src', urlImagen);

    //aniade el atributo href al link correspondiente en la iteración
    links[i].setAttribute('href', urlImagen);

    //aniade el atributo target con el valor blank para que se abra en otra pestaña.
    links[i].setAttribute('target', '_blank')
}) */

//ALTERNATIVA 2 - dejar todo en el forEach del primer punto
/* tarjetas.forEach((tarjeta, i) => {
    //crea el enlace
    const link = document.createElement('a');
    //agrega la clase
    link.classList.add('rutas-img');

    //coloca los enlaces en el div correspondiente
    tarjeta.appendChild(link);

    //captura de tarjeta el img
    const imagen = tarjeta.querySelector('img');

    //coloca la imagen en el a correspondiente.
    link.appendChild(imagen)

    //pide url para las imágenes y lo almacena en la constante
    const urlImagen = prompt(`Ingrese la URL de la imagen ${(i + 1)}, por favor.`);

    //aniade el atributo src a la imagen correspondiente de la iteración a partir de la constante que almacena el retorno del prompkt
    imagen[i].setAttribute('src', urlImagen);

    //aniade el atributo href al link correspondiente en la iteración
    links.setAttribute('href', urlImagen);

    //aniade el atributo target con el valor blank para que se abra en otra pestaña.
    links.setAttribute('target', '_blank')
}) */


/* * ETAPA 3
- Nodo padre: div.contenedor
- Nodo hijo repetitivo: div.tarjeta
- Explicación: El template literal debería incluir la creación de un div con clase tarjeta. Este debe contener un anchor hijo con clase rutas-img, el atributo target:_blank y un href que se llene dinámicamente con la variable capturada en el prompt. Por otro lado, este anchor debe ser padre de un elemento img con un atributo src que se complete dinámicamente también, a través del prompt.*/
/* //creo la variable con el contendor padre
const contenedor = document.querySelector('.contenedor')

//creo una función que pida 3 url al usuario y usando el template arme la galería
function galeriaInteractiva() {
    for (let i = 1; i < 4; i++) {

        //pide url para las imágenes y lo almacena en la constante
        const linkPrompt = prompt(`Ingrese la URL de la imagen ${(i)}, por favor.`);

        //introduce la url en el template creando un elemento de la galería para esta iteración
        const template = `
        <div class="tarjeta">
            <a href="${linkPrompt}" target="_blank">
                <img src="${linkPrompt}" class="imagen" alt="imagen-${i}" id="imagen-${i}"/>
            </a>
        </div> 
        `;

        //anido el template como hijo del contenedor.
        //contenedor.appendChild(template); //NO funciona

        contenedor.innerHTML += template;
    }
}

//ejecución de la función para crear la galería al cargar la página
galeriaInteractiva(); */




