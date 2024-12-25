const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat')
console.log(shoppingCart)

shoppingCart.push('Sugar')
console.log(shoppingCart)

shoppingCart.splice(shoppingCart.length -2, 1)
console.log(shoppingCart)

shoppingCart[3] = 'Green Tea';
console.log(shoppingCart)