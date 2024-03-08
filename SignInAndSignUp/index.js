// Add JavaScript code here
const signUpBtn = document.querySelector('.signUp-Btn')
const signInBtn = document.querySelector('.signIn-Btn')
const signinDiv = document.querySelector('.signin')
const signupDiv = document.querySelector('.signup')


signInBtn.addEventListener('click', () => {
    signInBtn.classList.add('active')
    signUpBtn.classList.remove('active')
    signinDiv.style.display = "none"
    signupDiv.style.display = "flex"
    
})
signUpBtn.addEventListener('click', () => {
    signInBtn.classList.remove('active')
    signUpBtn.classList.add('active')
    signinDiv.style.display="flex"
    signupDiv.style.display="none"
    
})
 