/*
Cory Witt
script.js
INFO 1579
Shaw
07/08/2025
*/
 
"use strict";
// The Food Service Survey program allows the user to provide their first name, 
// age, meal name, selected meal, and meal rating. Input is then validated and if valid their 
// selections are printed.If input values are not valid, appropriate error messages are displayed. 


$(document).ready( () => {                                         // Document ready function to ensure the DOM is fully loaded.script.
    $('#submitButton').click((e)=> {                               // Handle Submit "click" event 
        const firstName         = $('#firstName').val().trim();
        const age               = $('#age').val().trim();
        const mealName          = $('#mealName').val().trim();
        const mealHolder        = $('input[name="meal"]:checked').val().trim();
        const mealRating        = $('input[name="rating"]:checked').val().trim();
        
        let error = false;

        if(firstName == "") {                                 // Check if firstName is empty. If so, set error indicator and display error message.
            $("#firstName").next().text("First Name is a required field.");
            error = true;
        } 

        if (age == "") {                                      // Check if age is empty. If so, set error indicator and display error message.
            $("#age").next().text("Age is a required field.");
            error = true;
        } else if (isNaN(age)) {                              // Check if age is not a number. If so, set error indicator and display error message.
            $("#age").next().text("Age must be numeric.");
            error = true;
        } else if (age < 0) {
           $("#age").next().text("Age must be a positive number.");  // Check if age is less than 0 (negative). If so, set error indicator and display error message.
            error = true;
        }

        if (mealName == "") {                                    // Check if meal name is empty. if so, set error indicator and display error message.
            $("#mealName").next().text("Meal Name is a required value");
            error = true;
        }

        if (mealHolder == "" || mealHolder == undefined) {     // Check if meal selection is empty or undefined. If so, set error indicator and display error message.
            $("#age").next().text("Meal Selection is a required value .");
            error = true;
        } 
        if (mealRating == "" || mealRating == undefined) {     // Check if meal ratingis empty or undefined. If so, set error indicator and display error message.
            $("#age").next().text("Meal Rating is a required value.");
            error = true;
        } 
        if (error) {                                          
             e.preventDefault();                             // If there are errors, prevent default action (form submission).
        } else {
        
            $('#contactForm').submit();                      // If no errors, submit the form.
        }
 
    })


    $("#reset").click( () => { // Reset button click. Reset input fields.
        $("#firstName").val("");
        $("#age").val("");
      
        $("#mealName").val("");
        $("input[name='meal']").prop("checked", false);
        $("input[name='rating']").prop("checked", false);

        $("#firstName").focus();  
    });
});