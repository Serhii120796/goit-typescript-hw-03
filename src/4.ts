class Key {
    signature: Math.random();
    getSignature(): void{
        return Math.random;
    };
}

class Person {
    constructor(private key: Key) {
    }
    getKey(): void{
        return key;
    };
}

abstract class House {
    door: boolean;
    key: Key;
    comeIn() { 
        // додає об'єкт класу Person у масив tenants, якщо door відкрита.
    };
    
    abstract OpenDoor() {
        // який приймає об'єкт класу Key
     };

}

class MyHouse extends House {
    OpenDoor() {
        // який приймає об'єкт класу Key
        // Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.
     };
}

// Cпробуйте відтворити сценарій, в якому людина приходить додому.
// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);


export { };