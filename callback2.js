let employees=[
    {id:1,name:"john",age:35},
    {id:2,name:"pooja",age:38}
]

let createEmployee=(employee,callback)=>
{
    setTimeout(()=>
        {
            employees.push(employee);
            callback();

        },2000);
};

let getEmployee=()=>
{
    let employeerows="";
    setTimeout(()=>
    {
        employees.forEach((employee)=>
        {
           employeerows+=`<tr>
                                <td>${employee.id}</td>
                                <td>${employee.name}</td>
                                <td>${employee.age}</td>
                            </tr>`

        });
        document.querySelector("#table-body").innerHTML=employeerows;

    },1000);
}
createEmployee({id:3,name:"kartik",age:25},getEmployee);


