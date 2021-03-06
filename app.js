//form-validation

let registrationForm = document.querySelector('#register-form');
registrationForm.addEventListener('submit',function(event){
  event.preventDefault(); //stops auto form submission
  
  if(validateForm()){
    alert('Form is submitted successfully');
  }
});


let validateForm = () => {
  
  return(checkUserName() & checkEmail() & checkPassword() & checkConfirmPassword());
};

let checkUserName = () => {
  let inputEl = document.querySelector('#username');
  let inputFeedbackEl = document.querySelector('#username-feedback');
  let regExp = /^[a-zA-Z0-9]{4,10}$/;
  if(regExp.test(inputEl.value)){
    makeValid(inputEl, inputFeedbackEl);
    return true;
  }
  else{
    makeInValid(inputEl, inputFeedbackEl);
    return false;
  }
};

let checkEmail = () => {
  let inputEl = document.querySelector('#email');
  let inputFeedbackEl = document.querySelector('#email-feedback');
  let regExp = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
  if(regExp.test(inputEl.value)){
    makeValid(inputEl, inputFeedbackEl);
    return true;
  }
  else{
    makeInValid(inputEl, inputFeedbackEl);
    return false;
  }
};

let checkPassword = () => {
  let inputEl = document.querySelector('#password');
  let inputFeedbackEl = document.querySelector('#password-feedback');
  let regExp =  /^[A-Za-z]\w{7,15}$/;
  if(regExp.test(inputEl.value)){
    makeValid(inputEl, inputFeedbackEl);
    return true;
  }
  else{
    makeInValid(inputEl, inputFeedbackEl);
    return false;
  }
};

let checkConfirmPassword = () => {
  let inputEl = document.querySelector('#c-password');
  let passwordEl = document.querySelector('#password');
  let inputFeedbackEl = document.querySelector('#c-password-feedback');
  let regExp =  /^[A-Za-z]\w{7,15}$/;
  if(regExp.test(inputEl.value) && inputEl.value === passwordEl.value){
    makeValid(inputEl, inputFeedbackEl);
    return true;
  }
  else{
    makeInValid(inputEl, inputFeedbackEl);
    return false;
  }
};

//makeValid
let makeValid = (inputEl, inputFeedbackEl) => {
  inputEl.classList.add('is-form-valid');
  inputEl.classList.remove('is-form-invalid');
  inputFeedbackEl.classList.add('text-success');
  inputFeedbackEl.classList.remove('text-danger');
  inputFeedbackEl.innerText = 'Looks Good';
};

//makeInValid
let makeInValid = (inputEl, inputFeedbackEl) => {
  inputEl.classList.remove('is-form-valid');
  inputEl.classList.add('is-form-invalid');
  inputFeedbackEl.classList.remove('text-success');
  inputFeedbackEl.classList.add('text-danger');
  inputFeedbackEl.innerText = `Please Enter a ${inputEl.placeholder}`;
};

//username field with keyup event
let userNameEl = document.querySelector('#username');
userNameEl.addEventListener('keyup', function(){
  checkUserName();
});

//email field with keyup event
let emailEl = document.querySelector('#email');
emailEl.addEventListener('keyup', function(){
  checkEmail();
});

//password field with keyup event
let passwordEl = document.querySelector('#password');
passwordEl.addEventListener('keyup', function(){
  checkPassword();
});

//email field with keyup event
let confirmPasswordEl = document.querySelector('#c-password');
confirmPasswordEl.addEventListener('keyup', function(){
  checkConfirmPassword();
});