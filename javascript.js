const pantalla = document.querySelector(".pantalla"); /*llamar a la pantalla donde se hacen las operaciones*/ 
const botones = document.querySelectorAll(".btn"); /*llamar todos los botones y nos crea un array*/ 

botones.forEach(boton => {  /*recorre el array de botones y llama los botones*/
    boton.addEventListener("click", () => {/*trae el contenido de cada boton y se puede mostrar en pantalla*/
        const botonApretado = boton.textContent;/*se guarda en una varible*/

        if (boton.id === "limpiar") {
            pantalla.textContent = "0";
            return;
        }/*cuando se presiona el boton lo que muestra en la pantalla es 0 sin el return termina la funcion o siu no se pone limpiar en la pantalla por la funcion de agregar */
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }/*el slice toma dos numeros la pocision donde arranca y donde elimina la ultima pocision */
        /*para que no quede vacio se utiliza el if que cuando tenga un solo numero que vuelva a cero si no ingresa al else*/
        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }/*el eval evalua un conjunto de string que tengan operaciones matematicas en un solo string para imprimirlo en la pantalla*/
        /*si se pone una operacion erronea manda el error*/
        /* el try catch se utiliza para que si el try no funciona o manda error entra al catch*/
        
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {/*el if se utiliza para quitar el 0 inicial de la pantalla y agregamos el numero inicial*/
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }/*en el else se le suma a la pantalla cualquier numero que undamos*/
        
    })
})