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

  test ('this should test Jupiter age calculation', () => {
    let newUser = new User(29);
    expect(newUser.jupiterAge()).toEqual(2);
  });

  test ('this should test users Juul habits', () => {
    let newUser = new User(29, "yes");
    expect(newUser.juulHabits()).toEqual(-10);
  });

  test ('this should test life expectancy calucation on Mercury if they Juul', () => {
    let newUser = new User(29, "yes");
    expect(newUser.estimatedMercury()).toEqual(210);
  });

  test ('this should test life expectancy calucation on Venus if they no Juul', () => {
    let newUser = new User(29, "no");
    expect(newUser.estimatedVenus()).toEqual(156);
  });

  test ('this should test life expectancy calucation on Mars if they Juul', () => {
    let newUser = new User(29, "yes");
    expect(newUser.estimatedMars()).toEqual(105);
  });

  test ('this should test life expectancy calucation on Jupiter if they Juul', () => {
    let newUser = new User(29, "yes");
    expect(newUser.estimatedJupiter()).toEqual(92);
  });

  test ('this should calculate the final years left on Mercury', () => {
    let newUser = new User(29, "yes");
    expect(newUser.leftMercury()).toEqual(90);
  });

  test ('this should calculate the final years left on Venus', () => {
    let newUser = new User(29, "yes");
    expect(newUser.leftVenus()).toEqual(90);
  });
});

//   test ('this should calculate the final years left on Mercury', () => {
//     let newUser = new User(29, "yes");
//     expect(newUser.leftMercury()).toEqual(90);
//   });

//   test ('this should calculate the final years left on Mercury', () => {
//     let newUser = new User(29, "yes");
//     expect(newUser.leftMercury()).toEqual(90);
//   });

// });
