function toggleHomepage() {
    let x = document.getElementsByClassName("container homepage");
    if (x.style.display === "none") {
        x.style.display = "initial";
    } else {
        x.style.display = "none";
    }
}