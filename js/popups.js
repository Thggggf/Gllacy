let isStorageSupport = true;
const storage = "";
try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
};
const link = document.querySelector(".nav-login");
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    const storage = localStorage.getItem("login")
    const popup = document.querySelector(".modal-login");
    popup.classList.add("modal-show");
    popup.classList.add("modal-error");
    const login = popup.querySelector(".login-email");
    const password = popup.querySelector(".login-password");

    if (storage) {
        login.value = storage
        password.focus();

    } else {
        login.focus();
    }
});
window.addEventListener("keydown", function (evt) {
    const popup = document.querySelector(".modal-login");
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
        }

    }
    popup.classlist.remove("modal-error");
});

const popup = document.querySelector(".modal-login");
const form = popup.querySelector(".modal-login-form");



form.addEventListener("submit", function (evt) {
    const popup = document.querySelector(".modal-login")
    const login = popup.querySelector(".login-email")
    const password = popup.querySelector(".login-password")
    if (!login.value || !password.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");

    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }


})

const SearchModalLink = document.querySelector(".nav-search");
SearchModalLink.addEventListener("click", function () {
    const SearchModal = document.querySelector(".modal-search");
    SearchModal.classList.add("modal-show");

});

window.addEventListener("keydown", function (evt) {
    const SearchModal = document.querySelector(".modal-search");
    if (evt.keyCode === 27) {
        if (SearchModal.classList.contains("modal-show")) {
            evt.preventDefault();
            SearchModal.classList.remove("modal-show");
        }

    }

});

const BasketModalLink = document.querySelector(".nav-basket");
BasketModalLink.addEventListener("click", function () {
    const BasketModal = document.querySelector(".modal-basket");
    BasketModal.classList.add("modal-show");

});

window.addEventListener("keydown", function (evt) {
    const BasketModal = document.querySelector(".modal-basket");
    if (evt.keyCode === 27) {
        if (BasketModal.classList.contains("modal-show")) {
            evt.preventDefault();
            BasketModal.classList.remove("modal-show");
        }

    }

});
const CatalogModalLink = document.querySelector(".nav-catalog");
CatalogModalLink.addEventListener("click", function (evt) {
    evt.defaultPrevented();
    const CatalogModal = document.querySelector(".modal-catalog");
    CatalogModal.classList.add("modal-show");

});

window.addEventListener("keydown", function (evt) {

    const CatalogModal = document.querySelector(".modal-catalog");
    if (evt.keyCode === 27) {
        if (CatalogModal.classList.contains("modal-show")) {
            evt.preventDefault();
            CatalogModal.classList.remove("modal-show");
        }

    }

});





const FeedbackModalLink = document.querySelector(".modal-feedback-form-button");
FeedbackModalLink.addEventListener("click", function () {
    const FeedbackModal = document.querySelector(".modal-feedback");
    const OverLay = document.querySelector(".fade")
    OverLay.classList.add("overlay");

    FeedbackModal.classList.add("modal-show");



});



window.addEventListener("keydown", function (evt) {

    const FeedbackModal = document.querySelector(".modal-feedback");
    if (evt.keyCode === 27) {
        if (FeedbackModal.classList.contains("modal-show") || OverLay.classList.contains("overlay")) {
            evt.preventDefault();
            const OverLay = document.querySelector(".fade")
            OverLay.classList.remove("overlay");
            FeedbackModal.classList.remove("modal-show");

        }

    }

});


const FeedbackClose = document.querySelector(".modal-feedback-close");
FeedbackClose.addEventListener("click", function () {
    const FeedbackModal = document.querySelector(".modal-feedback");

    FeedbackModal.classList.remove("modal-show");
    const OverLay = document.querySelector(".fade")
    OverLay.classList.remove("overlay");
});
// slider code





