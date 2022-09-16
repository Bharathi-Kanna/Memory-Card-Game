const cards = document.querySelectorAll(".card");

let cardOne,cardTwo,count=0;
let disableDeck = true;
function flipcard(e){
    let clickedCard = e.target;
   if(disableDeck){
    clickedCard.classList.add("flip");
    if(!(cardOne)) return cardOne=clickedCard;
    cardTwo=clickedCard;
    disableDeck = false;
    let cardOneImg = cardOne.querySelector("img").src,
    cardTwoImg = cardTwo.querySelector("img").src;
    checkEqual(cardOneImg,cardTwoImg);
   }
}

function shuffleCard(){
    count=0;
    cardOne=cardTwo="";
    disableDeck = true;
    let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    arr.sort(()=>Math.random()>0.5?1:-1);
    cards.forEach((card,index) =>{
        card.classList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = `Images/img-${arr[index]}.png`
        card.addEventListener("click",flipcard);
    });
}


function checkEqual(img1,img2){
    if(img1 == img2) { 
        count++;
        if(count==8){
          setTimeout(()=>{
            return  shuffleCard();
          },1200);
        }
        cardOne.removeEventListener("click",flipcard);
        cardTwo.removeEventListener("click",flipcard);
        cardOne=cardTwo="";
        return disableDeck = true;
    }
   setTimeout(()=>{
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
   },400);
   setTimeout(()=>{
    cardOne.classList.remove("shake","flip");
    cardTwo.classList.remove("shake","flip");
   cardOne=cardTwo="";
   disableDeck = true;
   },1400);
}
// cards.forEach(card =>{
//     card.addEventListener("click",flipcard);
// })
shuffleCard();
