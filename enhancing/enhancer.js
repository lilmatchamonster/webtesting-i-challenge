module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item && typeof item === 'object'){
    const objectProperties = Object.getOwnPropertyNames(item);
    const objectNames = ["name", "durability", "enhancement"];

    if (areEqual(objectProperties, objectNames)) {

      if(item.enhancement < 20) {
        const newItem = {
          name: item.name,
          durability: item.durability,
          enhancement: item.enhancement + 1
        }

        return newItem;
      }
      else {
        return item
      }
    }
    else {
      return null;
    }
  }
  else {
    return null;
  }
}

function fail(item) {
  if(item && typeof item === 'object'){
    const objectProperties = Object.getOwnPropertyNames(item);
    const objectNames = ["name", "durability", "enhancement"];

    if (areEqual(objectProperties, objectNames)) {
      
      if(item.enhancement < 15) {
        const newItem = {
          name: item.name,
          durability: item.durability - 5,
          enhancement: item.enhancement
        }
        return newItem;
      }

      if(item.enhancement >= 15) {
        const newItem = {
          name: item.name,
          durability: item.durability - 10,
          enhancement: item.enhancement
        }

        if(item.enhancement > 16) {
          newItem.enhancement = newItem.enhancement - 1;

          return newItem;
        }
        else{
          return newItem;
        }
      }
    }
    else {
      return null;
    }
  }
  else {
    return null
  }
}

function repair(item) {
  if(item && typeof item === 'object'){
    const objectProperties = Object.getOwnPropertyNames(item);
    const objectNames = ["name", "durability", "enhancement"];

    if (areEqual(objectProperties, objectNames)) {
      const newItem = {
        name: item.name,
        durability: 100,
        enhancement: item.enhancement
      }
      return newItem;
    }
    else {
      return null
    }
  }
  else {
    return null;
  }
}

function get(item) {
  if(item && typeof item === 'object'){
    const objectProperties = Object.getOwnPropertyNames(item);
    const objectNames = ["name", "durability", "enhancement"];

    if (areEqual(objectProperties, objectNames)) {

      if(item.enhancement > 0) {
        const newItem = {
          name: item.name = `[+${item.enhancement}] ${item.name}`,
          durability: item.durability,
          enhancement: item.enhancement
        }
       return newItem
      }
      else {
        return item;
      }

    }
    else {
      return null;
    }
  }
  else {
    return null;
  }
}


function areEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;
 
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
 }