import React, { useEffect, useState } from 'react'
import { getObjects, getCountObjects } from './TableClient/Client';
import Table from './components/Table';
import Pagination from './components/Pagination';
import './App.css';

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
      const objects = await getObjects((currentPage - 1) * perPage, perPage);
      console.log(objects);
      setData(objects);
      setCount(count);
      setLoading(false);
    };
    getCount()
  }, [currentPage, perPage]);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleChangePerPage = (newPerPage) => {
    setPerPage(newPerPage);
    setCurrentPage(1);
  };

  return (
    <div className="container">
      <h1 className='text'>Data</h1>
      <Table data={data} loading={loading} />
      <div className="pagination-buttons">
        <button onClick={() => handleChangePerPage(3)}>Show 3 items per page</button>
        <button onClick={() => handleChangePerPage(5)}>Show 5 items per page</button>
        <button onClick={() => handleChangePerPage(10)}>Show 10 items per page</button>
      </div>
      <Pagination perPage={perPage} objectCount={count} paginate={paginate} currentPage={currentPage}/>
    </div>
  );
}

export default App;
