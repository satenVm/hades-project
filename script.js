// let glxavorDiv = document.querySelector('.name');
// let textInput = document.querySelector('#textInput');
// let numberInput = document.querySelector('#numberInput');
// console.log(textInput,numberInput);


// let staff = [
//     {
//         name:'Aram',
//         numb: '800$',
//     },
//     {
//         name:'Mari',
//         numb: '800$',
//     },
//     {
//         name:'Anna',
//         numb: '800$',
//     }

// ]
// console.log(staff)

// let firstDiv = document.createElement('div');    
// firstDiv.className = 'first';
// glxavorDiv.append(firstDiv);

// // newStaff.forEach(function(el, index){

// // })


// function createNewStaff(el,num){
//     for(let i = 0; i < staff.length; i++){
//         let firstDiv = document.createElement('div');    
//         firstDiv.className = 'first';
//         glxavorDiv.append(firstDiv);
//         let span = document.createElement('span');
//         span.innerText = el.name;
//         firstDiv.append(span);
//         let numb = document.createElement('div');
//         numb.className = 'numb';
//         firstDiv.append(numb);
//         let p = document.createElement('p');
//         p.innerText = num.numb;
//         numb.append(p);
//         let numbImg = document.createElement('div');
//         numbImg.className = 'numb-img';
//         numb.append(numbImg);
//         let fisrtImg = document.createElement('img');
//         fisrtImg.src = 'cookie.png';
//         let secondImg = document.createElement('img');
//         secondImg.src = 'delete.png';
//         numbImg.append(fisrtImg,secondImg)
//     }

// }
// createNewStaff(staff, staff)




let employeesList = [
    {
        id: 1,
        name: 'Aram',
        salary: 800,
        bouns: true,
    },
    {
        id: 2,
        name: 'Grigori',
        salary: 1200,
        bouns: false,
    },
    {
        id: 3,
        name: 'Hasmik',
        salary: 1000,
        bouns: true,
    }
];


let ul = document.querySelector('#employeesList');
let employeesCount = '';

const deleteEmployee = function (id) {
    employeesList = employeesList.filter(function (employeer) {
        return id !== employeer.id
    })
    renderEmployeeList();
}

const changeBouns = function(id) {
    employeesList = employeesList.map(function(employeer){
        if(employeer.id === id){
            employeer.bouns = !employeer.bouns;
        }
        return employeer;
    })
    renderEmployeeList();
}

let form = document.querySelector('.form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    let textInput = document.querySelector('#textInput');
    let numberInput = document.querySelector('#numberInput');
    let newObj = {
        name:textInput.value,
        salary:numberInput.value,
        bouns:false,
        id: employeesList[employeesList.length - 1].id + 1,
    }
    console.log(newObj)
    let a = "";
    if(textInput.value == a){
        alert("write name ");
    }else{
        textInput.value = '';
        numberInput.value = '';
        employeesList.push(newObj)
        renderEmployeeList()
    }
})
// console.log(textInput,numberInput);

console.log([] + false - null + true);


const renderEmployeeList = function () {
    ul.innerHTML = '';
    let btn1 = document.querySelector('#b-1');
    console.log(btn1);
    let btn3 = document.querySelector('#b-3');
    console.log(btn3);
    // if(btn1.addEventListener('click')){

    // }else if(btn3.addEventListener('click')){

    // }
    employeesList.forEach(function (el) {
        let generaTag = document.createElement('div');
        generaTag.classList.add('employeer');
        generaTag.innerHTML = `
        <div class="first">
        <span style = "color:${el.bouns ? "orange" : "black"}">${el.name}</span>
        <div class="numb">
        <p>${el.salary}</p>
        <div class="numb-img">
        <img src="img/cookie.png" alt="" class="icons" id="cookie" data-id="${el.id}" >
        <img src="img/delete.png" alt="" class="icons" id = "delete" data-id="${el.id}">
        </div>
            </div>
        </div>
        `;
        ul.append(generaTag);
        btn3.addEventListener('click' , function(event){
            if(el.salary >= 1000){
                console.log(el);
                
            }
            return event
        })

        
    })
    const deleteButtons = document.querySelectorAll('#delete');

    deleteButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            deleteEmployee(+event.target.dataset.id)
        })
    });

    let cookieButton = document.querySelectorAll('#cookie');

    cookieButton.forEach(function (elem){
        elem.addEventListener('click', function(event){
            changeBouns(+event.target.dataset.id)
            // console.log(employeesList)
        })
    })


    let count = document.querySelector('#employeesCount');
    count.innerHTML = `<h2 id="employeesCount">Общее число сотрудников: ${employeesList.length} </h2>`;

    let isBouns = document.querySelector("#bounsCount");
    let premya = 0;
    employeesList.forEach(function(el){
        if(el.bouns){
            premya++;
        }
    })
    isBouns.innerHTML = `<h2 id="bounsCount">Премию получат: ${premya}</h2>`
}
renderEmployeeList();


// let thirdButton = document.querySelector('#thirdButton');
// console.dir(thirdButton);


 
// let renderSalaryList = function(){
//     let thirdButton = document.querySelector('#thirdButton');
//     // console.log(thirdButton);
//     thirdButton.forEach('click', function(el){
//         el.salary = 1000;
//         if(employeesList.salary > el.salary){
//             ul.innerHTML = '';
//             employeesList.forEach(function (el) {
//                 let generaTag = document.createElement('div');
//                 generaTag.classList.add('employeer');
//                 generaTag.innerHTML = `
//                 <div class="first">
//                         <span style = "color:${el.bouns ? "orange" : "black"}">${el.name}</span>
//                         <div class="numb">
//                         <p>${el.salary}</p>
//                         <div class="numb-img">
//                            <img src="img/cookie.png" alt="" class="icons" id="cookie" data-id="${el.id}" >
//                            <img src="img/delete.png" alt="" class="icons" id = "delete" data-id="${el.id}">
//                         </div>
//                     </div>
//                 </div>
//                 `;
//                 ul.append(generaTag)
//             })
//         }
//     })
// }

// renderSalaryList()
