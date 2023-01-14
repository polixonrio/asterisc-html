function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success","form__message--error")
    messageElement.classList.add(`form__message--${type}`,'text-danger');
}

function setInputError(inputElement, message) {
    inputElement.classList.add("border", "border-danger");
    inputElement.parentElement.parentElement.querySelector(".form__input-error-message").textContent = message;
    inputElement.parentElement.parentElement.parentElement.parentElement.querySelector(".card").classList.add("border", "border-danger");
}

function clearInputError(inputElement) {
    inputElement.classList.remove("border", "border-danger");
    inputElement.parentElement.parentElement.querySelector(".form__input-error-message").textContent = "";
    inputElement.parentElement.parentElement.parentElement.parentElement.querySelector(".card").classList.remove("border", "border-danger");

}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}


document.addEventListener("DOMContentLoaded", () => {
    // const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    console.log(createAccountForm);
    document.querySelector("#linkLogin ").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("d-none");
        createAccountForm.classList.remove("d-none");
    });

    // document.querySelector("#linkCreateAccount").addEventListener("click", e => {
    //     e.preventDefault();
    //     loginForm.classList.remove("d-none");
    //     createAccountForm.classList.add("d-none");
    // });

    // loginForm.addEventListener("submit", e=> {
    //     e.preventDefault();
    //     setFormMessage(loginForm, "error", "Invalid username/password combination")
    // });

    


    document.querySelectorAll(".form__input.form-control").forEach(inputElement => {
        let emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let phonenoregex = /^\d{10}$/
        
        inputElement.addEventListener("blur", e => {
            console.log(emailregex.test(e.target.value));
            if (e.target.id === "ebox" && e.target.value=="" ) {
                setInputError(inputElement, "This is a required question");
            }
            else if(e.target.id === "ebox" && !(emailregex.test(e.target.value))){
                setInputError(inputElement, "Must be a valid email");
                }
            else if(e.target.id === "ebox"){
                clearInputError(inputElement);
            }
        });


        inputElement.addEventListener("blur", e => {
            if (e.target.id === "fname"  && e.target.value == "" ) {
                setInputError(inputElement, "This is a required question");
            }
            else if(e.target.id === "fname"){
                clearInputError(inputElement);
            }
        });

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "telnam" && e.target.value=="" ) {
                setInputError(inputElement, "This is a required question");
            }
            else if(e.target.id === "telnam" && !(phonenoregex.test(e.target.value))){
                setInputError(inputElement, "Must be a number");
                }
            else if(e.target.id === "telnam" && e.target.id === "telnam"){
                clearInputError(inputElement);
            }
        });
  
    })
})