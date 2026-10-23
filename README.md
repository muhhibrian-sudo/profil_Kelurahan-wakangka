# Website Profil Kelurahan Wakangka — GitHub Pages

Website satu halaman dengan scroll normal, navigasi presisi, galeri dokumentasi khusus Wakangka, dan tombol Google Drive layanan.

## Isi berkas
- `index.html` — semua konten website
- `style.css` — tampilan responsif HP/laptop
- `app.js` — navigasi, foto lokal/cadangan, menu HP, tombol Drive
- `config.js` — link layanan Google Drive
- `images/` — tempat screenshot/foto lokal dari Wakangka yang sudah mendapat izin
- `SUMBER-FOTO.md` — referensi dan ketentuan penggunaan foto
- `.nojekyll` — kompatibilitas GitHub Pages

## Cara upload GitHub Pages
1. Buat repository publik di GitHub.
2. Upload **isi folder** ini ke root repository, bukan file ZIP.
3. Buka **Settings → Pages**, pilih **Deploy from a branch**, branch `main`, folder `/ (root)` lalu Save.
4. Website dapat dibuka melalui `https://USERNAME.github.io/NAMA-REPO/` setelah deploy berhasil.

## Hubungkan Google Drive
Buat folder **khusus layanan publik**, atur akses agar dokumen publik bisa dilihat, salin URL folder Google Drive, lalu ganti nilai pada `config.js`:

```js
window.WAKANGKA_CONFIG = {
  GOOGLE_DRIVE_LAYANAN_URL: "https://drive.google.com/drive/folders/ID_FOLDER_ANDA"
};
```

**Jangan pernah publikasikan NIK, KK, nomor telepon warga, permohonan surat, atau data pribadi lainnya ke folder Drive publik.** GitHub Pages hanya hosting statis, tidak mendukung PHP/database/penyimpanan otomatis CSV bersama. Versi ini tidak mengumpulkan data warga.

## Foto / screenshot
Semua gambar diarahkan ke foto asli dari dokumentasi Wakangka, **tanpa AI**. Saat ini foto online dimuat dari situs pemilik; mereka **belum disertakan sebagai JPG lokal di ZIP** karena perizinan. Jika ada screenshot atau file asli yang sudah diizinkan untuk digunakan, unggah sesuai daftar nama file di `images/README.txt`. Situs akan otomatis memakai file lokal terlebih dahulu dan tidak bergantung pada layanan foto dari pihak ketiga.

## Catatan keakuratan
Sumber pemerintah dan publik menyebut **Kelurahan Wakangka, Kecamatan Kapontori, Kabupaten Buton**, bukan Siotapina. Nama kepala kelurahan, data penduduk, alamat kantor, dan persyaratan layanan belum dicantumkan karena belum diverifikasi. Situs masih rancangan, bukan saluran resmi penerbitan surat.

## Penyesuaian versi ini
- Desain website lama dipertahankan.
- Lambang Kabupaten Buton dari gambar yang dikirim sudah dipasang pada header dan footer.
- Pemberitahuan teknis dan kalimat rancangan dihapus dari halaman publik.
- URL resmi folder Google Drive tetap perlu diisi di `config.js` oleh pengelola agar tombol layanan menuju folder yang benar.
- Foto tetap menggunakan sumber asli dari paket sebelumnya; file foto web lain belum disimpan sebagai aset lokal karena izin hak pakai perlu dipastikan.
