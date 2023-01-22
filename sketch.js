

let url2 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXMxpe97tfjblgoywCbyFa9UlqcjqXy-lmKCjv_RaEN12nJfw8gZrcOFcmBOPy8RujVf_UlWaLYcTc/pub?gid=0&single=true&output=csv " //Pekerjaan
let url3 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcCu33szKZr8OVtFAD3Tt0xv0H1pPabDXbBavI9afRjmrd9HQTzEvvRDclMNpiKrNTnelxpPlnGWp3/pub?gid=0&single=true&output=csv " //Pendidikan
let url4 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8W46KxK7jvZS-sMOH6IQduX0KvmZtbfbKmSDD6fQ8gHlznQ8N42ptcYIgcmMmG_KO7qY_0RgYJ-CP/pub?gid=0&single=true&output=csv" //Jeniskelamin
let url5 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQUXXniQQhtR85gr3Ppupxg5EWCT5DQMGJGqn11p05JhRS-AC0USUPq1EkaCn6-AoFxVCIKmfhKrPye/pub?gid=0&single=true&output=csv" //Agama



let diagramPekerjaan;
let diagramPendidikan;
let diagramJeniskelamin;
let diagramAgama ;
let bagan;
let profil;
let itera;
let f1;
let f2;
let lamsel;
let mtk;

function preload(){
  diagramPekerjaan = loadTable(url2, 'csv', 'header');
  diagramPendidikan = loadTable(url3, 'csv', 'header');
  diagramJeniskelamin = loadTable(url4, 'csv', 'header');
  diagramAgama = loadTable(url5, 'csv', 'header');
  f1 = loadFont('f1.otf');
  f2 = loadFont('f2.otf');
  bagan = loadImage('Bagan.jpg');
  profil = loadImage('Profil.jpg');
  lamsel =loadImage('lamsel.jpg');
  itera =loadImage('ITERA.jpg');
  mtk = loadImage('mtk.png')

}


function setup() {
  createCanvas(1600,4950); 
}
let penduduk2021 = [365, 295, 487, 450, 319, 1093, 532, 282, 324, 418, 199] //per dusun
function draw() {
  background('	255,255,255,100')
  
  let dusun = ['Dusun 1','Dusun 2','Dusun 3','Dusun 4','Dusun 5','Dusun 6','Dusun 7','Dusun 8','Dusun 9','Dusun 10','Dusun 11']
  var warna = ['#000080','	#008080','	#800080','	#008000','#808000','	#800000','	#808080','#DC143C','#FF8C00','#00BFFF','#FFB6C1']
  var maxBar = max(penduduk2021);
  var w = 60
  for (var i = 0; i < penduduk2021.length; i++) {
    fill(warna[i])
    var dat = map(penduduk2021[i], 0, maxBar, 0, 200)
    rect(i*w,4800 - dat, w, dat)
    textFont(f2)
    textSize(15)
    fill('black')
    text(penduduk2021[i],i*w, 4795-dat)
    text(dusun[i],i*w,4820)
  }

  textSize(20)
  text('Diagram Kependudukan Tahun 2021',0,4540)
  noStroke()
  fill(0,0,0,200);
  rect(0,0,1600,850);
  fill("brown");
  rect(0, 0, 400, 850)
  image(lamsel,50,100,300,300);
  image(itera,20,25,50,50);
  image(mtk,330,25,50,50);
  

  sudut2 = diagramPekerjaan.getColumn('pekerjaan')
  diagram2(200, sudut2);
  sudut3 = diagramPendidikan.getColumn('pendidikan')
  diagram3(200, sudut3);
  sudut4 = diagramJeniskelamin.getColumn('jeniskelamin')
  diagram4(200, sudut4);
  sudut5 = diagramAgama.getColumn('agama')
  diagram5(200, sudut5);


  fill('black');
  textFont(f1);
  textSize(35);
  text("Dashboard",90,60);

  fill("red");
  noStroke();
  textSize(30);
  var currentYear = year();
  var currentMonth = month();
  var currentDay = day();
  var currentHour = hour();
  var currentMinute = minute();
  var currentSecond = second();
  var currentDate = currentDay + '/' + nf(currentMonth, 2) + '/' + nf(currentYear, 2);
  var currentTime = currentHour + ':' + nf(currentMinute, 2) + ':' + nf(currentSecond, 2);
  text(currentDate, 955, 470);//tanggal
  textSize(70);
  text(currentTime, 900,430);//waktu


  textSize(20)
  textFont(f1)
  fill('black')
  text("A. Profil atau Deskripsi Desa Panca Tunggal",0,955)
  image(profil,0,985,370,270);
  textFont(f2)
  text("Desa Panca Tunggal merupakan salah satu desa yang ada di wilayah Kecamatan Merbau Mataram. Desa ini merupakan hasil pemekaran dari Desa Induk yaitu Desa Merbau Mataram.",440,1005)
  text("Nama Desa Panca Tunggal resmi dibentuk pada 20 April 2000 dengan nomor kode wilayah 18.01.18.2013 dan nomor kode pos 35357.",440,1035)
  text("Desa Panca Tunggal mempunyai luas wilayah 771 Ha.", 440, 1065)
  text("Jumlah penduduk sebanyak 4925 jiwa, terbagi dalam 11 dusun yang terdiri dari 33 Rukun Tetangga (RT).",440,1095)
  text("Secara administratif, Desa Panca Tunggal terletak di antara :",440,1125)
  text("a. Sebelah utara : Desa Budi Lentari, Kecamatan Tanjung Bintang ",440,1155)
  text("b. Sebelah selatan : Desa Neglasari, Kecamatan Ketibun  ",440,1185)
  text("c. Sebelah barat : Desa Triharjo, Kecamatan Merbau Mataram dan Desa Jati Baru, Kecamatan Tanjung Bintang  ",440,1215)
  text("d. Sebelah timur : Desa Talang Jawa, Kecamatan Merbau Mataram ",440,1245)
  
  textFont(f1)
  text("B. Struktur Perangkat Desa Panca Tunggal",0,1310)
  image(bagan,0,1340,1290,600)
  text("C. Diagram Kependudukan Desa Panca Tunggal",0,2000)
}


function diagram2(diameter, diagramPekerjaan) {
  var warna = ['#228B22','#00FF00','	#32CD32 ','	#90EE90','#98FB98 ']
  let lastAngle = 0; 
  for (var i = 0; i < diagramPekerjaan.length; i++) {
    fill(warna[i])
    arc(185,2675,diameter,diameter,lastAngle,lastAngle + radians(sudut2[i]));
    lastAngle += radians(sudut2[i]);
  }
  fill(192,192,192,100)
  rect(0,2525,370,470)
  textSize(20)
  textFont(f1)
  fill('black')
  text("Diagram Pekerjaan",60,2550)
  textFont(f2)
  text("Petani  = 1507 ",10,2815)
  text("Wiraswasta/Pedagang  = 74",10,2840)
  text("Pegawai Negeri Sipil  = 25",10,2865)
  text("Tukang  = 356",10,2890)
  text("Swasta  = 93",10,2915)
  fill(warna[0]);
  rect(300,2805,20,10);
  fill(warna[1]);
  rect(300,2830,20,10);
  fill(warna[2]);
  rect(300,2855,20,10);
  fill(warna[3]);
  rect(300,2880,20,10);
  fill(warna[4]);
  rect(300,2905,20,10);
  
  
  fill(0)
  text('Berdasarkan diagram pekerjaan disamping, Desa Panca Tunggal Kecamatan Merbau Mataram memiliki',440,2675)
  text("angka paling tinggi pada diagram tersebut yaitu petani sebanyak 1507 jiwa. ",440,2705)
  text("Sedangkan penduduk yang lain bekerja sebagai Wiraswasta/Pedagang sebanyak 74 jiwa, Pegawai Negeri Sipil sebanyak 25 jiwa.",440,2735)
  text('Tukang sebanyak 356 jiwa dan Swasta sebanyak 93 jiwa.',440,2765)

}

