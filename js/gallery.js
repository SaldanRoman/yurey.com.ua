document.querySelectorAll('img').forEach(i=>i.addEventListener('click', event=>{
	if(event.target.style.width === '10%'){
		event.target.style.width = '70%';
		event.target.style.position = 'absolute'
	}else{
		event.target.style.width = '10%';
		event.target.style.position = '';
	}
	
})

)