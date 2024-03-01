import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Body from './components/body';
import Main from './components/Main';
import "./App.css"
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Videodetail from './components/videoDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App =()=>{
  return (
      <Provider store={store}>
        <Header />
        <Body/>
      </Provider>
  )
}
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:"/",
        element:<Main/>
      },
      {
        path: "/watch",
        element: <Videodetail />
      },
      {
        path:"/video",
        element:<Videodetail/>
      }
    ]
  }
]);

root.render(    
<React.StrictMode><RouterProvider router={approuter}></RouterProvider></React.StrictMode>);
reportWebVitals();