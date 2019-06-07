//グローバル変数
var cardNumberP = new Array(1,1,1,1,2);       //カードをシャッフルするための配列
var cardNumberC = new Array(1,1,1,1,2);
var randomalgorithm = cardNumberP.length;　　　//カードをシャッフルするための変数
var gameSide;　　　　　　　　　　　　　　　　　　　//ターン判定用の変数　
var gamecnt = 1;                            //何戦目かの判定用

var turn =0;                                   //ターン判定
var cardKey;                               //cardNumberPの中で、奴隷・皇帝の位置
var cardPlayer;
var cardComputer;
var cardhantei = new Array();

//勝敗判定用の変数
var winLose;
var win = "勝利";
var lose = "敗北";
var draw = "引き分け";
var winMaru = "〇"
var loseBatu = "×"

//セレクタ要素を扱う変数
var life_MM;

//カードをターンにつき一枚しか出せないようにする変数
var cnt = 0;

//プレイヤーのライフ
var player_life = 30;

//プレイヤーの賞金
var money_count = 0;
var player_money = 0;

//カードをシャッフルする関数
function randomCard(){
    
//シャッフルアルゴリズム
while (randomalgorithm) {
    var j = Math.floor( Math.random() * randomalgorithm );
    var t = cardNumberP[--randomalgorithm];
    cardNumberP[randomalgorithm] = cardNumberP[j];
    cardNumberP[j] = t;
}
    switch(gamecnt){
        case 1:
        case 2:
        case 3:
        case 7:
        case 8:
        case 9:
        cardKey = cardNumberP.indexOf(2);
        switch(cardKey){
        case 0:
        document.getElementById("card1").style.backgroundImage = "url(../../image/king.jpg)";
        document.getElementById("card2").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card3").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card4").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card5").style.backgroundImage = "url(../../image/citizen.jpg)";
        break;
            
        
            
        case 1:
        document.getElementById("card1").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card2").style.backgroundImage = "url(../../image/king.jpg)";
        document.getElementById("card3").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card4").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card5").style.backgroundImage = "url(../../image/citizen.jpg)";
        break;
            
        case 2:
        document.getElementById("card1").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card2").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card3").style.backgroundImage = "url(../../image/king.jpg)";
        document.getElementById("card4").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card5").style.backgroundImage = "url(../../image/citizen.jpg)";
        break;
            
        case 3:
        document.getElementById("card1").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card2").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card3").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card4").style.backgroundImage = "url(../../image/king.jpg)";
        document.getElementById("card5").style.backgroundImage = "url(../../image/citizen.jpg)";
        break;
            
        case 4:
        document.getElementById("card1").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card2").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card3").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card4").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card5").style.backgroundImage = "url(../../image/king.jpg)";      
        break;
    }
        break;
            
        default :
       cardKey = cardNumberP.indexOf(2);
       switch(cardKey){
        case 0:
        document.getElementById("card3").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card4").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card5").style.backgroundImage = "url(../../image/citizen.jpg)";
        break;
            
        
            
        case 1:
        document.getElementById("card1").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card2").style.backgroundImage = "url(../../image/slave.jpg)";
        document.getElementById("card3").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card4").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card5").style.backgroundImage = "url(../../image/citizen.jpg)";
        break;
            
        case 2:
        document.getElementById("card1").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card2").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card3").style.backgroundImage = "url(../../image/slave.jpg)";
        document.getElementById("card4").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card5").style.backgroundImage = "url(../../image/citizen.jpg)";
        break;
            
        case 3:
        document.getElementById("card1").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card2").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card3").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card4").style.backgroundImage = "url(../../image/slave.jpg)";
        document.getElementById("card5").style.backgroundImage = "url(../../image/citizen.jpg)";
        break;
            
        case 4:
        document.getElementById("card1").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card2").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card3").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card4").style.backgroundImage = "url(../../image/citizen.jpg)";
        document.getElementById("card5").style.backgroundImage = "url(../../image/slave.jpg)";    
        break;
    }
        break;
}
}
    
