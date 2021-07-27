function square(n)
{
    let result =n*n;
    return result  ;

}

function Greet (name)
{ 
    let message ='Hello' +name;
    return message;

}

function IsEven(number)
{
    // let isEven=number%2==0?true:false;
    // if(number%2==0)
    // return true;
    // else
    return false;
    // return isEven;

}

let result =square(10);
console.log(result);
result=Greet('dhoni');
console.log(result);
console.log(IsEven(110)==true?'Even':'Odd');