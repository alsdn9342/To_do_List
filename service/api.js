const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { response, request } = require('express');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


//use will execute before app begins to start.
router.use((request, response, next) => {
    console.log('middleware');
    next();
})

router.route('/tasks').get((request, response) => {
    dboperations.getTasks().then(result => {
        response.json(result[0]);
    })
})

router.route('/create').post((req, res) => {
        
    let task = {... req.body}
    dboperations.addTasks(task).then(result => {
        res.status(201).json(result);
    })
})

router.route('/update').put((req, res) => {
        
    let task = {... req.body}
    dboperations.updateTask(task).then(result => {
        res.status(201).json(result);
    })
})

router.route('/delete').delete((req, res) => {
        
    let task = {... req.body}
    dboperations.deleteTask(task).then(result => {
        res.status(201).json(result);
    })
})



var port = process.env.PORT || 8090;
app.listen(port);
console.log('Task API is running at ' + port);


