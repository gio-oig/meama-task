export default function findByname<T extends { name: string }>(
  arr: T[],
  name: string
) {
  return arr.find(({ name: itemName }) => itemName === name);
}
