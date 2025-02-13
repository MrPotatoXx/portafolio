import { query } from "./strapi";

export async function getProfile() {
  return query("profile?populate=*")
  .then(res => {
	return res.data
  })
}

export async function getExperience() {
  return query("work-experiences?populate=*")
  .then(res => {
    return res.data
  })
}

export async function getEducation(){
  return query("educations?populate=*")
  .then(res => {
    return res.data
  })
}

export async function getProjects(){
  return query("projects?populate=*")
  .then(res => {
    return res.data
  })
}

export async function getCourses(){
  return query("certificates?populate=*")
  .then(res => {
    return res.data
  })
}

export async function getSkills(){
  return query("skills?populate=*")
  .then(res => {
    return res.data
  })
}