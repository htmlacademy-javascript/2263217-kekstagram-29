const getRandomInteger = (min, max) => {
  const result = Math.random() * (max - min + 1) + min;

  return Math.floor(result);
};

const getRandomId = (usedIds, count) => {
  let id = getRandomInteger(1, count);
  while (usedIds.includes(id)) {
    id = getRandomInteger(1, count);
  }
  usedIds.push(id);

  return id;
};

export {getRandomInteger, getRandomId};
