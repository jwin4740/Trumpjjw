// var Sequelize = require('sequelize');


// // var sequelize = new Sequelize('trump_archived', 'root', 'platinum', {
// //   host: 'localhost',
// //   dialect: 'mysql',

// //   pool: {
// //     max: 5,
// //     min: 0,
// //     idle: 10000
// //   },

// // });


// var sequelize = new Sequelize('trump_archived', 'root', 'platinum', {
//     host: 'localhost',
//     dialect: 'mysql',

//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     },

// });

// function startup() {

//     var Tweet = sequelize.define('trump_tweets', {
//         tweet_number: Sequelize.INTEGER,
//         tweet_timestamp: Sequelize.STRING,
//         tweet: Sequelize.STRING
//     });


//     console.log(Tweet);
//     Tweet.findOne({
//         attributes: ['tweet'],
//         where: ["tweet LIKE ?", "%hillary%"],
//         limit: 10
//     }).then(function(dbUser) {
//         var n = dbUser.length;
//         console.log(n);
//         // for (var i = 0; i <= n; i++) {
//         //     console.log(dbUser);
//         // }
//            console.log(dbUser);
//     });
// }

// startup();




// // Tweet.findAll({
// //     attributes: ['tweet_number', 'tweet_timestamp', 'tweet'],
// //     where: {
// //         tweet_number: 2
// //     }
// // });

var mysql = require("mysql");
var connection = mysql.createConnection({
    port: 3306,
    user: "jjwguest",
    password: "platinum",
    database: "trump_real"
});

var query = process.argv[2];
console.log(query + "\n");
getAllRes();

function getAllRes() {
    connection.query("SELECT tweet, tweet_date, COUNT(*) FROM `trump_tweets` WHERE tweet LIKE '%" + query + "%' GROUP BY tweet_number;",
        function(err, res) {
            if (err) throw err;

            var n = res.length;
            for (var i = 0; i < n; i++) {
                console.log("\n\n-----------------------------------------\n\n");
                console.log(res[i].tweet_date)
                console.log(i + ') ' + res[i].tweet);

            }
           
        });
}


// var myFlower = new CodeFlower("#visualization", 300, 200);
// myflower.update(jsonData);

