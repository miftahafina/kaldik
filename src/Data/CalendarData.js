const CalendarData = {
  years: [
    {
      id: '2019',
      name: '2019',
      months: [
        {
          id: '201907',
          name: 'Juli',
          abbr: 'Jul',
          agendas: [
            {
              id: '20190701',
              begin: new Date(2019, 6, 3),
              end: null,
              desc: 'Awal masuk kerja asatidzah TP. 2019/2020',
              note: 'Ini adalah keterangan'
            },
            {
              id: '20190702',
              begin: new Date(2019, 6, 7),
              end: null,
              desc: 'Awal masuk santriwan/wati baru diantar orang tua/wali (PWSB pkl 7.00)',
              note: 'Ini adalah keterangan yang sangat panjang sekali sampai-sampai satu baris pun tidak cukup'
            },
            {
              id: '20190703',
              begin: new Date(2019, 6, 8),
              end: new Date(2019, 6, 11),
              desc: 'Masa orientasi santri baru, daurah alumni, dan raker asatidzah',
            },
            
          ]
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
}

export default CalendarData;
