

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let firstCard = 10
let secondCard = 1
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let message=""

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Card: " 
    
    sumEl.textContent = "Sum:"+ sum 
    let isAlive = true
    if (sum <= 20) {
        message ="Do you want to draw a card a new card?"
    }else if(sum === 21) {
        message = "wohoo! you got blackjack!"
        hasBlackJack = true
    }else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    //console.log("Draw a new card from the deck!")
   let card = 5
   sum+=card

   startGame()
   
}