import type { CardData } from './types'
import { getRandomCardSize } from '../utils/randomCardSize'

function createCard(): CardData {
  return { image: "", ...getRandomCardSize() }
}

export const projectCards: CardData[] = Array.from({ length: 8 }, createCard)
export const experienceCards: CardData[] = Array.from({ length: 8 }, createCard)
export const galleryCards: CardData[] = Array.from({ length: 8 }, createCard)

export const LANES = [
  { cards: projectCards, label: "projectS" },
  { cards: experienceCards, label: "eXperience" },
  { cards: galleryCards, label: "galleRy" },
]
