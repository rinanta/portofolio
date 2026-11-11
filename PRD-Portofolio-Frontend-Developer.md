# PRD: Website Portofolio Pribadi (Frontend Developer)

*Versi 1.0 · 10 November 2026 · Status: Draft*

> **Catatan:** Dokumen ini disusun dari hasil diskusi perencanaan (Pertanyaan 12 sampai 15). Bagian yang belum dibahas ditandai **[TBD]** atau **Asumsi** dan perlu dikonfirmasi sebelum pengembangan dimulai.

---

## 1. Ringkasan Produk

Website portofolio pribadi untuk seorang **Frontend Developer**. Website ini berfungsi sebagai media personal branding sekaligus bukti kemampuan teknis. Pengunjung utamanya adalah recruiter dan calon klien, yang dapat melihat profil, skill, proyek, pengalaman, dan pencapaian dalam satu halaman, lalu menghubungi pemilik dengan mudah.

Website dibuat **sepenuhnya statis** (tanpa backend dan database). Konten proyek dikelola melalui data statis di dalam aplikasi.

## 2. Latar Belakang dan Tujuan

### 2.1 Latar Belakang

Pemilik membutuhkan satu tempat untuk menampilkan karya dan perjalanan profesionalnya. Portofolio ini juga menjadi proyek showcase yang memperlihatkan kemampuan React dan frontend modern.

### 2.2 Tujuan

- Menampilkan profil profesional dan proyek unggulan secara ringkas dan menarik.
- Memudahkan recruiter dan calon klien menghubungi pemilik.
- Menjadi bukti kemampuan teknis (React, Tailwind CSS, desain responsif).
- Menggunakan domain pribadi yang sudah dimiliki agar terlihat profesional.

### 2.3 Metrik Keberhasilan (Asumsi)

- Skor Lighthouse minimal 90 untuk Performance, Accessibility, Best Practices, dan SEO.
- Waktu muat halaman awal di bawah 2 detik pada koneksi normal.
- Klik pada tombol kontak (GitHub, LinkedIn, Email) dan View Details dapat dipantau lewat analytics **[TBD]**.

## 3. Target Pengguna

| Persona | Kebutuhan | Perilaku |
|---|---|---|
| Recruiter / HR | Menilai skill dan pengalaman dengan cepat | Memindai halaman, membuka proyek, mengecek LinkedIn dan GitHub |
| Hiring manager / tech lead | Menilai kualitas teknis proyek | Membaca detail proyek, membuka repository |
| Calon klien | Mencari developer untuk proyek | Melihat hasil kerja, lalu menghubungi lewat email |

## 4. Ruang Lingkup

### 4.1 Dalam Lingkup (In Scope)

- Website one page dengan navigasi ke tiap section.
- Detail proyek lewat tombol **View Details** (modal atau halaman terpisah).
- Tiga kanal kontak: GitHub, LinkedIn, Email.
- Desain responsif (mobile, tablet, desktop).
- Deployment ke domain pribadi.

### 4.2 Di Luar Lingkup (Out of Scope)

- Backend, database, dan sistem login.
- CMS atau dashboard admin.
- Platform media sosial selain GitHub, LinkedIn, dan Email.
- Form kontak berbasis server **(Asumsi: kontak lewat tautan `mailto`)**.

## 5. Struktur Website (Sitemap)

Struktur yang dipilih adalah **One Page Portfolio**. Halaman utama tetap ringkas, sementara detail proyek dapat dibuka terpisah bagi yang ingin menggali lebih dalam.

| No | Section | Isi |
|---|---|---|
| 1 | Home | Nama, jabatan (Frontend Developer), tagline singkat, tombol CTA (misalnya "Lihat Proyek" dan "Hubungi Saya") |
| 2 | About Me | Ringkasan profil dan latar belakang |
| 3 | Skills | Daftar skill dan teknologi, termasuk React |
| 4 | Projects | Kartu proyek dengan tombol View Details |
| 5 | Experience | Riwayat pengalaman kerja atau magang |
| 6 | Achievements | Pencapaian, sertifikasi, atau penghargaan |
| 7 | Contact | Tautan GitHub, LinkedIn, dan Email |

