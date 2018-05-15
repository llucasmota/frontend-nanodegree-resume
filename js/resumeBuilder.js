/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Lucas Mota",
    "role": "Front End Developer",
    "contact": {
        "mobile": "61999999999",
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

