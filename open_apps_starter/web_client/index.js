const startTimerApp = document.getElementById('startTimerApp');
const startWaterHeaterApp = document.getElementById('startWaterHeaterApp');
const closePieButton = document.getElementById('closePieButton');
const openingOverlay = document.getElementById('opening-overlay')

const openingOverlayFn = () =>{
  openingOverlay.style.display = 'flex'
  const timeOut = setTimeout(()=>{
    clearTimeout(timeOut);
    openingOverlay.style.display = 'none';
  },8000)
}

startTimerApp.addEventListener('click', async () => {
  openingOverlayFn();
  await eel.openApp('webasto_timer_set_app');
});

startWaterHeaterApp.addEventListener('click', async () => {
 openingOverlayFn()
 await eel.openApp('electron_water_heater_app');
});

closePieButton.addEventListener('click', async () => {
  await eel.confirmClosePi();
});

/***** open overlay to close Pi all together*****/
const overlayClosePi = document.getElementById('overlayClosePi');
overlayClosePi.addEventListener('click', () => {
  document.getElementById('closePie').style.display = 'block';
});

//overlay elements
const outsideOverlay =
  document.querySelectorAll('.overlay-flex-wrapper') || null;
/****** close overlay ******/
const closingElements = [outsideOverlay[0]];
closingElements.forEach((element) => {
  element.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('progressBoardContent') ||
      e.target.classList.contains('save')
    ) {
      if (document.querySelector('#closePie'))
        document.querySelector('#closePie').style.display = 'none';
      if (document.querySelector('#heatingBoard'))
        document.querySelector('#heatingBoard').style.display = 'none';
    }
  });
});

/****** end of close overlay ******/
