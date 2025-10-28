import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/places')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("🗑️ Are you sure you want to delete this place?");
    if (confirm) {
      axios.delete('http://localhost:3000/places/' + id)
        .then(() => {
          setData(prev => prev.filter(item => item.id !== id));
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='container py-5 bg-dark text-light min-vh-100 m-5'>
      <div className='text-center mb-4'>
        <h1 className='fw-bold text-success mb-2'>🌍 List of Places</h1>
        <p className='text-secondary'>Explore, update, or manage your travel destinations.</p>
      </div>

      <div className='card shadow border-0'>
        <div className='card-header bg-success text-white d-flex justify-content-between align-items-center'>
          <h5 className='mb-0'>Places Overview</h5>
          <Link to="/create" className='btn btn-light fw-semibold shadow-sm'>
            + Add New
          </Link>
        </div>

        <div className='card-body p-0'>
          <table className='table table-hover align-middle mb-0'>
            <thead className='table-success'>
              <tr>
                <th style={{ width: '5%' }}>#</th>
                <th>Place</th>
                <th>Country</th>
                <th>Status</th>
                <th className='text-center'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                data.length > 0 ? (
                  data.map((d, i) => (
                    <tr key={i}>
                      <td className='fw-semibold'>{i + 1}</td>
                      <td>{d.place}</td>
                      <td>{d.country}</td>
                      <td>
                        <span className={`badge px-3 py-2 rounded-pill ${
                          d.status === 'visited' 
                            ? 'bg-success' 
                            : 'bg-warning text-dark'
                        }`}>
                          {d.status === 'visited' ? 'Visited' : 'Not Visited'}
                        </span>
                      </td>
                      <td className='text-center'>
                        <Link 
                          to={`/read/${d.id}`} 
                          className='btn btn-sm btn-outline-secondary me-2'
                        >
                          👁️ Read
                        </Link>
                        <Link 
                          to={`/update/${d.id}`} 
                          className='btn btn-sm btn-outline-primary me-2'
                        >
                          ✏️ Edit
                        </Link>
                        <button 
                          onClick={() => handleDelete(d.id)} 
                          className='btn btn-sm btn-outline-danger'
                        >
                          🗑️ Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className='text-center py-4 text-muted'>
                      No places found. <Link to="/create">Add one now!</Link>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
