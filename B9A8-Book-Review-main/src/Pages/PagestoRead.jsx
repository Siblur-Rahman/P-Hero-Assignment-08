import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { getStoredReadList } from "../utility/LocalStorage";
import { useLoaderData } from "react-router-dom";

// const PagestoRead = () => {
//     const books = useLoaderData();
    
//     const [readList, setReadList] = useState([]);
    
//     useEffect(() =>{
//         const storedReadBooksIds =getStoredReadList();
//         if(books.length){
//             const listReadBook = books.filter(book => storedReadBooksIds.includes(book.id));
//             setReadList(listReadBook);
//         }
//     }, [books])
//     console.log(readList)
//     return (
//         <div>
//            <h2>PageToRead</h2>
//         </div>
//     );
// };

// export default PagestoRead;

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];




const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
        const books = useLoaderData();
    
    const [readList, setReadList] = useState([]);
    
    useEffect(() =>{
        const storedReadBooksIds =getStoredReadList();
        if(books.length){
            const listReadBook = books.filter(book => storedReadBooksIds.includes(book.id));
            setReadList(listReadBook);
        }
    }, [books])
  return (
    <div className='bg-base-200 justify-center flex'>
        <BarChart
      width={500}
      height={300}
      data={readList}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {readList.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </div>
  );
}

App.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';
TriangleBar.propTypes = {
  props: PropTypes.object.isRequired,
  }
