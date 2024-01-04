const hitungKeliling = () => {
    sisi1 = document.getElementById("sisi1").value;
    sisi2 = document.getElementById("sisi2").value;
    sisi3 = document.getElementById("sisi3").value;

    luas = sisi1 + sisi2 + sisi3;

    document.getElementById('hasil').innerHTML = luas;
}

const clearInput = () => {
    document.getElementById('sisi1').value = 0;
    document.getElementById('sisi2').value = 0;
    document.getElementById('sisi3').value = 0;
    document.getElementById('hasil').innerHTML = "-";
}