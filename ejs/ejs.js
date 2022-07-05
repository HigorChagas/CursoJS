let ejs = require('ejs');
let people = ['Geddy', 'Higor', 'Neil'];
let html = ejs.render('<%= people.join(', '); %>', { people: people });

