let display = document.getElementById('pantalla')
let pantalla

pantalla = '92x44+1';
pantalla_array = pantalla.split('');
array_filtrado = [];
for (let i in pantalla_array) {
    if (pantalla_array[i] == "x" || pantalla_array[i] == "+" || pantalla_array[i] == "-" || pantalla_array[i] == "/") {
        console.log(`Se ha encontrado el caracter "${pantalla_array[i]}" en la posicion ${i + 1}`)
    } else {
        array_filtrado.push(pantalla_array[i])
    }
}
        
function pulsado(){
    console.log(event)
    console.log(event.toElement.innerHTML)
    display.innerHTML += event.toElement.innerHTML
    pantalla = display.innerHTML
}
function igual() {
    console.log(`Esto es lo que hay en pantalla ${pantalla}`)
}
function borrado() {
    display.innerHTML = '';
}

document.addEventListener('keyup', (ev)=>{
    console.log(ev.keyCode)
})