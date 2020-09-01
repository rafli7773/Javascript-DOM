// //EVENT HANDLING

// const card=document.querySelector('.card');
// const close=document.querySelector('.close');

// close.addEventListener('click',function(){
// 	card.style.display='none';
// })

// DOM TRAVERSAL

// const close=document.querySelectorAll('.close');

// for(let i=0; i < close.length; i++){
// 	close[i].addEventListener('click',function(e){
// 		// close[i].parentElement.style.display='none';
// 		e.target.parentElement.style.display='none';
// 	});
// }

// close.forEach(function(el){
// 	el.addEventListener('click',function(e){
// 		e.target.parentElement.style.display='none';
// 		// PREVENT DEFAULT
// 		e.preventDefault();
// 		e.stopPropagation();
// 	})
// });
//EVENT BUBLING

const container=document.querySelector('.container');
container.addEventListener('click',function(e){
	if(e.target.className=='close' ){
		e.target.parentElement.style.display='none';
	}
})


// METHOD 
// parentNode
// parentElement
// nextSibling
// previousSibling
// nextElementSibling
// previousElementSibling

