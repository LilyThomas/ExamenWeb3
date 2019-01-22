"use strict";
var Recept = (function () {
    function Recept(naam, kcal, ingredienten, bereidingstijd) {
        this.naam = naam;
        this.kcal = kcal;
        this.ingredienten = ingredienten;
        this.bereidingstijd = bereidingstijd;
    }
    Recept.prototype.toForm = function () {
        return "naam=" + this.naam + "&kcal=" + this.kcal + "&ingredienten=" + this.ingredienten + "&bereidingstijd=" + this.bereidingstijd;
    };
    return Recept;
}());
exports.Recept = Recept;
//# sourceMappingURL=recept.js.map