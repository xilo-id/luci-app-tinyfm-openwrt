<h1 align="center">
  <br>Luci-app-TinyFM-OpenWrt<br>
</h1>

<p align="center">
  File Manager berbasis web untuk OpenWrt, dibangun di atas <a href="https://github.com/prasathmani/tinyfilemanager">TinyFileManager</a> dengan sejumlah fitur tambahan: grid/thumbnail view, floating paste bar (copy/move lintas folder & lintas disk), bulk zip/unzip, dan tema cyan/dark.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/OpenWrt-24.10%20%7C%2025.12-blue" alt="openwrt support">
  <img src="https://img.shields.io/badge/package-opkg%20%2F%20apk-informational" alt="package format">
  <img src="https://img.shields.io/badge/license-GPL--3.0-green" alt="license">
</p>

---

## Fitur

- **Grid / Thumbnail view** — toggle antara tampilan list dan grid, lengkap dengan thumbnail gambar asli (bukan cuma ikon).
- **Floating paste bar** — klik Copy di satu file, browsing bebas ke folder tujuan, lalu klik **Move** atau **Paste**. Move otomatis fallback jadi copy+delete kalau source dan tujuan beda disk/filesystem.
- **Bulk actions** — centang banyak file/folder sekaligus untuk Copy, Move, Zip, Unzip, dan Delete, lengkap dengan indikator progress.
- **Tema cyan/dark** — menyatu dengan tampilan tema Argon, otomatis ikut mode light/dark, termasuk untuk komponen native browser (dropdown, dsb).
- **Toggle dark/light** langsung dari toolbar, tersimpan permanen di settings TinyFM.
- Semua fitur asli TinyFileManager tetap ada: edit file (Ace Editor), rename, permission, search, upload via URL, dan lainnya.

## Screenshot

<details><summary>Klik untuk lihat screenshot</summary>
 <p>
  <img src="https://github.com/xilo-id/luci-app-tinyfm-openwrt/blob/main/img/Screenshot%202026-07-17%20181005.png" alt="tinyfm">
 </p>
 <p>
  <img src="https://github.com/xilo-id/luci-app-tinyfm-openwrt/blob/main/img/Screenshot%202026-07-17%20181043.png" alt="tinyfm1">
 </p>
 <p>
  <img src="https://github.com/xilo-id/luci-app-tinyfm-openwrt/blob/main/img/Screenshot%202026-07-17%20180948.png" alt="tinyfm2">
 </p>
  <p>
  <img src="https://github.com/xilo-id/luci-app-tinyfm-openwrt/blob/main/img/Screenshot%202026-07-17%20181028.png" alt="tinyfm3">
 </p>
  <p>
  <img src="https://github.com/xilo-id/luci-app-tinyfm-openwrt/blob/main/img/Screenshot%202026-07-17%20181404.png" alt="tinyfm4">
 </p>
</details>

## Instalasi

### 1. Download paket

Ambil file `.ipk` (OpenWrt ≤ 24.10) atau `.apk` (OpenWrt ≥ 25.12) dari halaman [Releases](../../releases) repo ini, sesuai versi firmware router.

### 2. Install dependensi

Jalankan salah satu sesuai versi OpenWrt **sebelum** atau **sesudah** install paketnya:

**OpenWrt 24.10 (opkg / `.ipk`)**
```shell
opkg update
opkg install php8 php8-cgi php8-fastcgi php8-fpm php8-mod-session php8-mod-ctype php8-mod-fileinfo php8-mod-zip php8-mod-iconv php8-mod-mbstring coreutils-stat zoneinfo-asia
```

**OpenWrt 25.12 (apk / `.apk`)**
```shell
apk update
apk add php8 php8-cgi php8-fastcgi php8-fpm php8-mod-session php8-mod-ctype php8-mod-fileinfo php8-mod-zip php8-mod-iconv php8-mod-mbstring coreutils-stat zoneinfo-asia
```

### 3. Install paket luci-app-tinyfm

Upload file `.ipk`/`.apk` yang sudah didownload ke router (lewat SCP, atau File Manager bawaan LuCI), lalu jalankan salah satu:

```shell
# OpenWrt 24.10
opkg install /path/ke/luci-app-tinyfm_*.ipk

# OpenWrt 25.12
apk add --allow-untrusted /path/ke/luci-app-tinyfm_*.apk
```

### 4. Restart web server & buka menu

```shell
/etc/init.d/uhttpd restart
```

Buka LuCI di browser, menu **File Manager** akan muncul di sidebar

## Build sendiri dari source

Repo ini sudah dilengkapi GitHub Actions (`.github/workflows/build.yml`) yang otomatis build `.ipk` (OpenWrt 24.10.5) dan `.apk` (OpenWrt 25.12.5) sekaligus setiap kali push tag baru (`vX.X`), atau bisa di-trigger manual lewat tab **Actions → Run workflow**. Hasil build otomatis muncul di tab **Releases**.

Kalau mau build manual pakai OpenWrt SDK :

```shell
# Clone SDK OpenWrt sesuai target/versi router, lalu:
cp -r luci-app-tinyfm <SDK_DIR>/package/
cd <SDK_DIR>
./scripts/feeds update -a
./scripts/feeds install -a
make menuconfig   # pilih LuCI > Applications > luci-app-tinyfm
make package/luci-app-tinyfm/compile V=s
```

## Kredit

- [prasathmani/tinyfilemanager](https://github.com/prasathmani/tinyfilemanager) — aplikasi file manager dasar
- [bobbyunknown/luci-app-tinyfm](https://github.com/bobbyunknown/luci-app-tinyfm) — pembungkus paket OpenWrt/LuCI awal
- [Yogxx/tinyfm-snapshot](https://github.com/Yogxx/tinyfm-snapshot) — struktur paket & workflow build apk/ipk

## Lisensi

GPL-3.0 — lisensi [TinyFileManager](https://github.com/prasathmani/tinyfilemanager) yang jadi basis proyek ini. Lihat file [LICENSE](LICENSE)