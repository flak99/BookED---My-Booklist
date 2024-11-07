
// let openModal = document.querySelectorAll('.book-info-container');
// let modal = document.querySelectorAll(".modal-all");

// openModal.forEach(e => {
    
//     e.addEventListener("click", () => {
//         modal.style.visibility = "visible";
//         console.log(modal)
//     });
// })

// console.log(modal)
// console.log(openModal)

document.addEventListener("DOMContentLoaded", () => {
    let openModal = document.querySelectorAll('.book-info-container');

    openModal.forEach(e => {
        // Poprawne pobranie elementu o klasie "modal-all" (użyj querySelector zamiast getElementsByClassName)
        let modal = document.querySelector(".modal-all");

        if (modal) {  // Sprawdzamy, czy modal istnieje
            e.addEventListener("click", () => {
                modal.style.visibility = "visible";  // Ukrywamy modal
                console.log(modal.style.visibility);  // Logujemy, żeby sprawdzić, czy widoczność się zmieniła
            });
        } else {
            console.error("Element o klasie 'modal-all' nie został znaleziony!");
        }
    });
});
