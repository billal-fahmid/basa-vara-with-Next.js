import { useState, useEffect } from 'react';

function usePropertyByCategory(category) {
    console.log(category)
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://basa-vara-with-next-js.vercel.app/api/propertis');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log(result)
        const filterData = result.result.filter(data => data.propertyType === category)
        setData(filterData);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [category]);

  return { data, isLoading, error };
}

export default usePropertyByCategory;
