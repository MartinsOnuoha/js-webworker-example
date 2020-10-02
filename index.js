const mainThreadEl = document.getElementById('main-thread-num')
const workerValue = document.getElementById('worker-value')

let mainThreadTime = 0
let myWorker = null

if (window.Worker) {
  myWorker = new Worker('./worker.js')
}

function startMainThreadTimer () {
  setInterval(() => {
    mainThreadTime += 1
    mainThreadEl.innerHTML = mainThreadTime
    myWorker.postMessage(mainThreadTime)
  }, 1000)
}

// eslint-disable-next-line no-unused-expressions
myWorker ? myWorker.onmessage = (e) => {
  const { data } = e
  workerValue.innerHTML = data
} : false

startMainThreadTimer()
