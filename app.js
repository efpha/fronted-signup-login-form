document.addEventListener('DOMContentLoaded', function() {
    const confirmSignupField = document.getElementById('confirm_sigunp_password')
    const signupField = document.getElementById('sigunp_password')
    const pswrdField = document.getElementById('password')
    
    function toggleVisibility(x){
        if(x.type == 'password'){
            x.type = 'text';
        } else{
            x.type = 'password';
        }
    }
    
    document.getElementById('icon').addEventListener('click', ()=>{
        toggleVisibility(confirmSignupField)
    })
    // document.getElementById('icon').addEventListener('click', ()=>{
    //     toggleVisibility(signupField)
    // })
    document.getElementById('icon').addEventListener('click', ()=>{
        toggleVisibility(pswrdField)
    })
    
    


document.getElementById('signupBtn').addEventListener('click', ()=> {
    console.log("Signup button clicked");
    if(document.getElementById('sigunp_password').value != document.getElementById('confirm_sigunp_password').value){

        const mismatch_Alert = document.getElementById('ale_rt')
        mismatch_Alert.classList.add('alert_txt')
        mismatch_Alert.innerText = "Password mismatch!";
        return
    } else{
        document.getElementById('ale_rt').classList.remove('alert_txt')
        document.getElementById('ale_rt').innerText =''
    }
}

)
    })

// document.addEventListener('DOMContentLoaded', function() {
//     const confirmSignupField = document.getElementById('sigunp_confirm_password');
//     const signupField = document.getElementById('sigunp_password');
//     const pswrdField = document.getElementById('password');

//     function toggleVisibility(x){
//         if(x.type == 'password'){
//             x.type = 'text';
//             console.log('Eye clicked');
//         } else {
//             x.type = 'password';
//             console.log('Eye clicked');
//         }
//     }

//     // Use querySelectorAll to select all elements with the class 'icon'
//     const iconElements = document.querySelectorAll('.icon');

//     // Add the click event listener to each 'icon' element
//     iconElements.forEach(function (iconElement) {
//         iconElement.addEventListener('click', function () {
//             toggleVisibility(confirmSignupField);
//             toggleVisibility(signupField);
//             toggleVisibility(pswrdField);
//             // Add logic if needed to handle each 'icon' element individually
//         });
//     });
// });




