export default function determineHealthStatus(fighter) {
  if (fighter.health > 50) {
    return 'healthy';
  }
  if (fighter.health < 15) {
    return 'critical';
  }
  return 'wounded';
}
