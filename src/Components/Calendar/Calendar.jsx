import React, { useState, Fragment } from 'react';
import { useEffect } from 'react';

const Calendar = () => {
  const [agenda] = useState({
    years: [
      {
        id: '2019',
        name: '2019',
        months: [
          {
            id: '201907',
            name: 'Juli',
            abbr: 'Jul'
          },
          {
            id: '201908',
            name: 'Agustus',
            abbr: 'Ags'
          },
          {
            id: '201909',
            name: 'September',
            abbr: 'Sep'
          },
          {
            id: '201910',
            name: 'Oktober',
            abbr: 'Okt'
          },
          {
            id: '201911',
            name: 'November',
            abbr: 'Nov'
          },
          {
            id: '201912',
            name: 'Desember',
            abbr: 'Des'
          }
        ]
      },
      {
        id: '2020',
        name: '2020',
        months: [
          {
            id: '202001',
            name: 'Januari',
            abbr: 'Jan'
          },
          {
            id: '202002',
            name: 'Februari',
            abbr: 'Feb'
          },
          {
            id: '202003',
            name: 'Maret',
            abbr: 'Mar'
          },
          {
            id: '202004',
            name: 'April',
            abbr: 'Apr'
          },
          {
            id: '202005',
            name: 'Mei',
            abbr: 'Mei'
          },
          {
            id: '202006',
            name: 'Juni',
            abbr: 'Jun'
          }
        ]
      }
    ]
  });

  useEffect(() => {
    console.log(agenda);
  })

  return (
    <Fragment>
    {
      agenda.years.map(year => {
        return (
          <Fragment key={year.id}>
            <div className="year">{year.name}</div>
            {
              year.months.map(month => {
                return (
                  <div className="month" key={month.id}>
                    {month.name}
                  </div>
                )
              })
            }
          </Fragment>
        )
      })
    }
    </Fragment>
  )
}

export default Calendar;
