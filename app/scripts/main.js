$(function(){
    /* toggle header */
    var lastWasHome = true;
    var homeParent = $("[href=#home]").parent();
    var header = $(".header");
    $("body").on("activate.bs.scrollspy", function(asd){
        var parentClass = homeParent.attr('class');
        if(parentClass){
            header.toggleClass("visual");
            lastWasHome = true;
        } else if(lastWasHome){
            header.toggleClass("visual");
            lastWasHome = false;
        }
    });
    /* toggle header end */

    var sections = ["home", "skills", "portrait"];
    
    function sectionEvent(sectionID){
        $("[href=#" + sectionID + "]").click(function(){
            $("#" + sectionID).scroll();
            console.log(sectionID);
        });
    }

    sections.forEach(sectionEvent);
});
