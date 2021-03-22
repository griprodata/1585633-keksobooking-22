import {getRandomInt, getRandom} from './util.js'

let arr = ['palace', 'flat', 'house', 'bungalow']
let arrCheckin = ['12:00', '13:00', '14:00'];
let arrFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
let arrPhotos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]

function createOfer(index) {
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInt(1, 8) + '.png',
    },
    offer: {
      title: 'Предложение ' + index,
      address: getRandom(0, 10, 3) + ','  + getRandom(0, 10, 3),
      price: getRandomInt(10, 150),
      type:  arr[getRandomInt(0, 3)],
      rooms: getRandomInt(1, 15),
      guests: getRandomInt(3, 23),
      checkin: arrCheckin[getRandomInt(0, arrCheckin.length - 1)],
      checkout: arrCheckin[getRandomInt(0, arrCheckin.length - 1)],
      features: arrFeatures.slice(0, getRandomInt(0, arrFeatures.length - 1)),
      description: 'Описание квартиры',
      photos:  arrPhotos.slice(0, getRandomInt(0, arrPhotos.length - 1)),

    },
    location: {
      x: getRandom(35.65000, 35.70000, 5),
      y: getRandom(139.7000, 139.80000, 5),
    },

  }
}

export function createOfers() {
  let offers = [];
  for (let i = 0; i < 10; i++) {
    let o = createOfer(i)
    offers.push(o);
    //console.log(o);
  }
  return offers;
}

