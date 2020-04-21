import { User } from "../src/calcuator.js";

describe ('User', () => {
  let newUser = new User(29);

  test ('this should test that the users age is stored and read as a number', () => {
    expect(newUser.age).toEqual(29);
  });
});
