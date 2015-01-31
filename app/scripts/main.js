'use strict';
$(function(){
    /* toggle header */
    var lastWasHome = false;
    var homeParent = $('[href=#home]').parent();
    var header = $('.header');
    $('body').on('activate.bs.scrollspy', function(){
        var parentClass = homeParent.attr('class');
        var hasHidingClass = header.hasClass('visual');
        if(parentClass && !hasHidingClass){
            console.log('asd');
            header.toggleClass('visual');
            lastWasHome = true;
        } else if(!parentClass && hasHidingClass){
            console.log('asd1');
            header.toggleClass('visual');
            lastWasHome = false;
        }
    });
    /* toggle header end */

    var sections = ['home', 'skills', 'portrait'];

    function sectionEvent(sectionID){
        $('[href=#' + sectionID + ']').click(function(){
            $('#' + sectionID).scroll();
            console.log(sectionID);
        });
    }

    sections.forEach(sectionEvent);
});
