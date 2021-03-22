import './form.js'
import  {createOfers} from './data.js'
import {createCard}  from './popup.js'
let offers = createOfers();
// createCard(offers[0]);

let offerCardElement = createCard(offers[0]);
document.querySelector('#map-canvas').appendChild(offerCardElement);


