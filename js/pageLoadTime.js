(() => {
    const timeOfBegginingLoad = Date.now();
    window.addEventListener("load", () => {
        const timeOfEndingLoad = Date.now();
        const loadTimeItem = document.querySelector(".loadTime");
        loadTimeItem.innerText = timeOfEndingLoad - timeOfBegginingLoad + "ms";
    });
})();
