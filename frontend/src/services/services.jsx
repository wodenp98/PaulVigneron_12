import { useState, useEffect } from "react";
import axios from "axios";

export function useFetchFirstname(id) {
  const [dataFirstname, setDataFirstname] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/user/${id}`);
        setDataFirstname(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [id]);
  return [dataFirstname, error];
}

export function useFetchActivity(id) {
  const [dataActivity, setDataActivity] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/user/${id}/activity`
        );
        setDataActivity(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [id]);
  return [dataActivity, error];
}
