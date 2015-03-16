$(document).ready(function ()
{
    'use strict';
    var mainContent = document.getElementById("main"),
            mainContentHeight = mainContent.offsetHeight,
            mainContentWidth = mainContent.offsetWidth,
            mainContentPosTop, mainContentPosLeft,
            screenHeight = window.innerHeight,
            screenWidth = window.innerWidth,
            counter = 0,
            error = false,
            inRedState = false,
            topLeftRes,
            topRightRes,
            bottomLeftRes,
            bottomRightRes,
    // generates numbers  between 0 - 5 
            topLeftRand = Math.random() * 5,
            topRightRand = Math.random() * 5,
            bottomLeftRand = Math.random() * 5,
            topLeft = $("#topLeft"),
            topRight = $("#topRight"),
            bottomLeft = $("#bottomLeft"),
            bottomRight = $("#bottomRight");
    topLeft.val(Math.floor(topLeftRand));
    topRight.val(Math.floor(topRightRand));
    bottomLeft.val(Math.floor(bottomLeftRand));

    // positioning  the main container
    // at the center of the screen
    mainContentPosLeft = (screenWidth - mainContentWidth) / 2;
    mainContentPosTop = (screenHeight - mainContentHeight) / 2;
    mainContent.style.position = "absolute";
    mainContent.style.top = mainContentPosTop + "px";
    mainContent.style.left = mainContentPosLeft + "px";

    // generates numbers  between 1 - 5   
    //  var randFirst = Math.random() * (5 - 1 + 1) + 1     

    // clears input fields
    // when they get focused
    $(".main input[type='text']").focus(function ()
    {
        $(this).each(function ()
        {
            $(this).val(null);
        });
    });

    //    checks result
    $(".btn").click(function ()
    {
        topLeftRes = parseInt(topLeft.val()) + 2;
        topRightRes = parseInt(topRight.val()) + 1;
        bottomLeftRes = parseInt(bottomLeft.val()) + 4;
        bottomRightRes = parseInt(bottomRight.val()) + 3;
        // top left box
        if (topLeftRes !== 4)
        {
            topLeft.css({
                'color': 'red'
            });
            error = true;
            inRedState = true;
        } else
        {
            error = false;
            inRedState = false;
        }
        // top right box
        if (topRightRes !== 4)
        {
            topRight.css({
                'color': 'red'
            });
            error = true;
            inRedState = true;
        } else
        {
            error = false;
            inRedState = false;
        }
        // bottom left box
        if (bottomLeftRes !== 4)
        {
            bottomLeft.css({
                'color': 'red'
            });
            error = true;
            inRedState = true;
        } else
        {
            error = false;
            inRedState = false;
        }
        // bottom right box
        if (bottomRightRes !== 4)
        {
            bottomRight.css({
                'color': 'red'
            });
            error = true;
            inRedState = true;
        } else
        {
            error = false;
            inRedState = false;
        }

        // checks number of wrong answers
        if (true === error)
        {
            counter++;
            $("#err").text(counter);
        }

        if (true === inRedState)
        {
            backToGrey();
        }

        // sets right answers 
        // and after 2 sec delay reloads page
        if (counter === 3)
        {
            setTimeout(function ()
            {
                setAnswers();
                reloadExercise();
            }, 2000);
            $(".btn").off('click');
        }

        // if answers are
        // correct refresh page
        if (false === error)
        {
            reloadExercise();
        }
    });

    // sets right answers
    // if number of wrong guesses
    // equals to 3
    function setAnswers()
    {
        topLeft.val(2);
        topRight.val(3);
        bottomLeft.val(0);
        bottomRight.val(1);
        $("#answers").text("The correct answers were set for you!");
    }

    // reloads window after 
    //  two seconds of delay
    function reloadExercise()
    {
        setTimeout(function ()
        {
            window.location = 'index.html';
        }, 2000);
    }

    // sets color of the inputs back to grey 
    function backToGrey()
    {
        setTimeout(function ()
        {
            $(".main input[type='text']").each(function ()
            {
                $(this).css({
                    "color": "silver"
                });
            });
        }, 2000);
    }
});