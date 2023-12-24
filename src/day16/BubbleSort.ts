export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      const firstValue = arr[j];
      const secondValue = arr[j + 1];

      if (secondValue < firstValue) {
        arr[j] = secondValue;
        arr[j + 1] = firstValue
      }
    }
  }
}