import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar';
import Params from './components/Params';
import Profile from './components/Profile';
import SolvedQuestions from './components/SolvedQuestions';
import NotFound from './components/NotFound';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
        <div>
          <Navbar />
          <Home />
        </div>
    },
    {
      path: '/about',
      element: 
        <div>
         <Navbar />
         <About />
       </div>
    },
    {
      path: '/dashboard',
      element: 
       <div>
         <Navbar />
         <Dashboard />
       </div>,
       children: [
        {
          path: 'profile',
          element: <Profile />
        },
        {
          path: 'solvedquestions',
          element: <SolvedQuestions />
        }
       ]
    },
    {
      path: '/content/:id',
      element: 
       <div>
         <Navbar />
         <Params />
       </div>
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
);

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
