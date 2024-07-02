import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredWishList } from "../utility/LocalStorage";
import ListBooksDetails from "./ListBooksDetails";


const WishlistBooks = () => {
    const books = useLoaderData();

    const [wishList, setWishList] = useState([]);

    useEffect(() =>{
        const storedWishBooksIds =getStoredWishList();
        if(books.length){
            const listWishBook = books.filter(book => storedWishBooksIds.includes(book.id));
            setWishList(listWishBook)
        }
    },[books])
    const handleSort = sort =>{
        let Wwish = [...wishList]
        if(sort === 'rate'){
           let data = Wwish.sort((a, b) => a.rating -b.rating);
            setWishList(data)
        }
        else if(sort === 'page'){
           let data = Wwish.sort((a, b) => a.totalPages -b.totalPages);
            setWishList(data)
        }
        else if(sort === 'year'){
           let data = Wwish.sort((a, b) => a.yearOfPublishing -b.yearOfPublishing);
            setWishList(data)
        }
    }
    
   
    return (
        <div>
                <div className="w-full flex justify-center">
                    <details className="dropdown mb-32">
                        <summary className="m-1 btn w-52 bg-success text-white hover:text-black font-extrabold text-2xl">Sort By</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={() =>handleSort('rate')}><a className="justify-center text-xl">Rating</a></li>
                            <li onClick={() =>handleSort('page')}><a className="justify-center text-xl">Number of page</a></li>
                            <li onClick={() =>handleSort('year')}><a className="justify-center text-xl">Publisher year</a></li>
                        </ul>
                    </details>
                </div>
                <div className="mt-8">
                    <NavLink to="/ListedBooks/ReadBooks" className="p-4 text-xl">Read Books</NavLink>
                    <NavLink to="/ListedBooks/WishlistBooks" className="p-4 text-xl">Wishlist Books</NavLink>
                </div>
            <div className="border-t-2 mt-4">
                {
                    wishList.map(book => <ListBooksDetails key={book.id} book={book}></ListBooksDetails>)
                }
            </div>
        </div>
    );
};

export default WishlistBooks;