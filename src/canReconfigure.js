export const canReconfigure = (arg1, arg2)=>{
  if(!arg1) throw new Error("error");
  if(typeof arg1 !== 'string') throw Error ('parameter should be a string')
  if(typeof arg2 !== 'string') throw new Error('to is not a string')
  if(new Set(arg1).size !== new Set(arg2).size) return false
  if(arg1.length !== arg2.length) return false

  const transformations = {}

  for(let i=0; i< arg1.length; i++){
    const fromLetter = arg1[i]
    const toLetter = arg2[i]

    const storedLetter = transformations[fromLetter]
    if(storedLetter && storedLetter !== toLetter) return false

    transformations[fromLetter] = toLetter
  }

  return true
}