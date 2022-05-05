/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const monthVal = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const outputFri13 = y => {
    for (let month = 0; month < 12; month++) {

        let d = new Date(y, month, 13);

        
        if (d.getDay() === 5) {
            document.write("<p>" + monthVal[d.getMonth()] + "</p>");
        }
    };
};

document.getElementById("run").addEventListener("click", () => outputFri13(+document.getElementById("year").value));


