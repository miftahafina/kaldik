import React from 'react';

const Agenda = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="title">Maret</div>
        <div className="subtitle">2020</div>
      </div>

      <div className="content">
        <div className="content-container">
          
          <div className="agenda">
            <div className="agenda-date-box">
              <div className="agenda-date">31</div>
              <div className="agenda-month">MAR</div>
            </div>
            <div className="agenda-desc">
              Pendaftaran santriwan dan santriwati baru TP. 2020/2021
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agenda;