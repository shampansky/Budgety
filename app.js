'use strict';

// BUDGET CONTROLLER
var budgetController = (function () {


})();

// UI CONTROLLER
var UIController = (function () {

  var DomStrings = {
    INPUT_TYPE: '.add__type',
    INPUT_DESCRIPTION: '.add__description',
    INPUT_VALUE: '.add__value',
    INPUT_BTN: '.add__btn'
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DomStrings.INPUT_TYPE).value,
        description: document.querySelector(DomStrings.INPUT_DESCRIPTION).value,
        value: document.querySelector(DomStrings.INPUT_VALUE).value
      };
    },
    getDomStrings: function () {
      return DomStrings;
    }
  };

})();

// GLOBAL APP CONTROLLER
var controller = (function (BudgetCtrl, UICtrl) {

  var DOM = UICtrl.getDomStrings();

  var ctrlAddItem = function () {
    // 1. Get the field input data
    var input = UICtrl.getInput();
    console.log(input);
    // 2. Add the item to the budget controller

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI

  };

  document.querySelector(DOM.INPUT_BTN).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, UIController);
