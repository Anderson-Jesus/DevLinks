function lightMode(){
  /*Colocando o documento html em uma variável */
  /*objeto.propriedade */
  const html = document.documentElement
  /* Mesmo resultado usando toggle'*/
  html.classList.toggle("light")
  //-------------------------------------------
  //    lista de classe.contém 'light'
  //if (html.classList.contains('light')){
  //    Esse if retorna true ou false
  //  html.classList.remove('light')
  //  } else {
  //  html.classList.add("light")
  // }
  //--------------------------------------------
  //pegando a tag img -- pesquisa pelo Seletor
  const img = document.querySelector("#profile img")//busca por seletor
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute('src','./assets/avatar-light.png')//modifica oum atributo 
  } else {
    //se não, manter imagem dark
    img.setAttribute("src", "./assets/avatar-dark.png")
  }
}