function diagram3(diameter, diagramPendidikan) {
  var warna = ['#C0C0C0','#808080','	#800000','	#808000','#008000 ']
  let lastAngle = 0;
  for (var i = 0; i < diagramPendidikan.length; i++) {
    fill(warna[i])
    arc(185,3175,diameter,diameter,lastAngle,lastAngle + radians(sudut3[i]));
    lastAngle += radians(sudut3[i]);
  }
  fill(192,192,192,100)
  rect(0,3025,370,470)
  textSize(20)
  textFont(f1)
  fill('black')
  text("Diagram Pendidikan",60,3050)
  textFont(f2)
  text("TidakSekolah/TidakTamat  = 37",10,3320)
  text("SD/Sederajat  = 2281",10,3345)
  text("SMP/Sederajat  = 1963",10,3370)
  text("SMA/Sederajat  = 455",10,3395)
  text("Sarjana  = 175",10,3420)
  fill(warna[0]) ;
  rect(300,3305,20,10);
  fill(warna[1]) ;
  rect(300,3330,20,10);
  fill(warna[2]) ;
  rect(300,3355,20,10);
  fill(warna[3]) ;
  rect(300,3380,20,10);
  fill(warna[4]) ;
  rect(300,3405,20,10);
  
  fill(0)
  text('Berdasarkan diagram pendidikan disamping, Desa Panca Tunggal Kecamatan Merbau Mataram memiliki',440,3175)
  text("angka paling tinggi di Sekolah Dasar/Sederajat yaitu sebanyak 2281 jiwa. Sedangkan penduduk yang",440,3205)
  text("lain Tidak Sekolah/Tidak Tamat sebanyak 37 jiwa, Sekolah Menengah Pertama/Sederajat sebanyak 1963,",440,3235)
  text('Sekolah Menengah Atas/Sederajat sebanyak 455 jiwa, dan Sarjana sebanyak 175 jiwa.',440,3265)
  
}

function diagram4(diameter, diagramJeniskelamin) {
  var warna = ['#FF4500','#D2691E']
  let lastAngle = 0; 
  for (var i = 0; i < diagramJeniskelamin.length; i++) {
    fill(warna[i])
    arc(185,3675,diameter,diameter,lastAngle,lastAngle + radians(sudut4[i]));
    lastAngle += radians(sudut4[i]);
  }
  fill(192,192,192,100)
  rect(0,3525,370,470)
  fill('black')
  textSize(20)
  textFont(f1)
  text("Diagram Jenis Kelamin",50,3550)
  textFont(f2);
  text("Laki-Laki  = 2369",10,3965);
  text("Perempuan  = 2299",10,3990);
  fill(warna[0]) ;
  rect(300,3955,20,10);
  fill(warna[1]) ;
  rect(300,3980,20,10);
  
  fill(0)
  text('Berdasarkan diagram jenis kelamin disampiing, Desa Panca Tunggal Kecamatan Merbau Mataram memiliki',440,3675)
  text("jumlah penduduk dengan jenis kelamin laki-laki lebih tinggi dibandingkan dengan ",440,3705)
  text('perempuan yaitu laki-laki sebanyak 2369 jiwa dan perempuan sebanyak 2299 jiwa.',440,3735)
}

function diagram5(diameter, diagramAgama) {
  var warna = ['#8A2BE2 ','#483D8B'];
  let lastAngle = 0;
  for (var i = 0; i < diagramAgama.length; i++) {
    fill(warna[i])
    arc(185,4175,diameter,diameter,lastAngle,lastAngle + radians(sudut5[i]));
    lastAngle += radians(sudut5[i]);
  }
  fill(192,192,192,100)
  rect(0,4025,370,470)
  fill('black')
  textFont(f1)
  text("Diagram Agama",85,4050)
  textFont(f2)
  text("Islam  = 4661",10,4390)
  text("Katolik  = 31",10,4415)
  fill(warna[0]) ;
  rect(300,4380,20,10);
  fill(warna[1]);
  rect(300,4405,20,10);
  
  
  fill(0)
  text('Berdasarkan diagram agama disamping, Desa Panca Tunggal Kecamatan Merbau Mataram terdiri dari ',440,4175)
  text("berbagai macam agama, sebagian besar penduduknya beragama Islam yaitu sebanyak 4661 jiwa.",440,4205)
  text("Sedangkan penduduk yang lain yang menganut agama Katolik sebanyak 31 jiwa.",440,4235)
  
}

