const greetings = ["hello!", "ciao!", "hola!", "kamusta!"];
let currentIndex = 0;
const greetingElement = document.getElementById("greeting");

function changeGreeting() {
  currentIndex = (currentIndex + 1) % greetings.length; 
  greetingElement.textContent = greetings[currentIndex];
}

setInterval(changeGreeting, 2000); 

function changeGreeting() {
    greetingElement.classList.add('hide'); 
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % greetings.length; 
      greetingElement.textContent = greetings[currentIndex]; 
      greetingElement.classList.remove('hide'); 
    }, 500);
  }

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}