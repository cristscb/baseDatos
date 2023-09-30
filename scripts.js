document.addEventListener("DOMContentLoaded", () => {
    const bookForm = document.getElementById("bookForm");
  
    bookForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita que el formulario se envíe normalmente
  
      const formData = new FormData(bookForm); // Recopila los datos del formulario
  
      // Convierte los datos a un objeto JSON
      const bookData = {};
      formData.forEach((value, key) => {
        bookData[key] = value;
      });
  
      // Realiza una solicitud POST para guardar el nuevo libro en tu API
      fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(bookData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Libro guardado:", data);
        }).catch((error) => console.error("Error al guardar el libro:", error));
        
    });

    const mostrarElementos=document.getElementById("mostrar");
    mostrarElementos.addEventListener("click",()=>{
        fetch("http://localhost:3000/books") // Reemplaza con la URL de tu API
    .then(response => response.json())
    .then(data => {
        // Iterar sobre los datos y agregarlos al HTML
        data.forEach(book => {
            const listItem = document.createElement("li");
            listItem.textContent = `${book.nombre} - ${book.apellido} - ${book.identificacion}`;
            bookList.appendChild(listItem);
            
        });
    }).catch(error => console.error("Error al obtener datos de la API:", error));
  });

  const limpiar=document.querySelector("#limpiar")
  limpiar.addEventListener("click",()=>{
    document.querySelector("#bookList").innerHTML=" "
  })

})

    



  