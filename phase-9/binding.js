const wizard = { name: "Merlin", health: 100 };
const archer = {
  name: "Robin Hood",
  health: 50,
  heal: function (amount) {
    this.health += amount;
    console.log(`${this.name} has ${this.health} HP`);
  },
};

archer.heal.call(wizard, 50);

const healWizard = archer.heal.bind(wizard);

healWizard(20);
