







const canvas = document.getElementById("canvas");
let context = canvas.getContext("2d"); 

let backroundColor = colorMixRand();
let black = "black";
let color = colorMixRand();
let duckYellow = "yellow";
let orange = "#ff5000";
let alliGreen = "#8bc24a";
let white = "#fffffe";
let foxWhite = "#dcdcdc";
let foxOrange = "#ff7e00";
let CatCharCoal = "#1c1a27";
let tan = "#e4aa7a";
let foxGray = "#464646";
let widthOfScreen;
let heightOfScreen;
let gold = "#fba50d";
let sharkBlue = "#566e7a";
let sharkLightBlue = "#ced7dd";
let sharkWhite = "#ffffff";
let red = "#ff0000"

let cursor = [
    "#00000000",   "#00000000",   "#00000000",   black,         black,         black,         black,         "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   black,         white,         white,         black,         "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   black,         white,         white,         black,         "#00000000",   "#00000000",   "#00000000",   
    black,         black,         black,         black,         white,         white,         black,         black,         black,         black,         
    black,         white,         white,         white,         white,         white,         white,         white,         white,         black,         
    black,         white,         white,         white,         white,         white,         white,         white,         white,         black,         
    black,         black,         black,         black,         white,         white,         black,         black,         black,         black,         
    "#00000000",   "#00000000",   "#00000000",   black,         white,         white,         black,         "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   black,         white,         white,         black,         "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   black,         black,         black,         black,         "#00000000",   "#00000000",   "#00000000",   
];

let duck = [
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",      
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         duckYellow,    duckYellow,    duckYellow,    duckYellow,    black,         "#00000000",   "#00000000",   "#00000000",  
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    black,         "#00000000",   "#00000000",  
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         duckYellow,    duckYellow,    duckYellow,    duckYellow,    black,         duckYellow,    black,         black,         black,        
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    orange,        orange,        black,        
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    orange,        black,         black,        
    black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         duckYellow,    duckYellow,    duckYellow,    black,         black,         black,         "#00000000",  
    black,         duckYellow,    black,         black,         "#00000000",   "#00000000",   "#00000000",   black,         duckYellow,    duckYellow,    duckYellow,    black,         "#00000000",   "#00000000",   "#00000000",  
    black,         duckYellow,    duckYellow,    duckYellow,    black,         black,         black,         duckYellow,    duckYellow,    duckYellow,    duckYellow,    black,         "#00000000",   "#00000000",   "#00000000",  
    black,         duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    black,         duckYellow,    duckYellow,    duckYellow,    black,         "#00000000",   "#00000000",  
    "#00000000",   black,         duckYellow,    black,         duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    black,         duckYellow,    duckYellow,    black,         "#00000000",   "#00000000",  
    "#00000000",   black,         duckYellow,    duckYellow,    black,         duckYellow,    duckYellow,    duckYellow,    black,         duckYellow,    duckYellow,    duckYellow,    black,         "#00000000",   "#00000000",  
    "#00000000",   black,         black,         duckYellow,    duckYellow,    black,         black,         black,         duckYellow,    duckYellow,    duckYellow,    black,         "#00000000",   "#00000000",   "#00000000",  
    "#00000000",   "#00000000",   black,         black,         duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",  
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         black,         black,         black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",  
    black,         black,         black,         black,         black,         black,         black,         black,         black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",  
];

