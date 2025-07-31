//Inventory management webapp
//Main script
//Daniel Messham 2025

let tableBody = document.querySelector("tbody"); //fof filling in a table of matching items in a search

function showErrorMessage(message){
    //will eventually make this use dom editing instead of alerts
    alert(message);
}

function showNYI(details){
    let message= "Error: Not Yet Implemented!\n" + details +"\nSorry about that.";
    showErrorMessage(message);
}

function searchByTag(tags, array){

    for(let i = 0; i< array.length; i++){
        for(let b = 0; b< tags.length; b++){
        
        }
    }
}


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

// copied from my work for assignment 6 in mult114, will edit later

function displayItemsList(array){
    // itemsList.push(newitem);
    tableBody.innerHTML="";
    itemsList.sort(itemsListSortComparator);

    // Iterate over the itemsList array to populate the table rows
    for (let i = 0; i < array.length; ++i) {
        // Get a reference to the current item
        let item = array[i];

        //fancy text for the type
        let typeText = "⯑ " + item.type; //this shoudnt be possible, but its nice to have a failsafe
        if(item.type=="Air"){
            typeText = "☁ Air";
        }if(item.type=="Fire"){
            typeText = "🔥 Fire";
            // typeText = "♨ Fire";
        }if(item.type=="Water"){
            typeText = "⛴ Water";
            // typeText = "⛆ Water";
        }if(item.type=="Earth"){
            typeText = "⛏ Earth";
            // typeText = "⛰ Earth";
        }

        

        // Create a new HTML element to edit, then insert onto the page
        const newRow = document.createElement("tr");


        // Same kind of logic for favoriteText, but using a "ternary"
        // let favoriteText = item.isFavorite ? "✔" : "✘"
        let favoriteText = item.isFavorite ? "❤" : " "
        let favoriteToggleText = item.isFavorite ? "💔" : "❤"

        // Use a string template to populate the HTML of our new row
        newRow.innerHTML = `
            <td style="text-align:center">${favoriteText}</td>
            <td style="text-align:left">${item.name}</td>
            <td style="text-align:left">${typeText}</td>
            <td style="text-align:right">${item.rarity}</td>
            <td style="text-align:center;height:100%;"><button onclick="destroyMonster(${i})" style=";width:40%;">☠</button><button onclick="favoriteMonster(${i})" style="width:60%;">${favoriteToggleText}</button></td>
        `;

        // Finally, add the new row to our table body
        tableBody.appendChild(newRow);
    }
}

function itemsListSortComparator(itemA, itemB) {
    // If itemA is favorite, but itemB is not
    if (itemA.isFavorite && !itemB.isFavorite) {
        return -1; // itemA comes first
    }
    // If itemB is favorite, but itemA is not
    if (!itemA.isFavorite && itemB.isFavorite) {
        return 1; // itemB comes first
    }

    // Otherwise, sort by averageGrade: ("A - B" for ascending order, "B - A" for descending order)
    return itemB.name - itemA.name;
}

document.addEventListener("DOMContentLoaded", function () {
    displayItemsList(itemsList);
});