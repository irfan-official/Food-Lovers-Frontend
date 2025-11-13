import {
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import useAxiosSecure from "../hooks/useAxiosSecure.jsx";
import useAxios from "../hooks/useAxios.jsx";

export const Data_Context = createContext();

function DataContext({ children }) {
  const [serviceData, setServiceData] = useState([]);
  const [limitedReviewsData, setLimitedReviewsData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [foodie, setFoodie] = useState(null);

  const axiosInstance = useAxios();
  const axiosSecureInstance = useAxiosSecure();

  const DataFetching = useCallback(async () => {
    try {
      setLoader(true);

      axiosInstance
        .get("/api/v1/home-data")
        .then((res) => {
          console.log("Data ===>", res.data);
          setLimitedReviewsData(res.data);
        })
        .catch((error) => {
          console.log("error ===>", error.message);
        });

      const res1 = await fetch("/service.json"); // ✅ ensure file is in /public folder
      if (!res1.ok) throw new Error("Failed to load data");
      const data1 = await res1.json();
      setServiceData(data1);

      const res2 = await fetch("/foodie_peoples.json"); // ✅ ensure file is in /public folder
      if (!res2.ok) throw new Error("Failed to load data");
      const data2 = await res2.json();
      setFoodie(data2);
    } catch (error) {
      console.error("Error fetching service data:", error);
      alert(error.message);
    } finally {
      setLoader(false);
    }
  }, []);

  useMemo(() => {
    DataFetching();
  }, [DataFetching]);

  return (
    <Data_Context.Provider
      value={{
        foodie,
        serviceData,
        loader,
        setLoader,
        DataFetching,
        limitedReviewsData,
      }}
    >
      {children}
    </Data_Context.Provider>
  );
}

export default DataContext;