let duckFlipped = [
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",  
    "#00000000",   "#00000000",   "#00000000",   black,         duckYellow,    duckYellow,    duckYellow,    duckYellow,    black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",  
    "#00000000",   "#00000000",   black,         duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",  
    black,         black,         black,         duckYellow,    black,         duckYellow,    duckYellow,    duckYellow,    duckYellow,    black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",  
    black,         orange,        orange,        duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",  
    black,         black,         orange,        duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",  
    "#00000000",   black,         black,         black,         duckYellow,    duckYellow,    duckYellow,    black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,        
    "#00000000",   "#00000000",   "#00000000",   black,         duckYellow,    duckYellow,    duckYellow,    black,         "#00000000",   "#00000000",   "#00000000",   black,         black,         duckYellow,    black,        
    "#00000000",   "#00000000",   "#00000000",   black,         duckYellow,    duckYellow,    duckYellow,    duckYellow,    black,         black,         black,         duckYellow,    duckYellow,    duckYellow,    black,        
    "#00000000",   "#00000000",   black,         duckYellow,    duckYellow,    duckYellow,    black,         duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    black,        
    "#00000000",   "#00000000",   black,         duckYellow,    duckYellow,    black,         duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    black,         duckYellow,    black,         "#00000000",  
    "#00000000",   "#00000000",   black,         duckYellow,    duckYellow,    duckYellow,    black,         duckYellow,    duckYellow,    duckYellow,    black,         duckYellow,    duckYellow,    black,         "#00000000",  
    "#00000000",   "#00000000",   "#00000000",   black,         duckYellow,    duckYellow,    duckYellow,    black,         black,         black,         duckYellow,    duckYellow,    black,         black,         "#00000000",  
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         duckYellow,    duckYellow,    duckYellow,    duckYellow,    duckYellow,    black,         black,         "#00000000",   "#00000000",  
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         black,         black,         black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",  
];

let alligator = [
    black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    black,         alliGreen,     black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         alliGreen,     alliGreen,     black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    black,         alliGreen,     black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         "#00000000",   black,         "#00000000",   black,         "#00000000",   "#00000000",   black,         alliGreen,     black,         black,         alliGreen,     black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    black,         alliGreen,     alliGreen,     black,         "#00000000",   "#00000000",   "#00000000",   black,         alliGreen,     black,         alliGreen,     black,         alliGreen,     black,         black,         alliGreen,     alliGreen,     black,         white,         alliGreen,     black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   black,         alliGreen,     alliGreen,     black,         black,         black,         alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     black,         alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     black,         black,         black,         black,         black,         black,         
    "#00000000",   black,         alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     black,         alliGreen,     black,         alliGreen,     black,         
    "#00000000",   "#00000000",   black,         alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     black,         alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     black,         
    "#00000000",   "#00000000",   "#00000000",   black,         alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     black,         alliGreen,     alliGreen,     alliGreen,     alliGreen,     black,         black,         black,         black,         black,         black,         black,         "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     black,         alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     black,         "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   black,         alliGreen,     alliGreen,     black,         black,         black,         black,         black,         black,         alliGreen,     alliGreen,     black,         "#00000000",   black,         black,         black,         black,         black,         black,         black,         black,         "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   black,         alliGreen,     alliGreen,     black,         alliGreen,     alliGreen,     black,         "#00000000",   "#00000000",   black,         alliGreen,     alliGreen,     black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         "#00000000",   black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
];

let alligatorFlipped = [
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,          
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         alliGreen,     alliGreen,     black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         alliGreen,     black,         
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         alliGreen,     black,         black,         alliGreen,     black,         "#00000000",   "#00000000",   black,         "#00000000",   black,         "#00000000",   black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         alliGreen,     black,         
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         alliGreen,     white,         black,         alliGreen,     alliGreen,     black,         black,         alliGreen,     black,         alliGreen,     black,         alliGreen,     black,         "#00000000",   "#00000000",   "#00000000",   black,         alliGreen,     alliGreen,     black,         
    black,         black,         black,         black,         black,         black,         alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     black,         alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     black,         black,         black,         alliGreen,     alliGreen,     black,         "#00000000",   
    black,         alliGreen,     black,         alliGreen,     black,         alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     black,         "#00000000",   
    black,         alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     black,         alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     black,         "#00000000",   "#00000000",   
    "#00000000",   black,         black,         black,         black,         black,         black,         black,         alliGreen,     alliGreen,     alliGreen,     alliGreen,     black,         alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     black,         "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   black,         alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     black,         alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     alliGreen,     black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   black,         black,         black,         black,         black,         black,         black,         black,         "#00000000",   black,         alliGreen,     alliGreen,     black,         black,         black,         black,         black,         black,         alliGreen,     alliGreen,     black,         "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         alliGreen,     alliGreen,     black,         "#00000000",   "#00000000",   black,         alliGreen,     alliGreen,     black,         alliGreen,     alliGreen,     black,         "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         "#00000000",   black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   
];

