const log = () => {
  const date = new Date().toLocaleDateString();
  const hour = new Date().toLocaleTimeString();
  return `Accessed at ${date}, ${hour} hours.`;
}

module.exports = log;