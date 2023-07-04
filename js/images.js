import {getRandomInteger} from './utils.js';
import {generateCommentsArray} from './comments.js';

// Создаёт рандомный объект-фото
const createImage = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
  likes: getRandomInteger(15, 200),
  comments: generateCommentsArray(getRandomInteger(0, 30))
});

// Создаёт массив объектов-фото
const generateImagesArray = (countImages) => Array.from({ length: countImages }, (_, i) => createImage(i + 1));

export {generateImagesArray};
