(function() {
  const message = "this should be shown";

  let app = {
    shownMessage: () => {
      console.log(message);
    },
    toggle: id => {
      hideElements("section");
      showElement(id);
    },
    router: () => {}
  };

  routie("home", function() {
    //this gets called when hash == #users
    app.toggle(window.location.hash);
  });

  function hideElements(selector) {
    document.querySelectorAll(selector).forEach(function(element) {
      element.classList.add("hidden");
    });
  }

  function showElement(selector) {
    document.querySelector(selector).classList.remove("hidden");
  }
})();
