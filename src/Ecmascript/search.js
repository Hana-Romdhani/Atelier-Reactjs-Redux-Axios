export function search(tab, id) {
  for (const object of tab) {
    if (object.id === id) {
      return object;
    }
  }

  return null;
}

export default search;
