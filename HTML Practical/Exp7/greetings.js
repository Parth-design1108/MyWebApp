// greetings.js

function morningGreeting(name) {
  return `Good morning, ${formatName(name)}! Hope you have a great day.`;
}

function eveningGreeting(name) {
  return `Good evening, ${formatName(name)}! Hope you had a productive day.`;
}

function formatName(name) {
  if (!name || typeof name !== 'string') return 'Guest';
  const trimmed = name.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

module.exports = {
  morningGreeting,
  eveningGreeting,
  formatName
};