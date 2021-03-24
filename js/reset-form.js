import { resetAdForm } from './ad-form.js';
import { resetMapForm } from './map-form.js';
import { setDefaultCoordinates, clearMarkers,  drawOffers } from './map.js';


const resetForm = () => {
  resetAdForm();
  resetMapForm();
  setDefaultCoordinates();
  clearMarkers();
  drawOffers();
};

export { resetForm };
