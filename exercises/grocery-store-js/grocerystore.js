let shopper = {
    groceryCart: ["bread", "mayo", "mustard", "little debbies snack cakes", "deli turkey (the good kind)"],
    //groceryCart array
    greeting: "Hello and welcome to Sams club. Have you seen our hot deals on bot generated memes?",
    //string
    price: 0,
    whiteBread: false,
    //number, it's free cause you coupon so good. 
    breadCheck: function changeBoolean(){
        if (shopper.groceryCart[0] === "bread") {
        return console.log("Yep I have bread");
    } else {
        return console.log("I forgot the bread")
    };
    
    
}};
shopper.breadCheck(shopper.groceryCart);
