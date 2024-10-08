import { NavLink } from "react-router-dom";
import '../css/style.css'

const Header = () => {
    const links =<>
    <NavLink to="/" className="p-2">Home</NavLink>
    <NavLink to="/ListedBooks" className="p-2">Listed Books</NavLink>
    <NavLink to="/PagestoRead" className="p-2">Pages to Read</NavLink>
    <NavLink to="/BookReview" className="p-2">Book Review</NavLink>
    <NavLink to="/SellBooks" className="p-2">Sell Books</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 mt-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">F-BookStore</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <a className="btn btn-success">Sign In</a>
          <a className="btn btn-accent">Sign Up</a>
        </div>
      </div>
    );
};

export default Header;