import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineContactPage } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { Link } from "react-router-dom";

const ListBooksDetails = ({book}) => {
    const {name, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;
    return (
        <div className="hero h-[550px] bg-base-200 rounded-2xl my-[100px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="lg:p-10">
                    <h2 className="card-title">{name}</h2>
                    <p className='mt-5'>By: {author}</p>
                    <div className='flex gap-2 items-center text-lg mt-5'>
                                <div>
                                    Tag
                                </div>
                                <div>{
                                    tags.map((tag, inx) => <span key={inx} className="text-success py-1 px-2 bg-lime-50 rounded-xl ml-4">#{tag}</span> )
                                }</div>
                                <div className='flex items-center gap-2'>
                                <CiLocationOn /> Year of Publishing :{yearOfPublishing}
                                </div>
                        </div>
                    <div className="flex gap-4 mt-5">
                        <div className='flex items-center gap-2'><IoMdPeople/> Publisher: {publisher}</div>
                        <div className='flex items-center gap-2'><MdOutlineContactPage/> Page {totalPages}</div>
                    </div>
                    <hr  className="mt-5"/>
                    <div className="flex gap-4">
                        <div className="bg-[#E0E7F5] rounded-xl py-1 px-4">Category: {category}</div>
                        <div className="ml-4 bg-[#FEF1DB] rounded-xl py-1 px-4">Rating: <spa>{rating}</spa></div>
                        <div className='btn btn-success'><Link to={`/book/${book.id}`}>View Details</Link></div>
                        </div>
                </div>
                <img src={image} className="max-w-sm rounded-lg h-[500px]" />
            </div>
        </div>
    );
};
ListBooksDetails.propTypes = {
    book: PropTypes.object.isRequired,
    }
export default ListBooksDetails;