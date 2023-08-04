export const getUser = () => {
    let user = 'user'
    return new Promise((resolve, reject) => {
        if (user === 'admin') {
            setTimeout(resolve, 5000, true)
        } else {
            setTimeout(resolve, 5000, false)
        }
    })
}