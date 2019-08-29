const log = () => {
  const date = new Date().toLocaleDateString();
  const hour = new Date().toLocaleTimeString();
  return `Acessado dia ${date} ás ${hour} horas.`;
}

module.exports = log;