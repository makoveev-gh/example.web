import React, { useEffect, useState } from 'react'
import { getObjects, getCountObjects } from './TableClient/Client';
import Table from './components/Table';
import './App.css';
import Pagination from './components/Pagination';

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const getCount = async () => {
      setLoading(true);
      const count = await getCountObjects();
      const objects = await getObjects();
      setData(objects);
      setCount(count);
      setLoading(false);
    };
    getCount()
  }, []);


  const lastObjectIndex = currentPage * perPage;
  const firstObjectIndex = lastObjectIndex - perPage;
  const currentObject = data.slice(firstObjectIndex, lastObjectIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className='text'>Hello</h1>
      <Table data={currentObject} loading={loading} />
      <Pagination perPage={perPage} objectCount={count} paginate={paginate}/>
    </div>
  );
}

export default App;
