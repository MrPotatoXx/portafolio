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