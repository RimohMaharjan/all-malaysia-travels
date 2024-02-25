// import React from "react";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Basic " + window.btoa("druk:1234")
    );
    fetch(url, {
      headers: myHeaders,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Can not fetch data from that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [url]);

  return { data, error };
};

export default useFetch;
