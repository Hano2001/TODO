import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      const data = await result.json();
      setData(data);
      console.log("Hold on tight! Fetching data!");
      console.log(data);
    };

    fetchData();
  }, [url]);

  return data;
};
