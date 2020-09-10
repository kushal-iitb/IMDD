const name = document.getElementById('name')
const password = document.getElementById('Roll')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (Roll.value.length <= 6) {
    messages.push('Roll No. not valid)
  }

  if (password.value.length >= 10) {
    messages.push('Roll No. not valid')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})