/*Efter att ha finkammat hela js filen så beslutade jag mig för att allt ska bort och byggas upp på nytt. Oklart om
det var meningen eller om jag är helt ute och cyklar.
*/
   // Mörker läge toggle-funktion
   const toggleButton = document.querySelector(".dark-mode-toggle");

   const toggleDarkMode = () => {
     document.body.classList.toggle("dark-mode");
     const isDarkMode = document.body.classList.contains("dark-mode");
     localStorage.setItem("darkModeEnabled", isDarkMode);
   };

   toggleButton.addEventListener("click", toggleDarkMode);

   // Sätter Mörker läget vid sidladdning om det tidigare valts
   const darkModeFromStorage = localStorage.getItem("darkModeEnabled");
   if (darkModeFromStorage === "true") {
     document.body.classList.add("dark-mode");
   }
