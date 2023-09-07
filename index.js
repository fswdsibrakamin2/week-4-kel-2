// update code
const arr = ["A", "B", "C"];

for (let x in arr) {
  console.log(arr[x]);
}

for (let y of arr) {
  console.log(y);
}





















let suhu = prompt("input suhu");

const kondisiAir = suhu >= -100 && suhu <= 0 
? " beku" : suhu >=1 && suhu <= 100 
? " cair": suhu >=101 && suhu <=500
? " uap" :" tidak terdefinisi";

console.log(`Air Dalam Keadaan : ${kondisiAir}`);

