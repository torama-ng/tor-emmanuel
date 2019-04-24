//Constructor

function book(title, author, year) {
    this.title = title,
    this.author = author,
    this.year = year

    this.getsumary = function(){
        return`${this.title} was written by ${this.author} in the year ${this.year}`
    }
}


const book1 = new book('book one', 'john Doe', '2013');
const book2 = new book('book two', 'jane Doe', '2016')

//console.log(book1.title);
console.log(book1.getsumary());