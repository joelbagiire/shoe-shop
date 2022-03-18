document.querySelectorAll('.previewimg').forEach(img  => {
  img.addEventListener('mouseover', () => {
   var source = img.getAttribute('src')
   document.querySelector('#preview_display').src = source
  })
})

const userBtn = document.querySelector('#user')
const accountInfo = document.querySelector('#account')

userBtn.addEventListener('mouseover', () => {
  accountInfo.getElementsByClassName.display = 'flex'
})