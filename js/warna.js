
const tombol=document.getElementById('btn');

tombol.addEventListener('click',function(){
	// document.body.style.backgroundColor='blue';
	// document.body.setAttribute('class','biru-muda');
	document.body.classList.toggle('biru-muda');

})

const tWarnaAcak=document.createElement('button');
const namaWarnaAcak=document.createTextNode('Acak Warna');

tWarnaAcak.appendChild(namaWarnaAcak);
tWarnaAcak.setAttribute('type','button');

tombol.after(tWarnaAcak);

tWarnaAcak.addEventListener('click',function(){
	const r=Math.round(Math.random()*255+1);
	const g=Math.round(Math.random()*255+1);
	const b=Math.round(Math.random()*255+1);
	console.log(r,g,b);

	document.body.style.backgroundColor='rgb('+r+','+g+','+b+')';
})

const sMerah=document.querySelector('input[name=sMerah]');
const sHijau=document.querySelector('input[name=sHijau]');
const sBiru=document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input',function(){
	const r=sMerah.value;
	const g=sHijau.value;
	const b=sBiru.value;
	document.body.style.backgroundColor='rgb('+r+','+g+','+b+')';
})
sHijau.addEventListener('input',function(){
	const r=sMerah.value;
	const g=sHijau.value;
	const b=sBiru.value;
	document.body.style.backgroundColor='rgb('+r+','+g+','+b+')';
})
sBiru.addEventListener('input',function(){
	const r=sMerah.value;
	const g=sHijau.value;
	const b=sBiru.value;
	document.body.style.backgroundColor='rgb('+r+','+g+','+b+')';
})

