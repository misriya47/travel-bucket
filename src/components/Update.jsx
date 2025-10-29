import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


function Update() {

  const [data, setData] = useState([])
  const { id } = useParams();

  const [values, setValues] = useState({
    place: '',
    country: '',
    description: '',
    status: ''
  })

  const navigate = useNavigate();
  useEffect(() => {
    axios.get('https://patient-list-backend.onrender.com/places/' + id)
      .then(res => setValues(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put('https://patient-list-backend.onrender.com/places/' + id, values)
      .then(res => {
        console.log(res);
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark text-light m-5 vh-100">
      <div
        className="card shadow-lg border-0 rounded-4 p-5 w-50 animate__animated animate__fadeIn"
        style={{ backgroundColor: "#ffffff" }}
      >
        <h2 className="text-center text-success fw-bold mb-4">
          ✏️ Update Place
        </h2>
        <hr className="border border-success opacity-50 mb-4" />

        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label htmlFor="place" className="form-label fw-semibold">
              🏞️ Place:
            </label>
            <input
              type="text"
              name="place"
              className="form-control shadow-sm"
              placeholder="Enter place name"
              value={values.place}
              onChange={(e) => setValues({ ...values, place: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="form-label fw-semibold">
              🌍 Country:
            </label>
            <input
              type="text"
              name="country"
              className="form-control shadow-sm"
              placeholder="Enter country name"
              value={values.country}
              onChange={(e) => setValues({ ...values, country: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="form-label fw-semibold">
              📝 Description:
            </label>
            <textarea
              name="description"
              className="form-control shadow-sm"
              rows="3"
              placeholder="Enter description"
              value={values.description}
              onChange={(e) => setValues({ ...values, description: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="status" className="form-label fw-semibold">
              🚩 Status:
            </label>
            <select
              className="form-select shadow-sm"
              name="status"
              value={values.status}
              onChange={(e) => setValues({ ...values, status: e.target.value })}
              required
            >
              <option value="" disabled hidden>
                -- Select Status --
              </option>
              <option value="visited">Visited</option>
              <option value="not visited">Not Visited</option>
            </select>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <button
              type="submit"
              className="btn btn-success px-4 rounded-pill shadow-sm me-3"
            >
              ✅ Update
            </button>
            <Link to="/" className="btn btn-primary px-4 rounded-pill shadow-sm">
              ⬅️ Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Update
