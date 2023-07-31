console.log("PS8: Quarter of the year");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
Constraint:

1 <= month <= 12
*/

const quarterOf = (month) => {
    if (month >= 1 && month <= 3) {
        return 1;
    }

    else if (month >= 4 && month <= 6) {
        return 2;
    }

    else if (month >= 7 && month <= 9) {
        return 3;
    }

    else {
        return 4;
    }
}
console.log(quarterOf(1));
console.log(quarterOf(2));
console.log(quarterOf(11));
console.log(quarterOf(6));

/*
switch (month) {
		case 1:
		case 2:
		case 3:
			quarter = 1;
			break;
		case 4:
		case 5:
		case 6:
			quarter = 2;
			break;
		case 7:
		case 8:
		case 9:
			quarter = 3;
			break;
	}
	return quarter;

*/