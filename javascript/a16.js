let item=[
    12,
    23.4,
    true,
    'ram',
    {Sid:1,Sname:'cge'},
    ()=>5


];
console.log(item[0]);
console.log(item[2]);
console.log(item[5]());
console.log(`ID:${item[4].Sid} Name :${item[4].Sname}`);