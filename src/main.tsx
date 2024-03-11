import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './routes/root.tsx'
import ErrorPage from './pages/NotFoundPage.tsx'
import DownloadFile from '../src/components/download/DownloadFile.tsx'
import Question from './pages/Question.tsx'
import Card from './pages/CardPage.tsx'
import Table from './pages/Table.tsx'
import CheckboxList from './pages/CheckBoxListPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/download-file",
    element: <DownloadFile />
  },
  {
    path: "/answer-questions",
    element: <Question />
  },
  {
    path: "/card",
    element: <Card />
  },
  {
    path: "/table",
    element: <Table />
  },
  {
    path: "/checkbox-list",
    element: <CheckboxList />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
