
const useLocalStorage = (storageKey, defaultValue) => {
    
    return [
        () => {
            return JSON.parse(localStorage.getItem(storageKey) ?? defaultValue)
        },
        async (data) => {
            localStorage.setItem(storageKey, JSON.stringify(data))
        }
    ]
}

export default useLocalStorage
