const up = document.querySelector('.up')
window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		up.style.display = 'block'
	} else {
		up.style.display = 'none'
	}
})

up.addEventListener('click', () => {
	const duration = 500
	const startingY = window.pageYOffset
	const elementY = 0

	function step(timestamp) {
		const progress = Math.min(1, (timestamp - start) / duration)
		const ease = easeInOutQuad(progress)
		window.scrollTo(0, startingY + (elementY - startingY) * ease)
		if (progress < 1) {
			window.requestAnimationFrame(step)
		}
	}

	function easeInOutQuad(progress) {
		return progress < 0.5
			? 2 * progress * progress
			: 1 - Math.pow(-2 * progress + 2, 2) / 2
	}

	const start = performance.now()
	window.requestAnimationFrame(step)
})

function openMenu(triggerSel, menuSel, activeClass, closeSel) {
	const trigger = document.querySelector(triggerSel),
		close = document.querySelector(closeSel),
		menu = document.querySelector(menuSel)

	trigger.addEventListener('click', () => {
		menu.classList.add(activeClass)
	})
	close.addEventListener('click', () => {
		menu.classList.remove(activeClass)
	})
}

openMenu('.header__hamburger', '.menu', 'menu__active', '.menu i')
