(function () {
  const message = "this should be shown";

  var totalCourses = [
    {
      course: "CSS to the rescue",
      description: "In dit vak gaan we aan de slag met CSS. We gaan goed werkende responsive oplossingen bedenken én maken voor complexe interfaces. Dat is erg belangrijk, te veel ontwerpers kunnen dit niet zo goed. Het is ook belangrijk om een aantal basisprincipes achter CSS goed te begrijpen. Niet alleen op praktisch niveau, ook op experimenteel niveau. Zonder goed begrip van de basisprincipes is CSS magisch en weird. Met een goed begrip heb je CSS onder controle en kan je het laten doen wat jij wil. En dat is nodig om webpagina’s vorm te geven met attention to detail. Webpagina’s waar mensen blij van worden.",
      information: ""
    },
    {
      course: "Web App from Scratch",
      description: "In dit vak gaan we een web app maken zonder frameworks of onnodige libraries, dus zoveel mogelijk met native HTML, CSS & JavaScript. Het eindproduct is een modulair opgezet prototype voor een single page web app. Data wordt opgehaald uit een externe API, waar nodig gemanipuleerd en vervolgens getoond in de Web App. Je leert hoe je structuur aanbrengt in je code en hoe je hiermee 'from scratch' een (prototype voor een) web app maakt. Met deze kennis begrijp je daarnaast beter hoe bestaande api’s, libraries en frameworks werken.",
      information: "",
    }, {
      course: "Project 1",
      description: "Een case waarin je gaat toepassen wat je bij de vakken Webapp from Scratch en CSS To The Rescue hebt geleerd.",
      information: "vorige opdrachtgevers: OBA, Lifely, Voorhoede",
    }, {
      course: "Browser Technologies",
      description: "In het vak Browser Technologies leer je hoe je goede, robuuste, toegankelijke websites maakt. Je gaat leren over Progressive Enhancement, Feature Detection en Fallback. Het web is er voor iedereen. In dit vak leer je hoe je daarvoor kan zorgen.",
      information: "",
    }, {
      course: "Performance Matters",
      description: "In het vak Performance Matters gaan we van bestaande web applicaties de performance verbeteren. We werken aan HTML, CSS en JavaScript optimalistaties en hoe we het HTTP protocol beter kunnen benutten.",
      information: "",
    }, {
      course: "Project 2",
      description: "Case waarin je gaat toepassen wat je bij de vakken Performance Maters en Brower technologies hebt geleerd.",
      information: "Vorige opdrachtgevers: Voorhoede, Lifely",
    },
    {
      course: "Real-Time Web",
      description: "In het vak Real-Time Web leer je hoe je real-time / live data op een inzichtelijke manier toegankelijk kunt maken. Terwijl je bij het vak ‘Web of Things’ leert hoe je sensor data uit “slimme” devices kunt lezen en deze devices zelfs kunt aansturen, ga je bij RTW precies dit soort data real-time inzichtelijk en toegankelijk maken voor eindgebruikers.",
      information: "",
    }, {
      course: "Web Design",
      description: "In het vak Web Design leer je hoe de principes van het web design kan toepassen. Je hebt nu heel wat functionelen opdrachten gemaakt. Nu ga je het ook super mooi maken.",
      information: "",
    }, {
      course: "Project 3",
      description: "Case waarin je gaat toepassen wat je bij de vakken Real - time web en Web of things hebt geleerd.",
      information: "Vorige opdrachtgevers: Voorhoede, Lifely, De Ceuvel",
    }, {
      course: "Meesterproef",
      description: "In de meesterproef laten studenten zien wat ze allemaal hebben geleerd. Er worden een aantal projecten (voor echte opdrachtgevers) aangeboden waar studenten in 5 weken een oplossing voor een probleem moeten verzinnen en maken.",
      information: "Vorige opdrachtgevers: OBA, Zuiderzeemuseum, Van Gogh museum, Schots bedrijf en meer!",
    }
  ];

  let app = {
    shownMessage: () => {
      console.log(message);
    },
    toggle: id => {
      hideElements("section");
      showElement(id);
    },
    courseNameChecked: () => {
      var ulList = document.querySelector("#course-list").children;
      var courseName = document.querySelector("#coursename");
      var courseDesc = document.querySelector("#coursedescription");
      totalCourses.map((d) => {
        for (let i = 0; i < ulList.length; i++) {
          const element = ulList[i];
          element.addEventListener("focus", (event) => {
            if (event.target.textContent === d.course) {
              courseName.innerHTML = d.course;
              courseDesc.innerHTML = d.description;
            }
          }, true)
        };
      })

    }
  };

  app.courseNameChecked();



  function hideElements(selector) {
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.add("hidden");
    });
  }

  function showElement(selector) {
    document.querySelector(selector).classList.remove("hidden");
  }

  routie({
    "home": function () {
      app.toggle(window.location.hash);
    },
    "": function () {
      window.location.hash = "#home";
    },
    "match": function () {
      app.toggle(window.location.hash);
    },
    "intro": function () {
      app.toggle(window.location.hash);
    },
    "werkwijze": function () {
      app.toggle(window.location.hash);
    },
    "lesprogramma": function () {
      app.toggle(window.location.hash);
    },
    "aanmelden": function () {
      app.toggle(window.location.hash);
    }
  });

})();
