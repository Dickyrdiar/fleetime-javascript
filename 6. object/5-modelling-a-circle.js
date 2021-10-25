let circle = {
  radius: 25,

  circumference() {
    let circum = 2 * Math.PI * `${this.radius}`;
    return circum;
  },

  area() {
    let area = Math.PI * `${this.radius}` ** 2;
    return area;
  },
};
