

$(document).ready( () => {
    $('#submitButton').click((e)=> {
        const firstName         = $('#firstName').val();
        const age               = $('#age').val();
        const mealName          = $('#mealName').val();
        const mealHolder        = $('input[name="meal"]:checked').val();
        const mealRating        = $('input[name="rating"]:checked').val();
        
        let error = false;

        if(firstName == "") {

        } 


        if (age == "") {

        } else if (isNaN(age)) {

        } else if (age < 0) {

        }

        if (mealName == "") {
        
        }

        if (mealHolder == "" || mealHolder == undefined) {

        } 
        if (mealRating == "" || mealRating == undefined) {

        }
        if(!error) {
            $('#contactForm').submit();
        } else {

        }
    })

    //handle click on Reset form  button
    //move focus to first text box

});