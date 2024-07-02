import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {

    const [books, setBooks] = useState([]);
    
    useEffect(() =>{
        fetch('DataOfBooks.json')
        .then(res =>res.json())
        .then(data =>setBooks(data))
    }, [])
    return (
        <div className="lg:grid grid-cols-3 gap-4">
            {
                books.map(book =><Book key={book.id} book={book}></Book>)
            }
        </div>
    );
};

export default Books;