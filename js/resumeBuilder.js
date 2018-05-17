/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name": "Lucas Mota",
  "role": "Front End Developer",
  "contact": {
    "mobile": "61982561940",
    "email": "lucas.o.mota@gmail.com",
    "github": "https://github.com/llucasmota/Portifolio-Project",
    "twitter": "twitter.com/llucasmota",
    "location": "Brasília - Brazil"
  },
  "welcomeMessage": "Seja bem-vindo ao meu portifólio",
  "skills": ["Html5", "Jquery", "Javascript", "End-To-End Test"],
  "biopic": "images/fry.jpg"
}

var formatteName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formatteName);
var formatteRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formatteRole);

var work = [
  {
    "job": {
      "employer": "Mirante  Tecnologia",
      "title": "Analista de Teste",
      "location": "Brasília",
      "dates": "Junho de 2017 até o momento.",
      "description": "Testes Funcionais, Automatizados e etc."

    },
    "job": {
      "employer": "CTIS",
      "title": "Testador de Software",
      "location": "Brasília",
      "dates": "Agosto de 2015 até junho de 2017.",
      "description": "Testes Funcionais, Automatizados e etc."

    },
    "job": {
      "employer": "Tecnisys",
      "title": "Técnico de Suporte",
      "location": "Brasília",
      "dates": "Fevereiro de 2014 até julho de 2015",
      "description": "TerereuTerereu"

    }
  }
]

$("#main").append(work[0].job.title);


var education = [
  {
    "schools": {
      "name": "Análise e Desenvolvimento de Sistemas",
      "location": "Brasília",
      "degree": "Superior",
      "majors": ["alguma coisa", "duas coisas"],
      "dates": "2014 - 2017",
      "url": "github.com/llucasmota"
    }
  }
]

$('#main').append(education[0].schools.name)
