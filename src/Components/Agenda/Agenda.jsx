import React, { Fragment } from 'react';

const Agenda = () => {
  return (
    <Fragment>
      <div className="agenda">
        <div className="agenda-date-box">
          <div className="agenda-date">31</div>
          <div className="agenda-month">MAR</div>
        </div>
        <div className="agenda-desc">
          Pendaftaran santriwan dan santriwati baru TP. 2020/2021
        </div>
      </div>

      <div className="agenda">
        <div className="agenda-date-box">
          <div className="agenda-date-begin">31 MAR</div>
          <div className="agenda-date-divider"></div>
          <div className="agenda-date-end">20 APR</div>
        </div>
        <div className="agenda-desc">
          Pendaftaran santriwan dan santriwati baru TP. 2020/2021
        </div>
      </div>

      <div className="agenda">
        <div className="agenda-date-box">
          <div className="agenda-date">31</div>
          <div className="agenda-month">MAR</div>
        </div>
        <div className="agenda-desc">
          Pendaftaran santriwan dan santriwati baru TP. 2020/2021
        </div>
      </div>
    </Fragment>
  );
}

export default Agenda;
