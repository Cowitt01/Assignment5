/*
Cory Witt
script.js
INFO 1579
Shaw
07/06/2025
*/
 
"use strict";

$(document).ready( () => {
    $('#submitButton').click((e)=> {
        const firstName         = $('#firstName').val().trim();
        const age               = $('#age').val().trim();
        const mealName          = $('#mealName').val().trim();
        const mealHolder        = $('input[name="meal"]:checked').val().trim();
        const mealRating        = $('input[name="rating"]:checked').val().trim();
        
        let error = false;

        if(firstName == "") {
            $("#firstName").next().text("This field is required.");
            error = true;
        } 

        if (age == "") {
            $("#age").next().text("This field is required.");
            error = true;
        } else if (isNaN(age)) {
            $("#age").next().text("This field is required.");
            error = true;
        } else if (age < 0) {
           $("#age").next().text("This field is required.");
            error = true;
        }

        if (mealName == "") {
            $("#age").next().text("This field is required.");
            error = true;
        }

        if (mealHolder == "" || mealHolder == undefined) {
            $("#age").next().text("This field is required.");
            error = true;
        } 
        if (mealRating == "" || mealRating == undefined) {
            $("#age").next().text("This field is required.");
            error = true;
        }
        if(!error) {
            $('#contactForm').submit();
        } else {
            e.preventDefault();
        }
    })

    //handle click on Reset form  button
    //move focus to first text box
    $("#reset").click( () => {
        // reset span elements
        $("#firstName").val("");
        $("#age").val("");
      
        //MealHolder and meal rating holder?
 
        $("firstName").focus();
    });
});