
let btnAbrir = document.getElementById('btn-abrir')
let Menu = document.getElementById('menu-lateral')
let btnFechar = document.getElementById('btn-fechar')

 btnAbrir.addEventListener('click', ()=>{  // Botão para abrir o menu lateral
    Menu.classList.add('abrir-menu')

     if(Menu.style.width == '0%' || Menu.style.opacity == 0){
    Menu.style.transition = "all .5s ease"
    Menu.style.width = '53%'
    Menu.style.opacity = 1
    }

else {
    Menu.style.transition = "all .5s ease"
    Menu.style.width = '0%'
    Menu.style.opacity = 0
    }
})

btnFechar.addEventListener('click', ()=>{  // Botão para fechar o menu lateral
if(Menu.style.width == '0%'){
    Menu.style.transition = "all .5s ease"
    Menu.style.width = '53%'
    Menu.style.opacity = 1
    }
else {
    Menu.style.transition = "all .5s ease"
    Menu.style.width = '0%'
    Menu.style.opacity = 0
    }
 })

