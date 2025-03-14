// Simulerad blockering av tråden (Känns dumt, behöver ersättas med en icke blockerande lösning)
setInterval(() => {
  let start = Date.now()
  while (Date.now() - start < 1000) {}
}, 3000)

// Skriver ut HTML direkt i dokumentet (kan störa sidinnehåll. jag vill anv innerHTML, eller säkrare appendChild för att manipulera DOM)
document.write("<h1 style='color:black;'>HELLO FROM DOCUMENT.WRITE()</h1>")
document.write("<p>Another document.write() call</p>")

// Förhindrar användaren att navigera bakåt (Dålig UX, navigeringslogiken är bruten)
history.pushState(null, "", location.href)
window.onpopstate = () => history.go(1)

// Ändrar bakgrundsfärgen slumpmässigt var 500ms (Irriterande för ögonen och framförallt för de med visuella svårigheter, eller kanske t.om epilepsi)
setInterval(() => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16)
}, 500)

// Visar innehållet på sidan efter 5 sekunder (Ingen vill se en tom skärm så länge- vi vill ha innehållet direkt. 
// Även fast den vore en bra mindfulness-paus för många)
setTimeout(() => {
  document.body.style.display = "block"
}, 5000)

// Loggar 10000 tal till konsolen efter 1 sekund (Tar onödig prestanda! Den bör tas bort)
setTimeout(() => {
  for (let i = 0; i < 10000; i++) {
    console.log(i)
  }
}, 1000)

// // Visar en alert när sidan har laddats (Jag kan inte se varför man visuellt ska få en alert när sidan laddats. Kanske kan skärmläsaren behöva en?)
// document.addEventListener("DOMContentLoaded", function () {
//   alert("Page loaded!")
// })

// Loggar 100 000 siffror direkt när sidan laddas (Belastar webbläsaren i onödan!)
for (let i = 0; i < 100000; i++) {
  console.log(i)
}
