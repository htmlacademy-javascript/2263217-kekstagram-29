import { images } from './thumbnails.js';

const body = document.body;
const pictures = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const socialCommentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

// Функция добавления комментариев
const createCommentElement = (comment) => {
  const commentItem = document.createElement('li');
  commentItem.classList.add('social__comment');

  const commentPicture = document.createElement('img');
  commentPicture.classList.add('social__picture');
  commentPicture.src = comment.avatar;
  commentPicture.alt = comment.name;
  commentPicture.style.setProperty('width', '35px');
  commentPicture.style.setProperty('height', '35px');

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = comment.message;

  commentItem.append(commentPicture);
  commentItem.append(commentText);

  return commentItem;
};

// Функция добавления данных для модалки
const insertImage = (imageData) => {
  const bigImage = document.querySelector('.big-picture__img').querySelector('img');
  bigImage.src = imageData.url;
  bigImage.alt = imageData.description;

  const socialCaption = document.querySelector('.social__caption');
  socialCaption.textContent = imageData.description;

  const likesCount = document.querySelector('.likes-count');
  likesCount.textContent = imageData.likes;

  const socialComments = document.querySelector('.social__comments');
  socialComments.innerHTML = '';

  const commentsCount = document.querySelector('.comments-count');
  commentsCount.textContent = imageData.comments.length;

  imageData.comments.forEach((comment) => {
    socialComments.append(createCommentElement(comment));
  });
};

// Функция открытия модалки
const openImage = (imagesData) => {
  const closeButton = document.querySelector('.big-picture__cancel');

  const toggleModal = () => {
    bigPicture.classList.toggle('hidden');
    body.classList.toggle('modal-open');
    socialCommentsCount.classList.toggle('hidden');
    commentsLoader.classList.toggle('hidden');
  };

  pictures.forEach((picture, index) => {
    picture.addEventListener('click', () => {
      toggleModal();
      insertImage(imagesData[index]);
      closeButton.addEventListener('click', toggleModal);

      document.addEventListener('keydown', (evt) => {
        if (evt.key !== 'Escape') {
          return;
        }
        evt.preventDefault();
        bigPicture.classList.add('hidden');
        body.classList.remove('modal-open');
        socialCommentsCount.classList.add('hidden');
        commentsLoader.classList.add('hidden');
      });
    });
  });
};

openImage(images);
