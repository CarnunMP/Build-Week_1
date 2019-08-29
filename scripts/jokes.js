const jokesArray = [
    "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
    "How many apples grow on a tree? All of them.",
    "What do you call cheese that isn't yours? Nacho Cheese.",
    "I wouldn't buy anything with velcro. It's a total rip-off.",
    "The shovel was a ground-breaking invention.",
    "5/4 of people admit that they’re bad with fractions.",
    "Two goldfish are in a tank. One says to the other, 'do you know how to drive this thing?'",
    "The rotation of earth really makes my day.",
    "Did you hear about the kidnapping at school? It's fine, he woke up.",
    "A furniture store keeps calling me. All I wanted was one night stand.",
    "Today, my son asked 'Can I have a book mark?' and I burst into tears. 11 years old and he still doesn't know my name is Brian.",
    "I got the words “jacuzzi” and “yakuza” confused. Now I’m in hot water with the Japanese mafia.",
    "Geology rocks but geography is where it's at",
    "A storm blew away 25% of my roof last night. oof"
];

const prevButton = document.querySelectorAll(".button.prev");
const nextButton = document.querySelectorAll(".button.next");
const randomButton = document.querySelectorAll(".button.random");
const jokeBox = document.querySelectorAll(".box.jokes");

let i = 0;

function displayQuote() {
    jokeBox.forEach(element => element.innerHTML = `<h4>${jokesArray[i]}</h4>`)
}

function increaseIndex() {
    if (i < jokesArray.length - 1) {
        i++
    }
    else {
        i = 0;
    }

    displayQuote()
}

function decreaseIndex() {
    if (i > 0) {
        i--
    }
    else {
        i = jokesArray.length - 1
    }

    displayQuote()
}

function randomiseIndex() {
    i = Math.floor(Math.random() * jokesArray.length);
    displayQuote();
}

for (let i = 0; i < 2; i++) {
    nextButton[i].addEventListener("click", increaseIndex);
    prevButton[i].addEventListener("click", decreaseIndex);
    randomButton[i].addEventListener("click", randomiseIndex);
}

window.addEventListener('DOMContentLoaded', displayQuote); 