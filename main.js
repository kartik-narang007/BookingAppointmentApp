// // // console.log(window);
// // // alert(1);


// // //Single Element
// // // const form = document.getElementById('my-form');
// // // console.log(form);
// // // console.log(document.querySelector('h1'));


// // //Multiple Element
// // // console.log(document.querySelectorAll('.items'));
// // // console.log(document.getElementsByClassName('item'));
// // //console.log(document.getElementsByTagName('li'));


// // // const items = document.querySelectorAll('.item');
// // // items.forEach((item) => console.log(item));

// // const ul = document.querySelector('.items');

// // // ul.remove(); this will remove the ul.
// // //bracket is used after this because it's a method.

// // // ul.lastElementChild.remove();
// // // this will remove last child of ul.

// // ul.firstElementChild.textContent = 'Hello';
// // //this will change first item form item 1 to hello.
// // ul.children[1].innerText = 'Brad';
// // ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// // const btn = document.querySelector('.btn');
// // btn.style.backgroundColor = 'red';


// //Events.
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.backgroundColor = '#ccc';
//     document.querySelector('body').classList.add('bg-dark'); //bootstrap command.
// });
// //this will change the bg color of form to grey after submit button is clicked.

// //but this will gone after refresh to make it permanent we have to add this to the html.


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(event) {
    event.preventDefault();
    let nameInputValue = nameInput.value;
    let emailInputValue = emailInput.value;
    console.log(nameInputValue);
    console.log(emailInputValue)
    
    // console.log(nameInput.value); //naam pe jo daalke submit krenge usko console me print kr dega.
    if(nameInputValue === '' || emailInputValue === ''){
        // alert('Please Enter Fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter All Feilds';

        setTimeout(() => {
        msg.remove();    
        }, 3000); // ye warning print krne ke 3 seconds baad usko gayab krega.
    }
    else{
        // console.log('success');
        const li = document.createElement('li'); // naya list element create krne ke liye
        li.appendChild(document.createTextNode(`${nameInputValue} : ${emailInputValue}`)); // us list element me nameInput ki value and emailInput ki value add krne ke liye. 

        userList.appendChild(li); // added values ko ul me add krne ke liye.

        //clear fields
        localStorage.setItem('name', nameInputValue);
        localStorage.setItem('email', emailInputValue);
        console.log(localStorage.getItem('name'));
        console.log(localStorage.getItem('email'));
        nameInputValue = '';
        emailInputValue = '';
    }
}


//adding items to localstorage

// localStorage.setItem('name', 'Rakesh Dhawan'); // working
// // console.log(localStorage.getItem('name'));//Rakesh Dhawan
// //remove item from local storage
// localStorage.removeItem('name');
// console.log(localStorage.getItem('name'));//null
