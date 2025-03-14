# sjpi-accessibility-1
May day, May day - help me save the site!

 1. Läs noga genom koden och identifiera alla tillgänglighetsproblem.
 [x]
 
 2. Testa kör lighthouse i devtools(Google chrome) och se vilka problem som finns.
 SVAR: 
 -Performance 45
 -Accessibility 83
 -Best Practices 52
 -SEO 82

 EFTER MIN "Rescue"
 -Performance 100
 -Accessibility 96
 -Best Practices 96
 -SEO 91

 3. Skriv en kort sammanfattning av vad som är fel och hur det kan åtgärdas.
 Sammanfattning: 
 -Javascripten är onödigt trög att köra och skulle kunna städas och minifieras.
 -Länkar leder till att nya sidor öppnas istället för att cachas så att man snabbt kan gå framåt och bakåt. 
 -Huvudinnehållet tar för lång tid att ladda pga tröga bildformat (PNG/JPG). Webp och VIF är moderna format. 
 -CSS:en skulle man kunna städa upp och minifiera så att den inte tar lika mycket utrymme och kapacitet. (Jag gör inte detta nu)
 -Animerat innehåll stjäl prestanda och stora GIF:s är okloka att avända som animerat innehåll. 
 -För animerat innehåll och videos är det bättre att använda MPEG4/WebM. 
 -Bilder saknar alt text

 -Statiskt innehåll kan cachas för att uppladdning ska kunna gå snabbare vid ett återbesök, så jag skulle vilja lagra dem lokalt med en _headers-fil.
 Källa: https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/?utm_source=lighthouse&utm_medium=devtools


 4. Skriv om koden så att den följer tillgänglighetsstandarder.
 [Jag skrev om HTML:en, CSS:en och så raderade jag till slut hela javascript innehållet för att ersätta det med det enda jag kände är relevant med det innehåll som finns just nu på sidan. 
 Jag anser att webbsidan inte har någon nödvändig interaktions logik som är värd att ha kvar. Jag känner viss osäkerhet kring huruvuda jag borde bygga upp en användarvänlig funktionalitet?

 Den mesta JS:en upplevde jag som en belastning på prestanda i nuläget, även fast jag såg mycket UI+UX- förbättrings potential i JS:filen om sidan vore lite mer utvecklad]

 5. Skriv en kort sammanfattning av vad du har ändrat och varför.
 [Jag har rensat bort onödig och prestandakrävande JS-kod (som t,ex blockerande loopar, överdriven logging och onödiga fördröjningar). Jag har lagat HTML:en från trasiga länkar, dubblett-taggar, obefintliga foton och jag har kastat bort en fejk ad som ger åksjuka! 
 Jag har moderniserat DOM:en. Jag har också implementerat ett mörker läge genom att lägga till en växlande 
 CSS-klass, som gör att användaren kan byta mellan ljust och mörkt läge. 
 Tanken bakom dessa ändringar är att förbättra sidans prestanda, användarupplevelse och tillgänglighet.]

 6. Testa din nya kod med andra verktyg för tillgänglighet.
 [Nej, pga tidsbrist så settlar jag för G]

 7. Skriv en kort reflektion över hur det var att göra uppgiften. Vad var svårt? Vad lärde du dig?
 [Grymt kul och lärorik uppgift! Jag lärde mig vikten av att skriva clean/dry JS, minimera bildstorlekar
 och tänka semantik i HTML. Jag fick verkligen en djupare förståelse för vad koden i javascript, css och html faktiskt innebär ur ett användarperspektiv. 
 Utmaningen var att göra ändringar utan att ändra grunden för mycket. 
 Att dessutom få till en bra usability krävde en hel del eftertanke och jag fick verkligen tänka till.  
 För mig blev det tydligt vad det i tekniken innebär att ta hänsyn till UI och UX]
 ____________________________________________________________________________________________________




 
komihåg anteckningar: 
eager = laddar img direkt
lazy = laddar bara när användaren scrollar ner
srcset = Laddar den mest passande strl på img beroende på upplösning och skärm
Bildoptimering= https://squoosh.app/   och   https://tinypng.com/