//カードを中央に移動する関数
function decision1(){
    if((turn - 1) == cnt){
        if(cardKey ==0){                            
        setTimeout('buttle_card_set()',5000);
        var childElement = document.querySelector("#card1");
        childElement.remove();
        cardhantei.push([1,2]);
        cnt++;
    }else{
        document.getElementById("buttle_card1").style.backgroundColor = "darkred";
        document.getElementById("buttle_card1").style.boxSizing= "border-box";
        document.getElementById("buttle_card1").style.border = "solid 5px navy";
        var childElement = document.querySelector("#card1");
        childElement.remove();
        cardhantei.push([1,1]);
        cnt++;
         }
        tonegawa();
        }
        
    }

function decision2(){
    if((turn - 1)==cnt){
        if(cardKey ==1){                            
        document.getElementById("buttle_card1").style.backgroundColor = "darkred";
        document.getElementById("buttle_card1").style.boxSizing= "border-box";
        document.getElementById("buttle_card1").style.border = "solid 5px navy";
        var childElement = document.querySelector("#card2");
        childElement.remove();
        cardhantei.push([2,2]);
        cnt++;
        }else{
        document.getElementById("buttle_card1").style.backgroundColor = "darkred";
        document.getElementById("buttle_card1").style.boxSizing= "border-box";
        document.getElementById("buttle_card1").style.border = "solid 5px navy";
        var childElement = document.querySelector("#card2");
        childElement.remove();
        cardhantei.push([2,1]);
        cnt++;
        }
        tonegawa();
        }
    }

function decision3(){
    if((turn - 1)==cnt){
        if(cardKey ==2){                            
        document.getElementById("buttle_card1").style.backgroundColor = "darkred";
        document.getElementById("buttle_card1").style.boxSizing= "border-box";
        document.getElementById("buttle_card1").style.border = "solid 5px navy";
        var childElement = document.querySelector("#card3");
        childElement.remove();
        cardhantei.push([3,2]);
        cnt++;
        }else{
        document.getElementById("buttle_card1").style.backgroundColor = "darkred";
        document.getElementById("buttle_card1").style.boxSizing= "border-box";
        document.getElementById("buttle_card1").style.border = "solid 5px navy";
        var childElement = document.querySelector("#card3");
        childElement.remove();
        cardhantei.push([3,1]);
        cnt++;
        }
        tonegawa();
    }
    }

function decision4(){
    if((turn - 1)==cnt){
        if(cardKey ==3){                            
        document.getElementById("buttle_card1").style.backgroundColor = "darkred";
        document.getElementById("buttle_card1").style.boxSizing= "border-box";
        document.getElementById("buttle_card1").style.border = "solid 5px navy";
        var childElement = document.querySelector("#card4");
        childElement.remove();
        cardhantei.push([4,2]);
        cnt++;
        }else{
        document.getElementById("buttle_card1").style.backgroundColor = "darkred";
        document.getElementById("buttle_card1").style.boxSizing= "border-box";
        document.getElementById("buttle_card1").style.border = "solid 5px navy";
        var childElement = document.querySelector("#card4");
        childElement.remove();
        cardhantei.push([4,1]);
        cnt++;
        }
       tonegawa();
        }
    }

function decision5(){
    if((turn - 1)==cnt){
        if(cardKey ==4){                            
        document.getElementById("buttle_card1").style.backgroundColor = "darkred";
        document.getElementById("buttle_card1").style.boxSizing= "border-box";
        document.getElementById("buttle_card1").style.border = "solid 5px navy";
        var childElement = document.querySelector("#card5");
        childElement.remove();
        cardhantei.push([5,2]);
        cnt++;
        }else{
        document.getElementById("buttle_card1").style.backgroundColor = "darkred";
        document.getElementById("buttle_card1").style.boxSizing= "border-box";
        document.getElementById("buttle_card1").style.border = "solid 5px navy";
        var childElement = document.querySelector("#card5");
        childElement.remove();
        cardhantei.push([5,1]);
        cnt++;
        }
        tonegawa();
        }
    }

function fight(){
    var a = cardhantei[turn -1];
    cardPlayer = a[1];
    if(cardPlayer == 2){
        switch(gamecnt){
            case 1:
            case 2:
            case 3:
            case 7:
            case 8:
            case 9:
        document.getElementById("buttle_card1").style.backgroundImage = "url(../../image/king.jpg)";
        computerTurnSlave();
        judge();
        break;
                
        default:
        document.getElementById("buttle_card1").style.backgroundImage = "url(../../image/slave.jpg)";
        computerTurnKing();
        judge();
        break;
        }
    }else{
        switch(gamecnt){
            case 1:
            case 2:
            case 3:
            case 7:
            case 8:
            case 9:
        document.getElementById("buttle_card1").style.backgroundImage = "url(../../image/citizen.jpg)";
        computerTurnSlave();
        judge();
        break;
                
        default :
        document.getElementById("buttle_card1").style.backgroundImage = "url(../../image/citizen.jpg)";
        computerTurnKing();
        judge();
        break;
        }    
    }
}

