onmessage = (e) => {
  // message received from main thread
  // perform heavy calculations here with payload (e.data)
  // multiply payload by 100000000000
  const result = 1000000000000000000000000 * e.data
  // post result back to main thread
  postMessage(result)
}
