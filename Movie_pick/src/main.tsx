import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import AppRouter from './AppRouter'
import { Provider } from 'react-redux'
import mystore from './dux/Store'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={mystore}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </React.StrictMode>,
)
