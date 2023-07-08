import { generateImagesArray } from './images.js';

const images = generateImagesArray(25);

const appendImages = () => {
  const pictures = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

  images.forEach((image) => {
    const imageElement = pictureTemplate.cloneNode(true);

    imageElement.querySelector('.picture__img').src = image.url;
    imageElement.querySelector('.picture__img').alt = image.description;
    imageElement.querySelector('.picture__comments').textContent = image.comments.length;
    imageElement.querySelector('.picture__likes').textContent = image.likes;

    fragment.append(imageElement);
  });

  pictures.append(fragment);
};

appendImages();

export {images};
