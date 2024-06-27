/**
 * Login a user and reurns the JWT token 
 * @returns JWT token
 */
const login = () => fetch(process.env.BACKEND_URL + "/api/sign_in", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: 'andreiadmin',
            password: 'Andrei2323!!'
        })
    })
    .then((res) => res.json())
    .then((data) => data.data.token)
    .catch(e => console.error(e));

module.exports = login;