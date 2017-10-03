var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  })
};

var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Hey. It worked');
    reject('Unable to fulfill promise');
  }, 2500);
});


somePromise.then((msg) => {
  console.log('Success:', msg);
}, (errorMessage) => {
  console.log('Error: ', errorMessage);
});

asyncAdd(1, 2).then(res => {
  console.log('Result: ', res);
  return asyncAdd(res, 33);
}).then((res) => {
  console.log(res);
}).catch((errorMessage) => {
  console.log(errorMessage);
})
