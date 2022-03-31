let emaillog=document.getElementById("emaillog")
let emailerror=document.getElementById("emailerror")

function checkMail(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(emaillog.value)){
        emailerror.innerHTML="<h6>valid</h6>"
        emailerror.style.color="green"
        return true
    }

        else {
            emailerror.innerHTML="<h6>Invalid</h6>"
            emailerror.style.color="red"
            return false
        }

    }