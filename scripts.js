const countDiv = document.getElementById('count');
const increment = document.getElementById('increment');

const decrement = document.getElementById('decrement');

let count = 0;
countDiv.innerText = count;

increment.addEventListener('click', () => {
	count++;
	countDiv.innerText = count;
})


decrement.addEventListener('click', () => {
	count--;
	countDiv.innerText = count;
})


