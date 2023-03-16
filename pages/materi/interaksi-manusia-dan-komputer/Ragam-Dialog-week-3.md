---
description: >-
  Ragam Dialog adalah salah satu materi dari mata kuliah Interaksi Manusia dan Komputer. Materi ini membahas tentang pengertian dialog, aturan dalam perancangan dialog, dan karakteristik umum ragam dialog.
keywords: >-
  dialog, aturan dalam perancangan dialog, karakteristik umum ragam dialog
---


# Ragam Dialog - (_Pertemuan 3_)

> Pertemuan pada minggu 3

## Dialog Manusia-Komputer
#### Pengertian dialog
- Umum, dialog adalah proses komunikasi antara 2 atau lebih agen, dalam dialog makna harus dipertimbangkan agar memenuhi kaidah semantis dan pragmatis
- IMK, dialog adalah pertukaran instruksi dan informasi yang mengambil tempat antara user dan sistem komputer


## Aturan dalam Perancangan Dialog
- Pegang teguh konsistensi
- Sediakan shortcut bagi pengguna aktif
- Sediakan feedback yang informatif
- Sediakan error handling yang mudah
- Ijinkan pembatalan aksi
- Sediakan fasilitas bantuan (help)
- Kurangi beban ingatan jangka pendek

## Pegang Teguh Konsistensi

Informasi disusun dalam formulir-formulir, nama-nama dan susunan menu, ukuran dan bentuk dari ikon, dll, semuanya harus konsisten diseluruh sistem
- Konsisten mengijinkan banyak aksi menjadi otomatis
- Jika ada aplikasi baru hadir dengan fungsi yang berbeda akan menyebabkan user harus mempelajari kembali operasi-operasi yang dilakukan
- `Mis`: konsistensi di dalam menu bar untuk _File_, _Edit_ dan _Format_


## Sediakan Short Cut Bagi Pengguna Aktif

- User yang bekerja dengan satu aplikasi dalam seluruh waktunya akan menginginkan penghematan waktu dengan memanfaatkan short cut
- User mulai hilang kesabaran dengan urutan menu panjang ketika mereka sudah tahu pasti apa yang mereka kerjakan
- Short cut keys dapat mereduksi jumlah interaksi untuk tugas yang diberikan
- Designer dapat menyediakan fasilitas makro bagi user untuk membuat short cuts bagi dirinya sendiri
- Dengan short cut membuat user lebih produktif

## Sediakan Feedback yang Informatif

- Setiap aksi dari user harus ada feedback dari komputer untuk menunjukkan hasil dari aksi tersebut
    - Mis: jika user meng-”click” sebuah button harus secara visual ada perubahan bentuk atau bisa berupa bunyi yang mengindikasikan komputer telah meresponnya
    - Informasi feedback sangat penting bagi user, mis:
        - Jika komputer sedang melakukan proses tertentu, maka perlu ada informasi


## Sediakan Error Handling yang Mudah

- Error dapat menjadi masalah yang serius, sehingga designer harus mencoba mencegah user membuat error
- Ketika errors terjadi perlu cara mengatasinya:
    - Pesan error harus dinyatakan secara jelas apa kesalahannya dan menerangkan bagaimana kesalahan tersebut terjadi
    - Hindari pesan yang menakutkan atau menyalahkan user seperti: “FATAL ERROR 2005”
    - Juga sediakan informasi yang memudahkan untuk mengoreksi error tersebut, mis: “the date of birth entered is not valid. Check to be sure only numeric characters in appropriate ranges are entered in the date of birth _fields…._”


## Contoh Error Handling

> Coming Soon

## Karakteristik Umum Ragam Dialog 

### Inisiatif
- Inisiatif oleh komputer; user memberikan tanggapan atas prompt yang diberikan oleh komputer
- Inisiatif oleh user; user mempunyai sifat keterbukaan yang luas dalam artian user diharapkan agar dapat memahami sekumpulan perintah yang harus ditulis menurut aturan (sintaks) tertentu

### Keluwesan
- Tidak hanya dilihat dari kemampuan sistem menyediakan sejumlah perintah-perintah yang memberikan hasil sama, tetapi bagaimana sistem dapat menyesuaikan diri dengan keinginan pengguna dan bukan sebaliknya

### Kompleksitas
- Keluwesan harus dibayar dengan kompleksitas implementasi yang tinggi, oleh sebab itu perlu pembatasan kompleksitas dengan cara TIDAK membuat antarmuka lebih dari yang diperlukan karena tidak ada keuntungan darinya

### Kekuatan
- Didefinisikan sebagai jumlah kerja yang dapat dilakukan oleh sistem untuk setiap perintah yang diberikan oleh user. Aspek ini dapat berbenturan dengan aspek keluwesan dan kompleksitas

### Beban informasi
- Penyampaian informasi dalam dialog yang sesuai dengan kebutuhan pengguna

### Konsistensi
- Suatu atribut yang dapat mendorong user mengembangkan mentalitas dengan cara memberikan semacam petunjuk untuk mengeksplorasi pengetahuan tentang pemahaman perintah-perintah baru dengan opsion yang sudah ada

### Umpan balik
- Kemampuan untuk memberikan informasi kepada user tentang proses yang sedang berjalan akibat adanya masukan yang dilakukan oleh user
