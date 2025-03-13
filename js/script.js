 // Aquí tu código

const botonAgregar = document.getElementById('agregar'); 
const lista = document.getElementById('lista'); 


botonAgregar.addEventListener('click', function() {
  const nuevoElemento = prompt("Introduce un elemento para la lista:");
  if (nuevoElemento === null || nuevoElemento.trim() === '') {
    return; 
  }
  const li = document.createElement('li'); 
  li.textContent = nuevoElemento; 

  lista.appendChild(li);
});
