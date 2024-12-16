// закрытие модального окна по клику вне окна
const closeevent = document.addEventListener('click', function (event) {
    var e = document.querySelector('#amoforms_iframe_1295267.active');
    if (!e.contains(event.target)) {
        e.classList.remove('active');
        document.removeEventListener('click', closeevent);
    }
});

// Исправляем год в footer copyRight на текущий
document.querySelector(".copyrightYear").innerHTML = new Date().getFullYear();
