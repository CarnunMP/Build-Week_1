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
        console.log("Yo!");
        document.getElementsByTagName("footer")[0].style.display = "none";
    } else {
        document.getElementsByTagName("footer")[0].style.display = "inherit";
    }
}