let catFlipped = [
    "#00000000",   black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   black,         CatCharCoal,   black,         "#00000000",   "#00000000",   "#00000000",   black,         CatCharCoal,   black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   black,         CatCharCoal,   CatCharCoal,   black,         black,         black,         CatCharCoal,   CatCharCoal,   black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    black,         CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   black,         "#00000000",   "#00000000",   black,         black,         "#00000000",   
    black,         CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   black,         "#00000000",   "#00000000",   black,         CatCharCoal,   black,         
    black,         CatCharCoal,   gold,          CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   gold,          CatCharCoal,   CatCharCoal,   black,         "#00000000",   "#00000000",   black,         CatCharCoal,   black,         
    black,         CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   black,         "#00000000",   black,         CatCharCoal,   CatCharCoal,   black,         
    "#00000000",   black,         CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   red,           red,           black,         CatCharCoal,   CatCharCoal,   black,         "#00000000",   
    "#00000000",   "#00000000",   black,         red,           red,           red,           red,           red,           red,           CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   black,         "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   black,         CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   black,         "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   black,         CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   black,         "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   black,         CatCharCoal,   black,         CatCharCoal,   black,         black,         black,         CatCharCoal,   black,         CatCharCoal,   black,         "#00000000",   "#00000000",   "#00000000",   
];

let cat = [
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         CatCharCoal,   black,         "#00000000",   "#00000000",   "#00000000",   black,         CatCharCoal,   black,         "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         CatCharCoal,   CatCharCoal,   black,         black,         black,         CatCharCoal,   CatCharCoal,   black,         "#00000000",   
    "#00000000",   black,         black,         "#00000000",   "#00000000",   black,         CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   black,         
    black,         CatCharCoal,   black,         "#00000000",   "#00000000",   black,         CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   black,         
    black,         CatCharCoal,   black,         "#00000000",   "#00000000",   black,         CatCharCoal,   CatCharCoal,   gold,          CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   gold,          CatCharCoal,   black,         
    black,         CatCharCoal,   CatCharCoal,   black,         "#00000000",   black,         CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   black,         
    "#00000000",   black,         CatCharCoal,   CatCharCoal,   black,         red,           red,           CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   black,         "#00000000",   
    "#00000000",   "#00000000",   black,         CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   red,           red,           red,           red,           red,           red,           black,         "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   black,         CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   black,         "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   black,         CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   CatCharCoal,   black,         "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   black,         CatCharCoal,   black,         CatCharCoal,   black,         black,         black,         CatCharCoal,   black,         CatCharCoal,   black,         "#00000000",   "#00000000",   
];

let fox = [
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         "#00000000",   "#00000000",   "#00000000",   black,         "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         foxGray,       black,         "#00000000",   black,         foxGray,       black,         "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         tan,           black,         black,         black,         tan,           black,         "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         foxOrange,     foxOrange,     foxOrange,     foxOrange,     foxOrange,     black,         "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         foxOrange,     black,         foxOrange,     black,         foxOrange,     black,         "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         foxOrange,     foxOrange,     foxOrange,     foxOrange,     foxOrange,     black,         "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   black,         foxWhite,      foxWhite,      foxWhite,      black,         foxWhite,      foxWhite,      foxWhite,      black,         
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         foxWhite,      foxWhite,      foxWhite,      foxWhite,      foxWhite,      black,         "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         black,         black,         black,         "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         foxOrange,     foxOrange,     foxOrange,     foxOrange,     foxOrange,     black,         "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         foxOrange,     foxOrange,     foxWhite,      foxOrange,     foxOrange,     black,         "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   black,         foxOrange,     foxOrange,     foxWhite,      foxWhite,      foxWhite,      foxOrange,     black,         "#00000000",   
    "#00000000",   black,         black,         foxOrange,     foxOrange,     black,         foxWhite,      black,         foxWhite,      black,         black,         "#00000000",   
    black,         foxWhite,      foxOrange,     black,         foxOrange,     black,         foxWhite,      black,         foxWhite,      black,         "#00000000",   "#00000000",   
    black,         black,         black,         black,         black,         black,         black,         black,         black,         black,         "#00000000",   "#00000000",   
];

