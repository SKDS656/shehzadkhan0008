document.addEventListener('DOMContentLoaded', function () {
    // Fetch book categories from books.json and populate the dropdown
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            const categoriesDropdown = document.getElementById('categoriesDropdown');
            data.forEach(category => {
                const categoryItem = document.createElement('a');
                categoryItem.classList.add('dropdown-item');
                categoryItem.href = '#'; // Add actual link or category page
                categoryItem.textContent = category.name;
                categoriesDropdown.appendChild(categoryItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    // Fetch book details and populate the Book Details section
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            const bookDetailsContainer = document.getElementById('bookDetails');
            data.forEach(book => {
                // Create a card element
                const card = document.createElement('div');
                card.className = 'col-md-4 mb-4';

                // Add book details to the card
                card.innerHTML = `
                    <div class="card">
                        <img src="${book.cover}" class="card-img-top" alt="${book.title}">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text">${book.author}</p>
                            <p class="card-text">$${book.price}</p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                            <a href="#" class="btn btn-secondary">View Cart</a>
                        </div>
                    </div>
                `;

                // Append the card to the bookDetailsContainer
                bookDetailsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
        // Example function to calculate total amount from cart items
function calculateTotalAmountFromCartItems() {
    // Fetch cart items from local storage or an API
    // ...

    // Calculate total amount based on pricing details fetched from books.json
    let totalAmount = 0;
    // ...

    return totalAmount;
}
function addToCart(event) {
    // You can implement the logic to add the selected item to the cart
    // For now, let's log a message
    const cardElement = event.target.closest('.card');
    const bookTitle = cardElement.querySelector('.card-title').textContent;
    console.log(`${bookTitle} added to cart!`);
}

});
