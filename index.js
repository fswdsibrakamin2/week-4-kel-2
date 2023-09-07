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

const kondisiAir = suhu >= -100 && suhu <= 0 
? " beku" : suhu >=1 && suhu <= 100 
? " cair": suhu >=101 && suhu <=500
? " uap" :" tidak terdefinisi";

console.log(`Air Dalam Keadaan : ${kondisiAir}`);
