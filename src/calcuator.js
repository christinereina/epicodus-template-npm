export class User {
  constructor (age) {
    this.age = age;
  }

  mercuryAge() {
    let mercuryYears = Math.floor(this.age/.24);
    return mercuryYears;
  }

  VenusAge() {
    let venusYears = Math.floor(this.age/.24);
    return venusYears;
  }

}