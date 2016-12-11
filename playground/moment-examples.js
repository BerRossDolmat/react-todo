var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestap ', now.unix());

var timestamp = 1480621398;
var currentMoment = moment.unix(timestamp);
console.log('Current moment', currentMoment.format('MMM D, YY @ h:mm a'));



