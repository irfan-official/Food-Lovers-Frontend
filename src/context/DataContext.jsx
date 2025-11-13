import {
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
  useContext,
} from "react";
import useAxiosSecure from "../hooks/useAxiosSecure.jsx";
import useAxios from "../hooks/useAxios.jsx";
import { Auth_Context } from "./AuthContext.jsx";

export const Data_Context = createContext();

function DataContext({ children }) {
  let { user, loading } = useContext(Auth_Context);

  const axiosInstance = useAxios();
  const axiosSecureInstance = useAxiosSecure();

  const [usersFeedback, setUsersFeedback] = useState([]);
  const [topReviewers, setTopReviewers] = useState([]);
  const [limitedReviewsData, setLimitedReviewsData] = useState([]);
  const [myFavoriteReviews, setMyFavoriteReviews] = useState([]);
  const [myReviews, setMyReviews] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [foodie, setFoodie] = useState([]);

  const [loader, setLoader] = useState(true);

  const HomeDataFetching = useCallback(async () => {
    try {
      setLoader(true);

      const res1 = await axiosInstance.get("/api/v1/home-data");
      setLimitedReviewsData(res1.data.data);

      const res2 = await axiosInstance.get("/api/v1/home-others-data");
      setUsersFeedback(res2.data.usersFeedback);
      setTopReviewers(res2.data.topReviewers);

      const res3 = await fetch("/foodie_peoples.json");
      if (!res3.ok) throw new Error("Failed to load data");
      const data = await res3.json();
      setFoodie(data);
      setLoader(false);
    } catch (error) {
      console.error("Error fetching service data:", error);
      alert(error.message);
    } finally {
      setLoader(false);
    }
  }, []);

  const AllReviewsDataFetching = useCallback(async () => {
    try {
      setLoader(true);

      const res = await axiosInstance.get("/api/v1/shows/all-reviews");
      setAllReviews(res.data.data);
    } catch (error) {
      console.error("Error fetching service data:", error);
      alert(error.message);
    } finally {
      setLoader(false);
    }
  }, []);

  const MyFavoriteReviewsDataFetching = useCallback(async () => {
    try {
      setLoader(true);

      const res1 = await axiosInstance.get("/api/v1/home-data");
      setLimitedReviewsData(res1.data.data);

      const res2 = await axiosInstance.get("/api/v1/home-others-data");
      setUsersFeedback(res2.data.usersFeedback);
    } catch (error) {
      console.error("Error fetching service data:", error);
      alert(error.message);
    } finally {
      setLoader(false);
    }
  }, []);

  const MyReviewsDataFetching = useCallback(async () => {
    try {
      setLoader(true);

      const res1 = await axiosInstance.get("/api/v1/home-data");
      setLimitedReviewsData(res1.data.data);

      const res2 = await axiosInstance.get("/api/v1/home-others-data");
      setUsersFeedback(res2.data.usersFeedback);
    } catch (error) {
      console.error("Error fetching service data:", error);
      alert(error.message);
    } finally {
      setLoader(false);
    }
  }, []);

  useMemo(() => {
    HomeDataFetching();
    AllReviewsDataFetching();
    MyFavoriteReviewsDataFetching();
    MyReviewsDataFetching();
  }, [HomeDataFetching]);

  return (
    <Data_Context.Provider
      value={{
        limitedReviewsData,
        usersFeedback,
        topReviewers,
        allReviews,
        myReviews,
        myFavoriteReviews,
        foodie,
        loader,
        setLoader,
      }}
    >
      {children}
    </Data_Context.Provider>
  );
}

export default DataContext;
