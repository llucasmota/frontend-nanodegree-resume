
var bio = {
  "name": "Lucas Mota",
  "role": "Front End Developer",
  "contact": {
    "mobile": "61982561940",
    "email": "lucas.o.mota@gmail.com",
    "github": "https://github.com/llucasmota/Portifolio-Project",
    "twitter": "twitter.com/llucasmota",
    "location": "Brazil"
  },
  "welcomeMessage": "Seja bem-vindo ao meu portifólio",
  "skills": ["Html5", "Jquery", "Javascript", "End-To-End Test"],
  "biopic": "images/fry.jpg"
}


var formatteName = HTMLheaderName.replace("%data%", bio.name);
var formatteRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formatteName + formatteRole);
var formatteContact = HTMLmobile.replace("%data%", bio.contact.mobile);
var formatteMail = HTMLemail.replace("%data%", bio.contact.email);
var formatteTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formatteGithub = HTMLgithub.replace("%data%", bio.contact.twitter);
var formatteBioLocation = HTMLlocation.replace("%data%", bio.contact.location)

$("#header").append(formatteContact);
$("#header").append(formatteMail);
$("#header").append(formatteTwitter);
$("#header").append(formatteGithub);
$("#header").append(formatteBioLocation);



var formattePicture = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattePicture);



if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function (skill) {
    var formatteSkills = HTMLskills.replace("%data%", skill);
    $("#skills").append(formatteSkills);
  });
}



$("#main").append(internationalizeButton);

// Function que internacionaliza o nome
function inName(name) {
  var internacionalName = [];
  var contrario = [];
  var newName = name.split(" ");
  contrario = newName.reverse();
  var one = contrario[0].toUpperCase();
  var two = contrario[1].toLowerCase();
  internacionalName = one + " " + two;

  return internacionalName;
}

//teste

console.log(inName(bio.name));

var work = {
  "job": [
    {
      "employer": "Mirante  Tecnologia",
      "title": "Analista de Teste",
      "location": "Egito",
      "dates": "Junho de 2017 até o momento.",
      "description": "Testes Funcionais, Automatizados e etc."

    },
    {
      "employer": "CTIS",
      "title": "Testador de Software",
      "location": "Brasília",
      "dates": "Agosto de 2015 até junho de 2017.",
      "description": "Testes Funcionais, Automatizados e etc."

    },
    {
      "employer": "Tecnisys",
      "title": "Técnico de Suporte",
      "location": "Brasília",
      "dates": "Fevereiro de 2014 até julho de 2015",
      "description": "TerereuTe"
    }
  ]
}

displayWork();
function displayWork() {
  $("#workExperience").append(HTMLworkStart);
  for (jobs in work.job) {
    var formatteEmployer = HTMLworkEmployer.replace("%data%", work.job[jobs].employer);
    var formatteWorkTitle = HTMLworkTitle.replace("%data%", work.job[jobs].title);
    $(".work-entry:last").append(formatteEmployer + formatteWorkTitle);
    var formatteWorkLocation = HTMLworkLocation.replace("%data%", work.job[jobs].location);
    $(".work-entry").append(formatteWorkLocation);
    var formatteWorkDates = HTMLworkDates.replace("%data%", work.job[jobs].dates);
    $(".work-entry").append(formatteWorkDates);
    var formatteWorkDescription = HTMLworkDescription.replace("%data%", work.job[jobs].description);
    $(".work-entry").append(formatteWorkDescription);
  }
}



var education = {
  "schools": [
    {
      "name": "Análise e Desenvolvimento de Sistemas",
      "location": "Brasília",
      "degree": "Superior",
      "majors": ["alguma coisa", "duas coisas"],
      "dates": "2014 - 2017",
      "url": "github.com/llucasmota"
    },
  ],
  "onlineCourses": [
    {
      "title": "Frot-End Developer",
      "school": "Udacity",
      "dates": "2017 - 2018",
      "url": "br.udacity.com"
    }
  ]
}


var projects = {
  "projects": [
    {
      "title": "Projeto - Currículo Online",
      "dates": "june -  2018",
      "description": "",
      "images": [],
    }
  ]
}

$("#mapDiv").append(googleMap);
