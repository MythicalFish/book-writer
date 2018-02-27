export const UIisVisible = state => key => {
  if (!Array.isArray(key)) {
    return console.error('isVisible expects array')
  }
  let oldVal = state[key[0]][key[1]]
  if (key.length === 3) {
    if (Number.isInteger(key[2])) {
      // If ID provided, compare ID
      return oldVal === key[2]
    } else {
      // Return value (depth of 2)
      return state[key[0]][key[1]][key[2]]
    }
  } else {
    // Return value (depth of 1)
    return state[key[0]][key[1]]
  }
}