let foxFlipped = [
    "#00000000",   "#00000000",   black,         "#00000000",   "#00000000",   "#00000000",   black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   black,         foxGray,       black,         "#00000000",   black,         foxGray,       black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   black,         tan,           black,         black,         black,         tan,           black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   black,         foxOrange,     foxOrange,     foxOrange,     foxOrange,     foxOrange,     black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   black,         foxOrange,     black,         foxOrange,     black,         foxOrange,     black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   black,         foxOrange,     foxOrange,     foxOrange,     foxOrange,     foxOrange,     black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    black,         foxWhite,      foxWhite,      foxWhite,      black,         foxWhite,      foxWhite,      foxWhite,      black,         "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   black,         foxWhite,      foxWhite,      foxWhite,      foxWhite,      foxWhite,      black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   black,         black,         black,         black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   black,         foxOrange,     foxOrange,     foxOrange,     foxOrange,     foxOrange,     black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   black,         foxOrange,     foxOrange,     foxWhite,      foxOrange,     foxOrange,     black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   black,         foxOrange,     foxWhite,      foxWhite,      foxWhite,      foxOrange,     foxOrange,     black,         "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   black,         black,         foxWhite,      black,         foxWhite,      black,         foxOrange,     foxOrange,     black,         black,         "#00000000",   
    "#00000000",   "#00000000",   black,         foxWhite,      black,         foxWhite,      black,         foxOrange,     black,         foxOrange,     foxWhite,      black,         
    "#00000000",   "#00000000",   black,         black,         black,         black,         black,         black,         black,         black,         black,         black,         
];

let shark = [
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         sharkBlue,     black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         black,         black,         sharkBlue,     sharkBlue,     black,         black,         black,         black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   black,         sharkBlue,     black,         black,         black,         black,         sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     white,         white,         black,         black,         black,         black,         
    "#00000000",   "#00000000",   black,         sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     white,         black,         sharkBlue,     sharkBlue,     sharkBlue,     black,         
    "#00000000",   black,         sharkBlue,     black,         sharkLightBlue,sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkWhite,    sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     black,         "#00000000",   
    "#00000000",   black,         black,         "#00000000",   black,         sharkLightBlue,sharkLightBlue,sharkLightBlue,sharkLightBlue,sharkLightBlue,sharkLightBlue,sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkWhite,    sharkWhite,    sharkWhite,    sharkWhite,    black,         "#00000000",   "#00000000",   
    black,         black,         "#00000000",   "#00000000",   "#00000000",   black,         black,         black,         black,         black,         sharkBlue,     sharkBlue,     sharkLightBlue,sharkLightBlue,sharkLightBlue,sharkLightBlue,sharkWhite,    sharkWhite,    black,         "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         sharkBlue,     sharkBlue,     black,         black,         black,         black,         black,         black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         "#00000000",   black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         "#00000000",   "#00000000",   black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
];

