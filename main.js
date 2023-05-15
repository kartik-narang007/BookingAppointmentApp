// const myForm = document.getElementById('my-form');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const userList = document.getElementById('users');
// const msg = document.querySelector('.msg');



// //form submit event
// myForm.addEventListener('submit', onSubmit);

// //function
// function onSubmit(e){
//   e.preventDefault();

//   if(nameInput.value == '' || emailInput.value == ''){
//       msg.classList.add('error');
//       msg.innerHTML = "Please fill out all fields";
//       setTimeout(() => {
//         msg.remove();
//       }, 3000);
//   }
//   else{
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(`${nameInput.value} :${emailInput.value}`));
//     userList.appendChild(li);
//     createButtons(li, {name:nameInput.value, email:emailInput.value});

//     const obj = {
//       name: nameInput.value,
//       email: emailInput.value
//     }

//     userDetails.push(obj);
//     localStorage.setItem('userDetails', JSON.stringify(userDetails));

//     nameInput.value = '';
//     emailInput.value = '';
//   }
// }


// // Retrieve list items from local storage
// let userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];

// // Populate list with stored items
// userDetails.forEach(function(user) {
//   const li = document.createElement('li');
//   li.appendChild(document.createTextNode(`${user.name}: ${user.email}`));
//   createButtons(li, user);
//   userList.appendChild(li);
// });


// //function to create delete and edit buttons
// function createButtons(li, user) {
//   const deleteBtn = document.createElement('button');
//   deleteBtn.innerHTML = "Delete";
//   deleteBtn.addEventListener('click', () => {
//       li.remove();
//       userDetails = userDetails.filter(u => u.email !== user.email);
//       localStorage.setItem('userDetails', JSON.stringify(userDetails));
//   })
//   li.appendChild(deleteBtn);

//   const editBtn = document.createElement('button');
//   editBtn.innerHTML = 'Edit';
//   editBtn.addEventListener('click', ()=>{
//     nameInput.value = user.name;
//     emailInput.value = user.email;

//     userDetails = userDetails.filter(u => u.email !== user.email);
//     localStorage.setItem('userDetails', JSON.stringify(userDetails));

//     li.remove(); // Remove list item
//   });
//   li.appendChild(editBtn);
// }




//store data in backend



//variables assigning
const myForm = document.getElementById('my-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const userList = document.getElementById('users');
const msg = document.querySelector('.msg');

// form submit event
myForm.addEventListener('submit', onSubmit);

// function
async function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please fill out all fields';
    setTimeout(() => {
      msg.remove();
    }, 3000);
  } else {
    const obj = {
      name: nameInput.value,
      email: emailInput.value
    };

    try {
      const res = await axios.post(
        'https://crudcrud.com/api/800393409a7a468e8f5212db230295f9/appointmentdata',
        obj
      );

      const user = res.data;

      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${user.name}: ${user.email}`));
      createButtons(li, user);
      userList.appendChild(li);

      nameInput.value = '';
      emailInput.value = '';
    } catch (err) {
      console.error(err);
    }
  }
}

// Retrieve list items from the API
async function getUserDetails() {
  try {
    const res = await axios.get(
      'https://crudcrud.com/api/800393409a7a468e8f5212db230295f9/appointmentdata'
    );
    const userDetails = res.data;

    userDetails.forEach(function (user) {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${user.name}: ${user.email}`));
      createButtons(li, user);
      userList.appendChild(li);
    });
  } catch (err) {
    console.error(err);
  }
}

getUserDetails();

// function to create delete and edit buttons
function createButtons(li, user) {
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.addEventListener('click', async () => {
    li.remove();

    try {
      await axios.delete(
        `https://crudcrud.com/api/800393409a7a468e8f5212db230295f9/appointmentdata/${user._id}`
      );
    } catch (err) {
      console.error(err);
    }
  });
  li.appendChild(deleteBtn);

  const editBtn = document.createElement('button');
  editBtn.innerHTML = 'Edit';
  editBtn.addEventListener('click', () => {
    nameInput.value = user.name;
    emailInput.value = user.email;

    li.remove(); // Remove list item
  });
  li.appendChild(editBtn);
}
