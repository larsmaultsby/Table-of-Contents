var tableOcontents = {};
//select the div to get the h1 and h2 tags from
tableOcontents.selector = 'div';
//select where you're going to be appending the newly created lists
tableOcontents.appendToSelector = 'body';

tableOcontents.init = function(){
var $container = $('<div/>');
var $div = $(tableOcontents.selector).eq(0).children();
for (k in $div) {
    if ($div.eq(k).prop("tagName") === 'H1') {
        if ($div.eq(k).prev().prop("tagName") != 'H1' && $div.eq(k).prev().prop("tagName") != 'H2' && !$container.children('ul').hasClass('parent')) {
            $container
                .append('<ul/>')
                .children('ul')
                .addClass('parent')
                .append('<li>' + $div.eq(k).html() + '</li>')
        } else {
            $container
                .children('ul.parent')
                .append('<li>' + $div.eq(k).html() + '</li>')
        }
    }
    if ($div.eq(k).prop("tagName") === 'H2') {
        if ($div.eq(k).prev().prop("tagName") != 'H2' && $div.eq(k).prev().prop("tagName") != 'H2') {
            $container
                .children('ul.parent')
                .append('<ul/>')
                .children('ul')
                .addClass('nested')
                .append('<li>' + $div.eq(k).html() + '</li>')
        } else {
            $container
                .children('ul.parent')
                .children('ul.nested')
                .append('<li>' + $div.eq(k).html() + '</li>')
        }
    }
}
    $(tableOcontents.appendToSelector).append($container)
}

tableOcontents.init();