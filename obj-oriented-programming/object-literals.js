//Object Literal

const book1 = {
    title: 'book one',
    author: 'john Doe',
    year: '2013',
    getSumary: function(){
        return`${this.title} was written by ${this.author} in the year ${this.year}`
    }
};

const book2 = {
    title: 'book two',
    author: 'jane Doe',
    year: '2016',
    getSumary: function(){
        return`${this.title} was written by ${this.author} in the year ${this.year}`
    }
};

console.log(book1.getSumary());
