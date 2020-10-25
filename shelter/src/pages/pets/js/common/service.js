export async function givePets() {
  let response = await fetch('./assets/pets.json');
  let pets = await response.json();
  return pets;
}
