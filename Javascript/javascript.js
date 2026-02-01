const menu = document.querySelector('.menu')
const dropdown =document.querySelector('.list')
const icon =document.querySelector('.main-icon')
const exit = document.querySelector('.exit')




//open navigation bar
menu.addEventListener('click', () =>{
    dropdown.style.display = 'flex'
    exit.style.display = 'flex'
    icon.style.display ='none'
    menu.style.display ='none'

  

})

exit.addEventListener('click', () =>{
    dropdown.style.display = 'none'
    exit.style.display = 'none'
    icon.style.display ='flex'
    menu.style.display ='flex'

        
})

const input = document.querySelector('input')
const form = document.querySelector('div').value


console.log(form)
form.innerHTML = input