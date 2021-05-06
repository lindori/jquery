$(function() {
    
domManipulacio();
//ok id-jü elem kattintásra való funkció meghívása
$("#OK").click(beviteliMezoKiemel);
// ha rávisszük az egeret a képre
$("article div img").mouseenter(kiemelFel);
//ha levisszük róla az egeret
$("article div img").mouseleave(kiemelLe);

});

function beviteliMezoKiemel() {
// nev id-jü elem háttérszíne kattintásra
$("#nev").css("background-color","lightblue");   
    
}
function kiemelFel() {
    //css-ben létrehozott osztályt meghívjuk a minden képünkre
//    $("article div img").addClass("kiemel"); 
// hozzáadtuk az eseményt eggyes elemekre
$(this).addClass("kiemel");
}
function kiemelLe() {
//töröljük egy adott elemről a class-t
$(this).removeClass("kiemel");
}
  
function domManipulacio() {
    
//$("article div:nth-child(2)").text("JQ.ből írok ide!");   
$("article div:nth-child(2)").html("<ul><li>1</li><li>2</li><li>3</li></ul>");
$("article div:nth-child(2)").text("<ul>\n\
<li>1</li>\n\
<li>2</li>\n\
<li>3</li>\n\
</ul>");
 //hozzáfűzzük "append"-el
$("article div:nth-child(2)").append("<ul><li>1</li><li>2</li><li>3</li></ul>");
//id #
$('#nev').val('Gipsz Jakab');
var nevErtek=$('#nev').val();
console.log(nevErtek);
//törli a tartalmat az elemből
$("article div:nth-child(2)").empty();
//eltünteti az elemet is
$("article div:nth-child(2)").remove();
//inline szöveg szinezés(összes szöveg)
//$("article div").css("color","red");
//elemre vonatkozóan
$("article div").eq(2).css("color","red");
//kép behelyezése
$("article div").eq(1).html("<img src='alak.jpg' alt=''/>");
//hozzáadunk egy képet
$("article div").eq(1).append("<img src='alak.jpg' alt=''/>");

}