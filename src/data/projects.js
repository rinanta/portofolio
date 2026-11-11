export const projects = [
  {
    id: 'hris-pt-karsa-lintas-nusantara',
    number: '01',
    category: 'HRIS & Enterprise',
    domain: 'hrisptkarsalintasnusantara.netlify.app',
    title: 'HRIS — PT Karsa Lintas Nusantara',
    shortDescription:
      'Portal kepegawaian terpadu untuk pengelolaan sumber daya manusia, kehadiran, dan penggajian karyawan dengan autentikasi Google serta Evaluator Mode.',
    image: '/images/project-hris-karsa.png',
    imageAlt: 'Tampilan portal login HRIS PT Karsa Lintas Nusantara',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Netlify'],
    problem:
      'Perusahaan membutuhkan portal kepegawaian terpusat untuk menyatukan pengelolaan data SDM, pencatatan kehadiran, dan penggajian karyawan dalam satu akses yang aman.',
    solution:
      'Membangun antarmuka portal kepegawaian berbasis Next.js dengan tata letak split-screen yang jelas, dukungan login email perusahaan maupun akun Google, serta mode akun uji cepat untuk evaluasi sistem.',
    features: [
      'Autentikasi email perusahaan, integrasi login Google, dan fitur akun uji cepat (Evaluator Mode)',
      'Indikator status server real-time (WIB) dan informasi keamanan koneksi pada header portal',
      'Alur masuk ke modul manajemen SDM, kehadiran, dan penggajian karyawan terpadu',
      'Desain responsif dengan kontras tipografi tinggi untuk kenyamanan akses desktop maupun mobile'
    ],
    demoUrl: 'https://hrisptkarsalintasnusantara.netlify.app'
  },
  {
    id: 'eduhealth-dr-arif-rahman',
    number: '02',
    category: 'HealthTech & Profil Medis',
    domain: 'eduhealth.informatikaunimus.id',
    title: 'EduHealth — Web Dokter dr. Arif Rahman, Sp.PD',
    shortDescription:
      'Website profil dan informasi layanan kesehatan Dokter Spesialis Penyakit Dalam yang merangkum spesialisasi medis, riwayat praktek, dan jadwal konsultasi.',
    image: '/images/project-eduhealth.png',
    imageAlt: 'Tampilan halaman utama website dokter dr. Arif Rahman, Sp.PD',
    techStack: ['HTML5', 'CSS3', 'Responsive Web'],
    problem:
      'Pasien sering kesulitan menemukan informasi terstruktur mengenai bidang keahlian dokter spesialis, layanan penanganan penyakit kronis, hingga jadwal praktek yang akurat.',
    solution:
      'Merancang website profil medis yang informatif dengan hierarki konten yang jelas—mulai dari profil dokter, kartu layanan unggulan (Geriatri, Osteoarthritis, Diabetes), hingga jadwal praktek dan kontak.',
    features: [
      'Kartu informasi singkat dokter beserta ringkasan pengalaman klinis dan keanggotaan profesi',
      'Pengelompokan layanan dan keahlian penyakit dalam yang mudah dipindai oleh pasien',
      'Navigasi sticky yang memudahkan perpindahan antar bagian Beranda, Jadwal Praktek, dan Pelayanan',
      'Tata letak adaptif yang tetap nyaman dibaca di perangkat seluler maupun layar lebar'
    ],
    demoUrl: 'https://eduhealth.informatikaunimus.id/'
  },
  {
    id: 'portal-hris-sedap',
    number: '03',
    category: 'HRIS & Presensi',
    domain: 'hrissedap.rinantata.site',
    title: 'Portal HRIS Sedap',
    shortDescription:
      'Aplikasi presensi digital dan pengajuan cuti karyawan yang menggantikan pencatatan buku hadir manual dengan alur pengajuan dan pemantauan satu tempat.',
    image: '/images/project-hris-sedap.png',
    imageAlt: 'Tampilan halaman masuk Portal HRIS Sedap',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    problem:
      'Pencatatan jam masuk-pulang berbasis buku hadir manual dan pengajuan cuti yang terpisah membuat rekap kehadiran karyawan rentan tercecer dan lambat dipantau.',
    solution:
      'Mengembangkan Portal HRIS Sedap dengan antarmuka split-layout yang menonjolkan fungsi utama presensi harian, pengajuan cuti, serta kemudahan masuk menggunakan akun Google.',
    features: [
      'Pencatatan jam masuk dan pulang karyawan secara digital tanpa buku hadir manual',
      'Alur pengajuan cuti dan pemantauan status persetujuan dalam satu portal terpadu',
      'Dukungan login email/kata sandi serta integrasi Masuk dengan Google',
      'Palet warna hijau-krem yang tenang dengan fokus kejelasan formulir di berbagai ukuran layar'
    ],
    demoUrl: 'https://hrissedap.rinantata.site'
  },
  {
    id: 'dapur-nia',
    number: '04',
    category: 'F&B & Operasional UMKM',
    domain: 'dapurnialogin.netlify.app',
    title: 'Dapur Nia — Manajemen Menu & Pesanan',
    shortDescription:
      'Aplikasi web kuliner rumahan dengan pemisahan peran Daftar Menu untuk pelanggan, pemantauan Pesanan Masuk untuk karyawan, dan panel Admin pengelola.',
    image: '/images/project-dapurnia.png',
    imageAlt: 'Tampilan antarmuka Daftar Hidangan aplikasi Dapur Nia',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Firebase'],
    problem:
      'Usaha kuliner rumahan memerlukan sistem ringan untuk menampilkan ketersediaan hidangan kepada pelanggan sekaligus memantau antrean pesanan masuk secara langsung.',
    solution:
      'Membangun Single Page Application berbasis React, Vite, dan Firebase dengan tiga tampilan peran terpisah (Daftar Menu, Pesanan Masuk, dan Admin) serta sinkronisasi status real-time.',
    features: [
      'Pemisahan navigasi peran untuk Pemesan (Daftar Menu), Karyawan (Pesanan Masuk), dan Pemilik (Admin)',
      'Indikator status operasional toko dan badge jumlah pesanan menunggu secara real-time dari Firestore',
      'Autentikasi pengelola menggunakan Firebase Authentication sebelum mengakses panel pesanan & menu',
      'Navigasi tab desktop dan bottom-bar khusus perangkat mobile untuk kemudahan operasional harian'
    ],
    demoUrl: 'https://dapurnialogin.netlify.app/'
  },
  {
    id: 'bengkel-cemerlang-jaya-motor',
    number: '05',
    category: 'Otomotif & Manajemen Jasa',
    domain: 'tim-3-bengkel-cemerlang-jaya-motor.netlify.app',
    title: 'Cemerlang Jaya Motor — Manajemen Bengkel',
    shortDescription:
      'Portal manajemen operasional bengkel Cemerlang Jaya Motor dengan gerbang autentikasi pengelola berbasis Next.js yang ringkas dan terfokus.',
    image: '/images/project-bengkel-cjm.png',
    imageAlt: 'Tampilan halaman masuk aplikasi manajemen bengkel Cemerlang Jaya Motor',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Netlify'],
    problem:
      'Pengelola bengkel membutuhkan akses sistem internal yang tertata dan aman untuk memulai pengelolaan operasional layanan bengkel secara terpusat.',
    solution:
      'Merancang portal manajemen bengkel berbasis Next.js dengan antarmuka masuk yang bersih, fokus pada kejelasan input email serta kata sandi bagi pengelola.',
    features: [
      'Gerbang autentikasi email dan kata sandi khusus pengelola bengkel',
      'Desain kartu login minimalis dengan fokus visual yang jelas dan status fokus input yang aksesibel',
      'Arsitektur Next.js untuk perpindahan halaman yang cepat dan efisien',
      'Tersedia secara online di Netlify untuk memudahkan akses lintas perangkat'
    ],
    demoUrl: 'https://tim-3-bengkel-cemerlang-jaya-motor.netlify.app/login'
  },
  {
    id: 'toko-buku-jingga',
    number: '06',
    category: 'Retail & Profil Toko Buku',
    domain: 'tokobukujinggaa.netlify.app',
    title: 'Toko Buku Jingga — Toko Buku Independen',
    shortDescription:
      'Landing page profil toko buku independen dengan katalog buku terlaris, empat kategori pilihan, promo paket bundling hemat, serta pemesanan langsung via WhatsApp.',
    image: '/images/project-toko-buku-jingga.png',
    imageAlt: 'Tampilan halaman utama website Toko Buku Jingga',
    techStack: ['Next.js', 'React', 'CSS', 'Netlify'],
    problem:
      'Toko buku independen membutuhkan etalase digital yang hangat dan tertata untuk menampilkan kurasi buku pilihan, paket bundling hemat, serta memudahkan pelanggan berkonsultasi dan memesan buku.',
    solution:
      'Membangun landing page Toko Buku Jingga berbasis Next.js bernuansa jingga-krem dengan etalase koleksi unggulan, 4 kategori utama, daftar buku terlaris, testimoni pembaca, paket bundling, dan integrasi pemesanan langsung ke WhatsApp.',
    features: [
      'Pengelompokan 4 kategori utama (Fiksi, Nonfiksi, Anak, Pelajaran) dan daftar Buku Terlaris Pekan Ini',
      'Katalog Promo Paket Bundling (Paket Pelajar, Keluarga Membaca, dan Kolektor) lengkap dengan rincian hemat',
      'Tombol pemesanan dan konsultasi rekomendasi buku langsung terhubung ke WhatsApp pada tiap buku dan paket',
      'Informasi jam operasional, alamat toko fisik, tautan Google Maps, serta ulasan pembaca dalam satu halaman'
    ],
    demoUrl: 'https://tokobukujinggaa.netlify.app/'
  }
];
