import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state:{   // level 3
      loadedPosts: [],
      token: null
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
      },
      setTokenMuta(state, Token) {
        state.token = Token
      },
      clearTokenMuta(state) {
        state.token = null
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
          //console.log("fetchServer", postArray);
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
          .$post("/posts.json?auth=" + vuexContext.state.token, createPost)
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
          .$put("/posts/" + editedPost.id + ".json?auth=" + vuexContext.state.token, editedPost)
          .then(data => {
            vuexContext.commit("editPostMuta", editedPost);
          })
          .catch(e => context.error(e));
      },
      authenticateUserAct(vuexContext, authData){
        let authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + process.env.fbAPIKey
        if (!authData.isLogin) {
          // Register
          authUrl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" + process.env.fbAPIKey;
        }
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(result => {
            vuexContext.commit("setTokenMuta", result.idToken)
            localStorage.setItem("token", result.idToken)
            localStorage.setItem("tokenExpiration", new Date().getTime() + Number.parseInt(result.expiresIn) * 1000)
            Cookie.set("jwt", result.idToken);
            Cookie.set("expirationDate", new Date().getTime() + +result.expiresIn * 1000);

            //vuexContext.dispatch("setLogoutTimerAct", result.expiresIn * 1000)
          })
          .catch(e => console.log(e));
      },
      //setLogoutTimerAct(vuexContext, duration) {
      //  setTimeout (() => {
      //    vuexContext.commit('clearTokenMuta')
      //  }, duration)
      //},
      initAuthAct(vuexContext, req){
        let token
        let expirationDate
        if(req) {
          if(!req.headers.cookie) {
            return
          }
          const jwtCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("jwt="))
          if(!jwtCookie){
            return
          }
          token = jwtCookie.split('=')[1]
          expirationDate = req.headers.cookie.split(";").find(c => c.trim().startsWith("expirationDate=")).split("=")[1]
        }else {
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('tokenExpiration')
        }

        if (new Date().getTime() > +expirationDate || !token) {
          vuexContext.dispatch("logoutAct");
          return
        }
        // vuexContext.dispatch("setLogoutTimerAct", +expirationDate - new Date().getTime());
        vuexContext.commit("setTokenMuta", token)
      },
      logoutAct(vuexContext) {
        vuexContext.commit('clearTokenMuta')
        Cookie.remove('jwt')
        Cookie.remove("expirationDate")
        if(process.client){
          localStorage.removeItem('token')
          localStorage.removeItem("tokenexpiration")
        }
      }
    },
    getters: {  // level 4
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  })
}

export default createStore
