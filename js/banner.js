var botaoPrev = document.querySelector('.button-prev');
var botaoNxt = document.querySelector('.button-nxt');

var imagens = [{src:'banner-01.jpg',
				texto:'Os melhores serviços de Refrigeração do Estado'},
				{src:'banner-03.jpg',
				 texto:"Serviços de Instalação e Manutenção em Sistemas Residenciais e Comerciais",
				 botao:'Entre em Contato'},
				 {src:'banner-04.png',
				 texto:"Serviços de Instalação e Manutenção em Sistemas Residenciais e Comerciais",
				 botao:'Entre em Contato'}
				];

var bannerAtual = 1;
var img = document.querySelector('#imgbanner');

botaoPrev.addEventListener('click', voltaBanner);


	function voltaBanner(){
	if(bannerAtual === 1){
    	bannerAtual = imagens.length;
    	img.src = imagens[bannerAtual-1].src;
    }else{
    	bannerAtual--;
    	img.src = imagens[bannerAtual-1].src;
    }
}

botaoNxt.addEventListener('click', ativaBanner);


	function ativaBanner(){
	if(bannerAtual >= imagens.length){
    	bannerAtual = 0;
    	img.src = imagens[bannerAtual].src;
    }
	if(bannerAtual <= imagens.length){
		bannerAtual += 1;
		img.src= imagens[bannerAtual-1].src;
    }
}


window.onload = 
	setInterval(ativaBanner, 5000);

