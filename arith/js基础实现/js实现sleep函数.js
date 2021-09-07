function sleep3(ms) {
  return new Promise(function(resolve, reject) {
      setTimeout(resolve, ms)
  })
}
async function init() {
  await sleep3(1000);
}
init().then(() => {
  console.log(3000)
})