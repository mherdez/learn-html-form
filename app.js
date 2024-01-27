const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = Object.fromEntries(new FormData(e.target))

  const { first_name: firstName, last_name: lastName, photo, email } = formData

  console.log({ firstName, lastName, photo, email })
  if (photo.name) {
    // reset last child of body
    document.body.lastChild.remove()
    // Creando el elemento section para la foto
    const reader = new window.FileReader()
    reader.readAsDataURL(photo)
    reader.onloadend = function () {
      const info = document.createElement('section')
      info.setAttribute('id', 'info')
      document.body.appendChild(info)
      // Creando el elemento img para la foto
      const newPhoto = document.createElement('img')
      newPhoto.src = reader.result
      info.appendChild(newPhoto)
      // Flex
      const div = document.createElement('div')
      div.classList.add('info-container')
      info.appendChild(div)
      // Creando el elemento h2 para el nombre
      const name = document.createElement('h2')
      name.textContent = `${firstName} ${lastName}`
      div.appendChild(name)
      // Creando el elemento p para el email
      const newEmail = document.createElement('p')
      newEmail.textContent = email
      div.appendChild(newEmail)
    }
  }
})
