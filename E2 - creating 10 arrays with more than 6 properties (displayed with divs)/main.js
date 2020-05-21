var persons = [
    {
        firstName: "Emma",
        lastName: "Watson",
        age: 28,
        height: "1.65m",
        weight: "110lbs",
        born: "Paris France",
        phoneNumber: "235-324-3463",
        email: "Watson@gmail.com",
        language: "French"

    },
    {
        firstName: "George",
        lastName: "Clooney",
        age: 57,
        height: "1.8m",
        weight: "176lbs",
        born: "Kentuky USA",
        phoneNumber: "185-4356-2483",
        email: "mrclooney@gamil.com",
        language: "French"
    }
];

persons.push({ firstName: "Adam", lastName: "Sandler", age: 52, height: "1.77m", weight: "200lbs", born: "United states", phoneNumber: "987-475-2543", email: "adamSandler@gmail.com", language: "English" });
persons.push({ firstName: "Kevin", lastName: "Hart", age: 39, height: "1.63m", weight: "230lbs", born: "United States", phoneNumber: "345-313-6543", email: "evinHart@gmail.com", language: "English" });
persons.push({ firstName: "Dwayne", lastName: "Johnson", age: 46, height: "1.96m", weight: "260lbs", born: "United States", phoneNumber: "123-543-7423", email: "theRock@gmail.com", language: "English" });
persons.push({ firstName: "Bradley", lastName: "Cooper", age: 43, height: "1.85m", weight: "185lbs", born: "United states", phoneNumber: "345-647-2134", email: "bradleyCooper@gmail.com", language: "French" });
persons.push({ firstName: "Eugenio", lastName: "Derbez", age: 57, height: "1.79m", weight: "210lbs", born: "Mexico", phoneNumber: "654-124-1276", email: "eugenioDerbez@gmail.com", language: "Spanish" });
persons.push({ firstName: "Salma", lastName: "Hayek", age: 52, height: "1.57m", weight: "119lbs", born: "Mexico", phoneNumber: "234-165-7245", email: "hayek@gmail.com", language: "Spanish" });
persons.push({ firstName: "Johny", lastName: "Deep", age: 55, height: "1.78m", weight: "172lbs", born: "Kentucky USA", phoneNumber: "623-626-7524", email: "deep@gmail.com", language: "French" });
persons.push({ firstName: "Tom", lastName: "Cruise", age: 56, height: "1.7m", weight: "170lns", born: "New York USA", phoneNumber: "233-673-7134", email: "tomcruise@gmail.com", language: "German" });


console.log(persons);


var animals = [
    {
        name: "Tiger",
        gender: "Male",
        age: 8,
        color: "orange, black and white",
        species: "Malayan Tiger",
        weight: "310kg",
        height: "1.2m",
        speed: "65km"
    },
    {
        name: "Lion",
        gender: "Male",
        age: 5,
        color: "black, brown",
        species: "Panthera leo",
        weight: "190kg",
        height: "1.2m",
        speed: "80km"
    }
];

animals.push({ name: "Leopard", gender: "Female", age: 7, color: "yellow wiht black spots", species: "African", weight: "23kg", height: "64m", speed: "58km" });
animals.push({ name: "Cheetah", gender: "Female", age: 12, color: "yellow wiht black spots", species: "African", weight: "55kg", height: "668m", speed: "120km" });
animals.push({ name: "Eagle", gender: "Male", age: 10, color: "White and black", species: "Bald Eagle", weight: "6.3kg", height: "1m", speed: "160km" });
animals.push({ name: "Falcon", gender: "Female", age: 6, color: "grey and white", species: "Falco", weight: "1.5kg", height: "0.6m", speed: "390km" });
animals.push({ name: "Capuchin", gender: "Male", age: 12, color: "white and black", species: "White head", weight: "3.9kg", height: "0.55m", speed: "56km" });
animals.push({ name: "Black howler", gender: "Female", age: 15, color: "Black", species: "Atelidae", weight: "10kg", height: "0.91m", speed: "30km" });
animals.push({ name: "Shark", gender: "Male", age: 20, color: "grey and white", species: "Great white", weight: "1100kg", height: "6m", speed: "50km" });
animals.push({ name: "killer Whale", gender: "Female", age: 14, color: "Black and White", species: "Orcinus Orca", weight: "5400kg", height: "8m", speed: "65km" });

