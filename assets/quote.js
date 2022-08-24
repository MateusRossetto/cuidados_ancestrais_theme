const text = document.querySelector("#quotation");

fetch("https://type.fit/api/quotes")
  .then(response => {
    return response.json();
  })
  .then(data => {
    let random_number = Math.floor(Math.random() * 1643);
    text.innerHTML = `${data[random_number].text} <i>${data[random_number].author}</i>`;
});

