import {getRandomInteger, getRandomId} from './utils.js';

const NAMES = [
  'Джон',
  'Серсея',
  'Тирион',
  'Тайвин',
  'Манс Налётчик',
  'Визерис',
];

const TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const USEDCOMMENTIDS = [];

const createComment = () => {
  const commentId = getRandomId(USEDCOMMENTIDS, 1000);

  return {
    id: commentId,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: TEXT[getRandomInteger(0, TEXT.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)]
  };
};

const generateCommentsArray = (quantity) => {
  const COMMENTS = [];

  for (let i = 0; i < quantity; i++) {
    COMMENTS.push(createComment());
  }

  return COMMENTS;
};

export {generateCommentsArray};
