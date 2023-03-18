// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.

//html elements -- divs
var hourNineDiv = $('#hour-9');
var hourTenDiv = $('#hour-10');
var hourElevenDiv = $('#hour-11');
var hourTwelveDiv = $('#hour-12');
var hourThirteenDiv = $('#hour-13');
var hourFourteenDiv = $('#hour-14');
var hourFifteenDiv = $('#hour-15');
var hourSixteenDiv = $('#hour-16');
var hourSeventeenDiv = $('#hour-17');

// input elements in an array to loop through
var divElements = [
  {htmlEl: hourNineDiv, hour: 9},
  {htmlEl: hourTenDiv, hour: 10},
  {htmlEl: hourElevenDiv, hour: 11},
  {htmlEl: hourTwelveDiv, hour: 12},
  {htmlEl: hourThirteenDiv, hour: 13},
  {htmlEl: hourFourteenDiv, hour: 14},
  {htmlEl: hourFifteenDiv, hour: 15},
  {htmlEl: hourSixteenDiv, hour: 16},
  {htmlEl: hourSeventeenDiv, hour: 17} //hour property returns a number***
]

//variables
var timeNow = dayjs();
var currentHour = timeNow.format('H'); //this returns a string***

console.log(currentHour)

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
      // make an array of element and hours {div element, hour} --> set value of each element of to the hour
      // use setInterval() --> declare new variable currentHour and check if currentHour is equal to/greater than/less than the value of each element;
      // use if else to change classes of elements
  setInterval(function() {
    for (i = 0; i < divElements.length; i++) {
      if (divElements[i].hour == currentHour) { //present
        divElements[i].htmlEl.removeClass('future');
        divElements[i].htmlEl.addClass('present');
        console.log('WE ARE IN THE NOW')
      };

      if (divElements[i].hour < currentHour) { //past
        divElements[i].htmlEl.removeClass('present');
        divElements[i].htmlEl.addClass('past');

        console.log('the time has passed')
      };

      if (divElements[i].hour > currentHour) { //future
        divElements[i].htmlEl.removeClass('past');
        divElements[i].htmlEl.addClass('future');

        console.log ('FUTURE')
      }
    }
  }, 1000)

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(timeNow.format('dddd, MMMM D, YYYY'));
});
