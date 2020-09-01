
// function ubahWarnaP3() {
// 	p3.style.backgroundColor='lightblue';
// }
// const p3=document.querySelector('.p2');
// p3.onclick=ubahWarnaP3;


// const p4=document.querySelector('section#b p');
// p4.addEventListener('click',function(){
// 	const ul=document.querySelector('section#b ul');

// 	const liBaru=document.createElement('li');
// 	const teksLiBaru=document.createTextNode('item Baru');

// 	liBaru.appendChild(teksLiBaru);

// 	ul.appendChild(liBaru)
// })
//Perbedaan event handler dan lisntener
//handler
// const p2=document.querySelector('.p2');
// p2.onclick=function ubahBackground(){
// 	p2.style.backgroundColor='green';
// }
// p2.onclick=function ubahWarna(){
// 	p2.style.color='red';
// }
//Listener

const p2=document.querySelector('.p2');
p2.addEventListener('dblclick',function(){
	p2.style.backgroundColor='lightblue';
})
// p2.addEventListener('click',function(){
// 	p2.style.color='red';
// })



