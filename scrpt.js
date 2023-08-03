function toggleMode() {
  //esta buscando no documento na teg HTML//
  const html = document.documentElement

  // 'if'condições, esta perguntando se no html tem  a classlist 'light'.
  //if (html.classList.contains("light"))

  //se tiver essa função vai remover a classlist 'light'
  //{html.classList.remove("light")}

  //else {html.classList.add("light")}
  //'else' se não tiver a classlist 'light' essa função vai adicionar

  html.classList.toggle("light")
  //essa função é o remudo de tudo isso ai em cima "ela tem a função de adiciobar e remover"//

  //mudar a iamgem
  //pegar a tag da iamgem no css
  const img = document.querySelector("#profile img")

  //subistituir a iamgem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar1.png")
  }
}
