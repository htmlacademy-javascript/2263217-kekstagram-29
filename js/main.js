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

const USEDIMAGEIDS = [];
const USEDCOMMENTIDS = [];

// Создаёт рандомное число и возвращает
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// Создаёт рандомный объект-комментарий
const createComment = () => {
  let commentId = getRandomInteger(1, 1000);
  while (USEDCOMMENTIDS.includes(commentId)) {
    commentId = getRandomInteger(1, 1000);
  }
  USEDCOMMENTIDS.push(commentId);

  return {
    id: commentId,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: TEXT[getRandomInteger(0, TEXT.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)]
  };
};

// Создаёт массив объектов-комментариев
const generateCommentsArray = (quantity) => {
  const COMMENTS = [];

  for (let i = 0; i < quantity; i++) {
    COMMENTS.push(createComment());
  }

  return COMMENTS;
};

// Создаёт рандомный объект-фото
const createDescriptionImage = () => {
  let id = getRandomInteger(1, 25);
  while (USEDIMAGEIDS.includes(id)) {
    id = getRandomInteger(1, 25);
  }
  USEDIMAGEIDS.push(id);

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    likes: getRandomInteger(15, 200),
    comments: generateCommentsArray(getRandomInteger(0, 30))
  };
};

// Создаёт массив объектов-фото
const IMAGES = Array.from({length: 25}, createDescriptionImage);
