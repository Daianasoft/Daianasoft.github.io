const imagenes=document.querySelectorAll('.img-galeria' )
const imageneslight=document.querySelectorAll( '.agregar-imagen' )
const contenedorlight = document.querySelectorAll ( '.daiana2' )


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute( 'src'))
        
    } )
})

const aparecerImagen = ( imagen)=>{
    imageneslight.src=imagen;
}