/*
Cory Witt
script.js
INFO 1579
Shaw
07/06/2025
*/
 
"use strict";
// This script handles form validation and submission for a contact form.
// It checks for required fields, validates input, and prevents submission if there are errors.
// It also handles resetting the form fields to their initial state.
// The script uses jQuery for DOM manipulation and event handling.


$(document).ready( () => {                                        // Document ready function to ensure the DOM is fully loaded before executing the script.
    $('#submitButton').click((e)=> {                             // Handle click on Submit button
        const firstName         = $('#firstName').val().trim();
        const age               = $('#age').val().trim();
        const mealName          = $('#mealName').val().trim();
        const mealHolder        = $('input[name="meal"]:checked').val().trim();
        const mealRating        = $('input[name="rating"]:checked').val().trim();
        
        let error = false;

        if(firstName == "") {                                 // Check if firstName is empty. If so, set error indicator and display error message.
            $("#firstName").next().text("This field is required.");
            error = true;
        } 

        if (age == "") {                                      // Check if age is empty. If so, set error indicator and display error message.
            $("#age").next().text("Age is a required field.");
            error = true;
        } else if (isNaN(age)) {                              // Check if age is not a number. If so, set error indicator and display error message.
            $("#age").next().text("Age must be numeric.");
            error = true;
        } else if (age < 0) {
           $("#age").next().text("Age must be a positive number.");  // Check if age is less than 0. If so, set error indicator and display error message.
            error = true;
        }

        if (mealName == "") {                                    // Check if mealName is empty. if so, set error indicator and display error message.
            $("#mealName").next().text("Meal Name is a required field.");
            error = true;
        }

        if (mealHolder == "" || mealHolder == undefined) {     // Check if mealHolder is empty or undefined. If so, set error indicator and display error message.
            $("#age").next().text("This field is requir.");
            error = true;
        } 
        if (mealRating == "" || mealRating == undefined) {     // Check if mealRating is empty or undefined. If so, set error indicator and display error message.
            $("#age").next().text("This field is required.");
            error = true;
        } 
        if (error) {                                          // If there are errors, display a general error message.
             e.preventDefault();   
        } else {
        
            $('#contactForm').submit();
        }
 
    })


    $("#reset").click( () => { // Handle click on Reset button. The input fields are cleared out and focus is set back to firstName

        $("#firstName").val("");
        $("#age").val("");
      
        $("#mealName").val("");
        $("input[name='meal']").prop("checked", false);
        $("input[name='rating']").prop("checked", false);

        $("#firstName").focus();  
    });
});