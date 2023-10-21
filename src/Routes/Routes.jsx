import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import DestinationSelection from "../pages/DestinationSelection/DestinationSelection";
import SecMain from "../layouts/SecMain";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
       {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(' https://travel-guru-server-i077avh40-mehedi-hasan-sizans-projects.vercel.app/destinations')
       },
       {
        path:'/home/:id',
        element: <DestinationSelection></DestinationSelection>,
        loader: ({params}) => fetch(`https://travel-guru-server-4zckiylns-mehedi-hasan-sizans-projects.vercel.app/destinations/${params.id}`)
       }
      ]
    },
    {
      path: '/roomDetails',
      element: <SecMain></SecMain>,
      children:[
        {
          path: '/roomDetails/:id',
          element: <h1>Hello guyz</h1>
        }
      ]
    }
  ]);

export default router;
  