console.log(animals);


var electronics = [
    {
        type: "IphoneX",
        number: 10,
        brand: "Apple inc",
        yearMade: "2017-2018",
        color: "grey",
        size: "5.85 inch",
        price: 200.00,
        createdBy: "Hone Hai Precision Industry Co Ltd and Pegatron"
    },
    {
        type: "ipad",
        number: 3,
        brand: "Apple inc",
        yearMade: 2012,
        color: "red",
        size: "9.50 inch",
        price: 180.00,
        createdBy: "Steve Jobs"
    }
];

electronics.push({ type: "samsung note 9", number: 9, brand: "Samsung", yearMade: 2018, color: "purple", size: "6.4in", price: 13000, createdBy: "Samnsung galaxy" });
electronics.push({ type: "apples watch", number: 4, brand: "Apple inc", yearMade: 2015, color: "black", size: "1.6in", price: 550.00, createdBy: "Jony Ive" });
electronics.push({ type: "Mac Book", number: 10, brand: "Apple inc", yearMade: 2018, color: "grey", size: "15in", price: 4000.00, createdBy: "Steve Jobs" });
electronics.push({ type: "Plays station", number: 4, brand: "Sony", yearMade: 2013, color: "black", size: "53 mm × 305 mm", price: 400.00, createdBy: "Shuhei Yoshida" });
electronics.push({ type: "XBox", number: 1, brand: "Flex", yearMade: "2013", color: "white and green", size: "305mm x 275mm", price: 500, createdBy: "Carl Ledbetter" });
electronics.push({ type: "WiiU", number: 6, brand: "Nintendo", yearMade: "2006", color: "red", size: "17.2cm X 4.6cm", price: 1000.00, createdBy: "Shigeru Miyamoto" });
electronics.push({ type: "sony a6300", number: 3, brand: "Sony", yearMade: 2016, color: "black", size: "120 x 67 x 49 mm", price: 1050.00, createdBy: "Sony team" });
electronics.push({ type: "nintendo switch", number: 7, brand: "Nintendo", yearMade: 2017, color: "red and blue", size: "	203.1 mm × 102 mm × 13.9 mm", price: 500.00, createdBy: "Miyamoto" });

console.log(electronics);


var cars = [
    {
        name: "Tesla model X",
        yearMade: 2015,
        assembly: "Tesla factory",
        designer: "Franz von Holzhausen",
        color: "white",
        motor: "electric",
        length: "193.3 in",
        height: "66..3 in",
        width: "78.7 in"
    },
    {
        name: "Mclaren",
        yearMade: 2011,
        assembly: "Mclaren technology center",
        designer: "Robert Melville",
        color: "orange",
        motor: "gas",
        length: "4.53m",
        height: "1.2m",
        width: "1.92m"
    }
];

