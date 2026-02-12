/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/* membuat variabel untuk setiap elemen view */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/*Membuat  variabel untuk menyimpan info email dan pass */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/*menambahkan aksi pada button */
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();

    /*Mendapatkan input email dan password pengguna dari form.*/
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;
   
    /* Memastikan bahwa nilai email dan pass 
    seusai dengan nilai yang tersimpan*/
    if (email == expectedEmail && password == expectedPassword) {
   
      /* jika sesuai, maka program akan menjalankan perintah yaitu pindah ke halaman home*/
      goToHome();
      
      /* jika email dan pass tidak sesuai*/
    } else {
      /* maka hrus tampilkan pop up bahwa input salah*/
      showPopUp();
    }

});

