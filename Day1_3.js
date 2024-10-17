var month = "Mar";

switch(month){
    case "Jan": case "Dec" : case "Nov":
        console.log("Winter");
        break;
    case "Apr": case "May" : case "Jun": case "Jul":
        console.log("Summer");
        break;
    case "Feb": case "Mar" : 
        console.log("Spring");
        break;
    case "Sep": case "Aug" :
        console.log("Monsoon");
        break;
    case "Oct":
        console.log("Autumn");
        break;
}