const mass = document.querySelector('#mass')
const show_discription = document.querySelector('#show-discription')
const calculate_btn = document.querySelector('#calculate-mass')
const select_option = document.querySelector('#select-option')
const result_container = document.querySelector('#result-container')
const palnet_name = document.querySelector('#planet-name')
const palnet_image = document.querySelector('#planet-image')
let result = document.querySelector('#result')
// calculate_btn.style.display = 'none'
//       W=m X g
const GrivatiesOnEachPlanet = [
  0.38, 0.91, 9.81, 0.38, 24.79, 10.44, 8.69, 11.15, 0.62, 1.62
]
const planetsNames = [
  'mercury',
  'venus',
  'earth',
  'mars',
  'jupiter',
  'saturn',
  'uranus',
  'neptune',
  'pluto',
  'moon'
]
let changeValueStore
calculate_btn.addEventListener('click', () => {
  eachPlanet(changeValueStore)
})

select_option.addEventListener('change', e => {
  eachPlanet(e)
  changeValueStore = e
})
let forErr = 'none'
const eachPlanet = p => {
  if (p.target.value !== 'none') {
    changeImage(p)
    updateGalaxyName(p)
    forErr = p.target.value
    showWarn(forErr)
  } else {
    forErr = 'none'
    showWarn(forErr)
  }
}

const changeImage = img => {
  palnet_image.src = `./images/${img.target.value}.png`
}

const updateGalaxyName = name => {
  palnet_name.textContent = name.target.value.toUpperCase()
}
const updateCalcValue = () => {}

calculate_btn.addEventListener('click', chk => {
  if (mass.value === '' || mass.value === null) {
    result_container.style.display = 'flex'
    palnet_image.style.display = ' none '
    result.style.display = 'none'
    show_discription.innerHTML = `PLease Input Value in kilogram!`
  } else {
    if (forErr === 'none') {
      showWarn(forErr)
    } else {
      changeImage(forErr)
      updateGalaxyName(forErr)
    }
  }
})

const showWarn = err => {
  if (err === 'none') {
    result_container.style.display = 'flex'
    palnet_image.style.display = ' none '
    result.style.display = ' none '
    show_discription.innerHTML = `PLease Select Atleast One Planet !`
  } else {
    result_container.style.display = 'flex'
    palnet_image.style.display = ' flex '
    result.style.display = ' flex '
    show_discription.innerHTML = `The weight of the object on <b>${err.toUpperCase()}</b> `
    if (mass.value !== null && mass.value !== '') {
      for (const [index, elem] of planetsNames.entries()) {
        if (elem === err) {
          let weight = (
            Number(mass.value) * GrivatiesOnEachPlanet[index]
          ).toFixed(2)
          result.textContent = ` ${weight}N`
        }
      }
    } else {
      alert('Plz input Mass value ')
    }
  }
}

//Grivaties
