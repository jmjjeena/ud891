(function() {
  'use strict';

  // Define values for keycodes
  var VK_ENTER      = 13;
  var VK_SPACE      = 32;
  var VK_LEFT       = 37;
  var VK_UP         = 38;
  var VK_RIGHT      = 39;
  var VK_DOWN       = 40;

  // Helper function to convert NodeLists to Arrays
  function slice(nodes) {
    return Array.prototype.slice.call(nodes);
  }

  function RadioGroup(id) {
    this.el = document.querySelector(id);
    this.buttons = slice(this.el.querySelectorAll('.radio'));
    this.focusedIdx = 0;
    this.focusedButton = this.buttons[this.focusedIdx];

    this.el.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

RadioGroup.prototype.handleKeyDown = function(e) {
    switch(e.keyCode) {
  // if you press left or up array key
      case VK_UP:
      case VK_LEFT: {

        e.preventDefault();
    // if the selected button is the first, go to the button with index 4
        if (this.focusedIdx === 0) {
          this.focusedIdx = this.buttons.length - 1;
        } else {
    // if the selected button is not the first on the list, decrease the index by 1 
          this.focusedIdx--;
        }

        break;

      }
  // if you press right or down array key
      case VK_DOWN:
      case VK_RIGHT: {

        e.preventDefault();
    // if the selected button is the last, go to the button with index 0, the first on the list
        if (this.focusedIdx === this.buttons.length - 1) {
          this.focusedIdx = 0;
        } else {
    // if the selected button is not the l on the list, increase the index by 1 
          this.focusedIdx++;
        }

        break;
      }
    }
    // set unchecked the old button and focus on the new one
    this.changeFocus(this.focusedIdx);
  };

  RadioGroup.prototype.changeFocus = function(idx) {
    // Set the old button to tabindex -1
    this.focusedButton.tabIndex = -1;
    this.focusedButton.removeAttribute('checked');

    // Set the new button to tabindex 0 and focus it
    this.focusedButton = this.buttons[idx];
    this.focusedButton.tabIndex = 0;
    this.focusedButton.focus();
    this.focusedButton.setAttribute('checked', 'checked');
  };

  var group1 = new RadioGroup('#group1');

}());
