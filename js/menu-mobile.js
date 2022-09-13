const x = document.querySelector(".botao-menu");
const y = document.querySelector('.menu-mobile');

x.addEventListener('click', function(){
	if(y.classList.contains("menu-mobile-mostrar")){
		y.classList.remove("menu-mobile-mostrar");
	}
	else{
	y.classList.add("menu-mobile-mostrar");
	}
	return false;
});

  let cima = document.querySelector(".cima");
  let meio = document.querySelector(".meio");
  let baixo = document.querySelector(".baixo");
  let clicado = 0;
    
    x.addEventListener('click', function(){
      if (clicado === 0){
    cima.classList.add("cima1");
    meio.classList.add("meio1");
    baixo.classList.add("baixo1");
    clicado = 1;
    }
    else{
      cima.classList.remove("cima1");
      meio.classList.remove("meio1");
      baixo.classList.remove("baixo1");
      clicado = 0;
    }
    return false;
});