import React, { useState } from 'react';
import './Home.css';
import 'normalize.css';
import { useEffect } from 'react';


const Home = () => {
  const [agenda, setAgenda] = useState({
    months: [
      {
        name: 'Januari',
        abbr: 'Jan'
      },
      {
        name: 'Februari',
        abbr: 'Feb'
      },
      {
        name: 'Maret',
        abbr: 'Mar'
      },
      {
        name: 'April',
        abbr: 'Apr'
      },
      {
        name: 'Mei',
        abbr: 'Mei'
      },
      {
        name: 'Juni',
        abbr: 'Jun'
      },
      {
        name: 'Juli',
        abbr: 'Jul'
      },
      {
        name: 'Agustus',
        abbr: 'Ags'
      },
      {
        name: 'September',
        abbr: 'Sep'
      },
      {
        name: 'Oktober',
        abbr: 'Okt'
      },
      {
        name: 'November',
        abbr: 'Nov'
      },
      {
        name: 'Desember',
        abbr: 'Des'
      }
    ]
  });

  useEffect(() => {
    console.log(agenda);
  })

  return (
    <div className="container">
      <div className="header">
        <div className="title">Kaldik</div>
        <div className="subtitle">Kalender Pendidikan</div>
      </div>

      <div className="content">
        <div className="months-container">
          <div className="year">2019</div>
          {
            agenda.months.map((data, key) => (
              <div className="month" key={key}>
                {data.name}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home;
