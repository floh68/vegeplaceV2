import PocketBase from 'pocketbase'
import type { IngredientsResponse, RecettesResponse, UsersResponse } from './pocketbase-types'
export const pb = new PocketBase('http://127.0.0.1:8090')

export async function allIngredients() {
  const record = await pb.collection('ingredients').getFullList<IngredientsResponse>()
  return record
}

export async function allRecettes() {
  const record = await pb.collection('recettes').getFullList<RecettesResponse>()
  return record
}

export async function IngredientsInRecette() {
  const record = await pb
    .collection('recettes')
    .getFullList<RecettesResponse>({ filter: 'ingredients' })
  return record
}


export async function oneRecette(id: string) {
  const record = await pb.collection('recettes').getOne<RecettesResponse>(id)
  return record
}

export async function allRecettesAndIngredients() {
  const records = await pb.collection('artiste').getFullList<RecettesResponse>({
    expand: 'ingredients(recettes)'
  })
  return records
}


export async function AllRecettesFavori() {
  const records = await pb
    .collection('recettes')
    .getFullList<RecettesResponse>({ filter: 'favori=TRUE' })
  return records
}

export async function AllRecettesPanier() {
  const records = await pb
    .collection('recettes')
    .getFullList<RecettesResponse>({ filter: 'panier=TRUE' })
  return records
}

export async function AllIngredientsPanier() {
  const records = await pb
    .collection('ingredients')
    .getFullList<IngredientsResponse>({ filter: 'panier=TRUE' })
  return records
}

export async function allUsers() {
  const record = await pb.collection('users').getFullList<UsersResponse>()
  return record
}


export async function AllIngredientsAutre() {
  const records = await pb
    .collection('ingredients')
    .getFullList<IngredientsResponse>({ filter: "type='autre'" })
  return records
}

export async function AllIngredientsLegume() {
  const records = await pb
    .collection('ingredients')
    .getFullList<IngredientsResponse>({ filter: "type='legume'" })
  return records
}

export async function AllIngredientsFruit() {
  const records = await pb
    .collection('ingredients')
    .getFullList<IngredientsResponse>({ filter: "type='fruit'" })
  return records
}
