const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
ages.sort((a, b) => a - b)
console.log(ages[ages.length - 1])
console.log(ages[0])

// Find the median age(one middle item or two middle items divided by two)
let medianAge = ages.length % 2 === 0 ? (ages[ages.length / 2] + ages[(ages.length / 2) - 1]) / 2 : ages[ages.length / 2]
console.log(medianAge)

// Find the average age(all items divided by number of items)
const sum = ages.reduce((total, age) => total + age, 0);    
const averageAge = sum / ages.length
console.log(averageAge)

// Find the range of the ages(max minus min)
const range = ages[ages.length - 1] - ages[0]
console.log(range)

// Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(ages[0] - averageAge))
console.log(Math.abs(ages[ages.length - 1] - averageAge))