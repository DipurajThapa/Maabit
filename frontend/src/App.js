import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BookingModal from "./components/ui/BookingModal";

// Pages
import HomePage from "./components/pages/HomePage";
import ServicesPage from "./components/pages/ServicesPage";
import ServiceDetailPage from "./components/pages/ServiceDetailPage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import PortfolioPage from "./components/pages/PortfolioPage";
import NotFoundPage from "./components/pages/NotFoundPage";

// Context
import { ModalProvider } from "./context/ModalContext";

// Utils and hooks
import ScrollToTop from "./utils/ScrollToTop";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const AppLayout = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay for the initial animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ModalProvider>
      <div className={`app-container ${isLoaded ? 'loaded' : ''}`}>
        <ScrollToTop />
        <Header />
        <main className="min-h-screen">
          <AnimatePresence mode="wait">
            <Outlet />
          </AnimatePresence>
        </main>
        <Footer />
        <BookingModal />
      </div>
    </ModalProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "services",
        children: [
          {
            index: true,
            element: <ServicesPage />,
          },
          {
            path: ":serviceId",
            element: <ServiceDetailPage />,
          },
        ],
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;