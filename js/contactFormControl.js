const form = document.querySelector(".main-form-form");
const input = form.querySelector("input");
const itemList = document.querySelector(".main-form-list");

let emails = JSON.parse(localStorage.getItem("emails"));
if (!emails) {
    emails = [];
}

emails.forEach((email) => {
    const element = document.createElement("div");
    element.classList.add("main-form-list__item");
    element.innerHTML = `<p>${email.value}</p>`;
    itemList.insertAdjacentElement("afterBegin", element);
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = {
        value: input.value,
    };
    emails.push(email);

    localStorage.setItem("emails", JSON.stringify(emails));

    const element = document.createElement("div");
    element.classList.add("main-form-list__item");
    element.innerHTML = `<p>${email.value}</p>`;
    itemList.insertAdjacentElement("afterBegin", element);

    input.value = "";
});
