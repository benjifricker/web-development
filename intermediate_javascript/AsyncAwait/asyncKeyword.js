// Using native Promises
function withConstructor(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      resolve('zero');
    } else {
      reject('not zero');
    }
  })
}

withConstructor(0)
.then((resolveValue) => {
  console.log(`withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
})


// Using async/await
async function withAsync(num) {
  if (num === 0) {
    return 'zero';
  } else {
    return 'not zero';
  }
}


// Testing async/await
withAsync(100)
.then((resolveValue) => {
  console.log(`withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})