import { createStore } from 'vuex'
const dataUrl = 'https://d-raff.github.io/VueJS-Portfolio-data/data/'

export default createStore({
  state: {
    profilePhoto: null,
    jobTitle: null,
    about: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null,
  },
  getters: {
  },
  mutations: {
    setprofilePhoto(state, value){
      // state allows us to access any variable defined inside of state. to update the state, we assign a new value using mutations
      state.profilePhoto = value
    },
    setjobTitle(state, value){
      state.jobTitle = value
    },
    setabout(state, value){
      state.about = value
    },
    seteducation(state, value){
      state.education = value
    },
    setskills(state, value){
      state.skills = value
    },
    settestimonials(state, value){
      state.testimonials = value
    },
    setprojects(state, value){
      state.projects = value
    },
  },
  actions: {
    // create a functions that allows us to fetch data
    // async fetchprofilePhoto(context){
      
    // },
    async fetchjobTitle(context){
      let res = await fetch(dataUrl)
      console.log(res);
      let {jobTitle} = await res.json()
      // once the value is updated, it saves the value using commit
      context.commit('setjobTitle', jobTitle)
    },
    async fetchabout(context){
      let {about} = await (await fetch(dataUrl)).json()
      context.commit('setabout', about)
    }
  },
  modules: {
  }
})
