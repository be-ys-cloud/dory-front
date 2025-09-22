import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        config: {
            features: {
                disable_unlock: true,
                disable_password_update: false,
                disable_password_reinitialization: false,
                disable_totp: false,
            },
            password_policies: []
        }
    },
    mutations: {
        updateConfig(state, obj) {
            state.config = obj;
        },
    }

})


export default store
