function historySlider(selector) {
	const inner = document.querySelector(selector)
	let pos = 0
	let startX = 0
	let startY = 0
	let deltaX = 0
	let isSwiping = false

	inner.addEventListener('touchstart', function (event) {
		startX = event.touches[0].clientX
		startY = event.touches[0].clientY
		isSwiping = true
	}, false)

	inner.addEventListener('touchmove', function (event) {
		if (isSwiping) {
			deltaX = event.touches[0].clientX - startX
			const deltaY = event.touches[0].clientY - startY
			if (Math.abs(deltaX) > Math.abs(deltaY)) {
				event.preventDefault()
				inner.style.transform = `translateX(${pos + deltaX}px)`
			}
		}
	}, false)

	inner.addEventListener('touchend', function (event) {
		if (isSwiping) {
			isSwiping = false

			pos += deltaX

			if (pos > 0) {
				pos = 0
				inner.style.transform = `translateX(${pos}px)`
			} else if (pos < -inner.offsetWidth + window.innerWidth) {
				pos = -inner.offsetWidth + window.innerWidth
				inner.style.transform = `translateX(${pos}px)`
			}
		}
	}, false)

	inner.addEventListener('mousedown', function (event) {
		startX = event.clientX
		isSwiping = true
		inner.style.cursor = 'grabbing'
	}, false)

	inner.addEventListener('mousemove', function (event) {
		if (isSwiping) {
			deltaX = event.clientX - startX
			inner.style.transform = `translateX(${pos + deltaX}px)`
		}
	}, false)

	inner.addEventListener('mouseup', function (event) {
		if (isSwiping) {
			isSwiping = false
			pos += deltaX

			if (pos > 0) {
				pos = 0
				inner.style.transform = `translateX(${pos}px)`
			} else if (pos < -inner.offsetWidth + window.innerWidth) {
				pos = -inner.offsetWidth + window.innerWidth
				inner.style.transform = `translateX(${pos}px)`
			}

			inner.style.cursor = 'grab'
		}
	}, false)
}