//コンピューターに裏側でカードを出させる関数
function tonegawa(){
    switch(turn){
        case 1:
        var childElement = document.querySelector("#card6");
        childElement.remove();
        document.getElementById("buttle_card2").style.backgroundColor = "darkred";
        document.getElementById("buttle_card2").style.boxSizing= "border-box";
        document.getElementById("buttle_card2").style.border = "solid 5px navy";
        break;
            
        case 2:
        var childElement = document.querySelector("#card7");
        childElement.remove();
        document.getElementById("buttle_card2").style.backgroundColor = "darkred";
        document.getElementById("buttle_card2").style.boxSizing= "border-box";
        document.getElementById("buttle_card2").style.border = "solid 5px navy";
        break;
         
        case 3:
        var childElement = document.querySelector("#card8");
        childElement.remove();
        document.getElementById("buttle_card2").style.backgroundColor = "darkred";
        document.getElementById("buttle_card2").style.boxSizing= "border-box";
        document.getElementById("buttle_card2").style.border = "solid 5px navy";
        break;
       
        case 4:
        var childElement = document.querySelector("#card9");
        childElement.remove();
        document.getElementById("buttle_card2").style.backgroundColor = "darkred";
        document.getElementById("buttle_card2").style.boxSizing= "border-box";
        document.getElementById("buttle_card2").style.border = "solid 5px navy";
        break;
           
        case 5:
        var childElement = document.querySelector("#card10");
        childElement.remove();
        document.getElementById("buttle_card2").style.backgroundColor = "darkred";
        document.getElementById("buttle_card2").style.boxSizing= "border-box";
        document.getElementById("buttle_card2").style.border = "solid 5px navy";
        break;
    }
    
}

//コンピューターが皇帝側の時にカードを出す関数
function computerTurnKing(){
        var y = Math.floor( Math.random() * 10 );
        var e = cardNumberC.indexOf(1);
        if(turn == 1 && y == 0){
            document.getElementById("buttle_card2").style.backgroundImage = "url(../../image/king.jpg)";
            cardComputer = 2;
         }else if(turn == 2 && y % 2 == 0){
            document.getElementById("buttle_card2").style.backgroundImage = "url(../../image/king.jpg)";
            cardComputer = 2;
         }else if(turn == 3 && y % 3 == 0){
            document.getElementById("buttle_card2").style.backgroundImage = "url(../../image/king.jpg)";
            cardComputer = 2;
         }else if(turn == 4 && y % 2 == 0){
            document.getElementById("buttle_card2").style.backgroundImage = "url(../../image/king.jpg)";
            cardComputer = 2;
         }else if(turn == 5){
            document.getElementById("buttle_card2").style.backgroundImage = "url(../../image/king.jpg)";
            cardComputer = 2;
         }else{
            document.getElementById("buttle_card2").style.backgroundImage = "url(../../image/citizen.jpg)";
            cardNumberC.splice(e,e);
            cardComputer = 1;
         }
}

//コンピューターが奴隷側でカードを出す関数
function computerTurnSlave(){
        var y = Math.floor( Math.random() * 10 );
        var e = cardNumberC.indexOf(1);
        if(turn == 1 && y == 0){
            document.getElementById("buttle_card2").style.backgroundImage = "url(../../image/slave.jpg)";
            cardComputer = 2;
         }else if(turn == 2 && !(y % 2 == 0)){
            document.getElementById("buttle_card2").style.backgroundImage = "url(../../image/slave.jpg)";
            cardComputer = 2;
         }else if(turn == 3 && y / 3 >2){
            document.getElementById("buttle_card2").style.backgroundImage = "url(../../image/slave.jpg)";
            cardComputer = 2;
         }else if(turn == 4 && y / 2 >3){
            document.getElementById("buttle_card2").style.backgroundImage = "url(../../image/slave.jpg)";
            cardComputer = 2;
         }else if(turn == 5){
            document.getElementById("buttle_card2").style.backgroundImage = "url(../../image/slave.jpg)";
            cardComputer = 2;
         }else{
            document.getElementById("buttle_card2").style.backgroundImage = "url(../../image/citizen.jpg)";
            cardNumberC.splice(e,e);
            cardComputer = 1;
         }
}
 
