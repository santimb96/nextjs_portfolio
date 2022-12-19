const saveData = (name, data) => localStorage.setItem(name, JSON.stringify(data))

const checkAndReturnData = (name) => {
  const data = localStorage?.getItem(name)
  return data ? JSON.parse(data) : null
}

export { saveData, checkAndReturnData }
