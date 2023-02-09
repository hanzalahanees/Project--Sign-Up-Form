function validate_password() {

    var pass = document.getElementById('pwd').value;
    var confirm_pass = document.getElementById('con-pwd').value;
    if (pass != confirm_pass) {
        document.getElementById('wrong_pass_alert').style.color = 'red';
        document.getElementById('wrong_pass_alert').innerHTML
            = 'Password is not same.Kindly use same password';
    } else {
        document.getElementById('wrong_pass_alert').style.color = 'green';
        document.getElementById('wrong_pass_alert').innerHTML =
            'Password Matched';
    }
}