function judge(){
      switch(gamecnt){
          case 1:
          case 2:
          case 3: 
          case 7:
          case 8:
          case 9:
    　if(cardPlayer == 2 && cardComputer == 2){
         document.getElementById("message_player").innerHTML =　lose;
         document.getElementById("message_player").style.color = "blue";
         document.getElementById("message_computer").innerHTML = win;
         document.getElementById("message_computer").style.color = "red";
         winLose = 2;
         setTimeout('cardDelete()',3000);
         setTimeout('cardCreate()',3000);
         selectEnabled();
         document.getElementById("money1").innerHTML = money_count;
     }else if(cardPlayer ==1 && cardComputer == 2){
         document.getElementById("message_player").innerHTML =　win;
         document.getElementById("message_player").style.color = "red";
         document.getElementById("message_computer").innerHTML = lose;
         document.getElementById("message_computer").style.color = "blue";
         winLose = 1;
         setTimeout('cardDelete()',3000);
         setTimeout('cardCreate()',3000);
         selectEnabled();
         document.getElementById("money1").innerHTML = money_count;
     }else if(cardPlayer ==2 && cardComputer == 1){
         document.getElementById("message_player").innerHTML =　win;
         document.getElementById("message_player").style.color = "red";
         document.getElementById("message_computer").innerHTML = lose;
         document.getElementById("message_computer").style.color = "blue";
         winLose = 1;
         setTimeout('cardDelete()',3000);
         setTimeout('cardCreate()',3000);
         selectEnabled();
         document.getElementById("money1").innerHTML = money_count;
     }else{
         document.getElementById("message_player").innerHTML =　draw;
         document.getElementById("message_player").style.color = "gray";
         document.getElementById("message_computer").innerHTML = draw;
         document.getElementById("message_computer").style.color = "gray";
         setTimeout('fieldCleaner()',1000);
         setTimeout('turnPlus()',1000);   
     }
        break;
              
        default :
        if(cardPlayer == 2 && cardComputer == 2){
         document.getElementById("message_player").innerHTML =　win;
         document.getElementById("message_player").style.color = "red";
         document.getElementById("message_computer").innerHTML = lose;
         document.getElementById("message_computer").style.color = "blue";
         winLose = 1;
         setTimeout('cardDelete()',3000);
         setTimeout('cardCreate()',3000);
         selectEnabled();
         document.getElementById("money1").innerHTML = money_count;
     }else if(cardPlayer ==1 && cardComputer == 2){
         document.getElementById("message_player").innerHTML =　lose;
         document.getElementById("message_player").style.color = "blue";
         document.getElementById("message_computer").innerHTML = win;
         document.getElementById("message_computer").style.color = "red";
         winLose = 2;
         setTimeout('cardDelete()',3000);
         setTimeout('cardCreate()',3000);
         selectEnabled();
         document.getElementById("money1").innerHTML = money_count;
     }else if(cardPlayer ==2 && cardComputer == 1){
         document.getElementById("message_player").innerHTML =　lose;
         document.getElementById("message_player").style.color = "blue";
         document.getElementById("message_computer").innerHTML = win;
         document.getElementById("message_computer").style.color = "red";
         winLose = 2;
         setTimeout('cardDelete()',3000);
         setTimeout('cardCreate()',3000);
         selectEnabled();
         document.getElementById("money1").innerHTML = money_count;
     }else{
         document.getElementById("message_player").innerHTML =　draw;
         document.getElementById("message_player").style.color = "gray";
         document.getElementById("message_computer").innerHTML = draw;
         document.getElementById("message_computer").style.color = "gray";
         setTimeout('fieldCleaner()',1000);
         setTimeout('turnPlus()',1000);
     }
        break;
     }
       if(winLose == 1){
           switch(gamecnt){
               case 1:
               document.getElementById("box1").innerHTML = winMaru + " " +life_MM + "mm";
               break;
                   
               case 2:
               document.getElementById("box2").innerHTML = winMaru + " " +life_MM + "mm";
               break;
                   
               case 3:
               document.getElementById("box3").innerHTML = winMaru + " " +life_MM + "mm";
               break;
                   
               case 4:
               document.getElementById("box4").innerHTML = winMaru + " " +life_MM + "mm";
               break;
                   
               case 5:
               document.getElementById("box5").innerHTML = winMaru + " " +life_MM + "mm";
               break;
                   
               case 6:
               document.getElementById("box6").innerHTML = winMaru + " " +life_MM + "mm";
               break;
                   
               case 7:
               document.getElementById("box7").innerHTML = winMaru + " " +life_MM + "mm";
               break;
                   
               case 8:
               document.getElementById("box8").innerHTML = winMaru + " " +life_MM + "mm";
               break;
                   
               case 9:
               document.getElementById("box9").innerHTML = winMaru + " " +life_MM + "mm";
               break;
                   
               case 10:
               document.getElementById("box10").innerHTML = winMaru + " " +life_MM + "mm";
               break;
                   
               case 11:
               document.getElementById("box11").innerHTML = winMaru + " " +life_MM + "mm";
               break;
                   
               case 12:
               document.getElementById("box12").innerHTML = winMaru + " " +life_MM + "mm";
               break;
           }
              sumMoney();
              gamecnt++;
              setTimeout('enabledStartButton()',3000);
           　　gamejudge();
       }else if(winLose ==2){
           switch(gamecnt){
               case 1:
               document.getElementById("box1").innerHTML = loseBatu + " " +life_MM + "mm";
               break;
                   
               case 2:
               document.getElementById("box2").innerHTML = loseBatu + " " +life_MM + "mm";
               break;
                   
               case 3:
               document.getElementById("box3").innerHTML = loseBatu + " " +life_MM + "mm";
               break;
                   
               case 4:
               document.getElementById("box4").innerHTML = loseBatu + " " +life_MM + "mm";
               break;
                   
               case 5:
               document.getElementById("box5").innerHTML = loseBatu + " " +life_MM + "mm";
               break;
                   
               case 6:
               document.getElementById("box6").innerHTML = loseBatu + " " +life_MM + "mm";
               break;
                   
               case 7:
               document.getElementById("box7").innerHTML = loseBatu + " " +life_MM + "mm";
               break;
                   
               case 8:
               document.getElementById("box8").innerHTML = loseBatu + " " +life_MM + "mm";
               break;
                   
               case 9:
               document.getElementById("box9").innerHTML = loseBatu + " " +life_MM + "mm";
               break;
                   
               case 10:
               document.getElementById("box10").innerHTML = loseBatu + " " +life_MM + "mm";
               break;
                   
               case 11:
               document.getElementById("box11").innerHTML = loseBatu + " " +life_MM + "mm";
               break;
                   
               case 12:
               document.getElementById("box12").innerHTML = loseBatu + " " +life_MM + "mm";
               break;
           }
           countLife();
           gamecnt++;
           setTimeout('enabledStartButton()',3000);
           gamejudge();
       }
     }

