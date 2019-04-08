module.exports = {
  succeed,
  fail,
  repair,
  get,
};


//durability should be 100
//accepts item object
// must return a new item (immutable)
function repair(item) {
  const newItem = { ...item };
  newItem.durability = 100;
  // console.log(item, '\n', newItem)
  return newItem;
}

//item object
// return new item (immutable)
// item enhancement succeeds
function succeed(item) {
  const newItem = { ...item };
  if (typeof newItem.enhancement !== "number") {
    newItem.enhancement = 0;
    return { ...newItem };
  }
  if (newItem.enhancement < 0) {
    newItem.enhancement = 0;
    return { ...newItem };
  } else if (newItem.enhancement > 19) {
    newItem.enhancement = 20;
    return { ...newItem };
  } else {
    newItem.enhancement = newItem.enhancement + 1;
    return { ...newItem };
  }
  console.log(newItem);
}

//item object
// return new item object
// item enhancement failure
function fail(item) {
  const newItem = { ...item };
  if (typeof newItem.enhancement !== "number") {
    newItem.enhancement = 0;
    newItem.durability = 0;
    return { ...newItem };
  }
  if (typeof newItem.durability !== "number") {
    newItem.enhancement = 0;
    newItem.durability = 0;
    return { ...newItem };
  }
  if (newItem.enhancement < 0) {
    newItem.enhancement = 0;
  }
  if (newItem.enhancement < 15 && newItem.durability > 0) {
    if (newItem.durability < 5) {
      newItem.durability = 0;
    } else {
      newItem.durability = newItem.durability - 5;
    }
  } else {
    if (newItem.durability < 10) {
      newItem.durability = 0;
    } else {
      newItem.durability = newItem.durability - 10;
    }
  }
  if (newItem.enhancement > 16) {
    if (newItem.enhancement > 20) {
      newItem.enhancement = 20;
    }
    newItem.enhancement = newItem.enhancement - 1;
  }

  return { ...newItem };
}



// ---------------------------------------------------------------------------------------

// for stretch
function get(item) {
  return { ...item };
}
