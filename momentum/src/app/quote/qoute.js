function qouteClickHandler() {
  let iconChangeQuote = document.querySelector('.icon__change_quote');
  let iconQuoteSvg = document.querySelector('.icon__change_quote_img');
  iconChangeQuote.addEventListener('click', (event) => {
    if (
      event.target === iconChangeQuote ||
      iconChangeQuote.contains(event.target)
    ) {
      if (iconQuoteSvg.classList.contains('icon__rotate-in-process')) return;

      getQuote();

      iconQuoteSvg.classList.add('icon__rotate-in-process');
      setTimeout(() => {
        iconQuoteSvg.classList.remove('icon__rotate-in-process');
      }, 800);
    }
  });
}

function getQuote() {
  let quoteEn = document.querySelector('.quote__content_name');
  let quoteAuthor = document.querySelector('.quote__content_author');
  const apiQuote = `https://programming-quotes-api.herokuapp.com/quotes/lang/en`;
  fetch(apiQuote)
    .then((response) => {
      if (response.status === 403 || response.status === 501) {
        alert(
          `Bad connection with quotes server. Error code: ${response.status}`
        );
      } else return response.json();
    })
    .then((data) => {
      let randomNumber = Math.floor(Math.random() * (data.length + 1));

      while (data[randomNumber].en.length > 240)
        randomNumber = Math.floor(Math.random() * (data.length + 1));
      if (window.innerWidth < 370) {
        while (data[randomNumber].en.length > 180)
          randomNumber = Math.floor(Math.random() * (data.length + 1));
      }

      quoteEn.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>&#8220;${data[randomNumber].en}&#8221;</i>`;
      quoteAuthor.innerHTML = `<i>- ${data[randomNumber].author}</i>`;
    });
}

export { getQuote, qouteClickHandler };
