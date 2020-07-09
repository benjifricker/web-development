// Function to simulate callback hell
const brainstormDinner = () => {
  return new Promise((resolve, reject) => {
    console.log(`I have to decide what's for dinner...`)
    setTimeout(() => {
      console.log('Should I make salad...?')
      setTimeout(() => {
        console.log('Should I make ramen...?')
        setTimeout(() => {
          console.log('Should I make eggs...?')
          setTimeout(() => {
            console.log('Should I make chicken...?')
            resolve('beans')
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  })
}

module.exports = brainstormDinner