import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./context/user.jsx";
import { BooksProvider } from "./context/books.jsx";
import { AuthorsProvider } from "./context/authors.jsx";
import { PublishersProvider } from "./context/publishers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <BooksProvider>
        <AuthorsProvider>
          <PublishersProvider>
            <App />
          </PublishersProvider>
        </AuthorsProvider>
      </BooksProvider>
    </UserProvider>
  </React.StrictMode>
);
