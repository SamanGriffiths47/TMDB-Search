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
  let h2 = document.querySelector(`h2`)
  document.body.style.height = `auto`
  h2.innerText = ``
  h2.innerText = `(Hover Over Image)`
  document.querySelector(`section`).innerHTML = ``
  API_RESULTS.forEach((result) => {
    let title = result.title
    let lang = result.original_language
    let date = result.release_date
    let pic = result.poster_path
    let section = document.querySelector(`section`)
    let list = document.createElement(`li`)
    let img = document.createElement(`img`)
    let div = document.createElement(`div`)
    img.src = `${IMAGE_BASE_PATH + pic}`
    img.alt = `Movie Poster`
    list.innerHTML = `<b>Title:</b> ${title}</br> <b>Date:</b> ${date}</br> <b>Original Language:</b> ${lang}`
    section.appendChild(div).appendChild(img)
    section.appendChild(div).appendChild(list)
  })
  for (let i = 0; i < document.querySelectorAll(`div`).length; i++) {
    document.querySelectorAll(`div`)[i].className = 'movie'
  }
  for (let i = 0; i < document.querySelectorAll(`li`).length; i++) {
    document.querySelectorAll(`li`)[i].className = 'description'
  }
  let poster = document.getElementsByTagName(`div`)
  for (let i = 0; i < poster.length; i++) {
    poster[i].addEventListener('mouseover', function (event) {
      event.currentTarget.childNodes[1].className = `description-posterli`
      event.currentTarget.className = `movie-posterdiv`
    })
  }
  for (let i = 0; i < poster.length; i++) {
    poster[i].addEventListener('mouseout', function (event) {
      event.currentTarget.childNodes[1].className = `description`
      event.currentTarget.className = `movie`
    })
  }
})
query.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    button.click()
  }
})
