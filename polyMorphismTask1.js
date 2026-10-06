//PolyMorphism Example 1 

class Money{
    pay(){
        console.log("Making Payment through Handcash")
        
    }

}
class UPI extends Money{
    //Overridding
    pay(){
        console.log("Paying Through UPI");
        
    }
}
class DebitCard extends UPI{
    //overridding
    pay(){
        console.log("Paying Through Debit Card");
        
    }
}
class Banking extends DebitCard{
    //overridding
    pay(){
        console.log("Paying Through Net Banking");
        
    }
}

console.log("----from money Object----");
let a1 =new Money()
a1.pay()

console.log("----from UPI Object----");
let a2 =new UPI()
a2.pay()

console.log("----from Debit card Object----");
let a3 =new DebitCard()
a3.pay()

console.log("----from Banking Object----");
let a4 =new Banking()
a4.pay()

//Example 2 

class Fruit{
    taste(){
        console.log("Fruit Has a taste");
        
    }
}
class  Lemon extends Fruit{
    taste(){
        console.log("lemons are  sour ");
        
    }
    juice(){
        console.log("Juices are making---");
        
    }
    vitaminc(){
        console.log("...it has Vitamin C....");
        
    }


}
class mango extends Lemon{
    taste(){
        console.log("Mangos are Sweet");
        
    }
    largeSeed(){
        console.log("mango Has Large Seed");
        
    }
    vitaminA(){
        console.log("It has Vitamin A .....");
        
    }

}
let b1 =new Fruit()
b1.taste()
let b2=new Lemon()
b2.taste()
b2.juice()
b2.vitaminc()
let b3=new mango()
b3.taste()
b3.juice()
b3.vitaminc()
b3.vitaminA()
b3.largeSeed()

//example 3 with polymorphism

class Cricket{
    overs(){
        console.log("n number of overs");
        
    }
    Batsmen(){
        console.log("Scoring Runs");
        
    }
    bowler(){
        console.log("Bowler Bowls Ball");
        
    }
}

class ODIformat extends Cricket{
    overs(){
        console.log("50 overs per Each Side")}
    powerplay(){
        console.log("there is PowerPlay ");
        
    }    
}
class t20formet extends ODIformat{
    overs(){
        console.log("20 overs per Each Side");
        
    }
    Stratergy(){
        console.log("Building Innings slowly");
        
    }
  
}

let c1 =new Cricket()
c1.overs()
c1.Batsmen()
c1.bowler()

console.log("----ODI Object");
let c2 =new ODIformat()
c2.overs()
c2.bowler()
c2.Batsmen()
c2.powerplay()

console.log("----T20 Object");
let c3 =new t20formet()
c3.overs()
c3.bowler()
c3.Batsmen()
c3.powerplay()
c3.Stratergy()









