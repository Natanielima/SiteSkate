const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')


botaoMenu.addEventListener('click', () => {
	menu.classList.toggle('menu-lateral--ativo')
})

{const list = document.querySelectorAll('.list');
function activeLink() {
		list.forEach((item) =>
			item.classList.remove('menu-lateral__link--ativo'));
		this.classList.add('menu-lateral__link--ativo');
}
list.forEach((item)=>
	item.addEventListener('mouseover',activeLink));}

{const lista = document.querySelectorAll('.lista');
function activeLink() {
		lista.forEach((item) =>
			item.classList.remove('lista-menu-contato-ativo'));
		this.classList.add('lista-menu-contato-ativo');
}
lista.forEach((item)=>
	item.addEventListener('mouseover',activeLink));}


