export default function two_crystal_balls(breaks: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length)) // 3
  let i = jmpAmount // 3

  for (; i<breaks.length; i += jmpAmount) { // 3 < 15
    if (breaks[i]) {
      break;
    }
  }

  i -= jmpAmount

  for (; i < breaks.length ; i++) {
    if (breaks[i]) {
      return i
    }
  }

  return -1
}