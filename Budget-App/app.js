// BUDGET Controller
var budgetController = (function() {
  // Some code
})();

// UI Controller
var UIController = (function() {
  var DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // Will be either `inc` or `exp`
        desciption: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },

    getDOMStrings: function() {
      return DOMStrings;
    }
  };
})();

// Global APP Controller
var controller = (function(budgetCtrl, UICtrl) {
  var setupEventListeners = function() {
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var DOM = UICtrl.getDOMStrings();

  var ctrlAddItem = function() {
    // 1. Get the field input data
    var input = UICtrl.getInput();

    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  };

  return {
    init: function() {
      console.log("Application has started.");
      setupEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();