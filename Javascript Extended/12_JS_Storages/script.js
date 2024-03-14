localStorage.setItem('name', 'Bob')
console.log(localStorage.getItem('name'))
localStorage.removeItem('name')

sessionStorage.setItem('name', 'John')
sessionStorage.setItem('name', 'Dawg')
sessionStorage.removeItem('name')


document.cookie = 'name=Mike; expires=' + new Date(2025, 0, 1).toUTCString()
document.cookie = 'lastname=Tyson; expires=' + new Date(2025, 0, 1).toUTCString()
console.log(document.cookies);