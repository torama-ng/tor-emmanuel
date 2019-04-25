
function book(title, author, year) {
    this.title = title,
    this.author = author,
    this.year = year
}
//getAge(how old the book has been)
book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

//get sumary
book.prototype.getsumary = function(){
    return`${this.title} was written by 
    ${this.author} in ${this.year}`;
}
//instantiate an object
const book1 = new book('book one', 'john Doe', '2013');
const book2 = new book('book two', 'jane Doe', '2016')

//console.log(book1.title);
console.log(book2.getAge());