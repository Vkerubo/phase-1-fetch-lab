function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

function  fetchBooks(){ 
  // To pass the tests, don't forget to return your fetch! 
   
  // Sending a fetch request 
  const fetchGame = fetch('https://anapioficeandfire.com/api/books'); 
  return fetchGame.then(res => {return res.json()}).then(data => {renderBooks(data)}) 
} 
   
  function renderBooks(books) { 
   const main = document.querySelector('main'); 
   books.forEach(book => { 
     const h2 = document.createElement('h2'); 
     h2.innerHTML = book.name; 
     main.appendChild(h2); 
    }); 
  } 
   
  document.addEventListener('DOMContentLoaded', function() { 
   fetchBooks(); 
  });