let sharkFlipped = [
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         sharkBlue,     black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         black,         black,         black,         sharkBlue,     sharkBlue,     black,         black,         black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         "#00000000",   
    black,         black,         black,         black,         white,         white,         sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     black,         black,         black,         black,         sharkBlue,     black,         "#00000000",   
    black,         sharkBlue,     sharkBlue,     sharkBlue,     black,         white,         sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     black,         "#00000000",   "#00000000",   
    "#00000000",   black,         sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkWhite,    sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkLightBlue,black,         sharkBlue,     black,         "#00000000",   
    "#00000000",   "#00000000",   black,         sharkWhite,    sharkWhite,    sharkWhite,    sharkWhite,    sharkBlue,     sharkBlue,     sharkBlue,     sharkBlue,     sharkLightBlue,sharkLightBlue,sharkLightBlue,sharkLightBlue,sharkLightBlue,sharkLightBlue,black,         "#00000000",   black,         black,         "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   black,         sharkWhite,    sharkWhite,    sharkLightBlue,sharkLightBlue,sharkLightBlue,sharkLightBlue,sharkBlue,     sharkBlue,     black,         black,         black,         black,         black,         "#00000000",   "#00000000",   "#00000000",   black,         black,         
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         black,         black,         black,         black,         black,         sharkBlue,     sharkBlue,     black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         black,         "#00000000",   black,         black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
    "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   black,         "#00000000",   "#00000000",   black,         "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   "#00000000",   
];




///////////////////////////////////////Variables To Mess Around With!/////////////////////////////////////////////
let numFriends = 100;
let friendVarient = shark;
//can be shark,alligator,cat,fox or duck

let scale = 2.5;

let friendlynessQuotient = 8;
let maxFriendlyness = 13;
let minFriendlyness = 2;
let scaredness = 2

let friendlyFriendsAvoidSocialDistancing = true;

let friendsSocialDistance = true;
let socialDistance = 270;

let friendsAvoidEdges = true;
let wallAvoidence = 170;

let invisibleBarrier = true;

let colorMix = true;

let lookBackDistanceForFearModeOnly = 50000;

let CursorLocationDisplayed = true;
let multiCursorHavock = false;
let multiCursorsCanBeDeleted = true;
let cursorsCanBeDeletedByPressingC = true;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////





let friendlyness = [];
let friendWidth;
let posX = [];
let posY = [];
let dx = [];
let dy = [];
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let multiMouseX = [];
let multiMouseY = [];
let mouseMoved = false;
let colorMixture = [];
let mousePressed = false;
let sociality = [];

let friend = [];

let friendFlipped = [];

let scaredMode = false;
let altScaredness = 1/scaredness**2;


function setup(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    widthOfScreen = window.innerWidth;
    heightOfScreen = window.innerHeight;
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    if(friendVarient === alligator){
        friend = alligator;
        friendFlipped = alligatorFlipped;
        friendCompileLength = 27;
        friendCompileLengthFlipped = 27;
        friendCompileWidth = 27;
        friendCompileWidthFlipped = 27;
        friendWidth = scale * 27;
        friendHeight = scale * 13;
    }else if(friendVarient === duck){
        friend = duck;
        friendFlipped = duckFlipped;
        friendCompileLength = 15;
        friendCompileLengthFlipped = 15;
        friendCompileWidth = 15;
        friendCompileWidthFlipped = 15;
        friendWidth = scale * 15;
        friendHeight = scale * 15;
    }else if(friendVarient === cat){
        friend = cat;
        friendFlipped = catFlipped;
        friendCompileLength = 16;
        friendCompileLengthFlipped = 16;
        friendCompileWidth = 16;
        friendCompileWidthFlipped = 16;
        friendWidth = scale * 16;
        friendHeight = scale * 12;
    }else if(friendVarient === fox){
        friend = fox;
        friendFlipped = foxFlipped;
        friendCompileLength = 12;
        friendCompileLengthFlipped = 12;
        friendCompileWidth = 12;
        friendCompileWidthFlipped = 12;
        friendWidth = scale * 13;
        friendHeight = scale * 15;
    }else if(friendVarient === shark){
        friend = shark;
        friendFlipped = sharkFlipped;
        friendCompileLength = 22;
        friendCompileLengthFlipped = 22;
        friendCompileWidth = 22;
        friendCompileWidthFlipped = 22;
        friendWidth = scale * 22;
        friendHeight = scale * 12;
    }
    for(let i = 0;i < numFriends;i++){
        posX.push(getRandomInt(friendWidth / 2, widthOfScreen - friendWidth / 2));
        posY.push(getRandomInt(friendHeight / 2, heightOfScreen - friendHeight / 2));
        dx.push(posX[i]);
        dy.push(posY[i]);
        let occupier = getRandomInt(minFriendlyness*20,maxFriendlyness*20)
        friendlyness.push((occupier/10000)*friendlynessQuotient);
        sociality.push(friendlyness[i]*100);
        colorMixture[i] = colorMixRand();
    }
    setInterval(frame, 1);
}