function fieldCleaner(){
    var a = document.querySelector("#buttle_card1");
    a.style.backgroundImage = "none";
    a.style.backgroundColor = "";
    a.style.border = "none";
    var b = document.querySelector("#buttle_card2");
    b.style.backgroundImage = "none";
    b.style.backgroundColor = "";
    b.style.border = "none";
    document.getElementById("message_player").innerHTML =""; 
    document.getElementById("message_computer").innerHTML ="";
}

function cardDelete(){
   var element1 = document.getElementById("player_card_set");
   while (element1.firstChild) {
   element1.removeChild(element1.firstChild);
   }
   var element2 = document.getElementById("computer_card_set");
   while (element2.firstChild) {
   element2.removeChild(element2.firstChild);
   }
}

function cardCreate(){
    var list5 = document.querySelector("#player_card_set");
    var newList5 = '<li id="card5" style="width:80px;height:100px;background-size:cover;background-image:no-repeat center center;"></li>';
    list5.insertAdjacentHTML('afterbegin',newList5);
    
    var click5 = document.getElementById('card5');
    click5.addEventListener('click', function () {
    decision5();
    });
    
    var list4 = document.querySelector("#player_card_set");
    var newList4 = '<li id="card4" style="width:80px;height:100px;background-size:cover;background-image:no-repeat center center;"></li>';
    list4.insertAdjacentHTML('afterbegin',newList4);
    
    var click4 = document.getElementById('card4');
    click4.addEventListener('click', function () {
    decision4();
    });
    
    
    var list3 = document.querySelector("#player_card_set");
    var newList3 = '<li id="card3" style="width:80px;height:100px;background-size:cover;background-image:no-repeat center center;"></li>';
    list3.insertAdjacentHTML('afterbegin',newList3);
    
    var click3 = document.getElementById('card3');
    click3.addEventListener('click', function () {
    decision3();
    });
    
    var list2 = document.querySelector("#player_card_set");
    var newList2 = '<li id="card2" style="width:80px;height:100px;background-size:cover;background-image:no-repeat center center;"></li>';
    list2.insertAdjacentHTML('afterbegin',newList2);
    
    var click2 = document.getElementById('card2');
    click2.addEventListener('click', function () {
    decision2();
    });
    
    var list1 = document.querySelector("#player_card_set");
    var newList1 = '<li id="card1" style="width:80px;height:100px;background-size:cover;background-image:no-repeat center center;"></li>';
    list1.insertAdjacentHTML('afterbegin',newList1);
    
    var click1 = document.getElementById('card1');
    click1.addEventListener('click', function () {
    decision1();
    });
    
    var list6 = document.querySelector("#computer_card_set");
    var newList6 = '<li id="card6" style="width:80px;height:100px;"></li><li id="card7" style="width:80px;height:100px;"></li><li id="card8" style="width:80px;height:100px;"></li><li id="card9" style="width:80px;height:100px;"></li><li id="card10" style="width:80px;height:100px;"></li>';
    
    list6.insertAdjacentHTML('afterbegin',newList6);
    
    fieldCleaner();
}

