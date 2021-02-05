function validateForm(form) {
   // Validate Name
   if (form.fullname.value.trim() === '') {
      setError(form.fullname, 'Name cannot be blank!');
      return false;
   } else {
      setSuccess(form.fullname);
   }

   // Validate Email
   if (form.email.value.trim() === '') {
      setError(form.email, 'Email cannot be blank!');
      return false;
   } else {
      setSuccess(form.email);
   }

   // Validate Email
   if (!validEmail(form.email.value.trim())) {
      setError(form.email, 'Email is not valid!');
      return false;
   } else {
      setSuccess(form.email);
   }

   // Validate Subject
   if (form.subject.value.trim() === '') {
      setError(form.subject, 'Subject cannot be blank!');
      return false;
   } else {
      setSuccess(form.subject);
   }

   // Validate Message
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
   const inputControl = input.parentElement;
   const inputAlert = inputControl.querySelector('.input-alert');
   inputControl.className = 'input-control error';
   inputAlert.innerHTML = errorMsg;
}

// Set Success Message
function setSuccess(input) {
   const inputControl = input.parentElement;
   inputControl.className = 'input-control success';
}

// Set Validate Email
function validEmail(email) {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}