function frame() {
    context.fillStyle = backroundColor;
    context.fillRect(0, 0, widthOfScreen, heightOfScreen);

    if(multiCursorHavock === true){
        if(scaredMode){
            for (let i = 0; i < numFriends; i++) {
                for (let j = 0; j < multiMouseX.length; j++) {

                    dx[i] = multiMouseX[j] - posX[i];
                    dy[i] = multiMouseY[j] - posY[i];
                    
                    let distance = Math.sqrt(dx[i] * dx[i] + dy[i] * dy[i]);
                    
                    let speed = 1/(distance * friendlyness[i]);
                    if (distance > 1) {
                        posX[i] -= ((dx[i] / distance) * speed) * distance/altScaredness;
                        posY[i] -= ((dy[i] / distance) * speed) * distance/altScaredness;
                    }
                }
                drawDucksRight(i);
            }
        }else{
            for (let i = 0; i < numFriends; i++) {
                for (let j = 0; j < multiMouseX.length; j++) {

                    dx[i] = multiMouseX[j] - posX[i];
                    dy[i] = multiMouseY[j] - posY[i];
                    
                    let distance = Math.sqrt(dx[i] * dx[i] + dy[i] * dy[i]);
                    
                    if (distance > 1) {
                        let speed = distance * friendlyness[i];
                        posX[i] += (dx[i] / distance) * speed;
                        posY[i] += (dy[i] / distance) * speed;
                    }
                }
                drawDucksRight(i);
            }
        }
    }else{
        if(scaredMode){
            for (let i = 0; i < numFriends; i++) {
                dx[i] = mouseX - posX[i];
                dy[i] = mouseY - posY[i];
        
                let distance = Math.sqrt(dx[i] * dx[i] + dy[i] * dy[i]);
                
                let speed = 1/(distance * friendlyness[i]);
                if (distance > 1) {
                    posX[i] -= ((dx[i] / distance) * speed) * distance/altScaredness;
                    posY[i] -= ((dy[i] / distance) * speed) * distance/altScaredness;
                }
        
                let angle = Math.atan2(dy[i], dx[i]);
    
                if(distance >= lookBackDistanceForFearModeOnly){
                    if (angle > Math.PI / 2 || angle < -Math.PI / 2) {
                        drawDucksLeft(i);
                    } else {
                        drawDucksRight(i);
                    }
                }else{
                    if (angle > Math.PI / 2 || angle < -Math.PI / 2) {
                        drawDucksRight(i);
                    } else {
                        drawDucksLeft(i);
                    }
                }
            }
        }else{
            for (let i = 0; i < numFriends; i++) {
                dx[i] = mouseX - posX[i];
                dy[i] = mouseY - posY[i];
        
                let distance = Math.sqrt(dx[i] * dx[i] + dy[i] * dy[i]);
        
                if (distance > 1) {
                    let speed = distance * friendlyness[i];
                    posX[i] += (dx[i] / distance) * speed;
                    posY[i] += (dy[i] / distance) * speed;
                }
        
                let angle = Math.atan2(dy[i], dx[i]);
        
    
                if (angle > Math.PI / 2 || angle < -Math.PI / 2) {
                    drawDucksLeft(i);
                } else {
                    drawDucksRight(i);
                }
            }
        }
    }
    

    if(friendsSocialDistance){
        socialDistancing();
    }
    
    if(friendsAvoidEdges){
        avoidEdges();
    }

    if(mousePressed === true && CursorLocationDisplayed === true && multiCursorHavock === false){
        drawCursor(1);
    }

    if(CursorLocationDisplayed === true && multiCursorHavock === true){
        for (let i = 0; i < multiMouseX.length; i++) {
        drawMultiCursor(i);
        }
    }
    
    if(invisibleBarrier){
        stayInBounds()
    }
}