// var dataObj = [{
//     "name": "root",
//     "children": [{
//         "name": "app",
//         "children": [{
//             "name": "dashboard",
//             "children": [{
//                 "name": "public",
//                 "children": [{
//                     "name": "stylesheets",
//                     "children": [{
//                         "name": "bootstrap.css",
//                         "size": 4945,
//                         "language": "CSS"
//                     }, {
//                         "name": "style.css",
//                         "size": 254,
//                         "language": "CSS"
//                     }, {
//                         "name": "jquery.tagsinput.css",
//                         "size": 7,
//                         "language": "CSS"
//                     }],
//                     "size": 5206
//                 }, {
//                     "name": "javascripts",
//                     "children": [{
//                         "name": "dateNavigation.js",
//                         "size": 155,
//                         "language": "Javascript"
//                     }, {
//                         "name": "dateInterval.js",
//                         "size": 83,
//                         "language": "Javascript"
//                     }, {
//                         "name": "bootstrap-affix.js",
//                         "size": 56,
//                         "language": "Javascript"
//                     }, {
//                         "name": "bootstrap-button.js",
//                         "size": 52,
//                         "language": "Javascript"
//                     }, {
//                         "name": "uptimeBar.js",
//                         "size": 47,
//                         "language": "Javascript"
//                     }, {
//                         "name": "checkState.js",
//                         "size": 31,
//                         "language": "Javascript"
//                     }, {
//                         "name": "flashcanvas",
//                         "children": [{
//                             "name": "canvas2png.js",
//                             "size": 27,
//                             "language": "Javascript"
//                         }, {
//                             "name": "flashcanvas.js",
//                             "size": 21,
//                             "language": "Javascript"
//                         }],
//                         "size": 48
//                     }, {
//                         "name": "statNavigation.js",
//                         "size": 26,
//                         "language": "Javascript"
//                     }, {
//                         "name": "flotr2.min.js",
//                         "size": 3,
//                         "language": "Javascript"
//                     }, {
//                         "name": "jquery.min.js",
//                         "size": 3,
//                         "language": "Javascript"
//                     }, {
//                         "name": "jquery.tablesorter.min.js",
//                         "size": 1,
//                         "language": "Javascript"
//                     }, {
//                         "name": "moment.min.js",
//                         "size": 1,
//                         "language": "Javascript"
//                     }, {
//                         "name": "ejs.min.js",
//                         "size": 1,
//                         "language": "Javascript"
//                     }, {
//                         "name": "jquery.tagsinput.min.js",
//                         "size": 1,
//                         "language": "Javascript"
//                     }],
//                     "size": 508
//                 }],
//                 "size": 5714
//             }, {
//                 "name": "app.js",
//                 "size": 126,
//                 "language": "Javascript"
//             }],
//             "size": 5840
//         }, {
//             "name": "api",
//             "children": [{
//                 "name": "routes",
//                 "children": [{
//                     "name": "check.js",
//                     "size": 95,
//                     "language": "Javascript"
//                 }, {
//                     "name": "ping.js",
//                     "size": 68,
//                     "language": "Javascript"
//                 }, {
//                     "name": "tag.js",
//                     "size": 64,
//                     "language": "Javascript"
//                 }],
//                 "size": 227
//             }, {
//                 "name": "app.js",
//                 "size": 59,
//                 "language": "Javascript"
//             }],
//             "size": 286
//         }],
//         "size": 6126
//     }, {
//         "name": "lib",
//         "children": [{
//             "name": "qosAggregator.js",
//             "size": 476,
//             "language": "Javascript"
//         }, {
//             "name": "intervalBuilder.js",
//             "size": 144,
//             "language": "Javascript"
//         }, {
//             "name": "monitor.js",
//             "size": 109,
//             "language": "Javascript"
//         }, {
//             "name": "pollers",
//             "children": [{
//                 "name": "https.js",
//                 "size": 81,
//                 "language": "Javascript"
//             }, {
//                 "name": "http.js",
//                 "size": 80,
//                 "language": "Javascript"
//             }, {
//                 "name": "icmp.js",
//                 "size": 53,
//                 "language": "Javascript"
//             }, {
//                 "name": "udp.js",
//                 "size": 47,
//                 "language": "Javascript"
//             }, {
//                 "name": "base.js",
//                 "size": 33,
//                 "language": "Javascript"
//             }],
//             "size": 294
//         }, {
//             "name": "proxy.js",
//             "size": 61,
//             "language": "Javascript"
//         }, {
//             "name": "analyzer.js",
//             "size": 40,
//             "language": "Javascript"
//         }, {
//             "name": "timer.js",
//             "size": 15,
//             "language": "Javascript"
//         }],
//         "size": 1139
//     }, {
//         "name": "models",
//         "children": [{
//             "name": "check.js",
//             "size": 313,
//             "language": "Javascript"
//         }, {
//             "name": "tag.js",
//             "size": 176,
//             "language": "Javascript"
//         }, {
//             "name": "migrations",
//             "children": [{
//                 "name": "upgrade2to3.js",
//                 "size": 137,
//                 "language": "Javascript"
//             }],
//             "size": 137
//         }, {
//             "name": "checkEvent.js",
//             "size": 56,
//             "language": "Javascript"
//         }, {
//             "name": "ping.js",
//             "size": 51,
//             "language": "Javascript"
//         }, {
//             "name": "checkYearlyStat.js",
//             "size": 16,
//             "language": "Javascript"
//         }, {
//             "name": "tagYearlyStat.js",
//             "size": 16,
//             "language": "Javascript"
//         }, {
//             "name": "checkMonthlyStat.js",
//             "size": 16,
//             "language": "Javascript"
//         }, {
//             "name": "tagMonthlyStat.js",
//             "size": 16,
//             "language": "Javascript"
//         }, {
//             "name": "tagDailyStat.js",
//             "size": 15,
//             "language": "Javascript"
//         }, {
//             "name": "checkHourlyStat.js",
//             "size": 15,
//             "language": "Javascript"
//         }, {
//             "name": "tagHourlyStat.js",
//             "size": 15,
//             "language": "Javascript"
//         }, {
//             "name": "checkDailyStat.js",
//             "size": 15,
//             "language": "Javascript"
//         }],
//         "size": 857
//     }, {
//         "name": "test",
//         "children": [{
//             "name": "lib",
//             "children": [{
//                 "name": "test_intervalBuilder.js",
//                 "size": 133,
//                 "language": "Javascript"
//             }],
//             "size": 133
//         }],
//         "size": 133
//     }, {
//         "name": "fixtures",
//         "children": [{
//             "name": "computeStats.js",
//             "size": 117,
//             "language": "Javascript"
//         }, {
//             "name": "populate.js",
//             "size": 70,
//             "language": "Javascript"
//         }, {
//             "name": "fixEvents.js",
//             "size": 28,
//             "language": "Javascript"
//         }, {
//             "name": "dummyTargetUdp.js",
//             "size": 19,
//             "language": "Javascript"
//         }, {
//             "name": "dummyTarget.js",
//             "size": 13,
//             "language": "Javascript"
//         }],
//         "size": 247
//     }, {
//         "name": "plugins",
//         "children": [{
//             "name": "console",
//             "children": [{
//                 "name": "index.js",
//                 "size": 86,
//                 "language": "Javascript"
//             }],
//             "size": 86
//         }, {
//             "name": "email",
//             "children": [{
//                 "name": "index.js",
//                 "size": 36,
//                 "language": "Javascript"
//             }],
//             "size": 36
//         }],
//         "size": 122
//     }, {
//         "name": "app.js",
//         "size": 75,
//         "language": "Javascript"
//     }, {
//         "name": "config",
//         "children": [{
//             "name": "default.yaml",
//             "size": 36,
//             "language": "YAML"
//         }, {
//             "name": "test.yaml",
//             "size": 4,
//             "language": "YAML"
//         }],
//         "size": 40
//     }, {
//         "name": "bootstrap.js",
//         "size": 32,
//         "language": "Javascript"
//     }, {
//         "name": "monitor.js",
//         "size": 4,
//         "language": "Javascript"
//     }, {
//         "name": "makefile",
//         "size": 3,
//         "language": "make"
//     }],
//     "nbFiles": 81,
//     "size": 8778
// }];