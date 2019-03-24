import daftCodeComponent from './modules/script.js';
import './style.css';
import Logo from './logo.gif';

daftCodeComponent();


function addLogo() {
    const h1element = document.querySelector('h1');
    const daftLogo = new Image();
    
    daftLogo.src = Logo;
    daftLogo.alt = "DaftCode logo"
    h1element.prepend(daftLogo);
    return h1element;
  }

  document.body.appendChild(addLogo());
console.log(`daftcodecomponent: ${daftCodeComponent}`);
