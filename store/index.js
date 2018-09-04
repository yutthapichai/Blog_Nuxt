import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state:{   // level 3
      loadedPosts: []
    },
    mutations: {  // level 2
      setPostss(state, posts) {
        state.loadedPosts = posts;
      },
      addPostMuta(state, post){
        state.loadedPosts.push(post)
      },
      editPostMuta(state, editedPost){
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        )
        state.loadedPosts[postIndex] = editedPost
      }
    },
    actions: {  // level 1
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios.$get("/posts.json")
          .then(data => {
          const postArray = []
          for(const key in data) {
            postArray.push({ ...data[key], id: key })
          }
          console.log("fetchServer", postArray);
          vuexContext.commit("setPostss", postArray)
        })
        .catch(e => context.error(e))
      },
      addPostAct(vuexContext, postData){
        const createPost = {
          ...postData,
          updatedDate: new Date()
        }
        return this.$axios
          .$post("/posts.json", createPost)
          .then(data => {
            vuexContext.commit("addPostMuta", {
              ...createPost,
              id: data.name
            });
          })
          .catch(e => console.log(e));
      },
      editedPostAct(vuexContext, editedPost){
        // this.$route.params.postId == editedPost.id
        return this.$axios
          .$put("/posts/" + editedPost.id + ".json", editedPost)
          .then(data => {
            vuexContext.commit("editPostMuta", editedPost);
          })
          .catch(e => context.error(e));
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
