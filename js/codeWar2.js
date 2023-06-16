// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2){
    let firstArr = s1.split('')
    let secondArr = s2.split('')
    let combinedArr = [...firstArr, ...secondArr]
    let final = []
    
    combinedArr.forEach((letter) => {
        // check if letter is present in final
        if(!final.includes(letter)){
            final.push(letter)
        }
    })
  return final.sort().join('')

}

