export class User {
  constructor (age) {
    this.age = age;
  }

  mercuryAge() {
    let mercuryYears = Math.floor(this.age/.24);
    return mercuryYears;
  }

  venusAge() {
    let venusYears = Math.floor(this.age/.62);
    return venusYears;
  }
}