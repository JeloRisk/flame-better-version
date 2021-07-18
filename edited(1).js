import template from './FlameObjects.js';
('use strict');

const form = document.querySelector('#form');
const myModal = document.querySelector('#modal-content');
const heartContainer = document.getElementById('container');

const loveCalculator = () => {
	/* To get the input of the user */

	let name1 = document.getElementById('name1').value;
	let name2 = document.getElementById('someoneName').value;
	name1 = name1.toUpperCase();
	name2 = name2.toUpperCase();
	let coupleName = name1 + name2;
	let nameCount = coupleName.length; //to get the number of the string

	/* To pick the Flame result  */
	const toGetTheFlame = () => {
		const arr_char = coupleName.split('');
		const result_arr = [];
		for (let i = 0; i < arr_char.length; i++) {
			if (coupleName.indexOf(arr_char[i]) === coupleName.lastIndexOf(arr_char[i])) result_arr.push(arr_char[i]);
		}

		//result in number use to get the initial flame result
		let initialFlameResult = result_arr.join('').length - 1;

		if (initialFlameResult > 4) {
			initialFlameResult = initialFlameResult % 5;
		} else {
			initialFlameResult = initialFlameResult;
		}

		const m = ['F', 'L', 'A', 'M', 'E'];
		let flameResult;
		if (name1 === '' || name2 === '') {
			flameResult = '';
		} else {
			flameResult = m[initialFlameResult];
		}
		return flameResult;
	};

	const toGetThePercentage = () => {
		let l = 'L',
			o = 'O',
			v = 'V',
			e = 'E',
			r = 'R';

		let lover = [l, o, v, e, r];

		let lover2;

		let strLO, strOV, strVE, strER, LO, OV, VE, ER;

		lover2 = lover.map((lover) => {
			let eachLetterHas = 0;

			for (let n = 0; n < lover.length; n++) {
				// lover[n] = 0;
				let num = 0;
				for (let i = 0; i < nameCount; i++) {
					if (coupleName[i] === lover[n]) {
						num++;
					}
					eachLetterHas = num;
				}
			}

			return eachLetterHas;
		});

		l = lover2[0].toString();
		o = lover2[1].toString();
		v = lover2[2].toString();
		e = lover2[3].toString();
		r = lover2[4].toString();

		strLO = l + o;
		strOV = o + v;
		strVE = v + e;
		strER = e + r;

		LO = parseInt(strLO); /* to make string to number  */
		OV = parseInt(strOV);
		VE = parseInt(strVE);
		ER = parseInt(strER);
		let LOOV = LO + OV;
		let OVVE = OV + VE;
		let VEER = VE + ER;
		let LOOVOVVE = LOOV + OVVE;
		let OVVEVEER = OVVE + VEER;
		let resultInPercentage = LOOVOVVE + OVVEVEER;

		if (name1 == name2 || name1 == '' || name2 == '') {
			resultInPercentage = 100;
		}

		return resultInPercentage;
	};

	const flameResult = toGetTheFlame();
	const resultInPercentage = toGetThePercentage();

	const display = (flameResult, resultInPercentage) => {
		if (resultInPercentage > 100) {
			resultInPercentage %= 100;
		}

		switch (flameResult) {
			case template[0].initial:
				result(template[0]);

				break;
			case template[1].initial:
				result(template[1]);

				break;
			case template[2].initial:
				result(template[2]);

				break;
			case template[3].initial:
				result(template[3]);

				break;
			case template[4].initial:
				result(template[4]);

				break;
			default:
				result(template[5]);
		}
	};

	let result = (x) => {
		let { initial, whole, picture, subject } = x; //destructing assignment

		const dictate = document.querySelector('#dictate');
		const img_result = document.querySelector('#img-result');
		const myBarElement = document.getElementById('myBar');
		const resultInWord = document.getElementById('result');
		const resultBox = document.getElementById('bar-n-result');
		subject = subject.replace('name1', name1);
		subject = subject.replace('name2', name2);
		subject = subject.replace('resultInPercentage', resultInPercentage);

		img_result.innerHTML = `<img src="${picture}">`;
		let i = 0;
		if (i == 0) {
			i = 1;

			let width = 0; // let because it will change
			let id = setInterval(frame, 10);

			function frame() {
				if (width >= resultInPercentage) {
					clearInterval(id);
					i = 0;
				} else if (resultInPercentage == 0) {
					width++;
					console.log('HEllo');
					myBarElement.style.width = 1 + '%';
				} else {
					width++;
					myBarElement.style.width = (width % 101) + '%';
					if (resultInPercentage > 100) {
						resultInWord.innerHTML = (width % 100) + '%';
					} else {
						resultInWord.innerHTML = width + '%';
					}
				}
			}

			setTimeout(() => {
				img_result.style.display = 'flex';
				resultBox.style.display = 'flex';
				dictate.innerHTML = `
				<h2 id="head2">${whole}</h2>
                        <h3 id="head3">${subject}</h3>`;
			}, 10 * resultInPercentage);
		}
	};

	if (resultInPercentage == 0) {
		display(flameResult, 1);
	}
	display(flameResult, resultInPercentage);
};

form.addEventListener('submit', (e) => {
	e.preventDefault();
	// to spawn the heart animation
	const heartAnimation = `<div class="container">
                				<div class="preloader">
                    				<span></span>
                    				<span></span>
                    				<span></span>
                				</div>
                				<div class="shadow">
								</div>
            				</div>`;
	heartContainer.innerHTML = heartAnimation;

	// then the modal for Result
	const myModalContent = `<article id="bastaResult">
                <figure id="img-result">
                </figure>
                <div id="a">
                    <div id="myProgress">
                        <div id="myBar">
                        </div>
                    </div>
                    <h3 id="result">
                    </h3>
                </div>
                <div class="bar-n-result" id="bar-n-result">
                    <hgroup id="dictate">
                    
                    </hgroup>
                </div>
            </article>
            
                <button class="close">
                    okay
                </button>
         `;
	myModal.innerHTML = myModalContent;

	heartContainer.style.display = 'none';

	$(function () {
		setTimeout(function () {
			$('#container').fadeIn();
		}, 10);
	});
	$(function () {
		setTimeout(function () {
			$('#container').fadeOut(1000);
		}, 3000);
	});
	var modal = document.getElementById('myModal');
	var modalContent = document.getElementById('modal-content');
	var span = document.getElementsByClassName('close')[0];

	modal.style.display = 'block';
	modalContent.style.display = 'none';
	document.getElementById('container').style.display = 'none';

	$(function () {
		setTimeout(function () {
			$('#modal-content').fadeIn();
			loveCalculator();
		}, 4000);
	});

	span.onclick = function () {
		modal.style.display = 'none';
	};
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	};
	if (modal.style.display == 'block') {
	}
});
