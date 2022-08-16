import { createStore } from 'vuex'


import sea from '/public/assets/images/sea.jpg'
import mnt from '/public/assets/images/mnt.jpg'
import food from '/public/assets/images/food.jpg'

const store = createStore({
    state(){
        return {
            memories: [
                {
                    id: "m1",
                    image: mnt,
                    title: "A trip into the mountains",
                    description: "It was a really nice trip"
                },
                {
                    id: "m2",
                    image: sea,
                    title: "Surfing the sea side",
                    description:"Feeling the cool breeze" 
                },
                {
                    id: "m3",
                    image: food,
                    title: "Good eating",
                    description: "Really tasty !!"
                },
            ],

        }
    },
    mutations: {
        addMemory(state, memoryData){
            const newMemory = {
                id: new Date().toISOString(),
                title: memoryData.title,
                image: memoryData.image,
                description: memoryData.description
            }
            state.memories.unshift(newMemory)

        },
    },
    actions: {
        addMemory(context, memoryData){
            context.commit('addMemory', memoryData)
        },
    },
    getters: {
        memories(state){
            return state.memories;
        },
        memory(state){
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId);
            }
        }
    }
});


export default store;