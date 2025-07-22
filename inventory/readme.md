
# Inventory management app
Daniel Messham
Started Mon july 21, 2025
Most of the features will be designed around my experience working in a grocery store

# features:
## search
- Search by upc scanned on phone camera
### tags
- each item has a set of tags to describe it (ex: cheese, pasta, macaroni, unrefrigerated, )
## stock info (maybe)
TBD
## item location info
- aisle 
- - 0 (or any number < 1) will mean not in a normal aisle
- - negative numbers can be used to seperate sets of shelves that are distinct, they wont be displayed as aisles, this is just to make backend stuff possibly easier
- - fractions can mean areas that are physically located between the aisles
- - both of these should be displayed as a name instead of just displaying the number, 
- - - OR this should never be directly displayed to the user and each number has a name that is looked up in a seperate table
- - - actualy this could just be a string, but that would make the name "aisle" a little confusing
- shelf: starts at 1 for the bottom shelf
- - 0 means not a normal shelf (ex: on hooks)
- section: how far down the aisle it is
- - Where i work, each aisle section represents a physical shelf piece that slots into the wall/ aisle seperator
- - fractions can be for display hooks that hang off the shelves
- - 0 means a display end (display ends )
- side: what side of the aisle it is on
- - (ex: east, west for normal, north & south for display ends)
- - If the aisle is <1 this could be reused as a description of where te shelving is (ex: north wall, deli, east side of self checkout)

This could also be thought of as set of 3d coordinates:
- x value: aisle (and side)
- y value: shelf
- z value: section
specifying the department or section of the store may be useful when there are multiple sets of numbered aisles, or sets of aisles that arent given specific numbers (ex: pharmacy and clothing have their own sets of aisles)
## store map
TBD
# implementation info
each item in the inventory will be an object in an array, using a 2d array for this would be really stupid
## item key/values pairs OR object attibutes
- upc: number: the bar code
- short-name: string: a short name (like what is on price tags)
- tags: array: an array of all tags used for searching or finding substitutes
- isUnitBasedPrice: bool: true for items that are priced by weight, like beef, or anything that may have a price that will not be constant, if false the next 2 items will just be how much you get.
- - unitName: string: the name of the unit (ex: kg, ml, qty)
- - unitAmount: number: the amount that the price unit applies to (ex: 100kg, 500ml)
- department: string: (ex: grocery, deli, produce, pharmacy, butcher)
- location: object; see item location above
- stock: object: used for info about when and/or if it is currently available
- -  IsAvailable bool: indicates if the item is sold at the store, meant for items that are not currently being sold, or are sold at another location
- - inStock: bool or number: optional
- - isSeasonal: bool: true if the item is only on shelves during certain times of year
- - isPromotion: bool: effectively the same as above, but is for more specific events that may not repeat.
- - availabilityTimes: array or object: TBD - need to figure out how i will store the time (unix-epoch based is a little overkill, and string based is harder to do comparisons) and handle recurring events.
- description: string: 
- restrictions: array or object: used for info about dietary, safety, religous, or any other restictions

