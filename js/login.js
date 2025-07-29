const login_form =document.getElementById("loginForm")
const email_input = document.getElementById("userEmail")
const password_input = document.getElementById("userPassword")
const error_display = document.getElementById("alert_window")


login_form.addEventListener('submit', function(e){
    e.preventDefault();

    const option = login_form.querySelector('input[name="role"]:checked')
    const choice = option.value;
    let errors =[];

    const pass = password_input.value.trim();
    const email = email_input.value.trim();
    errors =validate(email, pass);
    if(errors.length > 0){
        error_display.textContent = errors.join(' .');
    }
    else{
        window.open("../nav_page.html");
    }
})

function validate(email, password){
    let errors =[];
    const emailRegex = /^[a-zA-Z]+\.cs\d{2}@bmsce\.ac\.in$/;

    if(email === '' || !emailRegex.test(email)) {
        errors.push("Please enter a valid email address")
    }
    if(password === '' || password.length < 6){
        errors.push("Please enter a valid password");
    }
    return errors;
}