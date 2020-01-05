// ?q=restaurantName
export default function queryMatch(queryStr) {
  return queryStr.match(/q=([^&]*)/)[1];
}
