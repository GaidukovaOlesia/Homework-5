debugger;
let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch(numOrStr && (numOrStr.trim() || isNaN(+numOrStr))){
    case null:
        console.log(`ви скасували`);
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case  false:
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}




