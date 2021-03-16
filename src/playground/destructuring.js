//Object destructuring

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

//Array desctructing.

const address = ['7 Ashdown Way','Shaw','Oldham','OL27LZ'];

const [street, city, state, zip] = address;

console.log('You are in:' +  city + ' ' + state);

console.log(`You are in ${city} ${state}` );

const item = ['Coffe (hot)', '£2.00', '£2.50', '£2.75'];

const [itemName, , mediumPrice, ] = item;
console.log(`A ${itemName} costs ${mediumPrice}`);