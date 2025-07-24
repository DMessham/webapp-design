//Inventory management webapp
//Main script
//Daniel Messham 2025

let tableBody = document.querySelector("tbody"); //fof filling in a table of matching items in a search

let newItem = {
    upc:0,
    name:"example item",
    tags:["test", "example", "demo"],
    isUnitBasedPrice:false,
    unitName:"each",
    unitAmount:1,
    location:{
        aisle:0,
        shelf:0,
        section:0,
        side:"n/a"
    },
    stock:{
        isAvailable:true,
        isSeasonal:false,
        isPromotion:false,
        availability:[
            availabilityTime:{
                start:0,
                end:9999999999999,
                recurrence:"once",
                recurrenceInfo:'',
                timeUnit:"unixEpoch"
            },
            availabilityTime:{
                start:1999999999999,
                end:999999999999999,
                recurrence:"once",
                recurrenceInfo:'',
                timeUnit:"unixEpoch"
            },
        ]
    },
    description:"an example item",
    restrictions:[]
}