//table要素に記述する関数
function gameCounter(){
    var comment = "";
    switch(gamecnt){
        
        case 1:
        comment = "第1戦"
        document.getElementById("property").innerHTML = comment;
        document.getElementById("1").style.backgroundColor = "white";
        document.getElementById("1").style.color = "black";
        document.getElementById("box1").innerHTML = life_MM+ "mm";
        break;
            
        case 2:
        comment = "第2戦"
        document.getElementById("property").innerHTML = comment;
        document.getElementById("2").style.backgroundColor = "white";
        document.getElementById("2").style.color= "black";
        document.getElementById("1").style.backgroundColor = "black";
        document.getElementById("1").style.color= "white";
        document.getElementById("box2").innerHTML = life_MM+ "mm";
        break;
            
        case 3:
        comment = "第3戦"
        document.getElementById("property").innerHTML = comment;
        document.getElementById("3").style.backgroundColor = "white";
        document.getElementById("3").style.color= "black";
        document.getElementById("2").style.backgroundColor = "black";
        document.getElementById("2").style.color= "white";
        document.getElementById("box3").innerHTML = life_MM+ "mm";
        break;
            
        case 4:
        comment = "第4戦"
        document.getElementById("property").innerHTML = comment;
        document.getElementById("4").style.backgroundColor = "white";
        document.getElementById("4").style.color= "black";
        document.getElementById("3").style.backgroundColor = "black";
        document.getElementById("3").style.color= "white";
        document.getElementById("box4").innerHTML = life_MM+ "mm";
        break;
            
        case 5:
        comment = "第5戦"
        document.getElementById("property").innerHTML = comment;
        document.getElementById("5").style.backgroundColor = "white";
        document.getElementById("5").style.color= "black";
        document.getElementById("4").style.backgroundColor = "black";
        document.getElementById("4").style.color= "white";
        document.getElementById("box5").innerHTML = life_MM+ "mm";
        break;
            
        case 6:
        comment = "第6戦"
        document.getElementById("property").innerHTML = comment;
        document.getElementById("6").style.backgroundColor = "white";
        document.getElementById("6").style.color= "black";
        document.getElementById("5").style.backgroundColor = "black";
        document.getElementById("5").style.color= "white";
        document.getElementById("box6").innerHTML = life_MM+ "mm";
        break;
            
        case 7:
        comment = "第7戦"
        document.getElementById("property").innerHTML = comment;
        document.getElementById("7").style.backgroundColor = "white";
        document.getElementById("7").style.color= "black";
        document.getElementById("6").style.backgroundColor = "black";
        document.getElementById("6").style.color= "white";
        document.getElementById("box7").innerHTML = life_MM+ "mm";
        break;
            
        case 8:
        comment = "第8戦"
        document.getElementById("property").innerHTML = comment;
        document.getElementById("8").style.backgroundColor = "white";
        document.getElementById("8").style.color= "black";
        document.getElementById("7").style.backgroundColor = "black";
        document.getElementById("7").style.color= "white";
        document.getElementById("box8").innerHTML = life_MM+ "mm";
        break;
            
        case 9:
        comment = "第9戦"
        document.getElementById("property").innerHTML = comment;
        document.getElementById("9").style.backgroundColor = "white";
        document.getElementById("9").style.color= "black";
        document.getElementById("8").style.backgroundColor = "black";
        document.getElementById("8").style.color= "white";
        document.getElementById("box9").innerHTML = life_MM+ "mm";
        break;
            
        case 10:
        comment = "第10戦"
        document.getElementById("property").innerHTML = comment;
        document.getElementById("10").style.backgroundColor = "white";
        document.getElementById("10").style.color= "black";
        document.getElementById("9").style.backgroundColor = "black";
        document.getElementById("9").style.color= "white";
        document.getElementById("box10").innerHTML = life_MM+ "mm";
        break;
            
        case 11:
        comment = "第11戦"
        document.getElementById("property").innerHTML = comment;
        document.getElementById("11").style.backgroundColor = "white";
        document.getElementById("11").style.color= "black";
        document.getElementById("10").style.backgroundColor = "black";
        document.getElementById("10").style.color= "white";
        document.getElementById("box11").innerHTML = life_MM+ "mm";
        break;
            
        case 12:
        comment = "第12戦"
        document.getElementById("property").innerHTML = comment;
        document.getElementById("12").style.backgroundColor = "white";
        document.getElementById("12").style.color= "black";
        document.getElementById("11").style.backgroundColor = "black";
        document.getElementById("11").style.color= "white";
        document.getElementById("box12").innerHTML = life_MM+ "mm";
        break;
    }
}

