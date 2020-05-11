const user = {
  firstName: "abu",
  lastName: "adnaan",
  // address: {
  //   street: 'behind AP filling station',
  //   number: 'none',
  //   telephone:['08062870354','08155065801']
  // }
};

// console.log(user.address.street)
// console.log(user?.address?.street);

const randStr = "hello world";
// console.log([...new Set(randStr)].join(""));
// console.log([...new Set([1, 2, 3, 1, 2, 3])]);

const setUnion = (setA, setB) => {
  const _setUnion = new Set(setA);
  for (const el of setB) {
    if (!_setUnion.has(el)) {
      _setUnion.add(el);
    }
  }
  return _setUnion;
};

const setIntersection = (setA, setB) => {
  const _setIntersection = new Set();
  const setIterator = setA.size > setB.size ? "seta" : "setb";
  if (setIterator === "seta") {
    const _setA = new Set(setA);
    for (const el of setB) {
      if (_setA.has(el)) {
        _setIntersection.add(el);
      }
    }
  } else {
    for (const el of setA) {
      const _setB = new Set(setB);
      if (_setB.has(el)) {
        _setIntersection.add(el);
      }
    }
    return _setIntersection;
  }
};

const setDisjoint = (setA, setB) => {
  const _setDisjoint = new Set();
  const setIterator = setA.size > setB.size ? "seta" : "setb";
  const _setA = new Set(setA);
  for (const el of setB) {
    if (!_setA.has(el)) {
      _setDisjoint.add(el);
    }
  }
  for (const el of setA) {
    const _setB = new Set(setB);
    if (!_setB.has(el)) {
      _setDisjoint.add(el);
    }
  }

  return _setDisjoint;
};

const setA = [1, 2, 3, 4, 5],
  setB = [2, 5, 6, 7];
console.log("setA", setA);
console.log("setB", setB);
console.log("setUnion", [...setUnion(setA, setB)]);
console.log("setIntersection", [...setIntersection(setA, setB)]);
console.log("setDisjoint", [...setDisjoint(setA, setB)]);

