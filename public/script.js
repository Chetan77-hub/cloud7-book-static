async function loadBooks() {
  try {
    const response = await fetch('/api/books');
    const books = await response.json();

    const list = document.getElementById("book-list");
    list.innerHTML = "<ul>";

    books.forEach(book => {
      const availability = book.available ? 'Available' : 'Out of Stock';
      const cssClass = book.available ? 'available' : 'unavailable';
      list.innerHTML += `
        <li>
          <strong>${book.title}</strong> by ${book.author}<br>
          Rating: ${book.rating} |
          <span class="${cssClass}">${availability}</span>
        </li>`;
    });

    list.innerHTML += "</ul>";
  } catch (e) {
    document.getElementById("book-list").textContent = "Failed to load books.";
    console.error(e);
  }
}

window.onload = loadBooks;

