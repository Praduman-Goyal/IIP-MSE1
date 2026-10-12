const headingButton = document.getElementById("heading-button");
const mainHeading = document.getElementById("main-heading");
const colorButton = document.getElementById("color-button");
const firstBook = document.getElementById("first-book");
const toggleButton = document.getElementById("toggle-button");
const bookList = document.getElementById("book-list");

if (headingButton && mainHeading) {
    headingButton.addEventListener("click", function () {
        mainHeading.textContent = "Find a book for your next class!";
    });
}

if (colorButton && firstBook) {
    colorButton.addEventListener("click", function () {
        firstBook.style.backgroundColor = "rgb(213, 244, 213)";
    });
}

if (toggleButton && bookList) {
    toggleButton.addEventListener("click", function () {
        bookList.classList.toggle("hidden");

        const booksAreVisible = !bookList.classList.contains("hidden");
        toggleButton.textContent = booksAreVisible ? "Hide books" : "Show books";
        toggleButton.setAttribute("aria-expanded", String(booksAreVisible));
    });
}

const requestButtons = document.querySelectorAll(".request-button");
requestButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        button.textContent = "Request Sent";
        button.disabled = true;
        button.nextElementSibling.textContent = "Your request has been sent to the student.";
    });
});

const showBookButton = document.getElementById("show-book-button");
const bookTitleInput = document.getElementById("book-title");
const bookResult = document.getElementById("book-result");

if (showBookButton && bookTitleInput && bookResult) {
    showBookButton.addEventListener("click", function () {
        const title = bookTitleInput.value.trim();

        if (title === "") {
            bookResult.textContent = "Please enter a book title.";
            return;
        }

        bookResult.textContent = "Book submitted: " + title;
    });
}

const changeCardButton = document.getElementById("change-card-button");
const firstAvailableBook = document.getElementById("book-algorithms");

if (changeCardButton && firstAvailableBook) {
    changeCardButton.addEventListener("click", function () {
        firstAvailableBook.style.backgroundColor = "#d8ead8";
        firstAvailableBook.querySelector("h3").textContent = "Introduction to Algorithms (Highlighted)";
    });
}

const listingForm = document.getElementById("listing-form");
const formMessage = document.getElementById("form-message");

if (listingForm && formMessage) {
    listingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const studentName = document.getElementById("student-name").value.trim();
        const title = bookTitleInput.value.trim();
        const author = document.getElementById("author").value.trim();
        const category = document.getElementById("category").value.trim();
        const condition = document.getElementById("condition").value;

        if (!studentName || !title || !author || !category || !condition) {
            formMessage.textContent = "Please fill in all required fields before submitting.";
            formMessage.className = "error";
            return;
        }

        formMessage.textContent = "Thanks, " + studentName + "! Your book \"" + title + "\" has been listed.";
        formMessage.className = "success";
        listingForm.reset();
    });
}

const formHeading = document.getElementById("form-heading");
const headingSizeButton = document.getElementById("heading-size-button");

if (formHeading && headingSizeButton) {
    headingSizeButton.addEventListener("click", function () {
        const isLarge = formHeading.style.fontSize === "2rem";
        formHeading.style.fontSize = isLarge ? "1.5rem" : "2rem";
    });
}

const toggleFormButton = document.getElementById("toggle-form-button");

if (listingForm && toggleFormButton) {
    toggleFormButton.addEventListener("click", function () {
        const formIsVisible = listingForm.style.display === "none";
        listingForm.style.display = formIsVisible ? "block" : "none";
        toggleFormButton.textContent = formIsVisible ? "Hide form" : "Show form";
        toggleFormButton.setAttribute("aria-expanded", String(formIsVisible));
    });
}
