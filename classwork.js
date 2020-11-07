++variable increments the variable, returning the new value.

variable++ increments the variable, but returns the old value.

--variable decrements the variable, returning the new value.

variable-- decrements the variable, but returns the old value.

let myArr = [1, 2, 5, 8, "qwe", true, ["first", "second"], "test", ["first", "second", false]];
let myEasyArr = ["qwe", "asd", 5, 6, 3, 6, 7]

//console.log(myEasyArr[0], myEasyArr[1], myEasyArr[2], myEasyArr[3], myEasyArr[4]);
// 1
for (let i = 0; i < myArr.length; i++) {
    if (Array.isArray(myArr[i])) {
        // 2
        for (let j = 0; j < myArr[i].length; j++) {
            console.log(myArr[i][j])
        }
    } else {
        console.log(myArr[i])
    }
}

for (let i = myEasyArr.length - 1; i >= 0; i--) {
    console.log(myEasyArr[i])
}

let a = 2 + 2;
switch (a) {
    case 3:
        alert( 'РњР°Р»Рѕ' );
    case 4:
        alert( 'РџСЂР°РІРёР»СЊРЅРѕ!' );
    case 5:
        alert( 'Р—Р°Р±Р°РіР°С‚Рѕ' );
    default:
        alert( 'РќРµРІС–РґРѕРјРµ Р·РЅР°С‡РµРЅРЅСЏ' );
}


let n = 0;
let x = 0;

while (n <= 3) {
    n++;
    console.log(n);
    x += n;
    console.log(x, "x");
}
console.log(n, x ,"Final")

let a = 2 + 3;
switch (a) {
    case "1":
        alert( '@' );
        break;
    case 3:
    case 5:
        alert( 'РќРµ РІС–СЂРЅРѕ' );
        break;
    default:
        alert( 'РќРµРІС–РґРѕРјРµ Р·РЅР°С‡РµРЅРЅСЏ' );
}

let FirstFibbonaci = 0;
let SecondFibbonaci = 1;
let NextFibbonaci = 1;
while (NextFibbonaci <= 100){
       console.log(NextFibbonaci);
       NextFibbonaci = FirstFibbonaci + SecondFibbonaci;
       FirstFibbonaci =  SecondFibbonaci;
       SecondFibbonaci = NextFibbonaci;
}