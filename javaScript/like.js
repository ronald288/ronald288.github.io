const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');

// Reemplaza con la URL de tu JSONBin y tu clave de API
const binUrl = 'https://api.jsonbin.io/v3/b/673f9231acd3cb34a8ac7064'; // Cambia <BIN_ID> por el ID de tu bin
const apiKey = 'Bearer $2a$10$o3bDspJpYpavhBYZuhX2e.cx1NwKrczWkDqdshsy.aA5vFxh5IHZe'; // Cambia <YOUR_API_KEY> por tu clave de API

let userLiked = false;

// Obtener la cantidad de "me gusta" al cargar la página
async function getLikes() {
  try {
    const response = await fetch(binUrl, {
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': '$2a$10$YR0NFd2B63x.mMAWDw7g3.M/4GeWffDvaCdh/Hb8eBNRB9dWfDTJC'
      }
    });
if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  likeCount.textContent = data.record.likes + ` Me gusta`; // Mostrar el valor inicial
} catch (error) {
  console.error('Error al obtener los datos:', error);
}
}

// Incrementar los "me gusta" y actualizar en JSONBin
async function updateLikes(change) {
    try {
//Obtener el número actual de "me gusta"
     const response = await fetch(binUrl, {
       headers: {
         'Content-Type': 'application/json',
         'X-Master-Key': '$2a$10$YR0NFd2B63x.mMAWDw7g3.M/4GeWffDvaCdh/Hb8eBNRB9dWfDTJC'
       }
     });
     if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
    const data = await response.json();
    let currentLikes = data.record.likes;

// Incrementar y enviar el nuevo valor
    currentLikes += change;

     await fetch(binUrl, {
       method: 'PUT',
       headers: {
         'Content-Type': 'application/json',
         'X-Master-Key': '$2a$10$YR0NFd2B63x.mMAWDw7g3.M/4GeWffDvaCdh/Hb8eBNRB9dWfDTJC'
       },
       body: JSON.stringify({ likes: currentLikes })
 });

// Actualizar el valor en la página
    likeCount.textContent = currentLikes + ` Me gusta`;
  } catch (error) {
     console.error('Error actualizando los datos:', error);
  }
 }

// Llamar la función al hacer clic en el botón
likeButton.addEventListener('click', () => {
    if (userLiked) {
      updateLikes(-1); // Resta un "me gusta"
      likeButton.textContent = 'Me Gusta';
      likeButton.classList.remove(liked);
    } else {
      updateLikes(1); // Suma un "me gusta"
      likeButton.textContent = 'Ya no me gusta';
      likeButton.classList.add(liked);
    }
  
    // Cambiar el estado del botón
    userLiked = !userLiked;
  });

// Cargar los "me gusta" al iniciar la página
getLikes();
