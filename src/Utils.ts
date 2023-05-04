export function scrollToElement(el: HTMLElement, onScrollEnd = () => { }) {
  const { top } = el.getBoundingClientRect()

  var step = 75
  var iterationsCount = Math.abs(Math.floor(top / step))

  if (top < 0) {
    step = -step
    iterationsCount += 1
  }

  function inner(iterations: number) {
    if (iterations !== 0) {
      window.scrollBy(0, step)
      setTimeout(inner, 5, iterations - 1)
    }
  }

  setTimeout(inner, 5, iterationsCount)
  onScrollEnd()
}