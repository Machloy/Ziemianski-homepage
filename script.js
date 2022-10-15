{
  const onChangeHeader = () => {
    const changeHeaderBtn = document.querySelector(".js-headerBtn");
    const mainHeader = document.querySelector(".js-mainHeader");
    mainHeader.classList.toggle("biggerHeader");

    changeHeaderBtn.innerText = mainHeader.classList.contains("biggerHeader")
      ? "Pomniejsz nagłówek"
      : "Powiększ nagłówek";
  };
  
  const init = () => {
    const changeHeaderBtn = document.querySelector(".js-headerBtn");
    changeHeaderBtn.addEventListener("click", onChangeHeader);
  };

  init();
}
