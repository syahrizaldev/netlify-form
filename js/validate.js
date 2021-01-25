'use strict';
// Form Validation Function
function validateForm(form) {
   if (form.fullname.value.trim() === '') {
      setError(form.fullname, 'Name cannot be blank!');
      return false;
   } else {
      setSuccess(form.fullname);
   }

   if (form.email.value.trim() === '') {
      setError(form.email, 'Email cannot be blank!');
      return false;
   } else {
      setSuccess(form.email);
   }

   if (form.subject.value.trim() === '') {
      setError(form.subject, 'Subject cannot be blank!');
      return false;
   } else {
      setSuccess(form.subject);
   }

   if (form.message.value.trim() === '') {
      setError(form.message, 'Message cannot be blank!');
      return false;
   } else {
      setSuccess(form.message);
   }

   return true;
}

// Set Error Message
function setError(input, errorMsg) {
   const formControl = input.parentElement;
   const inputAlert = formControl.querySelector('.input-alert');
   formControl.className = 'form-control error';
   inputAlert.innerHTML = errorMsg;
}

// Set Success Message
function setSuccess(input) {
   const formControl = input.parentElement;
   formControl.className = 'form-control success';
}

// Set Validate Email
function validEmail(email) {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}