function socialDistancing(){
    for (let i = 0; i < numFriends; i++) {
        for (let j = 0; j < numFriends; j++) {
            if (i !== j) {
                let dxDuck = posX[i] - posX[j];
                let dyDuck = posY[i] - posY[j];
                let dist = Math.sqrt(dxDuck * dxDuck + dyDuck * dyDuck);
                if(friendlyFriendsAvoidSocialDistancing === true){
                    if (dist < socialDistance && dist > 0.01) {
                        let repulseStrength = (socialDistance - dist) * 0.05 * 1/sociality[i];
                        posX[i] += (dxDuck / dist) * repulseStrength;
                        posY[i] += (dyDuck / dist) * repulseStrength;
                    }
                }else{
                    if (dist < socialDistance && dist > 0.01) {
                        let repulseStrength = (socialDistance - dist) * 0.05;
                        posX[i] += (dxDuck / dist) * repulseStrength;
                        posY[i] += (dyDuck / dist) * repulseStrength;
                    }
                }
                
            }
        }
    }
}

function avoidEdges(){
    for (let i = 0; i < numFriends; i++) {
        let dxfar = widthOfScreen - posX[i] + 35;
        let dyfar = heightOfScreen - posY[i] + 30;
        let dxclose = posX[i] + 35;
        let dyclose = posY[i] + 30;
        dxfar = (1/dxfar**(1/3));
        dyfar = (1/dyfar**(1/3));
        dxclose = (1/dxclose**(1/3));
        dyclose = (1/dyclose**(1/3));
        posX[i] += dxclose * wallAvoidence;
        posY[i] += dyclose * wallAvoidence;
        posX[i] -= dxfar * wallAvoidence;
        posY[i] -= dyfar * wallAvoidence;
    }
}

function stayInBounds(){
    for (let i = 0; i < numFriends; i++) {
        if(posX[i] > widthOfScreen - friendWidth / 2){
            let dx = posX[i] - widthOfScreen + friendWidth / 2;
            posX[i] -= dx;
        }
        if(posX[i] < friendWidth / 2){
            let dx = -posX[i] + friendWidth / 2;
            posX[i] += dx;
        }
        if(posY[i] > heightOfScreen - friendHeight / 2){
            let dy = posY[i] - heightOfScreen + friendHeight / 2;
            posY[i] -= dy;
        }
        if(posY[i] < friendHeight / 2){
            let dy = -posY[i] + friendHeight / 2;
            posY[i] += dy;
        }
    }
}

function drawDucksRight(j) {
    for (let i = 0; i < friend.length; i++) {
        let xf = i % friendCompileLength;
        let yf = Math.floor(i / friendCompileWidth);
        pixel(xf, yf, 1, 1, friend[i], j);
    }
}

function drawDucksLeft(j) {
    for (let i = 0; i < friendFlipped.length; i++) {
        let xf = i % friendCompileLengthFlipped;
        let yf = Math.floor(i / friendCompileWidthFlipped);
        pixel(xf, yf, 1, 1, friendFlipped[i], j);
    }
}

function drawCursor(j){
    for (let i = 0; i < cursor.length; i++) {
        let xf = i % 10;
        let yf = Math.floor(i / 10);
        pixelCursor(xf, yf, 1, 1, cursor[i], j);
    }
}

