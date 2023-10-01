export default function linear_search(haystack: number[], needle: number): boolean {
  for (const i in haystack) {
    if (haystack[i] === needle) return true
  }
      
  return false
}