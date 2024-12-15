

document.addEventListener("DOMContentLoaded", function(){

    // Wyświetlanie modalu
    let modalArea = document.querySelector(".modal-all");
    let booksToShow = document.querySelectorAll(".books-container");

    booksToShow.forEach(book => {
        book.addEventListener("click", function(){
            modalArea.classList.toggle("modal-all-enter");
        })
    });
    
    //Zamykanie modalu
    let closeModal = document.getElementById("close-modal");
    closeModal.addEventListener("click", function(){
        modalArea.classList.remove("modal-all-enter");
    })

    // Obsługa side baru (zamykaie i otwieranie pasków)

    // Kategorie
    let catBtn = document.getElementById("cat-open-btn");
        catBtn.onclick = ShowCat;
        function ShowCat(){
            let categories = document.getElementById("categories-name-id");
            if (categories.style.display === "flex") {
                categories.style.display = "none";
            } else {
                categories.style.display = "flex";
            }
        }
       
        
  




    //Tworzenie folderów

    let foldersArea = document.querySelector(".folders-area");
    let folderBtn = document.getElementById("add-btn");

    folderBtn.addEventListener("click", function(){
        const newListItem = document.createElement("li");
        let liText =prompt("Proszę wpisac nazwe folderu");
        newListItem.textContent = liText;
        newListItem.classList.add("text-style")
        foldersArea.appendChild(newListItem);
    })





})








