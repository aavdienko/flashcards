import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { Decks } from './pages/decks'

function PrivateRoutes() {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <div>login</div>,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Decks />,
  },
]

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}