function lifeMoney(){
    var element = document.querySelector("#lifeSelect");
    life_MM = element.value;
}
 

function selectDisabled(){
   var element = document.querySelector("#lifeSelect");
   element.remove(); 
   document.getElementById("selector").innerHTML = life_MM + "mm";
}

function selectEnabled(){
   document.getElementById("selector").innerHTML = "";
   var list = document.querySelector("#selector");
   var newList = '<select id="lifeSelect"><option value="1">1mm</option><option value="2">2mm</option><option value="3">3mm</option><option value="4">4mm</option><option value="5">5mm</option><option value="6">6mm</option><option value="7">7mm</option><option value="8">8mm</option><option value="9">9mm</option><option value="10">10mm</option><option value="11">11mm</option><option value="12">12mm</option><option value="13">13mm</option><option value="14">14mm</option><option value="15">15mm</option><option value="16">16mm</option><option value="17">17mm</option><option value="18">18mm</option><option value="19">19mm</option><option value="20">20mm</option><option value="21">21mm</option><option value="22">22mm</option><option value="23">23mm</option><option value="24">24mm</option><option value="25">25mm</option><option value="26">26mm</option><option value="27">27mm</option><option value="28">28mm</option><option value="29">29mm</option><option value="30">30mm</option></select>';
   list.insertAdjacentHTML('afterbegin',newList);  
   var change = document.getElementById('lifeSelect');
   change.addEventListener('onchange', function () {
    selectMoney();
    });
}

//負けた場合にゲームオーバーかを計算する関数
function gameover(){
    if(player_life <= 0){
        document.getElementById("message_player").innerHTML = "GAME OVER";
        setTimeout('reset()',5000);
    }
}

//負けた場合にライフを計算する関数
function countLife(){
    player_life = player_life - life_MM;
    document.getElementById("Life").innerHTML = player_life;
    gameover();
}

//賞金を計算する関数
function countMoney(){
    switch(gamecnt){
        case 1:
        case 2:
        case 3:
        case 7:
        case 8:
        case 9:
        money_count = life_MM * 10;
        document.getElementById("money1").innerHTML = money_count;
        break;
            
        default:
        money_count = life_MM * 50;
        document.getElementById("money1").innerHTML = money_count;
        break;
    }
}

