"use strict";

AppControllers.service('BasketService', function ($http) {
    var BasketService = {

        items: [],

        get: function () {
            return this.items;
        },

        add: function (item, quantity = '1') {
            this.items.push({ item: item, quantity: quantity });
        },

        getTotal: function () {
            var price = 0;
            this.items.forEach(element => price += element.item.prices.price * element.quantity);
            return price;
        }

    }
    return BasketService;
});