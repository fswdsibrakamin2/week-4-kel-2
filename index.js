// update code
const arr = ["A", "B", "C"];

for (let x in arr) {
  console.log(arr[x]);
}

for (let y of arr) {
  console.log(y);
}

// codingan suhu air Aqil

let SUHU = -1; //isi sesuai suhu
let grade =
  SUHU >= -100 && SUHU <= 0
    ? "BEKU"
    : SUHU >= 1 && SUHU <= 100
    ? "CAIR"
    : SUHU >= 101 && SUHU <= 500
    ? "UAP"
    : "TIDAK TERDEFINISI";
console.log(grade);

let plat = "kuNing";
let jenisKendaraan = "Mobil";
let cc = 1500;

const jenisBBM =
  plat.toLowerCase() === "kuning" || jenisKendaraan.toLLowerCase() === "motor"
    ? "BBM Subsidi"
    : jenisKendaraan === "Mobil" && cc < 1500
    ? "PERTAMAX"
    : jenisKendaraan === "Mobil" && cc >= 1500
    ? "Pertamax Turbo"
    : "Tidak Terdefinisi";

console.log("Jenis BBM : " + jenisBBM);

// kodingan suhu putra
let suhu = prompt("input suhu");

const kondisiAir =
  suhu >= -100 && suhu <= 0
    ? " beku"
    : suhu >= 1 && suhu <= 100
    ? " cair"
    : suhu >= 101 && suhu <= 500
    ? " uap"
    : " tidak terdefinisi";

console.log(`Air Dalam Keadaan : ${kondisiAir}`);

// Kodingan suhu Gilang

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


// pertamina code Wisnu
let jenisKendaraanPengguna = "Mobil";
let ccKendaraan = 1200;
let jenisPlat = "kuning";

const jenisBahanBakar =
  jenisKendaraanPengguna == /mobil/i
    ? jenisPlat == "kuning"
      ? "BBM subsidi"
      : ccKendaraan >= 1500
      ? "Pertamax Turbo"
      : "Pertamax"
    : "BBM Subsidi";

console.log(jenisBahanBakar);

