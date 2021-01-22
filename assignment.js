
            // Start code for Kilometer to Meter coversation

function kilometerToMeter(kilometerValue){
    if(kilometerValue<0)
    {
        return 'Kilometer value can not be negative.'
    }
    else
    {
        return kilometerValue*1000;
    }
}
var meterValue=kilometerToMeter(); //Enter a number that your wish
console.log(meterValue);

            // End code for Kilometer to Meter coversation



            // Start code for budget calculator

function budgetCalculator(watch, phone,laptop){
    var result=((watch*50)+(phone*100)+(laptop*500));
    return result;
}
var calculator=budgetCalculator();//Enter three number that your wish
console.log(calculator);


            //End code for budget calculator//


            // Start code for Hotel Cost
function hotelCost(stayDay){

    var cost=0;
    if(stayDay<0)
    {
        return "Invalid day choose to stay.";
    }
    else if( stayDay <=10)
    {
       cost=stayDay*100;
    }
    else if( stayDay <= 20)
    {
        var firstTenDayBill = 10*100;
        var remainAfterTenDay = stayDay-10;
        var afterTenDayBill = remainAfterTenDay*80;
        cost = firstTenDayBill + afterTenDayBill;
      
    }
      else
    {
        var firstTenDayBill = 10*100;
        var afterTenDayBill = 10*80;
        var remainAfterTweentyDay = stayDay-20;
        var afterTweentyDayBill = remainAfterTweentyDay*50;
        cost = firstTenDayBill + afterTenDayBill+afterTweentyDayBill;
      
    }
    return cost;
}
var toalCost=hotelCost();//Enter a number that your wish
console.log(toalCost);


            // End code for  Hotel Cost


            // Start code for find largest string
function megaFriend (friend){
    
    var megafriend=friend[0];

    for(var x=0; x<friend.length; x++ )
    {
        
        if(friend[x].length>megafriend.length)
        {
            megafriend=friend[x];
        }
    }
  return megafriend;
}

var friendlist=megaFriend(["opu","misu","mohona","selfish arif","selfish monu"]);
console.log(friendlist);

            // End code for find largest string