cars.push({ name: "BMW i8", yearMade: 2015, assembly: "BMW headquarters", designer: "Richard Kim", color: "grey and blue", motor: "electric", length: "184.6in", height: "51.1in", width: "76.5in" });
cars.push({ name: "ferrari f12", yearMade: 2018, assembly: "Ferrari headquarters", designer: "Flavio Manzoni", color: "red", motor: "gas", length: "4.62m", height: "1.27m", widht: "1.94m" });
cars.push({ name: "lamborghini aventador", yearMade: 2016, assembly: "lamborghini headquarters", designer: "Filipo Perini", color: "yellowe", length: "188.19in", height: "44.72in", width: "79.92in" });
cars.push({ name: "Corvette", yearMade: 2018, assembly: "corvette headquarters", designer: "Corvetter team", color: "White", motor: "gas", length: "176.9in", height: "48.6in", width: "73.9in" });
cars.push({ name: "Porsche", yearMade: 2017, assembly: "porsche headquarters", designer: "Ferdinand Porsche", color: "Orange", motor: "gas", length: "178.9in", height: "51.3in", width: "72.9in" });
cars.push({ name: "Audie r8", yearMade: 2006, assembly: "Audie headquarters", designer: "Frank lamberty", color: "blue", motor: "gas", length: "174.6in", height: "49.3in", width: "76in" });
cars.push({ name: "GMC sierra", yearMade: 2018, assembly: "GMC headquartes", designer: "Matt Noone", color: "grey", motor: "gas", length: "137in", height: "78in", width: "70in" });
cars.push({ name: "Dodge charger", yearMade: 2016, assembly: "Dodge headquarters", designer: "Ralph Gilles", color: "black", motor: "gas", length: "200.1in", height: "58.2in", width: "74.4in" });

console.log(cars);


var plants = [
    {
        name: "Tulip",
        family: "Liliacase",
        habitat: "Turkey",
        color: "orange and red",
        height: "6 in",
        scientificName: "Tulipa"
    },
    {
        name: "Rose",
        family: "Rosaceae",
        habitat: "Europe",
        color: "Red",
        height: "72 in",
        scientificName: "Rosa"
    }
];

plants.push({ name: "Cactus", family: "Cactaceae", habitat: "desert", color: "green", height: "480in", scientificName: "Cactaceae" });
plants.push({ name: "Conifers", family: "Pinaceae", habitat: "North America", color: "green & brown", height: "4330 in", scientificName: "Pinophyta" });
plants.push({ name: "Buttercup", family: "Ranunculaceae", habitat: "Finland", color: "Yellow", height: "40in", scientificName: "Ranunculus" });
plants.push({ name: "Larkspur", family: "Ranunculaceae", habitat: "Coastal", color: "blue & purple", height: "84in", scientificName: "Delphinium" });
plants.push({ name: "Lily", family: "Liliaceae", habitat: "Tropical areas", color: "White", height: "48in", scientificName: "Lilium" });
plants.push({ name: "Daisy", family: "Asteraceae", habitat: "Grass lands", color: "Pink", height: "36in", scientificName: "Asteraceae" });
plants.push({ name: "Anemone", family: "Ranunculales", habitat: "Coastal", color: "Red", height: "36in", scientificName: "Anemone" });
plants.push({ name: "Redwood tree", family: "Cupressaceae", habitat: "Northen california", color: "Green and brown", height: "230feet", scientificName: "Sequoia sempervirens" });

console.log(plants);




var vegetables = [
    {
        name: "Carrot",
        energy: "41.35 calories",
        protein: "930 mg",
        vitaminC: "5.9 mg",
        potassium: "320 mg",
        family: "Apiacease",
        color: "green and orange",
        grow: "undeGround"
    },
    {
        name: "Potato",
        energy: "77 calories",
        protein: "2g",
        vitaminC: "19.7mg",
        potassium: "421mg",
        family: "Night shade",
        color: "brown",
        grow: "undeGround"
    }
];

vegetables.push({ name: "Pumpkin", energy: "26 calories", protein: "1g", vitaminC: "9mg", potassium: "340mg", family: "Cucurbits", color: "orange", grow: "On ground" });
vegetables.push({ name: "Tomato", energy: "17.69 calories", protein: "900mg", vitaminC: "14mg", potassium: "237mg", family: "Nightshade", color: "red", grow: "On a plant" });
vegetables.push({ name: "Corn", energy: "85 calories", protein: "4 grams", vitaminC: "6.8mg", potassium: "270mg", family: "Grasses", color: "Yellowe", grow: "on a plant" });
vegetables.push({ name: "Cucumbers", energy: "15.54 calories", protein: "650mg", vitaminC: "2.8mg", potassium: "147mg", family: "Cucurbits", color: "Green", grow: "on ground" });
vegetables.push({ name: "Cabage", energy: "25 calories", protein: "1.3g", vitaminC: "36.6mg", potassium: "170mg", family: "Mustards", color: "Light Green", grow: "On ground" });
vegetables.push({ name: "Bell Pepper", energy: "20 calories", protein: "0.9g", vitaminC: "80.4mg", potassium: "175mg", family: "Nightshade", color: "Red, Yellow, Green", grow: "on plant" });
vegetables.push({ name: "Onion", energy: "40 calories", protein: "1.1g", vitaminC: "7.4mg", potassium: "146mg", family: "Amaryllidaceae", color: "brown", grow: "on ground" });
vegetables.push({ name: "Cauliflower", energy: "25 calories", protein: "1.9g", vitaminC: "48.2mg", potassium: "299mg", family: "Mustards", color: "White", grow: "on ground" });

console.log(vegetables);



var customers = [
    {
        name: "Helena",
        age: 26,
        gender: "female",
        career: "actress",
        requests: "website for her portfolio",
        offering: 6000.00,
        dueDate: "2 moths"
    },
    {
        name: "Joe",
        age: 22,
        gender: "Male",
        career: "stand up comedy",
        requests: "A new microphone",
        offering: 200.00,
        dueDate: "2 days"
    }
];

customers.push({ name: "Diego", age: 46, gender: "Male", career: "pro soccer player", requests: "New boots", offering: 1000.00, dueDate: "NOW" });
customers.push({ name: "Amanda", age: 35, gender: "Female", career: "Singer", requests: "New dress", offering: 900.00, dueDate: "4 days" });
customers.push({ name: "Barney", age: 33, gender: "Male", career: "Busines man", requests: "New suit", offering: 2000.00, dueDate: "6 days" });
customers.push({ name: "Lily", age: 29, gender: "Female", career: "Teacher", requests: "New blackboard", offering: 600.00, dueDate: "1 week" });
customers.push({ name: "Lucifer", age: 33, gender: "Male", career: "Musician", requests: "New piano", offering: 5000.00, dueDate: "1 month" });
customers.push({ name: "Jonah", age: 25, gender: "Male", career: "game developer", requests: "New studio", offering: 10000.00, dueDate: " 3 weeks" });
customers.push({ name: "Tom", age: 46, gender: "Male", career: "Musician", requests: "New electric guitar", offering: 2000.00, dueDate: "2 days" });
customers.push({ name: "Natalie", age: 27, gender: "Female", career: "Dancer", requests: "New Shoes", offering: 1500.00, dueDate: "3 days" });

console.log(customers);



var students = [
    {
        fisrtName: "Jason",
        lastName: "Nash",
        age: 16,
        grade: 11,
        gradeAverage: 88,
        strongestClass: "Math",
        weakestClass: "English",
        born: "Chicago"
    },
    {
        firstName: "Jonah",
        lastName: "Hill",
        age: 17,
        grade: 12,
        gradeAverage: 75,
        strongestClass: "English",
        weakestClass: "Gym",
        born: "California"
    }
];

students.push({ firstName: "Channing", lastName: "Tatum", age: 15, grade: 10, gradeAverage: 89, strongestClass: "Fitness", weakestClass: "Math", born: "Cullman Alabama" });
students.push({ firstName: "David", lastName: "Dobrick", age: 14, grade: 8, gradeAverage: 75, strongestClass: "History", weakestClass: "English", born: "Chicago" });
students.push({ firstName: "Johny", lastName: "stine", age: 22, grade: 16, gradeAverage: 99, strongestClass: "Math", weakestClass: "Gym", born: "vancouver" });
students.push({ firstName: "Nick", lastName: "vardon", age: 12, grade: 8, gradeAverage: 88, strongestClass: "Geography", weakestClass: "Math", born: "Winnepeg" });
students.push({ firstName: "Corina", lastName: "stein", age: 16, grade: 11, gradeAverage: 72, strongestClass: "Science", weakestClass: "History", born: "british columbia" });
students.push({ firstName: "Seth", lastName: "tan", age: 13, grade: 9, gradeAverage: 85, strongestClass: "Fitness", weakestClass: "Geography", born: "Miami" });
students.push({ firstName: "Scott", lastName: "Sire", age: 17, grade: 12, gradeAverage: 95, strongestClass: "English", weakestClass: "Gym", born: "France" });
students.push({ firstName: "Tod", lastName: "Pate", age: 15, grade: 10, gradeAverage: 82, strongestClass: "Math", weakestClass: "Science", born: "Chicago" });