## 6. Kebutuhan Fungsional

| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-01 | Navbar tetap (sticky) dengan tautan ke seluruh section dan smooth scroll | Tinggi |
| FR-02 | Penanda section aktif pada navbar saat pengguna scroll | Sedang |
| FR-03 | Hero section dengan nama, jabatan, dan tombol CTA | Tinggi |
| FR-04 | Section Skills menampilkan skill terkelompok (misalnya Frontend, Tools) | Tinggi |
| FR-05 | Section Projects menampilkan kartu proyek (judul, deskripsi singkat, tech stack, gambar) | Tinggi |
| FR-06 | Tombol **View Details** membuka penjelasan proyek lengkap (modal atau halaman detail) | Tinggi |
| FR-07 | Detail proyek memuat masalah, solusi, fitur utama, tech stack, tautan repository, dan tautan demo | Tinggi |
| FR-08 | Section Experience tampil dalam format timeline | Sedang |
| FR-09 | Section Achievements menampilkan daftar pencapaian | Sedang |
| FR-10 | Section Contact memuat tautan GitHub, LinkedIn, dan Email (`mailto`) | Tinggi |
| FR-11 | Tautan eksternal dibuka di tab baru dengan atribut `rel="noopener noreferrer"` | Tinggi |
| FR-12 | Seluruh konten dibaca dari file data statis (misalnya `projects.js`) agar mudah diperbarui | Tinggi |
| FR-13 | Tombol unduh CV **[TBD]** | Rendah |
| FR-14 | Mode gelap (dark mode) **[TBD]** | Rendah |

## 7. Kebutuhan Non-Fungsional

- **Performa:** gambar dioptimalkan (format WebP, lazy loading), bundle seminimal mungkin.
- **Responsif:** tampilan optimal dari lebar 320px sampai desktop.
- **Aksesibilitas:** HTML semantik, kontras warna memadai, navigasi keyboard, teks alternatif pada gambar.
- **SEO:** meta title dan description, Open Graph tags, `sitemap.xml`, `robots.txt`, favicon.
- **Kompatibilitas:** versi terbaru Chrome, Firefox, Safari, dan Edge.
- **Keamanan:** HTTPS wajib; tidak menyimpan data pengguna.
- **Maintainability:** kode berbasis komponen yang dapat dipakai ulang, struktur folder rapi.

## 8. Teknologi (Tech Stack)

| Kategori | Pilihan |
|---|---|
| Framework | React.js |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Jenis aplikasi | Website statis (tanpa backend dan database) |
| Pengelolaan konten | Data statis di dalam aplikasi |
| Version control | Git dan GitHub |
| Animasi | **[TBD]** (misalnya Framer Motion) |
| Ikon | **[TBD]** (misalnya Lucide atau React Icons) |

### Struktur Folder yang Diusulkan

```
src/
  components/   (Navbar, Hero, SectionTitle, ProjectCard, ProjectModal, Footer)
  sections/     (Home, About, Skills, Projects, Experience, Achievements, Contact)
  data/         (projects.js, skills.js, experience.js, achievements.js)
  assets/       (gambar, ikon)
  App.jsx
  main.jsx
```

## 9. Desain dan UX

- **Gaya visual:** **[TBD]** (modern, minimalis, dan profesional adalah usulan awal).
- **Palet warna dan tipografi:** **[TBD]**.
- **Prinsip UX:** informasi penting terbaca dalam beberapa detik pertama, navigasi jelas, tombol kontak mudah ditemukan di Home dan Contact.
- **Detail proyek:** dibuka lewat View Details agar halaman utama tidak padat. Modal disarankan untuk keringkasan; halaman terpisah cocok jika ingin URL yang bisa dibagikan.

