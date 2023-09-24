export default function linear_search(haystack: number[], needle: number): boolean {
  for (let i in haystack) {
    if (haystack[i] === needle) return true
  }

  return false
}