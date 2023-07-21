const greet = (language) => {
  const greetings = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  let defaultGreeting = "english";

  return greetings[language] || greetings[defaultGreeting];
};

console.log(greet("english")); // Welcome
console.log(greet("dutch")); // Welkom
console.log(greet("IP_ADDRESS_INVALID")); // Welcome
