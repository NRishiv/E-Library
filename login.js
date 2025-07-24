function validateEmail(email)
{
    var validFormat = /^[a-zA-Z]+[a-zA-Z]*.(cs|is|epe|ec|me|ee|se|cv|te|cee|bt)[0-9][0-9]+@bmsce.ac.in$/;
    
    if(validFormat.test(email)){
        key="1";
    }
    else {
        alert("Please enter a valid BMSCE mail-ID.");
        return false;
    }
}




function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    validateEmail(username);
    if (key==1 && password == "admin") {
        window.open("nav_page.html");
        // return true;
    }
    else {
        alert("login failed!\nPlease try again...");
}
}

function advali(){
    var username = document.getElementById("admin-email").value;
    var password = document.getElementById("admin-password").value;
    validateEmail(username);
    if (key==1 && password == "admin") {
        window.open("https://script.google.com/macros/s/AKfycbzLEjmluywrynCs2W0RfQQwYwE7hOiXyak8GdfYdVl9-ym3HE3PFwQptVr39Snq4wDK/exec");
    }
    else {
        alert("login failed!\nPlease try again...\n(If you are a student/faculty, then please try student/faculty login.");
}
}
      // https://e-libraryportelproject.on.drv.tw/Website/nav_page.html" ,  // document.getElementById("namelocation").innerHTML="<a href='C:/Users/Pujith/Desktop/New/nav_page.html'></a>";
        // open("www.google.com");
        // console.log("hi");
        // alert("true")