var teachers = [
    {
        name: "Mrs.Alsion",
        gender: "female",
        email: "alisonteaches@gmail.com",
        phoneNumber: "987-456-1234",
        yearsTeaching: 10,
        subject: "Scinence",
        salary: 60000.00,
        schoolLocation: "Ajax"
    },
    {
        name: "Mr.Tod",
        gender: "Male",
        email: "tod@gmail.com",
        phoneNumber: "234-234-1674",
        yearsTeaching: 5,
        subject: "History",
        salary: 54000.00,
        schoolLocation: "New York"
    }
];

teachers.push({ name: "Mr.Scott", gender: "Male", email: "scott@gmail.com", phoneNumber: "234-6235-7357", yearsTeaching: 15, subject: "Math", salary: 40000.00, schoolLocation: "Chicago" });
teachers.push({ name: "Mrs.Snow", gender: "Female", email: "snow@gmail.com", phoneNumber: "485-3585-8356", yearsTeaching: 17, subject: "Science", salary: 54000.00, schoolLocation: "ontario" });
teachers.push({ name: "Mr.Nash", gender: "Male", email: "nash@gmail.com", phoneNumber: "546-4235-6245", yearsTeaching: 26, subject: "Gym", salary: 44000.00, schoolLocation: "California" });
teachers.push({ name: "Mr.Tod", gender: "Male", email: "tod@gmail.com", phoneNumber: "234-234-1674", yearsTeaching: 5, subject: "History", salary: 54000.00, schoolLocation: "Vancouver" });
teachers.push({ name: "Mrs.lam", gender: "Female", email: "lam@gmail.com", phoneNumber: "626-7425-2456", yearsTeaching: 14, subject: "Art", salary: 47000.00, schoolLocation: "Florida" });
teachers.push({ name: "Mr.Ramsey", gender: "Male", email: "ramsey@gmail.com", phoneNumber: "342-6437-5443", yearsTeaching: 10, subject: "Physics", salary: 24000.00, schoolLocation: "Winnepeg" });
teachers.push({ name: "Mrs.Corina", gender: "Female", email: "corina@gmail.com", phoneNumber: "546-6536-3653", yearsTeaching: 35, subject: "Chemistry", salary: 34000.00, schoolLocation: "Pickering" });
teachers.push({ name: "Mr.alex", gender: "Male", email: "alex@gmail.com", phoneNumber: "345-7345-2566", yearsTeaching: 22, subject: "Drama", salary: 37000.00, schoolLocation: "Texas" });

console.log(teachers);



var computers = [
    {
        brand: "Alienware",
        color: "black",
        year: 2018,
        type: "Gaming laptop",
        ram: "30GB",
        performance: "Excellent",
        touchScreen: "yes",
        voiceActivator: "yes",
        faceLogin: "yes"
    },
    {
        brand: "Hp",
        color: "grey",
        year: 2018,
        type: "laptop",
        ram: "6GB",
        performance: "Excellent",
        touchScreen: "yes",
        voiceActivator: "yes",
        faceLogin: "yes"
    }
];

