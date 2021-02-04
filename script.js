const inputEmail = document.querySelector('input[type=email]');
const warning = document.querySelector('.warning');
const btn = document.querySelector('button');
const mediaQuery = window.matchMedia('min-width:1200px');

if(mediaQuery){
    console.log('Media Query Matched !');
    btn.addEventListener('mouseover', (e) => {
        // prevent send data
        e.preventDefault();

        // if input is empty,
        if (inputEmail.value === '') {
            warning.classList.add('active');
            inputEmail.classList.add('active');
            warning.innerHTML = 'Email cannot be empty !';
        } else {
            warning.classList.remove('active');
            inputEmail.classList.remove('active');
            if (inputEmail.validity.valid === false) {
                warning.classList.add('active');
                inputEmail.classList.add('active');
                warning.innerHTML = 'Please provide a valid email address';
            }
        }
    });
} else if(!mediaQuery){
    console.log("Media Query doesn't match !");

    btn.addEventListener('click', (e) => {
        // prevent send data
        e.preventDefault();

        // if input is empty,
        if (inputEmail.value === '') {
            warning.classList.add('active');
            inputEmail.classList.add('active');
            warning.innerHTML = 'Email cannot be empty !';
        } else {
            warning.classList.remove('active');
            inputEmail.classList.remove('active');
            if (inputEmail.validity.valid === false) {
                warning.classList.add('active');
                inputEmail.classList.add('active');
                warning.innerHTML = 'Please provide a valid email address';
            }
        }
    });
}

// btn.addEventListener('mouseover', (e) => {
//         // prevent send data
//         e.preventDefault();

//         // if input is empty,
//         if (inputEmail.value === '') {
//             warning.classList.add('active');
//             inputEmail.classList.add('active');
//             warning.innerHTML = 'Email cannot be empty !';
//         } else {
//             warning.classList.remove('active');
//             inputEmail.classList.remove('active');
//             if (inputEmail.validity.valid === false) {
//                 warning.classList.add('active');
//                 inputEmail.classList.add('active');
//                 warning.innerHTML = 'Please provide a valid email address';
//             }
//         }
//     });
