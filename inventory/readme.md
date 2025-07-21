
# Inventory management app
Daniel Messham
Started Mon july 21, 2025
Most of the features will be designed around my experience working in a grocery store
# features:

## search
- Search by upc scanned on phone camera
### tags
- each item has a set of tags to describe it (ex: cheese, pasta, macaroni, unrefrigerated, )

## item location
- aisle number (0 will mean not in a normal aisle)
- side 
- - (ex: east, west for normal, north & south for display ends)
- section/ ()
- - Where i work
- shelf 
- - 0 means not a normal shelf (ex: on hooks)
# implementation info
each item in the inventory will be an object in an array
## item values
- upc: int: the bar code
- short-name: string: a short name (like what is on price tags)
- tags: array: an array of all relevent tags
- isUnitBasedPrice: bool: true for items that are priced by weight, like beef, or anything that may have a price that will not be constant, if false the next 2 items will just be how much you get.
- - unitName: string: the name of the unit (kg, ea, ml)
- - unitAmount: float: the amount that the price unit applies to (ex: 100kg, 500ml)
- location: object
- - aisle:
- - shelf:
- - section:
