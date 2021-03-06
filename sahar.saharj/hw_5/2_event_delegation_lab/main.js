/* Independent Practice

Making a favorites list: event delegation


Refactor the code below.

The difference will be: use event delegation so that you only have
to set one event listener for all the items once, when the
code first runs, and you don't have to add any others whenever
someone adds an item.

Bonus: When the user mouses over each item, the item should turn grey. Don't use CSS hovering for this.

Bonus 2: Add another link, after each item, that allows you to delete the item.

*/

function addToList($list, thing) {
  var $thingLi = $('<li>').html(thing).addClass('fav-thing');
  addCrossOffLink($thingLi);
  $list.append($thingLi);
}

function crossOff(event) {
  event.preventDefault();
  $(this).parent().addClass('crossed-off');
  $(this).html('');
}

function addCrossOffLink($list) {
  var $crossOffLink = $('<span>').html(' cross off').addClass('cross-off');
  $list.append($crossOffLink);
  $crossOffLink.on('click', crossOff);
}

function addDeleteLink($list) {
  var $deleteLink = $('<span>').html(' delete');
  $list.append($deleteLink);
  $deleteLink.on('click', function(event) {
    event.preventDefault();
    $(this).parent().html('');
  });
}

function addGreyColor(event) {
  $(this).css('color', 'grey');
};

function removeGreyColor(event) {
  $(this).css('color', 'black');
};

$(document).ready(function() {
  var $thingList = $('#fav-list');
  var $things = $('.fav-thing');
  var $button = $('#new-thing-button');
  var $newThingInput = $('#new-thing');

  $things.each(function(index, li) {
    addCrossOffLink($(li));
    addDeleteLink($(li));
  });

  $things.hover(addGreyColor, removeGreyColor);

  $button.on('click', function(event) {
    event.preventDefault();
    var newThing = $newThingInput.val();
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList($thingList, newThing);
      $newThingInput.val('');
    }
  });
});
