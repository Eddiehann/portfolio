import type { CardData, ActiveView } from './types'
import { getRandomCardSize } from './randomCardSize'

function createCard(): CardData {
  return { image: "", ...getRandomCardSize() }
}

export const projectCards: CardData[] = Array.from({ length: 8 }, createCard)
export const experienceCards: CardData[] = Array.from({ length: 8 }, createCard)
export const galleryCards: CardData[] = Array.from({ length: 8 }, createCard)

export const LANES: { cards: CardData[]; label: string; view: ActiveView }[] = [
  { cards: projectCards, label: "projectS", view: "projects" },
  { cards: experienceCards, label: "eXperience", view: "experience" },
  { cards: galleryCards, label: "galleRy", view: "gallery" },
]