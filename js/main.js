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
  const result = Math.random() * (max - min + 1) + min;

  return Math.floor(result);
};

const getRandomId = (usedIds) => {
  let Id = getRandomInteger(1, 1000);
  while (usedIds.includes(Id)) {
    Id = getRandomInteger(1, 1000);
  }
  usedIds.push(Id);

  return Id;
};

// Создаёт рандомный объект-комментарий
const createComment = () => {
  const commentId = getRandomId(USEDCOMMENTIDS);

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
  const id = getRandomId(USEDIMAGEIDS);

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    likes: getRandomInteger(15, 200),
    comments: generateCommentsArray(getRandomInteger(0, 30))
  };
};

// Создаёт массив объектов-фото
const getImages = (numOfImages = 25) => Array.from({length: numOfImages}, createDescriptionImage);
