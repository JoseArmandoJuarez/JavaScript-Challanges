var person = {
    firstName: "Johny",
    lastName: "Stine",
    age: 22,
    height: "5.8 feet",
    weight: "173lbs",
    country: "USA california",
    phoneNumber: 123-456-7890,
    email: "JohnyStine@gamil.com",
    language: "English"
}

console.log(person);

animal = {
    name: "Tiger",
    gender: "Male",
    age: 8,
    color: "orange, black and white",
    species: "Malayan Tiger",
    weight: "310kg",
    height: "120cm",
    health: "Excellent"
}

console.log(animal);

var electronic = {
    type: "IphoneX",
    number: 10,
    brand: "Apple inc",
    yearMade: "2017-2018",
    color: "grey",
    size: "5.85 inch",
    price: 60.00,
    createdBy: "Hone Hai Precision Industry Co Ltd and Pegatron"
}

console.log(electronic);

var car = {
    name: "Tesla model X",
    yearMade: 2015,
    assembly: "Tesla factory",
    designer: "Franz von Holzhausen",
    doors: 5,
    color: "white",
    motor: "electric",
    length: "193.3 in",
    height: "66..3 in",
    width: "78.7 in"
}

console.log(car);

var plant = {
    name: "Tulip",
    family: "Liliacase",
    habitat: "Turkey",
    color: "red",
    height: "6 in",
    growth: "sun, water and light"
}

console.log(plant);

var vegetable = {
    name: "carrot",
    energy: "41.35 calories",
    protein: "930 mg",
    vitaminC: "5.9 mg",
    potassium: "320 mg",
    family: "Apiacease",
    color: "green and orange",
    grow: "undeGround"
}

console.log(vegetable);

var customer = {
    name: "Helena",
    age: 26,
    gender: "female",
    career: "actress",
    requests: "website for her portfolio",
    offering: 6000.00,
    dueDate: "2 moths"
}

console.log(customer);

var student = {
    fisrtName: "Jason",
    lastName: "Nash",
    age: 16,
    grade: 11,
    gradeAverage: 88,
    strongestClass: "Math",
    weakestClass: "English",
    country: "united states"
}

console.log(student);

var teacher = {
    name: "Mrs.Alsion",
    gender: "female",
    email: "alisonteaches@gmail.com",
    phoneNumber: "987-456-1234",
    yearsTeaching: 10,
    subject: "Scinence",
    salary: 60000.00,
    schoolLocation: "ajax high school",
}

console.log(teacher);

var computer = {
    brand: "Alienware",
    color: "black",
    year: 2018,
    type: "Gaming laptop",
    ram: "16GB",
    performance: "Excellent",
    touchScreen: "No",
    voiceActivator: "yes",
    faceLogin: "yes"
}

console.log(computer);




document.getElementById("person").innerHTML =  "<p> <h3>PERSON</h3>" + 
                                            "First Name: " + person.firstName +
                                            "<br/> Last Name : " + person.lastName + 
                                            "<br/> Age: " + person.age + 
                                            "<br/> Height: " + person.height + 
                                            "<br/> Weight: " + person.weight + 
                                            "<br/> country: " + person.phoneNumber + 
                                            "<br/> email: " + person.email + 
                                            "<br/> language: " + person.language + "<br/><hr></p>";

document.getElementById("animal").innerHTML = "<p> <h3>ANIMAL</h3>"+ 
                                                "Name: " + animal.name + 
                                                "<br/> Gender: " + animal.gender + 
                                                "<br/> Age: " + animal.age + 
                                                "<br/> Color: " + animal.color + 
                                                "<br/> Species: " + animal.species + 
                                                "<br/> Weight: " + animal.weight + 
                                                "<br/> Height: " +animal.height + 
                                                "<br/> Health: " + animal.health + "<br/><hr></p>";

document.getElementById("electronic").innerHTML = "<p> <h3>ELECTRONIC</h3>"+ 
                                                    "Type: " + electronic.type + 
                                                    "<br/> Number: " + electronic.number + 
                                                    "<br/> Brand: " + electronic.brand + 
                                                    "<br/> Year Made: " + electronic.yearMade + 
                                                    "<br/> Color: " + electronic.color + 
                                                    "<br/> Size: " + electronic.size + 
                                                    "<br/> Price: " + electronic.price + 
                                                    "<br/> createdBy: " + electronic.createdBy + "<br/><hr></p>";

