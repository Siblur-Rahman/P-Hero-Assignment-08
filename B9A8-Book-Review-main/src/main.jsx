import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root';
import ErrorPage from './Pages/ErrorPage';
import ListedBooks from './Pages/ListedBooks';
import Home from './Pages/Home';
import PagestoRead from './Pages/PagestoRead';
import ReadBooks from './components/ReadBooks';
import WishlistBooks from './components/WishlistBooks';
import BookDetails from './components/BookDetails';
import DataOfBooks from '../dist/DataOfBooks.json';
import App from './Pages/PagestoRead';
import BookReview from './Pages/BookReview';
import SellBooks from './Pages/SellBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks/>,
        children:[
          {
            path: "/ListedBooks",
            element:<ReadBooks></ReadBooks>,
            loader: () => fetch('/DataOfBooks.json')
          },
          {
            path: "/ListedBooks/ReadBooks",
            element:<ReadBooks></ReadBooks>,
            loader: () => fetch('/DataOfBooks.json')
          },
          {
            path: "/ListedBooks/WishlistBooks",
            element:<WishlistBooks></WishlistBooks>,
            loader: () => fetch('/DataOfBooks.json')
          }
        ]
      },
      {
        path: "/PagestoRead",
        element: <PagestoRead/>,
        loader: () => fetch('/DataOfBooks.json')
      },
      {
        path:'/book/:id',
        element:<BookDetails></BookDetails>,
        loader: () => fetch('/DataOfBooks.json')
      },
      {
        path:'/BookReview',
        element:<BookReview></BookReview>,
        loader: () => fetch('/DataOfBooks.json')
      },
      {
        path:'/SellBooks',
        element:<SellBooks></SellBooks>,
      }
    ],
    errorElement: <ErrorPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
