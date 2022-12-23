export default new (class searchView {
  handler(handler) {
    const search = document.querySelector(".--search");

    search.addEventListener("submit", (x) => {
      x.preventDefault();
      const input = document.querySelector(".--search--input");
      const searchValue = input.value;

      input.value = "";
      handler(searchValue);
    });
  }
})();
