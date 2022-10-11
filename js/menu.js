const hamburguer=document.querySelector('.hamburguer');
const fabi=document.querySelector('.fabi');


console.log(fabi)
console.log(hamburguer)


hamburguer.addEventListener('click',()=>{
   fabi.classList.toggle("spread")
} )

window.addEventListener('click',  e=>{
        if (fabi.classList.contains('spread')
        && e.target !=fabi && e.target !=hamburguer){
                fabi.classList.toggle("spread")
        }
        


    } )