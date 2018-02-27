export const TOGGLE_UI = (state, key) => {
  if (!Array.isArray(key)) {
    return console.error('TOGGLE_UI expects array')
  }
  let oldVal = state[key[0]][key[1]]
  if (key.length === 3) {
    if (Number.isInteger(key[2])) {
      // If ID provided, change to ID
      // If ID is the same, make it 0 (disable)
      let itemID = key[2]
      if (oldVal === itemID) itemID = 0
      state[key[0]][key[1]] = itemID
      return
    } else {
      // Toggle the value (depth of 2)
      state[key[0]][key[1]][key[2]] = !oldVal[key[2]]
      return
    }
  } else {
    // Toggle the value (depth of 1)
    state[key[0]][key[1]] = !oldVal
  }
}
