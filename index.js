

$(document).ready(function(){
  //submit1 button functionality
  $("#submit1").click(function() {
    var cityOne = $("#cityOne").val()
    $.getJSON(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?APPID=cd6b90ba80057d06e230432ecdf83865&units=imperial&q=${cityOne}`, (data) => {
      var temp = data.main.temp
      var weather = data.weather[0].description
      var city = data.name
      $(".location1").append(`<div class='row row-item city'>${city}</div>`)
      $(".location1").append(`<div class='row row-item weather'>${weather}</div>`)
      $(".location1").append(`<div class='row row-item temp'>${temp} &deg;
      F</div>`)
}).fail(function(){
      //error handling code
      alert("that's not a valid location")
    })
  })
//submit2 button functionality
$("#submit2").click(function() {
  var cityTwo = $("#cityTwo").val()
  $.getJSON(`http://api.openweathermap.org/data/2.5/weather?APPID=cd6b90ba80057d06e230432ecdf83865&units=imperial&q=${cityTwo}`, (data) => {
    var temp = data.main.temp
    var weather = data.weather[0].description
    var city = data.name
    $(".location2").append(`<div class='row city'>${city}</div>`)
    $(".location2").append(`<div class='row weather'>${weather}</div>`)
    $(".location2").append(`<div class='row temp'>${temp} &deg;
    F</div>`)
}).fail(function(){
    //error handling code
    alert("that's not a valid location")
  })
})
//submit3 button functionality
$("#submit3").click(function() {
  var cityThree = $("#cityThree").val()
  $.getJSON(`http://api.openweathermap.org/data/2.5/weather?APPID=cd6b90ba80057d06e230432ecdf83865&units=imperial&q=${cityThree}`, (data) => {
    var temp = data.main.temp
    var weather = data.weather[0].description
    var city = data.name
    $(".location3").append(`<div class='row city'>${city}</div>`)
    $(".location3").append(`<div class='row weather'>${weather}</div>`)
    $(".location3").append(`<div class='row temp'>${temp} &deg;
    F</div>`)
}).fail(function(){
    //error handling code
    alert("that's not a valid location")
  })
})



});
