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

export {getRandomInteger, getRandomId};
