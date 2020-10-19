import { useEffect, useState } from "react";

const fetchData = async (signal, setLoading, setResponse, setError, url) => {
  setLoading(true);
  try {
    const res = await fetch(url);
    const json = await res.json();
    if (!signal.aborted) {
      setResponse(json.drinks);
    }
  } catch (e) {
    if (!signal.aborted) {
      setError(e);
    }
  } finally {
    if (!signal.aborted) {
      setLoading(false);
    }
  }
};

const useFetchSearch = (baseUrl, searchTerm) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = `${baseUrl + searchTerm}`;

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    searchTerm && fetchData(signal, setLoading, setResponse, setError, url);

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { response, loading, error };
};

export default useFetchSearch;
