
//funcao que prepara variavem para ser inserido na página
function preparacao(variavel, formatador, atributo) {
    formatador = variavel.replace("%data%", atributo);
}

var bio = {
    "name": "Lucas Mota",
    "role": "Front End Developer",
    "contacts": {
        "mobile": "+55 (61) 98256-1940",
        "email": "lucas.o.mota@gmail.com",
        "github": "github.com/llucasmota/",
        "twitter": "twitter.com/llucasmota",
        "location": "Brasília - Brasil"
    },
    "welcomeMessage": "Hi, there! Welcome to my space",
    "skills": [
        "Javascript",
        "jQuery",
        "HTML",
        "CSS",
        "Protractor",
        "Jasmine",
        "Cucumber",
        "Test End-to-End"
    ],
    "biopic": "images/fry.jpg",
    "display": function () {
        var formatte = {
            formatteName: HTMLheaderName.replace("%data%", bio.name),
            formatteRole: HTMLheaderRole.replace("%data%", bio.role),
            formattePhone: HTMLmobile.replace("%data%", bio.contacts.mobile),
            formatteMail: HTMLemail.replace("%data%", bio.contacts.email),
            formatteTwitter: HTMLtwitter.replace("%data%", bio.contacts.twitter),
            formatteGithub: HTMLgithub.replace("%data%", bio.contacts.twitter),
            formatteBioLocation: HTMLlocation.replace("%data%", bio.contacts.location),
            formattePicture: HTMLbioPic.replace("%data%", bio.biopic),
            formatteWelcome: HTMLwelcomeMsg.replace(`%data%`, bio.welcomeMessage),
            formatteSkills: ""
        }


        $("#header").append(formatte.formattePicture);
        $("#header").prepend(formatte.formatteName + formatte.formatteRole);
        $("#topContacts").append(formatte.formattePhone);
        $("#topContacts").append(formatte.formatteMail);
        $("#topContacts").append(formatte.formatteTwitter);
        $("#topContacts").append(formatte.formatteGithub);
        $("#topContacts").append(formatte.formatteBioLocation);
        $(`#header`).append(formatte.formatteWelcome);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function (indexSkill) {
                formatte.formatteSkills = HTMLskills.replace(`%data%`, indexSkill);
                $(`#skills`).append(formatte.formatteSkills);
            })
        }

    }
}

bio.display();

var education = {
    "schools": [
        {
            "name": "System Developer",
            "location": "Brasília",
            "degree": "Graduação",
            "majors": ["Desenvolvimento de sistemas", "Adm de dados"],
            "dates": "2014 - 2017",
            "url": "https://uniceub.br"
        },
        {
            "name": "copy",
            "location": "Brasília",
            "degree": "Graduação",
            "majors": ["Desenvolvimento de sistemas", "Adm de dados"],
            "dates": "2014 - 2017",
            "url": "https://uniceub.br"
        },
    ],
    "onlineCourses": [
        {
            "title": "Front End Developer",
            "school": "Udacity",
            "dates": "2017 - 2018",
            "url": "https://br.udacity.com"
        },
        {
            "title": "Testes Automatizados com Jasmine",
            "school": "Alura",
            "dates": "2018 - 2018",
            "url": "https://alura.com.br"
        }
    ],
    "display": function () {
        $(`#education`).append(HTMLschoolStart);
        $(`#education`).append(HTMLonlineClasses);
        var formatteSchool = {
            formatteName: "",
            formatteDegree: "",
            formatteDates: "",
            formatteLocation: "",
            formatteMajor: ""
        }
        education.schools.forEach(function (school) {
            formatteSchool.formatteName = HTMLschoolName.replace(`%data%`, school.name);
            formatteSchool.formatteDegree = HTMLschoolDegree.replace(`%data%`, school.degree);
            formatteSchool.formatteDates = HTMLschoolDates.replace(`%data%`, school.degree);
            formatteSchool.formatteDates = HTMLschoolDates.replace(`%data%`, school.dates);
            formatteSchool.formatteLocation = HTMLschoolLocation.replace(`%data%`, school.location);
            formatteSchool.formatteMajor = HTMLschoolMajor.replace(`%data%`, school.majors);
            $(`.education-entry`).append(formatteSchool.formatteName + formatteSchool.formatteDegree);
            $(`.education-entry`).append(formatteSchool.formatteDates);
            $(`.education-entry`).append(formatteSchool.formatteMajor);
            $(`.education-entry`).append(formatteSchool.formatteLocation);

        });
        var formatteOnline = {
            formatteTitle: "",
            formatteSchool: "",
            formatteDates: "",
            formatteUrl: ""
        }
        education.onlineCourses.forEach(function (onCourses) {
            formatteOnline.formatteTitle = HTMLonlineTitle.replace(`%data%`, onCourses.title);
            formatteOnline.formatteSchool = HTMLonlineSchool.replace(`%data%`, onCourses.school);
            formatteOnline.formatteDates = HTMLonlineDates.replace(`%data%`, onCourses.dates);
            formatteOnline.formatteUrl = HTMLonlineURL.replace(`%data%`, onCourses.url);
            $(`#education`).append(formatteOnline.formatteTitle + formatteOnline.formatteSchool);
            $(`#education`).append(formatteOnline.formatteDates);
            $(`#education`).append(formatteOnline.formatteUrl);
        });

    }
}

education.display();

/**
 * 
 * var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
 */