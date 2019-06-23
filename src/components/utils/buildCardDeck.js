// allCards contiene todas las cartas disponibles
//cards contiene solo el numero de cartas por partida
//Formula para generar número random https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//while para que se detenga cuando escoge las 8 cartas para la partida

 import shuffle from 'shuffle-array';
 import imgs from './CardDeckImg';


 function buildCardDeck() {
     const numberOfCards = 8;  
     const allCards = imgs;    
     let cards=[];                  
    
     while(cards.lenght < numberOfCards){ 
        
         const randomCard = Math.floor(Math.random()* allCards.length);     
         const card ={
             image: allCards.splice(randomCard,1)[0],
             wasGuessed : false
         };
         cards.push(card);
         cards.push({...card});   
     }

  return shuffle(cards);
 };

 export default buildCardDeck;