//累計の賞金を計算する関数
function sumMoney(){
        player_money = player_money + money_count;
        document.getElementById("money2").innerHTML = player_money;
        money_count = 0;
}

//12試合でゲームを終わらせる関数 
function gamejudge(){
    if(gamecnt > 12){
        if(player_money >= 2000){
        document.getElementById("message_player").innerHTML = "あなたは\"逆境無頼\"です";
        document.getElementById("message_player").style.fontSize = "30px";
        document.getElementById("message_player").style.color = "red";    
        setTimeout('reset()',2000);
         }else if(player_money < 2000 && player_money >= 1500){
        document.getElementById("message_player").innerHTML = "あなたは\"悪魔\"です";
        document.getElementById("message_player").style.fontSize = "30px";
        document.getElementById("message_player").style.color = "red";    
        setTimeout('reset()',2000);    
        }else if(player_money < 1500 && player_money >= 1000){
        document.getElementById("message_player").innerHTML = "あなたは\"Brave Men Road\"です";
        document.getElementById("message_player").style.fontSize = "30px";
        document.getElementById("message_player").style.color = "red";    
        setTimeout('reset()',2000);    
        }else if(player_money < 1000){
        document.getElementById("message_player").innerHTML = "あなたは\"地下帝国\"行きです";   
        document.getElementById("message_player").style.fontSize = "30px";
        document.getElementById("message_player").style.color = "red";    
        setTimeout('reset()',2000);
        }
        
    }
}

//turn変数をプラスにする関数(setTimeout用)
function turnPlus(){
    turn++;
}

//スタートボタンを使えなくする関数
function disabledStartButton(){
    var obj = document.getElementById("startbutton");
    obj.disabled = true;  
}

//スタートボタンを使えるようにする関数
function enabledStartButton(){
    var obj = document.getElementById("startbutton");
    obj.disabled = false;
}
    
    
function start(){
    lifeMoney();
    countMoney();
    selectDisabled();
    winLose = 0;
    cnt = 0;
    turn = 1;
    cardhantei =[];
    randomCard();
    gameCounter();
    disabledStartButton();
}

function reset(){
    document.getElementById("box1").innerHTML = "";
    document.getElementById("1").style.backgroundColor = "black";
    document.getElementById("1").style.color = "white";
    document.getElementById("box2").innerHTML = "";
    document.getElementById("2").style.backgroundColor = "black";
    document.getElementById("2").style.color = "white";
    document.getElementById("box3").innerHTML = "";
    document.getElementById("3").style.backgroundColor = "black";
    document.getElementById("3").style.color = "white";
    document.getElementById("box4").innerHTML = "";
    document.getElementById("4").style.backgroundColor = "black";
    document.getElementById("4").style.color = "white";
    document.getElementById("box5").innerHTML = "";
    document.getElementById("5").style.backgroundColor = "black";
    document.getElementById("5").style.color = "white";
    document.getElementById("box6").innerHTML = "";
    document.getElementById("6").style.backgroundColor = "black";
    document.getElementById("6").style.color = "white";
    document.getElementById("box7").innerHTML = "";
    document.getElementById("7").style.backgroundColor = "black";
    document.getElementById("7").style.color = "white";
    document.getElementById("box8").innerHTML = "";
    document.getElementById("8").style.backgroundColor = "black";
    document.getElementById("8").style.color = "white";
    document.getElementById("box9").innerHTML = "";
    document.getElementById("9").style.backgroundColor = "black";
    document.getElementById("9").style.color = "white";
    document.getElementById("box10").innerHTML = "";
    document.getElementById("10").style.backgroundColor = "black";
    document.getElementById("10").style.color = "white";
    document.getElementById("box11").innerHTML = "";
    document.getElementById("11").style.backgroundColor = "black";
    document.getElementById("11").style.color = "white";
    document.getElementById("box12").innerHTML = "";
    document.getElementById("12").style.backgroundColor = "black";
    document.getElementById("12").style.color = "white";
    document.getElementById("property").innerHTML = "Eカード";
    winLose =0;
    player_money = 0;
    document.getElementById("money2").innerHTML = player_money;
    player_life = 30;
    document.getElementById("Life").innerHTML = player_life;
    gamecnt = 1;
    turn = 0;
    cardhantei = [];
    cardDelete();
    setTimeout(cardCreate(),2000);
    selectEnabled();
    enabledStartButton();
}
    