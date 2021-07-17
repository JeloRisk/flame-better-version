let [flameResult, resultInPercentage] = loveCalculator();
let display = (flameResult, resultInPercentage) => {
	if (resultInPercentage > 100) {
		resultInPercentage %= 100;
	}
	let F = { initial: 'F', whole: 'FRIENDS', picture: './assets/friends-1.png' };
	let L = { initial: 'L', whole: 'LOVE', picture: './assets/lovers-1.png' };
	let A = { initial: 'A', whole: 'AFFECTION', picture: './assets/affection-1.png' };
	let M = { initial: 'M', whole: 'MARRIED', picture: './assets/married-1.png' };
	let E = { initial: 'E', whole: 'ENEMIES', picture: './assets/enemies-1.png' };
	let empty = { whole: 'Wala kang Jowa', picture: './assets/crying.png' };

	let result = (x) => {
		let { initial, whole, picture } = x;
		let hey = `<b>${resultInPercentage}% ${whole}</b>`;

		document.getElementById('img-result').innerHTML = `<img src="${picture}">`;
		let i = 0;
		if (i == 0) {
			i = 1;
			var myBarElement = document.getElementById('myBar');
			var myProgress = document.getElementById('j');

			var width = 10;
			var id = setInterval(frame, 10);

			function frame() {
				if (width >= resultInPercentage) {
					clearInterval(id);
					i = 0;
				} else {
					width++;
					myBarElement.style.width = (width % 101) + '%';
					if (resultInPercentage > 100) {
						myBarElement.innerHTML = (width % 100) + '%' + hey;
					} else {
						myProgress.innerHTML = hey;
					}
				}
			}
		}
	};
	switch (flameResult) {
		case F.initial:
			result(F);

			break;
		case L.initial:
			result(L);

			break;
		case A.initial:
			result(A);

			break;
		case M.initial:
			result(M);

			break;
		case E.initial:
			result(E);

			break;
		default:
			result(empty);
	}
};


display(flameResult, resultInPercentage);
