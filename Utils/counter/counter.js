// counter.js
const fs = require('fs');

let count = 0;

function incrementCounter() {
  count++;
  saveCounterToFile();
  return count;
}

function getCurrentCount() {
  return count;
}

function saveCounterToFile() {
  const data = count.toString();

  fs.writeFileSync('counter.txt', data, 'utf8');
}

function loadCounterFromFile() {
  try {
    const data = fs.readFileSync('counter.txt', 'utf8');
    const parsedData = parseInt(data, 10);
    if (!isNaN(parsedData)) {
      count = parsedData;
    }
  } catch (error) {
    // Handle file read error, or if the file doesn't exist
    console.error('Error reading counter file:', error.message);
  }
}

// Load the counter from the file when the module is imported
loadCounterFromFile();

module.exports = {
  incrementCounter,
  getCurrentCount,
};
