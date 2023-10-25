function validateForm() {
  var r = true;
  var name = document.getElementById('fname').value;
  var userName = document.getElementById('uname').value;
  var password = document.getElementById('pass').value;
  var confirmPassword = document.getElementById('Cp').value;

  
  document.getElementById('m1').innerHTML = '';
  document.getElementById('m2').innerHTML = '';
  document.getElementById('m3').innerHTML = '';
  document.getElementById('m4').innerHTML = '';

  // Validate name
  if (name.trim() === '') {
    document.getElementById('m1').innerHTML = '*Name must be filled out';
    document.getElementById('fname').style.borderColor = 'red';
    r = false;
  }

  // Validate username
  if (userName.trim() === '') {
    document.getElementById('m2').innerHTML = '*Username must be filled out';
    document.getElementById('uname').style.borderColor = 'red';
    r = false;
  }

  // Validate password
  if (password.trim() === '') {
    document.getElementById('m3').innerHTML = '*Password must be filled out';
    document.getElementById('pass').style.borderColor = 'red';
    r = false;
  } else if (password.length < 6) {
    document.getElementById('m3').innerHTML = '*Password should be at least 6 characters long';
    document.getElementById('pass').style.borderColor = 'red';
    r = false;
  } else if (!/[a-z]/.test(password)) {
    document.getElementById('m3').innerHTML = '*Password should contain at least one lowercase letter';
    document.getElementById('pass').style.borderColor = 'red';
    r = false;
  } else if (!/[A-Z]/.test(password)) {
    document.getElementById('m3').innerHTML = '*Password should contain at least one uppercase letter';
    document.getElementById('pass').style.borderColor = 'red';
    r = false;
  } else if (!/\d/.test(password)) {
    document.getElementById('m3').innerHTML = '*Password should contain at least one digit';
    document.getElementById('pass').style.borderColor = 'red';
    r = false;
  } else if (!/\W/.test(password)) {
    document.getElementById('m3').innerHTML = '*Password should contain at least one non-alphanumeric character';
    document.getElementById('pass').style.borderColor = 'red';
    r = false;
  }

  // Validate conf password
  if (confirmPassword.trim() === '') {
    document.getElementById('m4').innerHTML = '*Confirm Password must be filled out';
    document.getElementById('Cp').style.borderColor = 'red';
    r = false;
  } else if (confirmPassword !== password) {
    document.getElementById('m4').innerHTML = '*Your passwords do not match';
    document.getElementById('Cp').style.borderColor = 'red';
    r = false;
  }

// if all is correct
  if (r) {
    window.location.href = 'thankyou.html';
  }

  return r;
}
