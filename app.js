const API_KEY = '5ccfd12e46507cfd4fb158af91d36264'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'
const button = document.querySelector(`button`)
const resultsDisplay = document.querySelector(`.movie-list h2`)
const query = document.querySelector(`#search-input`)

button.addEventListener('click', async () => {
  let userSearch = document.querySelector(`input`).value
  const input = `${DOMAIN}/search/movie?api_key=${API_KEY}&query=${userSearch}`
  let response = await axios.get(input)
  let API_RESULTS = response.data.results
  document.body.style.height = `auto`
  document.querySelector(`section`).innerHTML = ``
  API_RESULTS.forEach((result) => {
    let title = result.title
    let lang = result.original_language
    let date = result.release_date
    let pic = result.poster_path
    let img = document.createElement(`img`)
    img.src = `${IMAGE_BASE_PATH + pic}`
    img.alt = `Movie Poster`
    let section = document.querySelector(`section`)
    let list = document.createElement(`li`)
    list.innerHTML = `<b>Title:</b> ${title}</br> <b>Date:</b> ${date}</br> <b>Original Language:</b> ${lang}`
    let div = document.createElement(`div`)
    section.appendChild(div).appendChild(list)
    section.appendChild(div).appendChild(img)
  })
})

query.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    button.click()
  }
})
