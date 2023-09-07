// update code
const arr = ["A", "B", "C"];

for (let x in arr) {
  console.log(arr[x]);
}

for (let y of arr) {
  console.log(y);
}

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
