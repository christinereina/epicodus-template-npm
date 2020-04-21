import { User } from "../src/calcuator.js";

describe ('User', () => {
  let newUser = new User(29);
  test ('this should test that the users age is stored and read as a number', () => {
    expect(newUser.age).toEqual(29);
  });

  test ('this should test Mercury age calculation', () => {
    let newUser = new User(29);
    expect(newUser.mercuryAge()).toEqual(120);
  });

  test ('this should test Venus age calculation', () => {
    let newUser = new User(29);
    expect(newUser.venusAge()).toEqual(46);
  });

  test ('this should test Mars age calculation', () => {
    let newUser = new User(29);
    expect(newUser.marsAge()).toEqual(15);
  });
});
