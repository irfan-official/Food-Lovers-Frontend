import { createBrowserRouter } from "react-router";
import Home from "../pages/Home.jsx";
import Page404 from "../pages/Page404.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Reviews from "../pages/Reviews.jsx";
import ReviewDetails from "../pages/ReviewDetails.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import MyProfile from "../pages/MyProfile.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import AllReviews from "../pages/AllReviews.jsx";
import MyReviews from "../pages/MyReviews.jsx";
import AddReview from "../pages/AddReview.jsx";
import MyFavorites from "../pages/MyFavorites.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,

    children: [
      {
        path: "/view/all-reviews",
        element: <AllReviews />,
      },
      {
        path: "/view/my-reviews",
        element: (
          <ProtectedRoute>
            <MyReviews />
          </ProtectedRoute>
        ),
      },
      {
        path: "/view/add-review",
        element: (
          <ProtectedRoute>
            <AddReview />
          </ProtectedRoute>
        ),
      },
      {
        path: "/view/favorite-reviews",
        element: (
          <ProtectedRoute>
            <MyFavorites />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <MyProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reviews",
    Component: Reviews,

    children: [
      {
        path: ":id",
        element: (
          <ProtectedRoute>
            <ReviewDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },

  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/reset-password",
    Component: ForgotPassword,
  },
  {
    path: "*",
    Component: Page404,
  },
]);

export default router;
