import { User } from "../src/calcuator.js";

describe ('User', () => {
  let newUser = new User(29);
  test ('this should test that the users age is stored and read as a number', () => {
    expect(newUser.age).toEqual(29);
  });

  test ('this should test mercury age calculation', () => {
    let newUser = new User(29);
    expect(newUser.mercuryAge()).toEqual(120);
  });

  test ('this should test venus age calculation', () => {
    let newUser = new User(29);
    expect(newUser.venusAge()).toEqual(46);
  });
});
