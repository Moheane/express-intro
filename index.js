let express = require('express');
const exphbs = require('express-handlebars');

//create instance of an App
let app = express();

//configure express-handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

//routing
app.get('/', function (req, res) {
    res.render('home');
});

//setting port
let PORT = process.env.PORT || 3007;


//listening to the server
app.listen(PORT, function () {
    console.log('App starting on port', PORT);
    
});