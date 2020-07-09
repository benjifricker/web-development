// Function to simulate Promise
const shopForBeans = () => {
  return new Promise((resolve, reject) => {
	  const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
    setTimeout(()=>{
      let randomIndex = Math.floor(Math.random() * 5)
      let beanType = beanTypes[randomIndex];
      console.log(`2. I bought ${beanType} beans because they were on sale.`)
    resolve(beanType);
    }, 1000)
  })
}
  
module.exports = shopForBeans