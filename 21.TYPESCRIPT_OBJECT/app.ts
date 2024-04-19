interface item {
    name:string
    price:number
}
// create two objecs
const book: item ={
    name: 'ESSENTIAL TYPESCRIPT',
    price:450
}
const apple: item = {
    name:'apple',
    price:200
}
console.log(`book name: ${book.name},\nprice: $${book.price}`)
console.log(`apple name: ${apple.name},\nprice: $${apple.price}`)