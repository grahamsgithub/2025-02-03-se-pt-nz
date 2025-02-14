// <!-- The script section below contains JavaScript code that changes the background color 
// of the columns and the heading text when the buttons are clicked. T
// he functions changecolor1, changecolor2, usename1, and usename2 are called 
// when the buttons are clicked. The functions use the document.getElementById method to
// access the elements by their IDs and change their properties.
// They do this by setting the style.backgroundColor property of the columns and
// the innerText property of the headings to the desired values. The values are taken from 
// the text areas by using the value property of the text areas and concatenating them with the
// "Hi" string. -->

    function changecolor1() {
        document.getElementById("column1").style.backgroundColor = "blue";
    }
    function changecolor2() {
        document.getElementById("column2").style.backgroundColor = "Green";

    }
    function usename1() {
        var text1Value = document.getElementById("text1").value;
        document.getElementById("heading1").innerText = "Hi " + text1Value;
    }
    function usename2() {
        var text2Value = document.getElementById("text2").value;
        document.getElementById("heading2").innerText = "Hi " + text2Value;
    }
    
    // This section of code " var text2Value = document.getElementById("text2").value;
    // document.getElementById("heading2").innerText = "Hi " + text2Value;" is used to get 
    // the value of the text area and set it as the new heading text. It uses a variable to store the
    // value of the text area and then sets the innerText property of the heading to the new value by
    // concatenating it with the "Hi" string