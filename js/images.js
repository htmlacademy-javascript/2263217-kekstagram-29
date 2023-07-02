import {getRandomInteger, getRandomId} from './utils.js';
import {generateCommentsArray} from './comments.js';

const USEDIMAGEIDS = [];

// Создаёт рандомный объект-фото
const createDescriptionImage = () => {
  const id = getRandomId(USEDIMAGEIDS, 25);
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    likes: getRandomInteger(15, 200),
    comments: generateCommentsArray(getRandomInteger(0, 30))
  };
};

// Создаёт массив объектов-фото
const getImages = (numOfImages) => Array.from({length: numOfImages}, createDescriptionImage);

export {getImages};
