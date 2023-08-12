var values = readline().split(' ');
var price = values[0];
var money = values[1];
var numberOfBananas = values[2];


for(var i = 0; i < numberOfBananas; i++){
    money -= ((i + 1) * price);
}

if(money < 0) print(Math.abs(money))
else print(0)