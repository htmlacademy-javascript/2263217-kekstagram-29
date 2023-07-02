const getRandomInteger = (min, max) => {
  const result = Math.random() * (max - min + 1) + min;

  return Math.floor(result);
};

const getRandomId = (usedIds, count) => {
  let Id = getRandomInteger(1, count);
  while (usedIds.includes(Id)) {
    Id = getRandomInteger(1, count);
  }
  usedIds.push(Id);

  return Id;
};

export {getRandomInteger, getRandomId};
