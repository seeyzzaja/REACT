1.perbeaan jsx dengan html adalah 
- jsx itu harus berada dalam js sedangkan html berdiri di file sendiri
-JSX menggunakan camelCase untuk atribut, HTML menggunakan lowercase

Contoh atribut:

HTML    JSX

class	 className
onclick 	onClick
tabindex tabIndex
- jsx bisa menyisipkan langsung di js menggunakan {}, sedangkan html tidak bisa html tidak bisa menjalankan javascript tanpa <script>
- jsx harus menutup semua tag sedangkan html tidak
- JSX hanya boleh return 1 parent element,sedangkan HTML bebas

contoh :
<div clas="card">
<h1>halo</h1>
</div>

jsx:
function app(){
return (
    <div clasName="card">
    <h1>hallo</h1>
    </div>
)

}


2. Virtual DOM adalah salinan ringan dari Real DOM yang disimpan di memori. React menggunakannya untuk memproses perubahan UI dengan lebih cepat dan efisien sebelum memperbaruinya ke browser
cara kerja nya :
1 React membuat Virtual DOM saat komponen pertama kali dirender.
2 Ketika state atau props berubah, React membuat Virtual DOM baru.
3 React membandingkan Virtual DOM lama dan baru menggunakan diffing algorithm.
4 React menemukan bagian yang berubah saja.
5 React meng-update Real DOM secara minimal, hanya bagian yang perlu.

3. SPA adalah aplikasi web yang hanya memuat 1 halaman HTML utama Navigasi antar-halaman dilakukan tanpa reload, karena konten diperbarui menggunakan JavaScript
sedanglkn mpa dalah aplikasi web dengan banyak halaman HTML.
Setiap kali navigasi, browser akan reload dan memuat halaman baru dari server

kelebihan spa adalah 
- navigasi lebih cepat karena tidak ada relod halaman
- beban server lebih ringan karena banyak proses berjalan di sisi client ,server hanya mengirim data api
kekurangan spa adalah
- kurang ramah seo,karena konten di render di java script membuat mesin pencarian sulit mengindex
- ukuran awal file lebih besar

kelebihan mpa adalah
- seo lebih baik karena setiap halaman adalah html murni yang membuat mudah di baca google
- keamanan lebih tinggi karena banyak proses di lakukan di server bukan di browser 
kekurangan mpa adalah
- navigasi lebih lambat karena karena setiap perpindahan halaman membutuhkan relod penuh dari server
- Pengembangan lebih kompleks untuk aplikasi besar
Banyak halaman → banyak template → maintenance lebih sulit.