import React, { useEffect, useState } from "react";
import axios from "axios";

import Cards from "./components/List";
import withListLoading from "./Hoc/withListLoading";
// import './App.css';
function WebApp() {
  const ListLoading = withListLoading(Cards);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null
  });

  const fetchOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f2505f0169msh1e92a8b158b566ap1b3fe2jsn0af089ed89bc",
      "X-RapidAPI-Host": "bloomberg-market-and-financial-news.p.rapidapi.com"
    }
  };
  const axiosOptions = {
    method: "GET",
    url:
      "https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete",
    params: { query: "<REQUIRED>" },
    headers: {
      "X-RapidAPI-Key": "f2505f0169msh1e92a8b158b566ap1b3fe2jsn0af089ed89bc",
      "X-RapidAPI-Host": "bloomberg-market-and-financial-news.p.rapidapi.com"
    }
  };

  // ============ Fetch Method ============
  // useEffect(() => {
  //   setAppState({ loading: true });
  //   const apiUrl =
  //     "https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete?query=%3CREQUIRED%3E";
  //   fetch(apiUrl, options)
  //     .then((res) => res.json())
  //     .then((repos) => {
  //       console.log(repos, "line 34");
  //       setAppState({ loading: false, repos: repos });
  //     });
  // }, [setAppState]);

  // ============ Axios Method ============
  useEffect(() => {
    setAppState({ loading: true });
    axios
      .request(axiosOptions)
      .then((res) => res.data)
      .then((repos) => {
        // console.log(repos, "line 34");
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);

  return (
    <div className="App">
      <div className="container">
        <h1>My Repositories</h1>
      </div>
      <div className="repo-container">
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className="footer">
          Built{" "}
          <span role="img" aria-label="love">
            💚
          </span>{" "}
          with by Kayode
        </div>
      </footer>
    </div>
  );
}
export default WebApp;
