// ------------ task 1.1 -----------------------
// Extend JS Date object with a method daysTo() which returns 
// number of complete days between any pair of JS date objects: 
// d1.daysTo(d2) should return quantity of complete days from d1 to d2. 

// ------------  initial data ------------------
// const d1 = new Date();
// const d2 = new Date(2021, 08, 02); 
// ---------------------------------------------
const d2 = new Date('2021-09-09T12:00:00'); 
const d1 = new Date('2021-09-09T12:00:01'); 

Date.prototype.msPERDAY = 1000*60*60*24;

Date.prototype.daysTo = function(d) {
    if (!d) {
        return "No given date";
    }
    let diff = Math.abs(d.getTime() - this.getTime());
    return Math.floor((diff)/this.msPERDAY); 
};  


var days = d1.daysTo(d2);

if (days > 0) 
    console.log(`${days} days till date ${d2.toLocaleDateString()}`); 
else if (days < 0) 
    console.log(`${days} days since ${d2.toLocaleDateString()}`); 
else 
    console.log("0 days"); 