## 10. Domain, Hosting, dan Deployment

- **Domain:** menggunakan **domain pribadi yang sudah dimiliki** pemilik.
- **Hosting:** **belum ditentukan**. Rekomendasi: **Vercel** atau **Netlify**, karena keduanya gratis untuk situs statis, mendukung custom domain, HTTPS otomatis, dan deploy otomatis dari GitHub.
- **Repository:** GitHub **[TBD: konfirmasi akun yang dipakai]**.
- **Alur deployment:** push ke branch `main`, build otomatis (`npm run build`), lalu publish ke hosting.
- **Langkah DNS:** tambahkan record A/CNAME di penyedia domain sesuai petunjuk hosting, lalu aktifkan HTTPS.

## 11. Kebutuhan Konten (dari Pemilik)

| Konten | Status |
|---|---|
| Nama lengkap, jabatan, dan tagline | **[TBD]** |
| Foto profil | **[TBD]** |
| Teks About Me | **[TBD]** |
| Daftar skill | **[TBD]** (React sudah disebut) |
| Daftar proyek (judul, deskripsi, screenshot, link demo dan repo) | **[TBD]** |
| Riwayat pengalaman | **[TBD]** |
| Pencapaian dan sertifikasi | **[TBD]** |
| URL GitHub dan LinkedIn serta alamat email | **[TBD]** |
| CV dalam bentuk PDF (opsional) | **[TBD]** |

## 12. Rencana Rilis (Milestone)

| Fase | Kegiatan | Estimasi |
|---|---|---|
| 1 | Setup proyek (Vite, React, Tailwind) dan struktur folder | 1 hari |
| 2 | Desain UI dan komponen dasar (Navbar, Hero, Footer) | 2 sampai 3 hari |
| 3 | Implementasi seluruh section dan data statis | 3 sampai 4 hari |
| 4 | Fitur View Details dan responsivitas | 2 sampai 3 hari |
| 5 | Optimasi performa, SEO, dan aksesibilitas | 1 sampai 2 hari |
| 6 | Deployment dan konfigurasi domain | 1 hari |
| 7 | Pengujian akhir dan peluncuran | 1 hari |

*Estimasi bersifat asumsi untuk pengerjaan solo dan dapat disesuaikan.*

## 13. Risiko dan Mitigasi

| Risiko | Mitigasi |
|---|---|
| Konten belum siap saat pengembangan | Gunakan placeholder dan siapkan konten secara paralel |
| Gambar besar memperlambat website | Kompres gambar, gunakan WebP dan lazy loading |
| Konfigurasi DNS domain bermasalah | Ikuti panduan hosting, gunakan domain sementara untuk uji |
| Halaman one page terlalu panjang | Ringkas konten, detail dipindah ke View Details |
| SEO terbatas karena React berbasis client-side rendering | Pasang meta tags yang baik; pertimbangkan prerendering bila diperlukan |

## 14. Pertanyaan Terbuka

1. Hosting yang dipilih: Vercel, Netlify, atau GitHub Pages?
2. Detail proyek berupa modal atau halaman terpisah?
3. Apakah perlu dark mode, animasi, dan tombol unduh CV?
4. Bagaimana gaya visual dan palet warna yang diinginkan?
5. Apakah perlu bahasa ganda (Indonesia dan Inggris)?
6. Apakah perlu analytics untuk memantau pengunjung?

## 15. Kriteria Penerimaan (Definition of Done)

- Seluruh 7 section tampil dan dapat dinavigasi.
- Tombol View Details berfungsi untuk setiap proyek.
- Tautan GitHub, LinkedIn, dan Email berfungsi dengan benar.
- Tampilan responsif di mobile, tablet, dan desktop.
- Website live di domain pribadi dengan HTTPS.
- Skor Lighthouse memenuhi target pada bagian 2.3.
