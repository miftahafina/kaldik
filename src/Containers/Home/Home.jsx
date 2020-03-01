import React from 'react';
import './Home.css';
import 'normalize.css';


const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="title">Kaldik</div>
        <div className="subtitle">Kalender Pendidikan</div>
      </div>

      <div className="content">
        <div className="months-container">
          <div className="year">2019</div>
          <div className="month">
            Januari
          </div>
          <div className="month">
            Februari
          </div>

          <div className="year">2019</div>
          <div className="month">
            Januari
          </div>
          <div className="month">
            Februari
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
