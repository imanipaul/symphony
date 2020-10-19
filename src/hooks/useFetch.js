import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        if (!signal.aborted) {
          setResponse(json.drinks[0]);
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

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { response, loading, error };
};

export default useFetch;
