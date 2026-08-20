const data = [
    { image: "book.jpg", price: "₹500/-" },
    { image: "book2.jpg", price: "₹600/-" },
    { image: "book3.jpg", price: "₹700/-" }
];

function Book(book) {
    const child = document.createElement("div");
    child.setAttribute("class", "card");

    const image = document.createElement("img");
    image.setAttribute("src", book.image);
    image.setAttribute("alt", "Book Image");

    const h2 = document.createElement("h2");
    h2.innerText = "Price : " + book.price;

    child.appendChild(image);
    child.appendChild(h2);

    return child;
}

const parent = document.getElementById("root");

data.forEach(function(book) {
    parent.appendChild(Book(book));
});