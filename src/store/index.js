import { createStore } from 'vuex'
const dataUrl = 'https://d-raff.github.io/VueJS-Portfolio-data/data/'

export default createStore({
  state: {
    jobTitle: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null,
    Contact: null,
    work: null,
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
    setContact(state, value){
      state.Contact = value
    },
    setwork(state, value){
      state.work = value
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
        console.log(error);
      }
    },
    async fetcheducation(context){
      try {
        let res = await fetch(dataUrl)
        let {education} = await res.json()
        context.commit('seteducation', education)
      } catch (error) {
        console.log(error);
      }
    },
    async fetchskills(context){
      try {
        let res = await fetch(dataUrl)
        let {skills} = await res.json()
        context.commit('setskills', skills)
      } catch (error) {
        console.log(error);
      }
    },
    async fetchtestimonials(context){
      try {
        let res = await fetch(dataUrl)
        let {testimonials} = await res.json()
        context.commit('settestimonials', testimonials)
      } catch (error) {
        console.log(error);
      }
    },
    async fetchprojects(context){
      try {
        let res = await fetch(dataUrl)
        let {projects} = await res.json()
        context.commit('setprojects', projects)
      } catch (error) {
        console.log(error);
      }
    },
    async fetchContact(context){
      try {
        let res = await fetch(dataUrl)
        let {Contact} = await res.json()
        context.commit('setContact', Contact)
      } catch (error) {
        console.log(error);
      }
    },
    async fetchwork(context){
      try {
        let res = await fetch(dataUrl)
        let {work} = await res.json()
        context.commit('setwork', work)
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
