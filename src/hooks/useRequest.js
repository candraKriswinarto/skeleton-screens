import axios from 'axios';
import { useEffect, useState } from 'react'

const useRequest = (initUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try{
        const response = await axios(initUrl);
        setData(response.data);
        setLoading(false);
      } catch(err) {
        setError(err);
        setLoading(false);
      }

    }
    fetchData();
  }, [initUrl]);

  return { data, loading, error };
}

export default useRequest
