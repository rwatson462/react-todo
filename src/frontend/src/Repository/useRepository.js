
const useRepository = (repository) => {
    // This pattern allows us to inject dependencies to the Repository object
    return repository()
}

export default useRepository
