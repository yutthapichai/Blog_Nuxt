import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state:{   // level 3
      loadedPosts: []
    },
    mutations: {  // level 2
      setPostss(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {  // level 1
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPostss", [
              {
                id: 1,
                title: "My awesome Post 1",
                previewText: "Super amazing, thanks for that",
                thumbnail:
                  "https://images.idgesg.net/images/article/2017/05/artificial_intelligence_machine_learning_thinkstock_664735184-100724414-large.jpg"
              },
              {
                id: 2,
                title: "My awesome Post 2",
                previewText: "Super amazing, thanks for that",
                thumbnail:
                  "https://images.idgesg.net/images/article/2017/05/artificial_intelligence_machine_learning_thinkstock_664735184-100724414-large.jpg"
              },
              {
                id: 3,
                title: "My awesome Post 3",
                previewText: "Super amazing, thanks for that",
                thumbnail:
                  "https://images.idgesg.net/images/article/2017/05/artificial_intelligence_machine_learning_thinkstock_664735184-100724414-large.jpg"
              }
            ]);
            resolve()
          }, 1000)
        })
      }
    },
    getters: {  // level 4
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
