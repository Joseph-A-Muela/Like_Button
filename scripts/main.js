var likeButton = document.querySelector('.likeButton');
var resetCount = document.querySelector('.resetCount');
var counter = 0;

likeButton.addEventListener('click', onClick);

function onClick() {
	counter++;
	if (counter === 1) {
	likeButton.innerHTML = (counter + ' like');
	}
	else {
	likeButton.innerHTML = (counter + ' likes');
	}
};

resetCount.addEventListener('click', reset);

function reset() {
	counter = 0;
	likeButton.innerHTML = (counter + ' likes');
}
