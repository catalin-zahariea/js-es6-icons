// --------------------------------
// JS - ES6 - Icons
// --------------------------------
// 1) Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout
// 2) Coloriamo le icone per tipo
// 3) Creiamo una select con i tipi di icone e usiamola per filtrare le icone
// --------------------------------
// 
// --------------------------------
// Variables
// --------------------------------
// 
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const colors = [
    '#ff3b41',
    '#a3d3d5',
    '#84b71c'
];
// 
// --------------------------------
// To Print
/*
	<div class="icon-element">
    <i class="fas fa-cat"></i>
    <div class="icon-name">Cat</div>
</div>
*/
// --------------------------------
// 
// ---> PRINT FUNCTION <---
// 
function printIcon (array) {
	array.forEach((element) => {
		const {family, prefix, name} = element;
		
		$('#icon-output').append(`
		<div class="icon-element">
			<i class="${family} ${prefix}${name}"></i>
			<div class="icon-name">${name}</div>
		</div>
		`);
	});
}

printIcon(icons);
