import Vuex from 'vuex'
import axios from 'axios'

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
        return axios.get(process.env.baseUrl + "/posts.json")
        .then(res => {
          const postArray = []
          for(const key in res.data) {
            postArray.push({ ...res.data[key], id: key })
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
        return axios
          .post(process.env.baseUrl + "/posts.json", createPost)
          .then(result => {
            vuexContext.commit("addPostMuta", {
              ...createPost,
              id: result.data.name
            });
          })
          .catch(e => console.log(e));
      },
      editedPostAct(vuexContext, editedPost){
        // this.$route.params.postId == editedPost.id
        return axios
          .put(process.env.baseUrl  + "/posts/" + editedPost.id + ".json", editedPost)
          .then(result => {
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
