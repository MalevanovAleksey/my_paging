import { createStore } from "vuex";

const store = createStore({
    state: {
        collection: [], // Хранилище для коллекции
    },
    mutations: {
        SET_COLLECTION(state, payload) {
            state.collection = payload;
        },
    },
    actions: {
        generateCollection({ commit }) {
            const collection = Array.from({ length: 100 }, (_, index) => ({
                id: index + 1,
                name: `document_${index + 1}`,
                value: Math.floor(Math.random() * 100),
            }));
            commit("SET_COLLECTION", collection);
        },
    },
    getters: {
        getCollection: (state) => state.collection,
    },
});

export default store;
