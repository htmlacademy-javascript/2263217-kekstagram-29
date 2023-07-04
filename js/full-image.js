import { images } from './thumbnails.js';

const insertImage = (imageData) => {
  const bigImage = document.querySelector('.big-picture__img').querySelector('img');
  const socialCaption = document.querySelector('.social__caption');
  const likesCount = document.querySelector('.likes-count');
  const commentsCount = document.querySelector('.comments-count');
  const socialComments = document.querySelector('.social__comments');

  bigImage.src = imageData.url;
  bigImage.alt = imageData.description;

  socialCaption.textContent = imageData.description;

  likesCount.textContent = imageData.likes;

  socialComments.innerHTML = '';

  commentsCount.textContent = imageData.comments.length;

  imageData.comments.forEach((comment) => {
    const commentItem = document.createElement('li');
    commentItem.classList.add('social__comment');

    const commentPicture = document.createElement('img');
    commentPicture.classList.add('social__picture');
    commentPicture.src = comment.avatar;
    commentPicture.alt = comment.name;
    commentPicture.width = 35;
    commentPicture.height = 35;

    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = comment.message;

    commentItem.append(commentPicture);
    commentItem.append(commentText);

    socialComments.append(commentItem);
  });
};

const openImage = (imagesData) => {
  const pictures = document.querySelectorAll('.picture');
  const bigPicture = document.querySelector('.big-picture');
  const body = document.body;
  const socialCommentsCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');

  pictures.forEach((picture, index) => {
    picture.addEventListener('click', () => {
      body.classList.add('modal-open');
      bigPicture.classList.remove('hidden');
      socialCommentsCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');

      insertImage(imagesData[index]);
    });
  });

  const closeButton = document.querySelector('.big-picture__cancel');

  closeButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  });
};

openImage(images);
