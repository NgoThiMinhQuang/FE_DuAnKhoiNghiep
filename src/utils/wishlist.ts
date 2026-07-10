export const WISHLIST_STORAGE_KEY = 'red-bean-beauty-wishlist'

const emitWishlistUpdated = (ids: string[]) => {
  if (typeof window === 'undefined') return

  window.dispatchEvent(
    new CustomEvent('wishlist-updated', {
      detail: ids,
    }),
  )
}

export const getWishlistIds = () => {
  if (typeof window === 'undefined') return []

  try {
    const rawValue = window.localStorage.getItem(WISHLIST_STORAGE_KEY)
    const parsedValue = rawValue ? JSON.parse(rawValue) : []
    return Array.isArray(parsedValue) ? parsedValue.filter((id): id is string => typeof id === 'string') : []
  } catch {
    return []
  }
}

export const saveWishlistIds = (ids: string[]) => {
  if (typeof window === 'undefined') return ids

  const uniqueIds = Array.from(new Set(ids))
  window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(uniqueIds))
  emitWishlistUpdated(uniqueIds)
  return uniqueIds
}

export const toggleWishlistId = (productId: string) => {
  const currentIds = getWishlistIds()
  const nextIds = currentIds.includes(productId)
    ? currentIds.filter((id) => id !== productId)
    : [...currentIds, productId]

  return saveWishlistIds(nextIds)
}

export const removeWishlistId = (productId: string) => {
  return saveWishlistIds(getWishlistIds().filter((id) => id !== productId))
}
