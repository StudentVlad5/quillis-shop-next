/**
 * Saves given data, replaces old data with the new
 * @param {string} storageKey - key to save data
 * @param {Object|Object[]} dataToSave data we need to save
 */

function saveToStorage(storageKey, dataToSave) {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, JSON.stringify(dataToSave));
    }
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
}

/**
 * Returns all data from the storage
 * @param {string} storageKey - key to returns data
 * @returns {Object} parsed data from storage
 */

function getFromStorage(storageKey) {
  try {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem(storageKey);
      return data === null ? undefined : JSON.parse(data);
    }
  } catch (err) {
    // console.warn('Cannot parse JSON from localStorage');
    return null;
  }
}

/**
 * Clears some array of the data in the storage by key
 * @param {string} storageKey - key to remove the data
 */

function removeItem(storageKey) {
  if (typeof window !== "undefined") {
    localStorage.removeItem(storageKey);
  }
}

/**
 * Clears all the data in the storage
 */

function clearData() {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
}

export { clearData, getFromStorage, saveToStorage, removeItem };
