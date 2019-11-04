var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human() {
    }
    return Human;
}());
var Construction = /** @class */ (function () {
    function Construction() {
    }
    return Construction;
}());
var Building = /** @class */ (function (_super) {
    __extends(Building, _super);
    function Building() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Building;
}(Construction));
var House = /** @class */ (function (_super) {
    __extends(House, _super);
    function House() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.family = [];
        return _this;
    }
    return House;
}(Building));
var CityHall = /** @class */ (function (_super) {
    __extends(CityHall, _super);
    function CityHall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CityHall;
}(Building));
var Factory = /** @class */ (function (_super) {
    __extends(Factory, _super);
    function Factory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.workers = [];
        return _this;
    }
    return Factory;
}(Building));
var Hospital = /** @class */ (function (_super) {
    __extends(Hospital, _super);
    function Hospital() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.doctors = [];
        _this.nurses = [];
        _this.patients = [];
        return _this;
    }
    return Hospital;
}(Building));
var School = /** @class */ (function (_super) {
    __extends(School, _super);
    function School() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.teachers = [];
        _this.students = [];
        return _this;
    }
    return School;
}(Building));
var Infrastructure = /** @class */ (function (_super) {
    __extends(Infrastructure, _super);
    function Infrastructure() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fees = 0;
        return _this;
    }
    return Infrastructure;
}(Construction));
var Road = /** @class */ (function (_super) {
    __extends(Road, _super);
    function Road() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Road.prototype.use = function () {
        // TODO : pay
    };
    return Road;
}(Infrastructure));
var Parking = /** @class */ (function (_super) {
    __extends(Parking, _super);
    function Parking(totalPlaces) {
        var _this = _super.call(this) || this;
        _this.totalPlaces = totalPlaces;
        _this.availablePlaces = totalPlaces;
        return _this;
    }
    Parking.prototype.takePlace = function () {
        // TODO : pay
        this.availablePlaces--;
    };
    Parking.prototype.leavePlace = function () {
        this.availablePlaces++;
    };
    return Parking;
}(Infrastructure));
var City = /** @class */ (function () {
    function City() {
        this.population = [];
        this.buildings = [];
        this.infrastructures = [];
    }
    City.prototype.host = function (human) {
        this.population.push(human);
    };
    City.prototype.build = function (building) {
        this.buildings.push(building);
    };
    City.prototype.mount = function (infrastructure) {
        this.infrastructures.push(infrastructure);
    };
    return City;
}());
var city = new City();
var house = new House();
city.build(house);
var worker = new Human();
worker.age = 32;
worker.profession = "worker";
city.host(worker);
var parking = new Parking(50);
city.mount(parking);
