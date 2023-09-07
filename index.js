// update code
const arr = ["A", "B", "C"];

for (let x in arr) {
  console.log(arr[x]);
}

for (let y of arr) {
  console.log(y);
}

// Gilang Fatahilah

(async () => {
  // Membuat Prompt Input
  const { value: degrees } = await Swal.fire({
    title: "Input Degrees",
    input: "number",
    inputLabel: "Enter Degrees",
    inputPlaceholder: "Enter the number of degrees",
  });

  if (degrees) {
    const degree = degrees;

    // Membuat Logika Kondisi Sesuai Dengan Soal
    const condition =
      degree <= 0 && degree >= -100
        ? "Beku"
        : degree >= 1 && degree <= 100
        ? "Cair"
        : degree >= 101 && degree <= 500
        ? "Uap"
        : "Tidak Terdefinisi";

    // Menampilkan hasil dari input dan kondisi
    await Swal.fire({
      title: "Result :",
      text: `Suhu: ${degree} Derajat Merupakan Kondisi "${condition}"`,
      icon: "success",
      confirmButtonText: "Case 2",
    }).then((result) => {
      // Mengalihkan Halaman ke case 2 Apabila ditekan
      if (result) {
        window.location.href = "case2.html";
      }
    });
  } else {
    // Jika user memberi inputan yang salah
    Swal.fire({
      title: "Undefined",
      text: "Please Enter the Correct Input",
      icon: "error",
      confirmButtonText: "Next",
    });
  }
})();
