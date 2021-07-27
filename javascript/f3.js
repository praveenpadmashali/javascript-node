function GetFlower()
{
    return[
        'rdsd',
        "dsdd",
        'dsds',
        "sfdf"
    ];

}
for(let  flower of GetFlower())
{
    console.log(flower)
}

function GetStudents()
{
    let students=[

   {sid:1,Sname:'rohan', age:10},
    {sid:2,Sname:'fdf', age:12},
    {sid:3,Sname:'fdfdfd', age:13},
    {sid:4,Sname:'rffdf', age:15},
    {sid:5,Sname:'rfdf', age:17},
    {sid:6,Sname:'rohan', age:17},
    {sid:7,Sname:'rohan', age:13},
    ]

    return students
}

for (let student of GetStudents())
{
    console.log(`ID:${student.sid} Name:${student.Sname} age:${student.age}`)
}