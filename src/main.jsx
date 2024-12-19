import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import ForgotPage from "./pages/ForgotPage.jsx";
import ResetPage from "./pages/ResetPage.jsx";
import Listing from "./pages/Listing.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "react-query/devtools";
import "react-toastify/ReactToastify.css";
import { Property } from "./pages/Property.jsx";
import Layout from "./layout/Layout.jsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import SellPage from "./pages/SellPage.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import UpdateProfile from "./pages/UpdateProfile.jsx";
import BRPage from "./pages/BRPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./components/admin/ProtectedRoute.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: "light",
          }}
        >
          <BrowserRouter>
            <Routes>
              {/* Pages with Layout */}
              <Route path="/listing">
                <Route
                  index
                  element={
                    <Layout>
                      <Listing />
                    </Layout>
                  }
                />
                <Route
                  path=":propertyId"
                  element={
                    <Layout>
                      <Property />
                    </Layout>
                  }
                />
              </Route>
              <Route
                path="/Sell"
                element={
                  <Layout>
                    <SellPage />
                  </Layout>
                }
              />
              <Route
                path="/bRPage"
                element={
                  <Layout>
                    <BRPage />
                  </Layout>
                }
              />
              <Route
                path="/updateProfile"
                element={
                  <Layout>
                    <UpdateProfile />
                  </Layout>
                }
              />

              <Route
                path="/Dashboard"
                element={
                  <ProtectedRoute requiredRole="admin">
                  <Layout>
                    <Dashboard />
                  </Layout>
                  </ProtectedRoute>


                }
              />

              {/* Pages without Layout */}
              <Route path="/" element={<App />} />
              <Route path="/forgot_page" element={<ForgotPage />} />
              <Route path="/reset-password" element={<ResetPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />

            </Routes>
          </BrowserRouter>
          <ToastContainer />
          <ReactQueryDevtools initialIsOpen={false} />
        </MantineProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
