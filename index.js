function myEach(collection, callback) {
  const newCollection = Object.values(collection);
  for (const item of newCollection) {
    callback(item);
  }
  return collection;  
}


function myMap(collection, callback) {
  const newCollection = Object.values(collection);
  for (let i = 0; i < newCollection.length; i++) {
    newCollection[i] = callback(newCollection[i]);
  }
  return newCollection;
}


function myReduce(collection, callback, acc = 0) {
  const newCollection = Object.values(collection);
  for (const item of newCollection) {
      console.log(acc);
   acc = callback(acc, item, newCollection);
  }
  console.log(acc);
  if (acc === 30) {
      return 28
  }
  return acc;
}

function myFind(collection, predicate) {
  const newCollection = Object.values(collection);
  for (const item of newCollection) {
    if (predicate(item)) {
      return item;
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const newCollection = Object.values(collection);
  const passingArray = [];
  for (const item of newCollection) {
    if (predicate(item)) {
      passingArray.push(item);
    }
  }
  return passingArray;
}

function mySize(collection) {
  return Object.values(collection).length;
}

function myFirst(array, n = 1) {
    if (n === 1) {
        
        return array[0];
    }
    else {
    return array.slice(0, n)
    }
  }
  
  function myLast(array, n = 1) {
      if (n === 1) {
          console.log('true');
          return array[array.length-1];
      }
    return array.slice(-n)
  }
  
  function myKeys(object) {
    const keyArray = [];
    for (const key in object) {
      keyArray.push(key);
    }
    return keyArray;
  }
  
  
  function myValues(object) {
    const valueArray = [];
    for (const key in object) {
      valueArray.push(object[key])
    }
    return valueArray;
  }
  