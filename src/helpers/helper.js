export function denisClick(event) {
    const $circle = document.querySelector('#circle')
    const rect = $circle.getBoundingClientRect()

    const offfsetX = event.clientX - rect.left - rect.width / 2
    const offfsetY = event.clientY - rect.top - rect.height / 2

    const DEG = 60

    const tiltX = (offfsetY / rect.height) * DEG
    const tiltY = (offfsetX / rect.width) * -DEG

    $circle.style.setProperty('--tiltX', `${tiltX}deg`)
    $circle.style.setProperty('--tiltY', `${tiltY}deg`)

    setTimeout(() => {
        $circle.style.setProperty('--tiltX', `0deg`)
        $circle.style.setProperty('--tiltY', `0deg`)
    }, 300)

    const plusOne = document.createElement('div')
    plusOne.classList.add('plus-one')
    plusOne.textContent = '+1'
    plusOne.style.left = `${event.clientX - rect.left}px`
    plusOne.style.top = `${event.clientY - rect.top}px`

    $circle.parentElement.appendChild(plusOne)

    setTimeout(() => {
        plusOne.remove()
    }, 2000)
}

export function denisRegress() {
    const $circle = document.querySelector('#circle')
    const plusOne = document.createElement('div')
    plusOne.classList.add('minus-one')
    plusOne.textContent = '-1'
    plusOne.style.left = `10px`
    plusOne.style.top = `10px`

    $circle.parentElement.appendChild(plusOne)

    setTimeout(() => {
        plusOne.remove()
    }, 2000)
}