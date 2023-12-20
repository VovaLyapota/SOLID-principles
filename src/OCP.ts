console.log("Open-closed principle PAGE");

// #1

interface Attacker {
  attack: () => void;
}

class Weapon implements Attacker {
  constructor(public damage: number, public range: number) {}

  attack() {}
}

class Sword extends Weapon {
  attack(): void {
    console.log(`Sword attack with ${this.damage} damage`);
  }
}

class Crossbow extends Weapon {
  attack(): void {
    console.log(`Crossbow attack with ${this.damage} damage`);
  }
}

class Character {
  constructor(public name: string, public weapon: Weapon) {}
  changeWeapon(newWeapon: Weapon) {
    this.weapon = newWeapon;
  }

  attack() {
    this.weapon.attack();
  }
}

const sword = new Sword(12, 4);
const hero = new Character("Nigga", sword);
hero.attack();

const crossbow = new Crossbow(23, 55);
hero.changeWeapon(crossbow);
//the same console would be, if we don`t extend our weapon class
hero.attack();

// #2

class Person {
  constructor(public fullname: string) {}
}

class PersonList {
  constructor(public persons: Person[]) {}

  sort() {
    SortClient.sort(this.persons);
  }
}

class Sort {
  public static sort(array: any[]): any[] {
    return [];
  }
}
class BubbleSort extends Sort {
  public static sort(array: any[]) {
    return array;
  }
}

class QuickSort extends Sort {
  public static sort(array: any[]) {
    return array;
  }
}

class MergeSort extends Sort {
  public static sort(array: any[]) {
    return array;
  }
}

class SortClient extends Sort {
  public static sort(array: any[]) {
    if (array.length < 10) {
      return BubbleSort.sort(array);
    } else if (array.length < 1000) {
      return MergeSort.sort(array);
    } else {
      return QuickSort.sort(array);
    }
  }
}

class Music {}

class MusicList {
  constructor(public musics: Music[]) {}

  sort() {
    SortClient.sort(this.musics);
  }
}
