var area = document.querySelector('.area-btu');
var botao = document.querySelector('.botao');
var botaoFechado = document.querySelector('.botao-btu');
var clicado2 = false;
botao.addEventListener('click', function(e){
	e.preventDefault();
	if(area.classList.contains('area-btuh')){
		area.classList.toggle('area-btuh');
		botao.textContent = 'Cálculo de BTU';
		botaoFechado.classList.toggle('botao-fechar');
		clicado2 = false;		
	}else{
		area.classList.toggle('area-btuh');
		botaoFechado.classList.toggle('botao-fechar');
		botao.textContent = 'Fechar';
		clicado2 = true;
	}
});

var bCalculo = document.querySelector('#botao-calcular');
var totalBtu= document.querySelector('#total-btu');
var valorCalculo = document.querySelector('.valor-calculo');
var formulario = document.querySelectorAll('#btu-m2');

bCalculo.addEventListener('click', function(){
	var  tAparelhos = parseFloat(document.querySelector('#btu-aparelhos').value);
	var m2 = parseFloat(document.querySelector('#btu-m2').value);
	var pessoas = parseFloat(document.querySelector('#btu-pessoas').value);
	if(isNaN(m2) || isNaN(tAparelhos) || isNaN(pessoas)){
		throw new Error("Preencha todos os campos"); 
	}
	totalCalculo = (m2*600)+(600*pessoas)+(600*tAparelhos);
	if(totalCalculo < 7000){
		totalCalculo = 7000;
	}
	if(totalCalculo > 80000){
		totalCalculo = 80000;
	}
	totalBtu.textContent = totalCalculo+' BTUS';
	valorCalculo.classList.toggle('valor-calculo2');
	console.log(m2);
});

var inputs = document.querySelectorAll('input');
inputs.forEach((input, index) => input.addEventListener('keydown', function(evt){
	if((evt.keyCode != 8) && (evt.keyCode < 48 || evt.keyCode > 57) && (evt.keyCode < 96 || evt.keyCode > 106)){
		evt.preventDefault();
		input.classList.toggle('input-erro');
	}
}));