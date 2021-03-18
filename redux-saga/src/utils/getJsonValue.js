import data from '../counter.json'

export async function getData() {
  const myCounter = new Promise( resolve => setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 10);
    const value = data[randomNumber]

    resolve(value)
  }, 2000)) 

  return myCounter;
}
