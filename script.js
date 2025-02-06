function mostrarImagen(opcion) {
    let imagen = document.getElementById("image");
    let mensaje = document.getElementById("mensaje");
    let result = document.getElementById("result");
    // Aquí defines las imágenes que quieres mostrar
    let imagenes = {
        img1: "imagenes/img1.jpg",  // Ruta correcta a la imagen 1
        img2: "imagenes/img2.png",  // Ruta correcta a la imagen 2
        img3: "imagenes/img3.jpg"   // Ruta correcta a la imagen 3
    };
    // Mostrar la imagen correspondiente
    imagen.src = imagenes[opcion];
    mensaje.textContent = "Has seleccionado " + opcion.replace("img", "Opción ") + ".";
    // Mostrar el resultado
    result.style.display = "block";
}
