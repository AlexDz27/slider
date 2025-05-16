const track = document.getElementById('track')
const btnPrev = document.getElementById('btnPrev')
const btnNext = document.getElementById('btnNext')

btnPrev.onclick = () => {
  track.style.transform = `translate3d(0, 0, 0)`
}
btnNext.onclick = () => {
  track.style.transform = `translate3d(-100%, 0, 0)`
}