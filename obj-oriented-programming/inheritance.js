// book Constructor
function book(title, author, year) {
    this.title = title,
    this.author = author,
    this.year = year
}

// Creating the getSumary function using prototype method

book.prototype.getSumary = function(){
    console.log(`${this.title}, ${this.author}, ${this.year}`)
}


//magazine
 function Magazine(title, author, year, month){
     book.call(this, title, author, year);
     this.month = month;
 };


magazine.prototype = Object.create(book.prototype);


const book1 = new Magazine('book one', 'john Doe', '2013',{})

magazine.prototype.constructor = magazine;

//console.log(Magazine);
console.log(book1.getSumary())