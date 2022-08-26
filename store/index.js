export const state = () => ({
    authenticated: localStorage.getItem('userSession') ? true : false,
    currentUser: null || JSON.parse(localStorage.getItem('userSession'))

})

export const mutations = {
    // logState(state, data) {
    //     state.authenticated = true;
    //     state.currentUser = data
    // },
    login(state, data) {
        state.authenticated = true;
        state.currentUser = data
        localStorage.setItem('userSession', JSON.stringify(data))
    },
    logout(state) {
        state.authenticated = false
        state.currentUser = {}
        localStorage.removeItem('userSession')
    }
}

export const actions = {
    async login(context, credentials) {
        const url = "http://localhost:1337/api/auth/local";
        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!res.ok) {
            // handle error here
            console.log(res)
        } else {
            try {
                const data = await res.json()
                context.commit("login", data);
                console.log(data)
                $nuxt.$router.push('/app/dashboard')
            } catch (err) {
                console.log(err)
                throw { id: '', message: 'An unknown error has occured' }
            }
        }

    },
    logout(context) {
        $nuxt.$router.push('/auth/login')
        context.commit("logout");
        $nuxt.$router.push('/')
    }
}