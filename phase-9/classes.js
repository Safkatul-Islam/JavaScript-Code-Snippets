class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    attack() {
        console.log(`${this.name} attacks with bare hands!`);
    }
}

class Warrior extends Character {
    constructor(name, health, weapon) {
        super(name, health);
        this.weapon =weapon;
    }

    attack() {
        console.log(`${this.name} attacks with ${this.weapon}`);
    }
}

const peasant = new Character("Peasant", 50);
const arthur = new Warrior("King Arthur", 100, "Excalibur");

peasant.attack();
arthur.attack();