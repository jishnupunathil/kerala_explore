const form =document.getElementsByTagName('form')[0]

let emaillog=document.getElementById("emaillog")
let emailerror=document.getElementById("emailerror")



function checkMail(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(emaillog.value)){
        emailerror.innerHTML="<h6>valid</h6>"
        emailerror.style.color="green"
        console.log("valid")
        return true
    }

        else {
            emailerror.innerHTML="<h6>enter the proper email format</h6>"
            emailerror.style.color="red"
            console.log("Invalid")
            return false
        }
    }

    form.addEventListener('submit',function(e){
        if(!checkMail()){
            e.preventDefault()
        }
    })




// let loginpwd=document.getElementById("loginpwd")
// let pwderror=document.getElementById("pwderror")


//     function checkPwd(){
   
//         if(loginpwd.value.length<=8){
//             pwderror.innerHTML="<h6>Password Wrong</h6>"
//             pwderror.style.color="red"
//             loginpwd.style.border="solid 2px red"
//             console.log("wrong")
//             return false
//         }
//          else{
//              console.log("valid")
//              return true
//          }
//         }