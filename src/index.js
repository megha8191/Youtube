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
import SearchResults from './components/SearchResults';
import History from './components/History';
import Subscription from './components/Subscription';
import Live from './components/Live';

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
        path:"/results",
        element:<SearchResults/>
      },
      {
        path: "/history",
        element: <History/>
      },
      {
        path: "/subscriptions",
        element: <Subscription/>
      },
      {
        path:"/live",
        element:<Live/>
      }
    ]
  }
]);

root.render(    
<React.StrictMode><RouterProvider router={approuter}></RouterProvider></React.StrictMode>);
reportWebVitals();