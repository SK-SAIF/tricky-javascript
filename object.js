const student=[
    {id:20,name:"Karimuddin"},
    {id:40,name:"Alim"},
    {id:60,name:"Sogir"},
    {id:70,name:"Moina"},
]

const result=student.map(function(element){
    return element.name;
})
console.log(result);

const ids=student.filter(s=>s.id>20);
console.log(ids);
