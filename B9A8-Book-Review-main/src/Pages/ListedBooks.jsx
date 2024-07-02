import {Outlet } from "react-router-dom";
const ListedBooks = () => {
    return (
        <div className="w-11/12 mx-auto">
                <div className="bg-base-200 p-10 rounded-2xl">
                    <h1 className="text-5xl font-bold text-center">Books</h1>
                </div>
                <div className="mt-4">
                <Outlet></Outlet>
                </div>
        </div>
    );
};

export default ListedBooks;