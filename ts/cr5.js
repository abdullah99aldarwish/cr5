var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = {
    city: "Vienna",
    ZIPcode: 1010,
    Address: "Herrngasse 1/10",
    Img: "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839__340.jpg",
    display: function () {
        return "<div class=\"card\" style=\"width: 18rem;\">\n      <img src=\"...\" class=\"card-img-top\" alt=\"...\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Card title</h5>\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n      </div>\n    </div>";
    }
};
var arr = [];
var locations = /** @class */ (function () {
    function locations(city, ZIPcode, Address, Img) {
        this.city = city;
        this.ZIPcode = ZIPcode;
        this.Address = Address;
        this.Img = Img;
        arr.push(this);
    }
    locations.prototype.display = function () {
        return "<div class=\"col-6\">\n        <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"".concat(this.Img, "\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(this.Address, "</h5>\n          <p class=\"card-text\">").concat(this.ZIPcode, "</p>\n          <a href=\"#\" class=\"btn btn-primary\">").concat(this.city, "</a>\n        </div>\n      </div>\n      </div>");
    };
    return locations;
}());
var locations1 = new locations("Vienna", 1010, "Herrngasse 1/10", "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839__340.jpg");
var locations2 = new locations("Vienna", 1020, "Praterstrasse 1/1", "https://cdn.pixabay.com/photo/2015/09/23/11/49/night-953541__340.jpg");
var Resturant = /** @class */ (function (_super) {
    __extends(Resturant, _super);
    function Resturant(city, ZIPcode, Address, Img, TelNumber, Cuisine, WebAddress) {
        var _this = _super.call(this, city, ZIPcode, Address, Img) || this;
        _this.TelNumber = TelNumber;
        _this.Cuisine = Cuisine;
        _this.WebAddress = WebAddress;
        return _this;
    }
    Resturant.prototype.display = function () {
        return "<div class=\"col-6\">\n        <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"".concat(this.Img, "\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(this.Cuisine, "</h5>\n          <p class=\"card-text\">").concat(this.city, " ").concat(this.ZIPcode, " , ").concat(this.Address, " Telnumber:").concat(this.TelNumber, "</p>\n          <a href=\"#\" class=\"btn btn-primary\">").concat(this.WebAddress, "</a>\n        </div>\n      </div>\n      </div>");
    };
    return Resturant;
}(locations));
var Resturant1 = new Resturant("Vienna", 1010, "Hernngasse 1/10", "https://cdn.pixabay.com/photo/2015/02/24/11/54/vienna-647328__340.jpg", 0600100, "italic food", "www.vienna.at");
var Resturant2 = new Resturant("Vienna", 1020, "praterstern 1/1", "https://cdn.pixabay.com/photo/2014/08/26/13/09/prater-427925__340.jpg", 0600100, "indian food", "www.vienna.at");
var Event0 = /** @class */ (function (_super) {
    __extends(Event0, _super);
    function Event0(city, ZIPcode, Address, Img, EventDate, EventTime, TicketPrice) {
        var _this = _super.call(this, city, ZIPcode, Address, Img) || this;
        _this.EventDate = EventDate;
        _this.EventTime = EventTime;
        _this.TicketPrice = TicketPrice;
        return _this;
    }
    Event0.prototype.display = function () {
        return "<div class=\"col-6\">\n        <div class=\"card\" style=\"width: 18rem;\">\n        <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"".concat(this.Img, "\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(this.EventDate, "</h5>\n          <p class=\"card-text\">").concat(this.city, " ").concat(this.ZIPcode, " , ").concat(this.Address, ", at").concat(this.EventTime, "</p>\n          <a href=\"#\" class=\"btn btn-primary\">").concat(this.TicketPrice, "</a>\n        </div>\n      </div>\n      </div>");
    };
    return Event0;
}(locations));
var event1 = new Event0("Vienna", 1010, "Hernngasse 1/10", "https://cdn.pixabay.com/photo/2015/09/09/21/33/vienna-933500__340.jpg", 08.08, .2022, 18, 00, 25);
var event2 = new Event0("Vienna", 1020, "praterstrasse 2/2", "https://cdn.pixabay.com/photo/2019/08/05/22/38/st-charless-church-4387053__340.jpg", 08.08, .2022, 18, 00, 25);
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    document.getElementById("result").innerHTML += val.display();
}
