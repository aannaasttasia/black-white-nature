var moment = reqiure('moment');
var myDate = new Date();

var CoolDate = moment(myDate).format('LL');

console.log(CoolDate);