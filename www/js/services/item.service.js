"use strict";

AppControllers.service('ItemService', function ($http) {
    var ItemService = {
        get: function ({ limit = 20, offset = 0, sorting = "default", q = "milk" }) {
            return $http.get(
                "https://www.bringmeister.de/api/products?" +
                "limit=" + limit +
                "&offset=" + offset +
                "&sorting=" + sorting +
                "&q=" + q
            );
        }
    }
    return ItemService;
});