// const request = require('request');
//
// request({
//   url: 'https://maps.googleapis.com/maps/api/geocode/json?address=19377%20E%20Legacy%20Place',
//   json: true
// }, (error, response, body) => {
//   console.log(JSON.stringify(response, undefined, 2));
// });

$(document).ready(function(){
  //submit1 button functionality
  $("#submit1").click(function() {
    var cityOne = $("#cityOne").val()
    $.getJSON(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityOne}`, (data) => {
      var lat = data.results[0].geometry.location.lat;

      console.log(lat);
}).fail(function(){
      //error handling code
      console.log("that's not a valid location")
    })
  })
//submit2 button functionality
$("#submit2").click(function() {
  var cityTwo = $("#cityTwo").val()
  $.getJSON(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityTwo}`, (data) => {
    var lat = data.results[0].geometry.location.lat;

    console.log(lat);
}).fail(function(){
    //error handling code
    console.log("that's not a valid location")
  })
})
//submit3 button functionality
$("#submit3").click(function() {
  var cityThree = $("#cityThree").val()
  $.getJSON(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityThree}`, (data) => {
    var lat = data.results[0].geometry.location.lat;

    console.log(lat);
}).fail(function(){
    //error handling code
    console.log("that's not a valid location")
  })
})

















});
