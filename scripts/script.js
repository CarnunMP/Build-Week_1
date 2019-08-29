const homePage = document.getElementsByClassName("container homepage");
const jokeWallet = document.getElementsByClassName("container joke-wallet");
const loginSignup = document.getElementsByClassName("container login-signup");
const pages = [homePage, jokeWallet, loginSignup];

function switchTo(pageName) {
    pages.forEach(page => page[0].style.display = "none");

    let toPage = document.getElementsByClassName(pageName);
    toPage[0].style.display = "inherit";

    // Hide footer on login-signup page:
    if (pageName === "container login-signup") {
        document.getElementsByTagName("footer")[0].style.display = "none";
    } else {
        document.getElementsByTagName("footer")[0].style.display = "inherit";
    }
}

// To log login/signup submissions to the console:
// function print(event) {
//     event.preventDefault();
//     let loginUsername = document.getElementById("#l-username");
//     let loginPassword = document.getElementById("#l-password");
//     let signupEmail = document.getElementById("#s-email");
//     let signupUsername = document.getElementById("#s-username");
//     let signupPassword1 = document.getElementById("#s-password1");
//     let signupPassword2 = document.getElementById("#s-password2");
//     console.log(`Login Username: ${loginUsername}`);
//     console.log(`Login Password: ${loginPassword}`);
//     console.log(`signup Email: ${signupEmail}`);
//     console.log(`signup Username: ${signupUsername}`);
//     console.log(`signup Password1: ${signupPassword1}`);
//     console.log(`signup Password2: ${signupPassword2}`);
// }

// ^Got stuck with this one! It kept printing nulls...
// Commented out and deleted the 'onsubmit's from index.html...