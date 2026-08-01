# 📚 React BookShelf Tracker

A clean, responsive React application built to help users track their reading list, manage completed books, and calculate reading statistics in real time. 

This project was built to practice core React fundamentals, including component breakdown, state management, props drilling, and immutable data handling.

---

## 🚀 Features

* **Add New Books:** Input book title, author, and page count with form validation for empty or invalid fields.
* **Interactive Book List:** Mark books as finished with a checkbox (crosses out completed titles) or remove them from the list.
* **Live Reading Analytics:** Dynamic calculations for total books, finished books, and total pages read.
* **Filterable Views:** Seamlessly switch views between **All**, **Reading**, and **Finished** books.
* **Empty State Handling:** Displays a friendly message when no books match the selected view.
* **Responsive Design:** Styled using pure CSS with focus state indicators and a mobile breakpoint layout.

---

## 🛠️ Concepts & Skills Practiced

* **React State Management:** Used `useState` for controlled forms, book arrays, and view filters.
* **Immutable State Updates:** Utilized `.map()`, `.filter()`, and array spread syntax without mutating state (`.push()`).
* **Props & Component Architecture:** Structured into modular components (`Header`, `BookForm`, `ShelfStats`, `BookList`, `BookCard`).
* **Component-Scoped CSS:** Modular CSS styling per component with focus accessibility styles and media queries.

---

## 📂 Project Structure

```text
src/
├── Header/
│   ├── Header.jsx
│   └── Header.css
├── BookForm/
│   ├── BookForm.jsx
│   └── BookForm.css
├── ShelfStats/
│   ├── ShelfStats.jsx
│   └── ShelfStats.css
├── BookList/
│   ├── BookList.jsx
│   └── BookList.css
├── BookCard/
│   ├── BookCard.jsx
│   └── BookCard.css
├── App.jsx
├── App.css
└── main.jsx

## 📸 Screenshots

<img width="1917" height="922" alt="Screenshot From 2026-07-31 21-35-25" src="https://github.com/user-attachments/assets/ab31f607-a6d3-4e98-b9b9-c0076a037389" />

<img width="1917" height="922" alt="Screenshot From 2026-07-31 21-37-49" src="https://github.com/user-attachments/assets/206cd029-3725-4315-ab62-7b2c3a83122d" />



