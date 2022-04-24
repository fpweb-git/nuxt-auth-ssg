export const state = () => ({
    authenticated: false,
    currentUser: {}
})

export const mutations = {
    logState(state, json) {
        state.authenticated = true;
        state.currentUser = json.user
    },
    logout(state) {
        state.authenticated = false
        state.currentUser = {}
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
                const json = await res.json()
                context.commit("logState", json);
                console.log(json)
                $nuxt.$router.push('/app/dashboard')
            } catch (err) {
                console.log(err)
                throw { id: '', message: 'An unknown error has occured' }
            }
        }

    },
    logout(context) {
        context.commit("logout");
        $nuxt.$router.push('/')
    }
}