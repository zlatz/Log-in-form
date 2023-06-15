const formButton = document.getElementById(`formButton`)
const emailInput = document.getElementById(`emailInput`)
const passwordInput = document.getElementById(`passwordInput`)
const formNotice = document.getElementById(`formNotice`)
const hiddenAlert = document.getElementById(`hiddenAlert`)

formButton.addEventListener(`click`, function(){
    if(emailInput.value === ``){
        formNotice.innerText = `Please Enter Your Email Address`
    }else if(passwordInput.value === ``){
        formNotice.innerText = `Please Enter Your Password`
    }else{
        hiddenAlert.classList.remove(`hidden-alert`)
        hiddenAlert.classList.add(`reveal-alert`)
    }
})