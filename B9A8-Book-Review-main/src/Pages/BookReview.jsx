import { useEffect, useState } from "react";

const BookReview = () => {

    const [books, setBooks] = useState([]);
    
    useEffect(() =>{
        fetch('DataOfBooks.json')
        .then(res =>res.json())
        .then(data =>setBooks(data))
    }, [])
    return (
        <div className="lg:grid grid-cols-3 gap-4">
            {
                books.map(book =>
                <div key={book.id} className="border-2 p-4">
                    {book.review}
                </div>)
            }
        </div>
    );
};

export default BookReview;