
import { NavLink } from 'react-router-dom';
import BannerPic from '../images/BannerPic.jpg'
import '../css/style.css'
const Banner = () => {
    return (
        <div className="hero h-[550px] bg-base-200 rounded-2xl my-[100px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={BannerPic} className="max-w-sm rounded-lg" />
                <div className="lg:p-10">
                <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                <NavLink to="/ListedBooks" className="btn btn-success text-white mt-10 text-2xl">View The List</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;