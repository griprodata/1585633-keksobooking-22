const cardTemplate = document.querySelector('#card');

let offerTemplate = cardTemplate.content.querySelector('.popup');
// console.log(offerTemplate.querySelector('.popup__title'))


const houseType = (type) => {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
  }
};

export function createCard(data) {
  const myOffer = offerTemplate.cloneNode(true);
  myOffer.querySelector('.popup__title').textContent = data.offer.title;
  myOffer.querySelector('.popup__text--address').textContent = data.offer.adress;
  myOffer.querySelector('.popup__text--price').textContent = data.offer.price + ' ₽/ночь';
  myOffer.querySelector('.popup__type').textContent = houseType(data.offer.type);
  myOffer.querySelector('.popup__text--capacity').textContent = data.offer.rooms + ' Комнаты для ' + data.offer.guests + ' Гостей';
  myOffer.querySelector('.popup__text--time').textContent = 'Заед после ' + data.offer.checkin +' Выезд до ' + data.offer.checkout;

  myOffer.querySelector('.popup__features').textContent = '';

  for (let i = 0; i < data.offer.features.length; i++) {
    // i == 0
    // i == 1
    const feature = data.offer.features[i]; // wifi или parking
    const featureElement = document.createElement('li');
    featureElement.classList.add('popup__feature');
    featureElement.classList.add('popup__feature--' + feature); // 'popup__feature--parking'


    myOffer.querySelector('.popup__features').appendChild(featureElement);

    myOffer.querySelector('.popup__description').textContent = data.offer.description;
     myOffer.querySelector('.popup__photos').textContent = data.offer.photos;
     myOffer.querySelector('.popup__avatar').src = data.author.avatar;

  }
  return myOffer
}
