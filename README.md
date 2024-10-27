# Cara Menambahkan Komponen di Halaman Ionic

Nama: Brian Cahya Purnama

NIM: H1D022009

Shift Lama: C

Shift Baru: D

## 1. Membuat Component Baru
Saya pake Angular CLI untuk generate component baru dengan perintah:
```
ng generate component pages/about-me
ng generate component pages/my-project
```

## 2. Menambahkan Deklarasi Component
Terus saya buka file `app.module.ts` dan nambahin komponen yang baru dibuat ke dalam array `declarations`:
```
declarations: [
  AppComponent,
  AboutMeComponent,
  MyProjectComponent
],
```

## 3. Menyiapkan Assets untuk Konten
Abis itu saya buat folder images di dalam folder assets (src/assets/images) buat nyimpen gambar yang digunakan untuk konten saya

## 4. Implementasi UI Component Ionic
Setelah komponen dan assets disiapkan, saya mengimplementasikan card component yang sudah siap pakai pada Docs UI Component Ionic, berikut contoh kode saya:
```
<ion-card>
  <img alt="soeara" src="../../../assets/images/soeara.jpg" />
  <ion-card-header>
    <ion-card-title class="text-green">Soeara: Website Petisi <i>Online</i> Mahasiswa UNSOED</ion-card-title>
    <ion-card-subtitle class="text-light-green">Team Project</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>
    Soeara (Soedirman Berbicara) adalah platform petisi yang bertujuan untuk memberikan suara kepada komunitas Universitas Jenderal Soedirman (Unsoed) dan mempromosikan perubahan positif dalam lingkungan kampus. Kami percaya bahwa setiap individu memiliki hak untuk didengar dan untuk memperjuangkan perubahan yang mereka yakini. Di Soeara, kami berkomitmen untuk memberdayakan mahasiswa, staf, dan alumni Unsoed untuk berbicara tentang isu-isu yang penting bagi mereka.
  </ion-card-content>
</ion-card>
```

## 5. Styling Component
Untuk meningkatkan tampilan komponen, saya menambahkan CSS. Berikut contoh potongan css yang saya pakai:
```css
ion-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(46, 204, 113, 0.2);
    transition: all 0.3s ease;
}
```

## Demo
![Demo GIF](demo.gif)
