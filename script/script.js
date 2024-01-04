function hitungLuas() {
    // Mendapatkan nilai alas dan tinggi dari input
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    // Validasi input
    if (isNaN(alas) || isNaN(tinggi)) {
      alert("Masukkan nilai numerik untuk alas dan tinggi.");
      return;
    }

    // Menghitung luas segitiga
    var luas = 0.5 * alas * tinggi;

    // Menampilkan hasil luas pada elemen dengan id 'hasilLuas'
    document.getElementById('hasilLuas').innerHTML = 'Luas Segitiga: ' + luas;
  }

  function resetAlas() {
    // Mengosongkan nilai input panjang alas
    document.getElementById('alas').value = '';
    document.getElementById('hasilLuas').innerHTML = '';
  }

  function resetTinggi() {
    // Mengosongkan nilai input tinggi
    document.getElementById('tinggi').value = '';
    document.getElementById('hasilLuas').innerHTML = '';
  }
function calculatePerimeter() {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert('Masukkan panjang sisi dengan angka.');
        return;
    }

    var perimeter = sideA + sideB + sideC;

    document.getElementById('result').innerText = 'Keliling Segitiga: ' + perimeter;
}
function resetForm() {
    document.getElementById('sideA').value = '';
    document.getElementById('sideB').value = '';
    document.getElementById('sideC').value = '';
    document.getElementById('result').innerText = '';
}