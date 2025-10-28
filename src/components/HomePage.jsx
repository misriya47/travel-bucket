import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function HomePage() {


  return (
    <div
      style={{
        position: 'relative',
        marginTop: -30,
        marginLeft: -125,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <img
        src="https://img.freepik.com/free-photo/top-view-essential-travel-items-shoes-notebook-tree-map-passport-airplane-car-eyeglasses-rustic-wooden-background_1921-13.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Travel Bucket List"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      <div className="row">
        {/* Left box */}
        <div
          className="col-md-6"
          style={{
            position: 'absolute',
            top: '20%',
            left: '13%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            padding: '20px 30px',
            borderRadius: '10px',
            maxWidth: '400px',
          }}
        >
          <h5 style={{ color: '#ffcc66' }}>For those who want to:</h5>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>✨ Discover the world's bucket list travel experiences</li>
            <li>✨ Plan inspired, ‘bucket list’ holidays & vacations</li>
            <li>✨ Save the hours of painstaking research</li>
          </ul>
        </div>

        {/* Right box */}
        <div
          className="col-md-6"
          style={{
            position: 'absolute',
            top: '20%',
            left: '55%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            padding: '20px 30px',
            borderRadius: '10px',
            maxWidth: '400px',
            minHeight: '200px',
          }}
        >
          <h5 style={{ color: '#ffcc66' }}>Inspiration</h5>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>✨ Adventure awaits — start your journey!</li>
            <li>✨ Go where your heart feels alive.</li>
            <li>✨ Turn your travel dreams into a checklist.</li>
            <li>✨ One life. One world. Explore it.</li>
          </ul>
        </div>

        {/* Bottom Center Box */}
        <div
          style={{
            position: 'absolute',
            top: '60%',
            left: '33%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            padding: '20px 30px',
            borderRadius: '10px',
            maxWidth: '400px',
            minHeight: '200px',
            textAlign: 'center',
          }}
        >
          <h5 style={{ color: '#ffcc66' }}>Mark Your Dream</h5>
          <p>Add your dream destination and start your adventure!</p>

          <Link
            to='/home'
            style={{
              backgroundColor: '#ffcc66',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginTop: '10px',
              textDecoration: 'none'
            }}
          >
            View 👁 
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
