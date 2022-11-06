let date = ["21/11", "24/11", "28/11", "02/12"]
let day = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]

function createGame(player1, time, player2) {
  return `
              <li> 
                    <img src="./assets/icon-${player1}.svg" alt=" Bandeira do(a) ${player2}">
                    <strong>${time}</strong>
                    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
            </li>
  `
}

function createCard(date, day, game) {
  return `<div class="card">
                <h2>${date} <span>${day}</span></h2>
               <!--<div class="card"></div>--> 
            <ul>

             ${game}
            </ul>
            </div>      
  
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    date[0],
    day[1],
    createGame("uk", "10:00", "iran") + createGame("usa", "16:00", "gales")
  ) +
  createCard(
    date[1],
    day[4],
    createGame("suica", "07:00", "camaroes") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(date[2], day[1], createGame("brazil", "13:00", "suica")) +
  createCard(date[3], day[5], createGame("brazil", "16:00", "camaroes"))
