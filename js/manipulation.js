////DOM MANIPULATION ELEMENT
// // innerHTML
// const judul=document.getElementById('judul');
// judul.innerHTML="ASU" ;

// style

// const judul=document.querySelector('#judul');
// judul.style.backgroundColor='red';

// attribute

// const judul=document.getElementsByTagName('h1')[0];
// judul.setAttribute('href','wow');
// judul.getAttribute('id');

// element classList;

// const p2=document.querySelector('.p2');
// element.classList.add();
// element.classList.remove();
// element.classList.toggle();
// element.classList.item();
// element.classList.contains();
// element.classList.replace();

////DOM MANIPULATION NODE

// buat element
const pBaru=document.createElement('p');
const teksBaru=document.createTextNode('paragraf baru');
// simpan tulisan ke paragraf
pBaru.appendChild(teksBaru);

// Letakkan di pargraf akhir
sectionA=document.getElementById('a');
sectionA.appendChild(pBaru);

// Buat Sebelum Item 2
//buat element
const liBaru=document.createElement('li');
const namaLiBaru=document.createTextNode('item baru');
// buat wadah 
liBaru.appendChild(namaLiBaru);
//tangkap dulu
const ul=document.querySelector('section#b ul');
const li2=ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru,li2);
// menghapus
const link=document.getElementsByTagName('a')[0];
sectionA.removeChild(link);
//mengubah

sectionB=document.getElementById('b');
p4=sectionB.querySelector('p');

// buat element
h2Baru=document.createElement('h2');
teksH2Baru=document.createTextNode('Judul Baru!');
// simpan
h2Baru.appendChild(teksH2Baru);
// ubah
sectionB.replaceChild(h2Baru,p4);