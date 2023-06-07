class veh {
  constructor(params) {
    this.name = params.name;
    this.model = params.model;
    this.velocity = 0;
  }

  accelerate(n) {
    this.velocity = this.velocity <= 100 ? 5 * n : 100;
  }
  brake() {
    this.velocity = 0;
  }
}

class cycle extends veh {
  constructor(params) {
    super(params);
    this.weight = params.weight;
    this.height = params.height;
  }

  bell() {
    console.log(`cycle ${this.name} is beeping`);
  }
}

const cycle1 = new cycle({
  name: "Nasir's cycle",
  model: "2020",
  weight: 25,
  height: 1,
});

cycle1.accelerate();
