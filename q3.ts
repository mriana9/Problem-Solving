console.log("Q3: Write an algorithm to print the below pattern");
console.log('_________________________________________________')
/*

1234554321
1234__4321
123____321
12______21
1________1

// i=4 ( k <2 *1 -1) => 2*4-1 = 8-1 = 7 ... k < 1
*/
let n3 = 5;
let string3 = "";
for (let i = 1; i <= n3; i++) {// O {N}
  for (let j = 0; j <= n3 - i; j++) {// O {N}
    string3 += j+ 1;
  }
  for (let k = 1; k < 2 * i - 1; k++) {// O {N}
    string3 += "_";
  }
  for (let x = n3 - i +1; x > 0; x--) {// O {N}
    string3 += x + 0;
  }
  string3 += "\n";
}
console.log(string3);

//Big O {N^3} + 6 = {N^3}