document.getElementById("car").innerHTML = "<p> <h3>CAR</h3>" +
                                            "Name: " + car.name + 
                                            "<br/> Year Made: " + car.yearMade + 
                                            "<br/> Assembly: " + car.assembly + 
                                            "<br/> Designer: " + car.designer + 
                                            "<br/> Doors: " + car.doors + 
                                            "<br/> Color: " + car.color + 
                                            "<br/> Motor: " + car.motor + 
                                            "<br/> Length: " + car.length + 
                                            "<br/> Height: " + car.height + 
                                            "<br/> Width: " + car.width + "<br/><hr></p>";

document.getElementById("plant").innerHTML = "<p><h3>PLANT</h3>" +
                                                "Name: " + plant.name + 
                                                "<br/> Family: " + plant.family + 
                                                "<br/> Habbitat: " + plant.habitat + 
                                                "<br/> Color: " + plant.color + 
                                                "<br/> Height: " + plant.height + 
                                                "<br/> Growth: " + plant.growth + "<br/><hr></p>";

document.getElementById("vegetable").innerHTML = "<p><h3>VEGETABLE</h3>" +
                                                    "Name: " + vegetable.name + 
                                                    "<br/> Energy: " + vegetable.energy + 
                                                    "<br/> Protein: " + vegetable.protein + 
                                                    "<br/> Vitamin C: " + vegetable.vitaminC + 
                                                    "<br/> Potassium: " + vegetable.potassium + 
                                                    "<br/> Family: " + vegetable.family + 
                                                    "<br/> Color: " + vegetable.color + 
                                                    "<br/> Grow: " + vegetable.grow + "<br/><hr></p>";

document.getElementById("customer").innerHTML = "<p><h3>CUSTOMER</h3>" + 
                                                    "Name: " + customer.name + 
                                                    "<br/> Age: " + customer.age + 
                                                    "<br/> Gender: " + customer.gender + 
                                                    "<br/> Career: " + customer.career + 
                                                    "<br/> Requests: " + customer.requests + 
                                                    "<br/> Offering: " + customer.offering + 
                                                    "<br/> Due Date: " + customer.dueDate + "<br/><hr></p>";
                                        
document.getElementById("student").innerHTML = "<p><h3>STUDENT</h3>" + 
                                                    "First Name: " + student.fisrtName + 
                                                    "<br/> Last Name: " + student.lastName + 
                                                    "<br/> Age: " + student.age + 
                                                    "<br/> Grade: " + student.grade + 
                                                    "<br/> Grade Average: " + student.gradeAverage + 
                                                    "<br/> Strongest Class: " + student.strongestClass + 
                                                    "<br/> Weakest Class: " + student.weakestClass + 
                                                    "<br/> Country: " + student.country + "</br><hr></p>";

document.getElementById("teacher").innerHTML = "<p><h3>TEACHER</h3>" + 
                                                "<br/> Name: " + teacher.name + 
                                                "<br/> Gender: " + teacher.gender + 
                                                "<br/> Email: " + teacher.email +
                                                "<br/> Phone Number: " + teacher.phoneNumber + 
                                                "<br/> Years Teaching: " + teacher.yearsTeaching + 
                                                "<br/> Subject: " + teacher.subject + 
                                                "<br/> Salary: " + teacher.salary + 
                                                "<br/> School Location: " + teacher.schoolLocation + "<br/><hr></p>";

document.getElementById("computer").innerHTML = "<p><h3>COMPUTER</h3>" +
                                                "<br/> Brand: " + computer.brand + 
                                                "<br/> Color: " + computer.color +
                                                "<br/> Year: " + computer.year + 
                                                "<br/> Type: " + computer.type + 
                                                "<br/> Ram: " + computer.ram + 
                                                "<br/> Performance: " + computer.performance +
                                                "<br/> Touch Screen: " + computer.touchScreen + 
                                                "<br/> Voice Activator: " + computer.voiceActivator + 
                                                "<br/> Face Login: " + computer.faceLogin + "<br/><hr></p>";