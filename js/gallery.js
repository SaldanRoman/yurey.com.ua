document.querySelectorAll('.gallery-img-container').forEach(i=>i.addEventListener('click', event=>{
	if(event.target.parentElement.parentElement.style.flexDirection === 'row'){
		event.target.parentElement.parentElement.style.flexDirection = 'column';
		

	}else{
		event.target.parentElement.parentElement.style.flexDirection = 'row';
	}

})
)
