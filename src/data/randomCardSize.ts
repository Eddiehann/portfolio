import { MAX_CARD_SIZE } from '../components/Card/const'

const MIN_ASPECT_RATIO = 0.6
const MAX_ASPECT_RATIO = 1.8
const SQUARE_BUFFER = 0.25

function getRandomAspectRatio(): number {
  const portraitMax = 1 - SQUARE_BUFFER
  const landscapeMin = 1 + SQUARE_BUFFER
  const portraitRange = portraitMax - MIN_ASPECT_RATIO
  const landscapeRange = MAX_ASPECT_RATIO - landscapeMin

  if (Math.random() * (portraitRange + landscapeRange) < portraitRange) {
    return MIN_ASPECT_RATIO + Math.random() * portraitRange
  }
  return landscapeMin + Math.random() * landscapeRange
}

export function getRandomCardSize(): { width: number; height: number } {
  const aspectRatio = getRandomAspectRatio()

  if (aspectRatio >= 1) {
    return { width: MAX_CARD_SIZE, height: MAX_CARD_SIZE / aspectRatio }
  }
  return { width: MAX_CARD_SIZE * aspectRatio, height: MAX_CARD_SIZE }
}
