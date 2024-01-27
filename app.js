const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = Object.fromEntries(new FormData(e.target))

  const { first_name: firstName, last_name: lastName, photo, email } = formData

  console.log({ firstName, lastName, photo, email })
  if (photo) {
    const reader = new window.FileReader()
    reader.readAsDataURL(photo)
    reader.onloadend = function () {
      const newPhoto = document.querySelector('#photo')
      newPhoto.src = reader.result
    }
  }
})
