const btn = document.querySelector('.btn')
const input = document.querySelector('input')
const div = document.querySelector('.warning-icon')
const div2 = document.querySelector('.warning-text')
const reg =
	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

console.log(div)

const validateEmail = () => {
	if (input.value.match(reg)) {
		div.classList.remove('active')
		div2.classList.remove('active')
	} else {
		div.classList.add('active')
		div2.classList.add('active')
	}
}

btn.addEventListener('click', validateEmail)
