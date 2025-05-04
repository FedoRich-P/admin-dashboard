import { createBrowserRouter } from 'react-router';
import { Layout } from './Layout.tsx';
import Home from '../pages/home/Home.tsx';
import Users from '../pages/users/Users.tsx';
import Products from '../pages/products/Products.tsx';
import Login from '../pages/login/Login.tsx';
import { PATH } from '../contants/path.ts';
import Error from '../pages/error/Error.tsx';

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.USERS,
        element: <Users />,
      },
      {
        path: PATH.PRODUCTS,
        element: <Products />,
      },
      {
        path: PATH.ERROR,
        element: <Error />,
      },
      {
        path: PATH.LOGIN,
        element: <Login />,
      },
    ],
  },

]);
