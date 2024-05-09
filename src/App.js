import logo from './logo.svg';
import './App.css';
import Jobs from './Pages/jobs';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Jobs />
     
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    
    </div>
  );
}

export default App;
