// get the DOM elements
require(['jquery', 'rivets', 'text!app/template/players.html'], function ($, rivets, template) {
    /* Italian soccer team - Fifa World Cup 2006 */
    var soccerTeam = [{"number":1,"name":"Gianluigi","surname":"Buffon"},
                        {"number":19,"name":"Gianluca","surname":"Zambrotta"},
                        {"number":5,"name":"Fabio","surname":"Cannavaro","captain":true},
                        {"number":22,"name":"Marco","surname":"Materazzi"},
                        {"number":3,"name":"Fabio","surname":"Grosso"},
                        {"number":8,"name":"Gennaro","surname":"Gattuso"},
                        {"number":21,"name":"Andrea","surname":"Pirlo"},
                        {"number":16,"name":"Mauro","surname":"Camoranesi"},
                        {"number":20,"name":"Simone","surname":"Perrotta"},
                        {"number":10,"name":"Francesco","surname":"Totti"},
                        {"number":9,"name":"Luca","surname":"Toni"}];

    var playersList = $('#app');
    playersList.html(template);

    rivets.bind(playersList,{players:soccerTeam});
});