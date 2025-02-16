// routes.jsx

import Home from '../pages/сommon/LandingPage';
import About from '../pages/сommon/AboutUs';
import Services from '../pages/сommon/Services';
import SupportUs from '../pages/сommon/SupportUs';
import FAQs from '../pages/сommon/FAQs';
import Pricing from '../pages/сommon/Pricing';

  // Authefication
import Enter from '../pages/auth/Enter';
import Login from '../pages/auth/SingIn';


// Worker pages:
import Catalogue from '../pages/user/worker/Catalogue';
import MobileCatalogue from '../pages/user/worker/MobileProjectCatalogue';
import WorkerProfile from '../pages/user/worker/UserProfile'

// Company pages:
import CompanyProfile from '../pages/user/company/CompanyProfile'


export const routes = [

      // JOINT INTERFACE 

  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/support-us',
    element: <SupportUs />,
  },
  {
    path: '/faqs',
    element: <FAQs />,
  },

  {
    path: '/pricing',
    element: <Pricing />,
  },
  


  {
    path: '/enter',
    element: <Enter />,
  },
  {
    path: '/login',
    element: <Login />,
  },

        // USER INTEFACE

    // WORKER IN.
  {
    path: '/catalogue',
    element: <Catalogue />,
  },
  {
    path: '/mobcatalogue',
    element: <MobileCatalogue />,
  },
  {
    path: '/workerprofile',
    element: <WorkerProfile />,
  },


    // COMPANY IN.

    {
      path: '/companyprofile',
      element: <CompanyProfile />,
    }



];