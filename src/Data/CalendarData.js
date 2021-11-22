const CalendarData = {
  years: [
    {
      id: '2021',
      name: '2021',
      months: [
        {
          id: '202106',
          name: 'Juli',
          abbr: 'Jul',
          agendas: [
            {
              id: '20210601',
              begin: new Date(2021, 6, 12),
              end: null,
              desc: 'Awal masuk kerja asatidzah',
              note: 'Tahun Pelajaran 2021/2022',
            },
            {
              id: '20210602',
              begin: new Date(2021, 6, 19),
              end: null,
              desc: 'Awal KBM semester gasal',
              note: 'Tahun Pelajaran 2021/2022',
            },
            {
              id: '20210603',
              begin: new Date(2021, 6, 19),
              end: null,
              desc: 'Hari Arafah',
              note: '',
            },
            {
              id: '20210604',
              begin: new Date(2021, 6, 20),
              end: new Date(2021, 6, 21),
              desc: 'Iduladha dan kegiatan qurban',
              note: '1442 H',
            },
            {
              id: '20210605',
              begin: new Date(2021, 6, 22),
              end: null,
              desc: 'Libur asatidzah, santriwan/wati pasca Iduladha dan qurban',
              note: 'Tidak ada kegiatan belajar mengajar',
            },
          ]
        },
        {
          id: '202107',
          name: 'Agustus',
          abbr: 'Ags',
          agendas: [
            {
              id: '20210701',
              begin: new Date(2021, 7, 1),
              end: null,
              desc: 'Awal masuk santriwan/wati khidmah',
              note: 'Tahun Pelajaran 2021/2022',
            },
            {
              id: '20210702',
              begin: new Date(2021, 7, 7),
              end: null,
              desc: 'Awal kedatangan santriwan/wati lama',
              note: 'Secara bertahap dan terjadwal',
            },
            {
              id: '20210703',
              begin: new Date(2021, 7, 15),
              end: null,
              desc: 'Kedatangan santriwan/wati baru',
              note: '',
            },
            {
              id: '20210704',
              begin: new Date(2021, 7, 17),
              end: null,
              desc: 'Hari kemerdekaan Republik Indonesia',
              note: '',
            },
          ]
        },
        {
          id: '202108',
          name: 'September',
          abbr: 'Sep',
          agendas: []
        },
        {
          id: '202109',
          name: 'Oktober',
          abbr: 'Okt',
          agendas: [
            {
              id: '20210901',
              begin: new Date(2021, 9, 1),
              end: new Date(2021, 10, 30),
              desc: 'Pendaftaran Santriwan/wati Baru (PSB)',
              note: 'Tahun Pelajaran 2022/2023',
            },
            {
              id: '20210902',
              begin: new Date(2021, 9, 4),
              end: new Date(2021, 9, 16),
              desc: 'Penilaian Bulanan/Tengah Semester (PTS) Gasal',
              note: '',
            },
          ]
        },
        {
          id: '202110',
          name: 'November',
          abbr: 'Nov',
          agendas: [
            {
              id: '20211001',
              begin: new Date(2021, 9, 1),
              end: new Date(2021, 10, 30),
              desc: 'Pendaftaran Santriwan/wati Baru (PSB)',
              note: 'Tahun Pelajaran 2022/2023',
            },
            {
              id: '20211002',
              begin: new Date(2021, 10, 29),
              end: new Date(2021, 11, 11),
              desc: 'Penilaian Akhir Semester (PAS) Gasal',
              note: '',
            },
          ]
        },
        {
          id: '202111',
          name: 'Desember',
          abbr: 'Des',
          agendas: [
            {
              id: '20211101',
              begin: new Date(2021, 10, 29),
              end: new Date(2021, 11, 11),
              desc: 'Penilaian Akhir Semester (PAS) Gasal',
              note: '',
            },
            {
              id: '20211102',
              begin: new Date(2021, 11, 25),
              end: null,
              desc: 'Pembagian rapor semester gasal',
              note: '',
            },
            {
              id: '20211103',
              begin: new Date(2021, 11, 26),
              end: new Date(2022, 0, 8),
              desc: 'Libur semester gasal',
              note: 'Santriwan/wati',
            },
            {
              id: '20211104',
              begin: new Date(2021, 11, 27),
              end: new Date(2022, 0, 6),
              desc: 'Libur semester gasal',
              note: 'Asatidzah',
            },
          ]
        }
      ]
    },
    {
      id: '2022',
      name: '2022',
      months: [
        {
          id: '202200',
          name: 'Januari',
          abbr: 'Jan',
          agendas: [
            {
              id: '20220001',
              begin: new Date(2021, 11, 26),
              end: new Date(2022, 0, 8),
              desc: 'Libur semester gasal',
              note: 'Santriwan/wati',
            },
            {
              id: '20220002',
              begin: new Date(2021, 11, 27),
              end: new Date(2022, 0, 6),
              desc: 'Libur semester gasal',
              note: 'Asatidzah',
            },
            {
              id: '20220003',
              begin: new Date(2022, 0, 7),
              end: null,
              desc: 'Awal masuk kerja asatidzah semester genap',
              note: '',
            },
            {
              id: '20220004',
              begin: new Date(2022, 0, 8),
              end: null,
              desc: 'Kedatangan santriwan/wati masuk semester genap',
              note: '',
            },
            {
              id: '20220005',
              begin: new Date(2022, 0, 10),
              end: null,
              desc: 'Kegiatan belajar mengajar hari pertama semester genap',
              note: '',
            },
          ]
        },
        {
          id: '202201',
          name: 'Februari',
          abbr: 'Feb',
          agendas: []
        },
        {
          id: '202202',
          name: 'Maret',
          abbr: 'Mar',
          agendas: [
            {
              id: '20220201',
              begin: new Date(2022, 2, 7),
              end: new Date(2022, 2, 19),
              desc: 'Penilaian Tengah Semester (PTS) Genap',
              note: '',
            },
          ]
        },
        {
          id: '202203',
          name: 'April',
          abbr: 'Apr',
          agendas: [
            {
              id: '20220301',
              begin: new Date(2022, 3, 2),
              end: null,
              desc: 'Perkiraan awal Ramadhan',
              note: '1443 H',
            },
            {
              id: '20220302',
              begin: new Date(2022, 3, 16),
              end: null,
              desc: 'Kepulangan santriwan/wati untuk liburan Ramadhan dan Idulfitri',
              note: '',
            },
            {
              id: '20220303',
              begin: new Date(2022, 3, 17),
              end: new Date(2022, 4, 14),
              desc: 'Libur Ramadhan dan Idulfitri',
              note: 'Santriwan/wati',
            },
            {
              id: '20220304',
              begin: new Date(2022, 3, 18),
              end: new Date(2022, 4, 13),
              desc: 'Libur Ramadhan dan Idulfitri',
              note: 'Asatidzah',
            },
          ]
        },
        {
          id: '202204',
          name: 'Mei',
          abbr: 'Mei',
          agendas: [
            {
              id: '20220401',
              begin: new Date(2022, 3, 17),
              end: new Date(2022, 4, 14),
              desc: 'Libur Ramadhan dan Idulfitri',
              note: 'Santriwan/wati',
            },
            {
              id: '20220402',
              begin: new Date(2022, 3, 18),
              end: new Date(2022, 4, 13),
              desc: 'Libur Ramadhan dan Idulfitri',
              note: 'Asatidzah',
            },
            {
              id: '20220403',
              begin: new Date(2022, 4, 14),
              end: null,
              desc: 'Awal masuk kerja asatidzah pasca libur Idulfitri',
              note: '',
            },
            {
              id: '20220404',
              begin: new Date(2022, 4, 15),
              end: null,
              desc: 'Kedatangan santriwan/wati pasca libur Idulfitri',
              note: 'Maksimal pukul 16.00 WIB',
            },
            {
              id: '20220405',
              begin: new Date(2022, 4, 30),
              end: new Date(2022, 5, 11),
              desc: 'Ulangan Kenaikan Kelas (UKK)/Penilaian Akhir Tahun',
              note: '',
            },
          ]
        },
        {
          id: '202205',
          name: 'Juni',
          abbr: 'Jun',
          agendas: [
            {
              id: '20220501',
              begin: new Date(2022, 4, 30),
              end: new Date(2022, 5, 11),
              desc: 'Ulangan Kenaikan Kelas (UKK)/Penilaian Akhir Tahun',
              note: '',
            },
            {
              id: '20220502',
              begin: new Date(2022, 5, 25),
              end: null,
              desc: 'Pembagian rapor semester genap',
              note: '',
            },
            {
              id: '20220503',
              begin: new Date(2022, 5, 26),
              end: new Date(2022, 6, 16),
              desc: 'Libur kenaikan kelas',
              note: 'Santriwan/wati',
            },
            {
              id: '20220504',
              begin: new Date(2022, 5, 27),
              end: new Date(2022, 6, 13),
              desc: 'Libur kenaikan kelas',
              note: 'Asatidzah',
            },
          ]
        },
        {
          id: '202206',
          name: 'Juli',
          abbr: 'Jul',
          agendas: [
            {
              id: '20220601',
              begin: new Date(2022, 5, 26),
              end: new Date(2022, 6, 16),
              desc: 'Libur kenaikan kelas',
              note: 'Santriwan/wati',
            },
            {
              id: '20220602',
              begin: new Date(2022, 5, 27),
              end: new Date(2022, 6, 13),
              desc: 'Libur kenaikan kelas',
              note: 'Asatidzah',
            },
            {
              id: '20220603',
              begin: new Date(2022, 6, 14),
              end: null,
              desc: 'Awal masuk kerja asatidzah',
              note: 'Tahun Pelajaran 2022/2023',
            },
            {
              id: '20220604',
              begin: new Date(2022, 6, 16),
              end: null,
              desc: 'Awal masuk santriwan/wati baru diantar orang tua/wali',
              note: 'PWSB pukul 7.00 WIB',
            },
            {
              id: '20220605',
              begin: new Date(2022, 6, 18),
              end: new Date(2022, 6, 20),
              desc: 'Masa Pengenalan Lingkungan Sekolah (MPLS)',
              note: '',
            },
            {
              id: '20220606',
              begin: new Date(2022, 6, 21),
              end: null,
              desc: 'Awal kegiatan belajar mengajar semester gasal santri baru',
              note: 'Tahun Pelajaran 2022/2023',
            },
            {
              id: '20220607',
              begin: new Date(2022, 6, 23),
              end: null,
              desc: 'Kedatangan santriwan/wati lama',
              note: 'Maksimal pukul 16.00 WIB',
            },
            {
              id: '20220608',
              begin: new Date(2022, 6, 25),
              end: null,
              desc: 'Awal kegiatan belajar mengajar semester gasal santri lama',
              note: 'Tahun Pelajaran 2022/2023',
            },
          ]
        }
      ]
    }
  ]
}

export default CalendarData;
