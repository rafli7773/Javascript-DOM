const container=document.querySelector('.container');
const jumbo=document.querySelector('.jumbo');
const kecil=document.querySelectorAll('.cilik');


container.addEventListener('click',function(e){

	if(e.target.className == 'cilik'){
		jumbo.src = e.target.src;
		jumbo.classList.add('fade');

		setTimeout(function(){
			jumbo.classList.remove('fade');
		},500);

		kecil.forEach(function(cilik){
			cilik.className='cilik'
		})

		e.target.classList.add('active');
	}

});