let number=[1,2,434,45,656,657,67];
//access all element
for(let i=0;i<=number.length;i++)
{
    console.log(number[i]);
}

for (let i in number)
{
    console.log(number[i]);
}

for (let i of number)
{
    console.log(i);
}