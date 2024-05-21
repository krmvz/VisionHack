import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myHeaders = new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer my-token'
        });

        const response = await fetch('https://api.example.com/data', {
          method: 'GET',
          headers: myHeaders
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount.

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
