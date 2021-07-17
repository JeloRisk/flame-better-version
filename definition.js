friend = (coupleName) => {
	let num1 = coupleName.length;
	let f = 'F',
		r = 'R',
		i = 'I',
		e = 'E',
		n = 'N',
		d = 'D';
	f = counter(f, coupleName, num1);
	r = counter(r, coupleName, num1);
	i = counter(i, coupleName, num1);
	e = counter(e, coupleName, num1);
	n = counter(n, coupleName, num1);
	d = counter(d, coupleName, num1);
	let result = sixLetterMethod(f, r, i, e, n, d);
	console.log(result);
};

sixLetterMethod = (a, b, c, d, e, f) => {
	let strAB, strBC, strCD, strDE, strFE;
	a = a.toString();
	b = b.toString();
	c = c.toString();
	d = d.toString();
	e = e.toString();
	f = f.toString();
	strAB = a + b;
	strBC = b + c;
	strCD = c + d;
	strDE = d + e;
	strFE = e + f;
	let AB, BC, CD, DE, EF;
	AB = parseInt(strAB);
	BC = parseInt(strBC);
	CD = parseInt(strCD);
	DE = parseInt(strDE);
	EF = parseInt(strFE);
	calculated = sixLetterParsedInt(AB, BC, CD, DE, EF);
	// let cal = calculated % 100;
	// calculated = calculated - cal;
	// dictated = dictate(calculated);
	return calculated;
};
sixLetterParsedInt = (AB, BC, CD, DE, EF) => {
	// let FRRI = FR + RI;
	// let RIIE = RI + IE;
	// let IEEN = IE + EN;
	// let ENND = EN + ND;
	// let FRRIRIIE = FRRI + RIIE;
	// let IEENENND = IEEN + ENND;
	// let calculation = FRRIRIIE + IEENENND;
	let calculation = AB + BC + CD + DE + EF;
	return calculation;
};

//Lover
lover = (coupleName) => {
	let num1 = coupleName.length;
	let l = 'L',
		o = 'O',
		v = 'V',
		e = 'E',
		r = 'R';
	l = counter(l, coupleName, num1);
	o = counter(o, coupleName, num1);
	v = counter(v, coupleName, num1);
	e = counter(e, coupleName, num1);
	r = counter(r, coupleName, num1);
	let result = loverMethod(l, o, v, e, r);
	// console.log(result);
	move(result);
};

loverMethod = (l, o, v, e, r) => {
	let strLO, strOV, strVE, strER;
	l = l.toString();
	o = o.toString();
	v = v.toString();
	e = e.toString();
	r = r.toString();
	strLO = l + o;
	strOV = o + v;
	strVE = v + e;
	strER = e + r;
	let LO, OV, VE, ER;
	LO = parseInt(strLO);
	OV = parseInt(strOV);
	VE = parseInt(strVE);
	ER = parseInt(strER);
	calculated = loverParsedInt(LO, OV, VE, ER);
	// dictated = dictate(calculated);
	return calculated;
};
loverParsedInt = (LO, OV, VE, ER) => {
	let LOOV = LO + OV;
	let OVVE = OV + VE;
	let VEER = VE + ER;
	let LOOVOVVE = LOOV + OVVE;
	let OVVEVEER = OVVE + VEER;
	let calculation = LOOVOVVE + OVVEVEER;
	if (calculation > 100) {
		let inc = calculation % 100;
		calculation = inc;
	}
	return calculation;
};

//affection
affection = (coupleName) => {
	let num1 = coupleName.length;
	let a = 'A',
		f = 'F',
		e = 'E',
		c = 'C',
		t = 'T',
		i = 'I',
		o = 'O',
		n = 'N';
	a = counter(a, coupleName, num1);
	f = counter(f, coupleName, num1);
	e = counter(e, coupleName, num1);
	c = counter(c, coupleName, num1);
	t = counter(t, coupleName, num1);
	i = counter(i, coupleName, num1);
	o = counter(o, coupleName, num1);
	n = counter(n, coupleName, num1);
	let result = affectionMethod(a, f, e, c, t, i, o, n);
	console.log(result);
};

affectionMethod = (a, f, e, c, t, i, o, n) => {
	let strAF, strFE, strEC, strCT, strTI, strIO, strON;
	a = a.toString();
	f = f.toString();
	e = e.toString();
	c = c.toString();
	t = t.toString();
	i = i.toString();
	o = o.toString();
	n = n.toString();
	strAF = a + f;
	strFE = f + e;
	strEC = e + c;
	strCT = c + t;
	strTI = t + i;
	strIO = i + o;
	strON = o + n;
	let AF, FE, EC, CT, TI, IO, ON;
	AF = parseInt(strAF);
	FE = parseInt(strFE);
	EC = parseInt(strEC);
	CT = parseInt(strCT);
	TI = parseInt(strTI);
	IO = parseInt(strIO);
	ON = parseInt(strON);
	calculated = AffectionParsedInt(AF, FE, EC, CT, TI, IO, ON);
	// dictated = dictate(calculated);
	return calculated;
};
AffectionParsedInt = (AF, FE, EC, CT, TI, IO, ON) => {
	let AFEC = AF + FE;
	let ECTI = EC + CT + TI;
	let IOON = IO + ON;
	let AFECECTI = AFEC + ECTI;
	let ECTIIOON = ECTI + IOON;
	let calculation = AFECECTI + ECTIIOON;
	if (calculation > 200) {
		let inc = calculation - 100;
		calculation = inc;
	}
	return calculation;
};

counter = (everyString, coupleName, num1) => {
	let eachLetterHas = 0;
	let num = 0;
	for (let i = 0; i < num1; i++) {
		if (coupleName[i] === everyString) {
			num++;
		}
		eachLetterHas = num;
	}
	return eachLetterHas;
};

//married
married = (coupleName) => {
	let num1 = coupleName.length;
	let m = 'M',
		a = 'A',
		r = 'R',
		i = 'I',
		e = 'E',
		d = 'D';
	m = counter(m, coupleName, num1);
	a = counter(a, coupleName, num1);
	r = counter(r, coupleName, num1);
	i = counter(i, coupleName, num1);
	e = counter(e, coupleName, num1);
	d = counter(d, coupleName, num1);
	let result = sixLetterMethod(m, a, r, i, e, d);
	console.log(result);
};

//enemies

enemies = (coupleName) => {
	let num1 = coupleName.length;
	let e = 'E',
		n = 'N',
		m = 'M',
		i = 'I',
		s = 'S';
	e = counter(e, coupleName, num1);
	n = counter(n, coupleName, num1);
	m = counter(m, coupleName, num1);
	i = counter(i, coupleName, num1);
	s = counter(s, coupleName, num1);
	let result = loverMethod(e, n, m, i, s);
	console.log(result);
};
