import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Book = ({book}) => {
    const {id, name, image, rating, category, tags, publisher}=book;
    return (
        <Link to={`/book/${id}`}>
            <div className="card shadow-xl border-2 p-2">
                <figure className='bg-base-200 h-[230px] w-[320px] mx-auto'><img src={image} alt="Shoes" /></figure>
                <div className="card-body">

                        {/* tags */}
                        <div className='flex gap-2'>
                                {
                                    tags.map((tag, inx) => <span key={inx} className="text-success py-1 px-4 rounded-xl text-xl bg-lime-100">{tag}</span> )
                                }
                        </div>

                        {/* Name */}
                        <h2 className="card-title">{name}</h2>
                        <h2>By: {publisher}</h2>

                        <hr/>
                        <div className='flex justify-between'>
                                <div>{category}</div>
                                <div className="flex items-center gap-2"><span>{rating}</span><FaRegStar/></div>
                        </div>

                        
                </div>
            </div>
        </Link>
    );
};
Book.propTypes = {
    book: PropTypes.object.isRequired,
    }
export default Book;