import type { CardData, ActiveView } from './types'
import { getRandomCardSize } from './randomCardSize'

function createCard(): CardData {
  return { image: "", ...getRandomCardSize() }
}

export const projectCards: CardData[] = Array.from({ length: 12 }, createCard)
export const experienceCards: CardData[] = Array.from({ length: 12 }, createCard)
export const galleryCards: CardData[] = Array.from({ length: 12 }, createCard)

export const LANES: { cards: CardData[]; view: ActiveView }[] = [
  { cards: projectCards, view: "projects" },
  { cards: experienceCards, view: "experience" },
  { cards: galleryCards, view: "gallery" },
]