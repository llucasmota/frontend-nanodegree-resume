/*
This is empty on purpose! Your code to build the resume will go here.
 */

//  var awesomeThoughts = "My name is Cameron and I am AWESOME!";
//  var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN!");

//  $("#main").append(funThoughts);

//  var formatteName = HTMLheaderName.replace("%data%", "Lucas Mota");
//  $("#header").append(formatteName);

//  var formatteRole = HTMLheaderRole.replace("%data%", "Front-End Developer");
//  $("#header").append(formatteRole);

//  var skills = ["HTML 5", "JS", "POO", "Protractor"];

//  skills.forEach(function(skill){
//     $("#main").append(skill);
//  });
 
 var bio = {
     "name" : "Lucas Mota", 
     "role" : "Front End Developer",
     "contact" : {
         "mobile" : "61982561940",
         "email" :  "lucas.o.mota@gmail.com",
         "github" : "https://github.com/llucasmota/Portifolio-Project",
         "twitter" : "twitter.com/llucasmota",
         "location" : "Brasília - Brazil"
     },
     "welcomeMessage" : "Seja bem-vindo ao meu portifólio",
     "skills" : ["Html5", "Jquery", "Javascript", "End-To-End Test"],
     "biopic" : "images/fry.jpg"
 }

 var formatteName = HTMLheaderName.replace("%data%", bio.name);
 $("#header").prepend(formatteName);
 var formatteRole = HTMLheaderRole.replace("%data%", bio.role);
 $("#header").prepend(formatteRole);

