const price = document.getElementById('price');
const array = [];
function calcBill() {
 var bill = 0;
 bill += document.getElementById("quantity1").value * 250;
 bill += document.getElementById("quantity2").value * 550;
 bill += document.getElementById("quantity3").value * 600;
 bill += document.getElementById("quantity4").value * 450;
 localStorage.setItem('addon',bill);
 return bill;
}
$(document).ready(function () {
 $(".quant").change(function () {
 $("#amount2").text(calcBill());
 $("#amount3").text( calcBill());
 $(".pamount").css("margin-right", "30px");
 });
 $(container).click(function () {
 $("#amount3").text(calcBill());
 $(".pamount").css("margin-right", "30px");
 });
});
function book() {
    
}