computers.push({ brand: "Dell", color: "red", year: 2017, type: "laptop", ram: "9GB", performance: "Good", touchScreen: "no", voiceActivator: "yes", faceLogin: "no" });
computers.push({ brand: "Apple", color: "white", year: 2016, type: "laptop", ram: "7GB", performance: "Good", touchScreen: "no", voiceActivator: "yes", faceLogin: "no" });
computers.push({ brand: "Toshiba", color: "black", year: 2015, type: "laptop", ram: "4GB", performance: "ok", touchScreen: "no", voiceActivator: "no", faceLogin: "no" });
computers.push({ brand: "Sony", color: "blue", year: 2017, type: "Gaming laptop", ram: "6GB", performance: "Excellent", touchScreen: "Yes", voiceActivator: "Yes", faceLogin: "Yes" });
computers.push({ brand: "Lenovo", color: "orange", year: 2017, type: "laptop", ram: "4GB", performance: "Good", touchScreen: "no", voiceActivator: "yes", faceLogin: "no" });
computers.push({ brand: "Hp", color: "White", year: 2017, type: "Desktop", ram: "12GB", performance: "Excellent", touchScreen: "yes", voiceActivator: "yes", faceLogin: "yes" });
computers.push({ brand: "Acer", color: "red and black", year: 2018, type: "Gaming desktop", ram: "29GB", performance: "Excellent", touchScreen: "no", voiceActivator: "yes", faceLogin: "no" });
computers.push({ brand: "Dell", color: "Blue and White", year: 2018, type: "Desktop", ram: "19GB", performance: "Excellent", touchScreen: "no", voiceActivator: "yes", faceLogin: "yes" });

console.log(computers);






function myFunction1() {

    var dynamicHTML1 = "";
    for (var i = 0; i < persons.length; i++) {
        dynamicHTML1 += "<p> First Name: " + persons[i].firstName +
            "<br/> Last Name: " + persons[i].lastName +
            "<br/>Age: " + persons[i].age +
            "<br/>Height: " + persons[i].height +
            "<br/> Weight: " + persons[i].weight +
            "<br/> country: " + persons[i].phoneNumber +
            "<br/> email: " + persons[i].email +
            "<br/> language: " + persons[i].language + "<br/><hr></p>";
    }

    document.getElementById("person").innerHTML = dynamicHTML1;
}

myFunction1();





function myFunction2() {

    var dynamicHTML2 = "";
    for (var i = 0; i < animals.length; i++) {
        dynamicHTML2 += "<p> First Name: " + animals[i].name +
            "<br/> Gender: " + animals[i].gender +
            "<br/> Age: " + animals[i].age +
            "<br/> Color: " + animals[i].color +
            "<br/> Species: " + animals[i].species +
            "<br/> Weight: " + animals[i].weight +
            "<br/> Height: " + animals[i].height +
            "<br/> Speed: " + animals[i].speed + "</p><hr>";
    }
    document.getElementById("animal").innerHTML = dynamicHTML2;
}
myFunction2();

function myFunction3() {

    var dynamicHTML3 = "";
    for (var i = 0; i < electronics.length; i++) {
        dynamicHTML3 += "<p> Type: " + electronics[i].type +
            "<br/> Number: " + electronics[i].number +
            "<br/> Brand: " + electronics[i].brand +
            "<br/> Year Made: " + electronics[i].yearMade +
            "<br/> Color: " + electronics[i].color +
            "<br/> Size: " + electronics[i].size +
            "<br/> Price: " + electronics[i].price +
            "<br/> Created By: " + electronics[i].createdBy + "</p><hr>";
    }
    document.getElementById("electronic").innerHTML = dynamicHTML3;
}
myFunction3();

function myFunction4() {

    var dynamicHTML4 = "";
    for (var i = 0; i < cars.length; i++) {
        dynamicHTML4 += "<p> Name: " + cars[i].name +
            "<br/> Year Made: " + cars[i].yearMade +
            "<br/> Assembly: " + cars[i].assembly +
            "<br/> Designer: " + cars[i].designer +
            "<br/> Color: " + cars[i].color +
            "<br/> Motor: " + cars[i].motor +
            "<br/> Length: " + cars[i].length +
            "<br/> Height: " + cars[i].height +
            "<br/> Width: " + cars[i].width + "</p><hr>";
    }
    document.getElementById("car").innerHTML = dynamicHTML4;
}
myFunction4();



