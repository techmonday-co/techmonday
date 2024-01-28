export function calculateTotalPages(totalCount, perPage) {
  return Math.ceil(totalCount / perPage);
}