function giveRandomArray(prevArrayNumbers, count, min, max) {
  let arrayRandom = [];
  let sessionNumber;
  for (let index = 0; index < count; ) {
    sessionNumber = randomInteger(min, max);
    if (
      arrayRandom.find((item) => item === sessionNumber) === undefined &&
      prevArrayNumbers.find((item) => item === sessionNumber) === undefined
    ) {
      arrayRandom.push(sessionNumber);
      index++;
    }
  }
  return arrayRandom;
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function generateFullPetsList(pets, multiplier) {
  let fullPetsList = [];
  for (let i = 0; i < multiplier; i++) {
    const newPets = pets;
    fullPetsList = [...fullPetsList, ...newPets];
    for (let j = newPets.length; j > 0; j--) {
      let randomIndex = Math.floor(Math.random() * j);
      const randomElement = newPets.splice(randomIndex, 1)[0];
      newPets.push(randomElement);
    }
  }
  console.log(fullPetsList);
  return sort863(fullPetsList);
}

const sort863 = (list) => {
  let unique8List = [];
  let length = list.length;
  for (let i = 0; i < length / 8; i++) {
    const uniqueStepList = [];
    for (let j = 0; j < list.length; j++) {
      if (uniqueStepList.length >= 8) {
        break;
      }
      const isUnique = !uniqueStepList.some((item) => {
        return item.name === list[j].name;
      });
      if (isUnique) {
        uniqueStepList.push(list[j]);
        list.splice(j, 1);
        j--;
      }
    }
    unique8List = [...unique8List, ...uniqueStepList];
  }
  list = unique8List;

  list = sort6recursively(list);

  return list;
};

const sort6recursively = (list) => {
  const length = list.length;

  for (let i = 0; i < length / 6; i++) {
    const stepList = list.slice(i * 6, i * 6 + 6);

    for (let j = 0; j < 6; j++) {
      const duplicatedItem = stepList.find((item, ind) => {
        return item.name === stepList[j].name && ind !== j;
      });

      if (duplicatedItem !== undefined) {
        const ind = i * 6 + j;
        const which8OfList = Math.trunc(ind / 8);

        list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);

        sort6recursively(list);
      }
    }
  }

  return list;
};

export { giveRandomArray, generateFullPetsList };