function myFunction5() {

    var dynamicHTML5 = "";
    for (var i = 0; i < plants.length; i++) {
        dynamicHTML5 += "<p> Name: " + plants[i].name +
            "<br/> Family: " + plants[i].family +
            "<br/> Habitat: " + plants[i].habitat +
            "<br/> Color: " + plants[i].color +
            "<br/> Height: " + plants[i].height +
            "<br/> Scientific Name: " + plants[i].scientificName + "</p><hr>";
    }
    document.getElementById("plant").innerHTML = dynamicHTML5;
}
myFunction5();




function myFunction6() {

    var dynamicHTML6 = "";
    for (var i = 0; i < vegetables.length; i++) {
        dynamicHTML6 += "<p> Name: " + vegetables[i].name +
            "<br/> Energy: " + vegetables[i].energy +
            "<br/> Protein: " + vegetables[i].protein +
            "<br/> Vitamin C: " + vegetables[i].vitaminC +
            "<br/> Potassium: " + vegetables[i].potassium +
            "<br/> Family: " + vegetables[i].family +
            "<br/> Color: " + vegetables[i].color +
            "<br/> Grow: " + vegetables[i].grow + "</p><hr>";
    }
    document.getElementById("vegetable").innerHTML = dynamicHTML6;
}
myFunction6();


function myFunction7() {

    var dynamicHTML7 = "";
    for (var i = 0; i < customers.length; i++) {
        dynamicHTML7 += "<p> Name: " + customers[i].name +
            "<br/> Age: " + customers[i].age +
            "<br/> Gender: " + customers[i].gender +
            "<br/> Career: " + customers[i].career +
            "<br/> Request: " + customers[i].requests +
            "<br/> Offering: " + customers[i].offering +
            "<br/> Due Date: " + customers[i].dueDate + "</p><hr>";
    }
    document.getElementById("customer").innerHTML = dynamicHTML7;
}
myFunction7();


function myFunction8() {

    var dynamicHTML8 = "";
    for (var i = 0; i < students.length; i++) {
        dynamicHTML8 += "<p> First Name: " + students[i].firstName +
            "<br/> Last Name: " + students[i].lastName +
            "<br/> Age: " + students[i].age +
            "<br/> Grade: " + students[i].grade +
            "<br/> Grade Average: " + students[i].gradeAverage +
            "<br/> Strongest Class: " + students[i].strongestClass +
            "<br/> Weakest Class: " + students[i].weakestClass +
            "<br/> Born: " + students[i].born + "</p><hr>";
    }
    document.getElementById("student").innerHTML = dynamicHTML8;
}
myFunction8();


function myFunction9() {

    var dynamicHTML9 = "";
    for (var i = 0; i < teachers.length; i++) {
        dynamicHTML9 += "<p> Name: " + teachers[i].name +
            "<br/> Gender: " + teachers[i].gender +
            "<br/> Email: " + teachers[i].email +
            "<br/> Phone Number: " + teachers[i].phoneNumber +
            "<br/> Years Teaching: " + teachers[i].yearsTeaching +
            "<br/> Subject: " + teachers[i].subject +
            "<br/> Salary: " + teachers[i].salary +
            "<br/> School Location: " + teachers[i].schoolLocation + "</p><hr>";

    }
    document.getElementById("teacher").innerHTML = dynamicHTML9;
}
myFunction9();




function myFunction10() {

    var dynamicHTML10 = "";
    for (var i = 0; i < computers.length; i++) {
        dynamicHTML10 += "<p> Brand: " + computers[i].brand +
            "<br/> Color: " + computers[i].color +
            "<br/> Year: " + computers[i].year +
            "<br/> Type: " + computers[i].type +
            "<br/> Ram: " + computers[i].ram +
            "<br/> Performance: " + computers[i].performance +
            "<br/> Touch Screen: " + computers[i].touchScreen +
            "<br/> Voice Activator: " + computers[i].voiceActivator +
            "<br/> Face Login: " + computers[i].faceLogin + "</p><hr>";
    }
    document.getElementById("computer").innerHTML = dynamicHTML10;
}
myFunction10();
