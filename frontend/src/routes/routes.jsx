import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/сommon/LandingPage';
import About from '../pages/сommon/AboutUs';
import Services from '../pages/сommon/Services';
import SupportUs from '../pages/сommon/SupportUs';
import FAQs from '../pages/сommon/FAQs';
import Pricing from '../pages/сommon/Pricing';

export const router = createBrowserRouter([
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
]);

