/*
Aluno: Tiago Gassner
Disciplina: DSG1413 - 1AA
Semestre: 2021.2

Referencia: https://www.youtube.com/watch?v=AbB9ayaffTc
            Accessing Motion and Orientation on iOS13 with p5.js
                by designers do code
*/

let permissionGranted = false

let cx, cy

function setup() {
  createCanvas(windowWidth, windowHeight)

  cx = width / 2
  cy = height / 2

  // DeviceOrientationEvent, DeviceMotionEvent
  if (typeof (DeviceOrientationEvent) !== 'undefined' && typeof (DeviceOrientationEvent.requestPermission) == 'function') {
    // IOS 13 device
    DeviceOrientationEvent.requestPermission().catch(() => {
      let button = createButton('Permitir acesso aos sensores?')
      button.style('font-size', '12px')
      button.center()
      button.mousePressed(requestAccess)

      throw error
    }).then(() => {
      //busca no cache
      permissionGranted = true
    })
  } else {
    //non IOS 13 device
    permissionGranted = true
  }

  function requestAccess() {
    DeviceOrientationEvent.requestPermission()
      .then(response => {
        if (response == 'granted') {
          permissionGranted = true
        } else {
          permissionGranted = false
        }
      })
      .catch(console.error)

    this.remove()
  }

}

function draw() {
  if (!permissionGranted) return

  const dx = constrain(rotationY, -3, 3)
  const dy = constrain(rotationX, -3, 3)

  const xm = mouseX
  const ym = mouseY
  let xc = constrain(mouseX, 0, width)
  let yc = constrain(mouseY, 0, height)


  cx += dx * 2
  cy += dy * 2
  cx = constrain(cx, 0, width)
  cy = constrain(cy, 0, height)

  fill(150, xc, yc)

  circle(cx, cy, width / 5)
}