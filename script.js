const form =document.getElementsByTagName('form')[0]

let emaillog=document.getElementById("emaillog")
let emailerror=document.getElementById("emailerror")

let passlog=document.getElementById('paslog')
let paserror=document.getElementById('paserror')



function checkMail(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(emaillog.value)){
        emailerror.innerHTML="<h6>valid</h6>"
        emailerror.style.color="green"
        paserrorerror.innerHTML="<h6>valid</h6>"
        paserrorerror.style.color="green"
        console.log("valid")
        return true
    }

        else {
            emailerror.innerHTML="<h6>enter the proper email format</h6>"
            emailerror.style.color="red"
            paserror.innerHTML="<h6>password mismatch</h6>"
            paserror.style.color="red"
            console.log("Invalid")
            return false
        }
    }

    form.addEventListener('submit',function(e){
        if(!checkMail()){
            e.preventDefault()
        }
    })

function validate() {
    let email = document.getElementById("email");
    let error = document.getElementById("error");
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        // alert("Valid");
        error.innerHTML = "Valid Email";
        error.style.color = "green";
        return true;
    }else{
        // alert("Invalid");
        error.innerHTML = "Invalid Email";
        error.style.color = "red";
        return false;
    }
    
}
let timeout;
let password = document.getElementById('PassEntry');
let strengthBadge = document.getElementById('StrengthDisp');
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')


function StrengthChecker(PasswordParameter) {
    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green";
        strengthBadge.textContent = 'Strong';
    } else if(mediumPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = 'orange';
        strengthBadge.textContent = 'Medium';
    } else {
        strengthBadge.style.backgroundColor = 'red';
        strengthBadge.textContent = 'Poor';
    }
}

password.addEventListener("input", () => {
    strengthBadge.style.display = 'block';
    clearTimeout(timeout);
    timeout = setTimeout(() => StrengthChecker(password.value), 500);
    if(password.value.length !== 0) {
        strengthBadge.style.display != 'block';
    } else {
        strengthBadge.style.display = 'none';
    }
});

var check = function(){ 
    if(document.getElementById("PassEntry").value ==
    document.getElementById("rePassEntry").value){
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerHTML = "Matching";
    }else{
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "Not Matching";
    }
}


//phoneNum
                        
$(document).ready(function () {

    $(".phone_us").keyup(function (e) {
        var value = $(".phone_us").val();
        if (e.key.match(/[0-9]/) == null) {
            value = value.replace(e.key, "");
            $(".phone_us").val(value);
            return;
        }
    
        if (value.length == 3) {
            $(".phone_us").val(value + "-")
        }
        if (value.length == 7) {
            $(".phone_us").val(value + "-")
        }
    });
    });