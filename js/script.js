checkForm()

function checkForm () {
    const submit = document.querySelector('#submit')
    const email = document.querySelector('#email')
    const msg = document.querySelector('#msg')

    submit.addEventListener('click', (e) => {
        e.preventDefault()
        if (!email.validity.valid) {
          msg.innerText = 'Oops! Please check your email'
        } else {
          msg.innerText = ''
          email.value = ''
        }
    })
}