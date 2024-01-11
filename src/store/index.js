import { createStore } from 'vuex'
const dataUrl = 'https://d-raff.github.io/VueJS-Portfolio-data/data/'

export default createStore({
  state: {
    jobTitle: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null,
  },
  getters: {
  },
  mutations: {
    setjobTitle(state, value){
      state.jobTitle = value
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
    // create a function that allows us to fetch data
    async fetchjobTitle(context){
      try {
        let res = await fetch(dataUrl)
        let {jobTitle} = await res.json()
        // once the value is updated, it saves the value using commit
        context.commit('setjobTitle', jobTitle)
      } catch (error) {
        error
      }
    },
    async fetcheducation(context){
      try {
        let res = await fetch(dataUrl)
        let {education} = await res.json()
        context.commit('seteducation', education)
      } catch (error) {
        error
      }
    },
    async fetchskills(context){
      try {
        let res = await fetch(dataUrl)
        let {skills} = await res.json()
        context.commit('setskills', skills)
      } catch (error) {
        error
      }
    },
  },
  modules: {
  }
})
