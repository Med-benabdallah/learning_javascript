var age = 10;
if (age >= 65) {
  console.log("You get your income from your pension");
}else if (age < 65 && age >= 18) {
  console.log("Each month you get a salary");
}else if (age < 18){
    console.log("You get  an allowance")
}else{
    console.log("the value of the age variable is not numerical")
}


var name = "sunday";
switch (name) {
    case "sunday":
        console.log("Today is a Sunday");
        break;
    case "monday":
        console.log("Today is a Monday");
        break;
    case "tuesday":
        console.log("Today is a Tuesday");
        break;
    case "wednesday":
        console.log("Today is a Wednesday");
        break;
    case "thursday":
        console.log("Today is a Thursday");
        break;
    case "friday":
        console.log("Today is a Friday");
        break;
    case "saturday":
        console.log("Today is a Saturday");
        break;
    default:
        console.log("there is no such a day");
}