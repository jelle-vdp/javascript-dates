/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const monthVal = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    document.getElementById("run").addEventListener("click", () => {
        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;

        document.write("<p>You were born on " + day + " " + monthVal[+month - 1] + " " + year + "</p>");

        let dob = new Date(year, (+month - 1), day);

        const getAge = date => { 
            var diff = Date.now() - date.getTime();
            var age = new Date(diff); 
            return Math.abs(age.getUTCFullYear() - 1970);
        }

        document.write("<p>You are " + getAge(dob) + " years old</p>");
    });

})();
