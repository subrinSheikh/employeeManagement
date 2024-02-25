


const div = document.getElementById('main1');
const p = document.createElement('p');
p.innerHTML = "<h3>Employee Management System</h3>"
div.append(p);
const resDiv = document.createElement('div');
resDiv.className = "resdiv";
p.append(resDiv);




let emp = [
    { name: "Thor", age: 25, department: "Technical", salary: 200 },
    { name: "Iron Man", age: 27, department: "Marketing", salary: 600 },
    { name: "Winter Soilder", age: 31, department: "Marketing", salary: 740 },
    { name: "Vision", age: 40, department: "Technical", salary: 370 },
    { name: "Loki", age: 43, department: "Technical", salary: 900 },
    { name: "Stanlee", age: 50, department: "Marketing", salary: 250 },
];
//avg
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
    findAvg(emp);
})
btn1.addEventListener('click', () => {
    div.style.backgroundColor = "#2c91f7";
})
let sal = [];
let result = 0;
let out = 0
const findAvg = (emp) => {
    for (let i = 0; i < emp.length; i++) {
        result += emp[i].salary;
    }
    // console.log(result);
    out = (result) / (emp.length);
    // console.log(out);
    sal.push(out);
    resDiv.innerHTML = `Average Salary: $${sal}`;
    // resDiv.innerHTML = "Average Salary: $" + sal;
}
// console.log((result) / (emp.length));
// console.log(sal);
// findAvg(emp);
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
    depart(emp);
})
btn2.addEventListener('click', () => {
    div.style.backgroundColor = "#56c6bb";
})











// find department
const depart = (emp) => {
    const departmentName = emp.filter((object) => {
        return object.department === "Technical";
    }).map((obj) => {
        return obj.name
    });
    resDiv.innerHTML = `Employees in Marketing:${departmentName}`;
}
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
    increased(emp);
})
btn3.addEventListener('click', () => {
    div.style.backgroundColor = "#ee5035";
})
// depart(emp);

// increased by %








//increased
let increase = [];
let display = 0;
const increased = (emp) => {
    for (let i = 0; i < emp.length; i++) {
        display += emp[i].salary + (emp[i].salary * 0.1);
        increase.push(display);
        resDiv.innerHTML = `Salary Increased by 10%`;

    }

}
// console.log(increase);
// increased(emp);


// sort
const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
    sorted(emp);
})
btn4.addEventListener('click', () => {
    div.style.backgroundColor = "#e65b73";
})
const sorted = (emp) => {
    const sorting = emp.map((object) => {
        return object.age;
    }).sort();
    resDiv.innerHTML = `Employees in Sorted by Age:${sorting}`;
}
// sorted(emp);
// depart(emp);
// findAvg(emp);













