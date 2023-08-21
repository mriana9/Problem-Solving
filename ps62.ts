console.log("PS 62: Sort And Star");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
ترتيب المصفوفة حسب الاحرف الابجدية وترجع اول عنصر وفصل بين احرفة ب بنجوم
*/

function twoSort(s) {
    let result = '';
    let firstElement ='';
    s.sort();
    for (let i = 0; i <= s.length; i++) {
        firstElement = s[0];
    }

    for (let i = 0; i < firstElement.length ; i++) {
        result += '***' + firstElement[i];
    }

   return result.slice(3);
}

console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])); //a***r***e