function drawMultiCursor(j){
    for (let k = 0; k < multiMouseX.length; k++) {
        for (let i = 0; i < cursor.length; i++) {
            let xf = i % 10;
            let yf = Math.floor(i / 10);
            pixelMultiCursor(xf, yf, 1, 1, cursor[i], j, k);
        }
    }
}

function pixel(x, y, length, width, color, j) {
    if (color === duckYellow && colorMix === true) {
        color = colorMixture[j] || duckYellow;
    }
    if (color === alliGreen && colorMix === true) {
        color = colorMixture[j] || alliGreen;
    }
    if (color === CatCharCoal && colorMix === true) {
        color = colorMixture[j] || CatCharCoal;
    }
    if (color === foxOrange && colorMix === true) {
        color = colorMixture[j] || foxOrange;
    }
    if (color === foxWhite && colorMix === true) {
        color = colorMixture[j] || foxWhite;
    }
    if (color === sharkWhite && colorMix === true) {
        color = colorMixture[j] || sharkWhite;
    }
    if (color === sharkBlue && colorMix === true) {
        color = colorMixture[j] || sharkBlue;
    }
    if (color === sharkLightBlue && colorMix === true) {
        color = colorMixture[j] || sharkLightBlue;
    }
    context.fillStyle = color;
    context.fillRect((x * scale) + posX[j] - friendWidth / 2, (y * scale) + posY[j] - friendHeight / 2, length * scale, width * scale);
}

function pixelCursor(x, y, length, width, color) {
    context.fillStyle = color;
    context.fillRect((x * scale) + mouseX - 5 * scale, (y * scale) + mouseY - 5 * scale, length * scale, width * scale);
}

function pixelMultiCursor(x, y, length, width, color, k) {
    context.fillStyle = color;
    context.fillRect((x * scale) + multiMouseX[k] - 5 * scale, (y * scale) + multiMouseY[k] - 5 * scale, length * scale, width * scale);
}

let intervalId = null;

function resetScreen(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    clearInterval(intervalId);
    intervalId = null;
}



function mousemove(event){
    if(mousePressed === false){
       mouseX = event.clientX;
        mouseY = event.clientY;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorMixRand(){
    let thisRandColor = Math.floor(Math.random() * 16777215).toString(16);
        for(let i = 0;i < 6;i++){
            let length = thisRandColor.length;
        if(length < 6){
            thisRandColor = "0" + thisRandColor;
        }else{
            break;
        }
    }
    return "#" + thisRandColor;
}

window.onload = setup();

function mousedown(event){
    if(multiCursorHavock === true){
        if(event.button === 0){
            if(multiCursorsCanBeDeleted){
                if(multiMouseX.length === 0){
                    multiMouseX.push(event.clientX);
                    multiMouseY.push(event.clientY);    
                }else{
                    let occupier = false;
                    for(let i = 0;i < multiMouseX.length;i++){
                        if(event.clientX < multiMouseX[i] + 5 * scale && event.clientX > multiMouseX[i] - 5 * scale && event.clientY < multiMouseY[i] + 5 * scale && event.clientY > multiMouseY[i] - 5 * scale){
                            multiMouseX.splice(i, 1);
                            multiMouseY.splice(i, 1);
                            occupier = true;
                        }
                    }
                    if(occupier === false){
                        multiMouseX.push(event.clientX);
                        multiMouseY.push(event.clientY);    
                    }
                }
                
            }else{
                multiMouseX.push(event.clientX);
                multiMouseY.push(event.clientY);
            }
        }
    }else{
        if(event.button === 0){
            mousePressed = true;
        }
    }
    
    if(event.button === 2){
        scaredMode = true;
    }
}

function mouseup(event){
    if(event.button === 0){
        mousePressed = false;
        mouseX = event.clientX;
        mouseY = event.clientY;
    }
    if(event.button === 2){
        scaredMode = false;
    }
}

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

function handlekeys(event){
    console.log("key pressed" + event.key)
    if(event.key === "c"||event.key === "C"){
        console.log("c")
    }else{
        console.log("!c")
    }
}










