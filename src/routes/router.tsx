import { createBrowserRouter } from 'react-router';
import { Layout } from './Layout.tsx';
import Home from '../pages/home/Home.tsx';
import Products from '../pages/products/Products.tsx';
import Login from '../pages/login/Login.tsx';
import { PATH } from '../contants/path.ts';
import Error from '../pages/error/Error.tsx';
import { Users } from '../pages/users/Users.tsx';
import { User } from '../pages/user/User.tsx';
import { Product } from '../pages/product/Product.tsx';

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
        path: '/users/:id',
        element: <User />,
      },
      {
        path: '/products/:id',
        element: <Product />,
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
