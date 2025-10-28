import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Read.css' // Add this line

function Read() {
  const [data, setData] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3000/places/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [id])

  return (
    <div className='d-flex justify-content-center align-items-center bg-dark text-light m-5 vh-100'>
      <div className='card shadow-lg border-0 rounded-4 p-5 animate__animated animate__fadeIn' 
           style={{ width: '50%', backgroundColor: '#ffffff' }}>
        <h2 className='text-center text-success mb-4 fw-bold'>
          📍 Details of Place
        </h2>
        <hr className='border border-success opacity-50 mb-4' />

        <div className='mb-4'>
          <p className='fs-5 mb-2'>
            <strong className='text-secondary'>Place:</strong> {data.place}
          </p>
          <p className='fs-5 mb-2'>
            <strong className='text-secondary'>Country:</strong> {data.country}
          </p>
          <p className='fs-5 mb-2'>
            <strong className='text-secondary'>Description:</strong> {data.description}
          </p>
          <p className='fs-5'>
            <strong className='text-secondary'>Status:</strong>{' '}
            {data.status ? (
              <span
                className={`badge px-3 py-2 rounded-pill ${
                  data.status === 'visited'
                    ? 'bg-success'
                    : 'bg-warning text-dark'
                }`}
              >
                {data.status === 'visited' ? 'Visited' : 'Not Visited'}
              </span>
            ) : (
              <span className='text-muted'>N/A</span>
            )}
          </p>
        </div>

        <div className='d-flex justify-content-center mt-4'>
          <Link 
            to={`/update/${id}`} 
            className='btn btn-success px-4 me-3 shadow-sm rounded-pill'
          >
            ✏️ Edit
          </Link>
          <Link 
            to='/' 
            className='btn btn-primary px-4 shadow-sm rounded-pill'
          >
            ⬅️ Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Read
