
class Human {
    public name: string;
    public age: number;
    public profession: string;
    public money: number;
    public livingIn: Building;
}

abstract class Construction {
    public surface: {
        width: number,
        length: number
    };
}


abstract class Building extends Construction {
    public height: number;
    public capacity: number;
}

class House extends Building {
    public family: Human[] = [];
}
class CityHall extends Building {
    public mayor: Human;
}
class Factory extends Building {
    public owner: Human;
    public workers: Human[] = [];
}
class Hospital extends Building {
    public doctors: Human[] = [];
    public nurses: Human[] = [];
    public patients: Human[] = [];
}
class School extends Building {
    public teachers: Human[] = [];
    public students: Human[] = [];
}
abstract class Infrastructure extends Construction {
    public fees = 0;
}
class Road extends Infrastructure {
    public use() {
        // TODO : pay
    }
}
class Parking extends Infrastructure {
    public availablePlaces: number;
    constructor(public totalPlaces: number) {
        super();
        this.availablePlaces = totalPlaces;
    }
    public takePlace() {
        // TODO : pay
        this.availablePlaces--;
    }
    public leavePlace() {
        this.availablePlaces++;
    }
}


class City {
    public population: Human[] = [];
    public buildings: Building[] = [];
    public infrastructures: Infrastructure[] = [];
    public host(human: Human) {
        this.population.push(human);
    }
    public build(building: Building) {
        this.buildings.push(building);
    }
    public mount(infrastructure: Infrastructure) {
        this.infrastructures.push(infrastructure);
    }
}
const city = new City();
const house = new House();
city.build(house);
const worker = new Human();
worker.age = 32;
worker.profession = "worker";
city.host(worker);
const parking = new Parking(50);
city.mount(parking);

