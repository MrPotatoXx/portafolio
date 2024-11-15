import { query } from "./strapi";

export async function getProfile() {
  return query("profile?populate=*")
  .then(res => {
	return res.data
  })
}