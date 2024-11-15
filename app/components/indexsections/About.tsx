import { getProfile } from '../../lib/gets'
type ProfileData = {
	summary: string;
  }
export const About = async () => {
	try {
	  const profileData = await getProfile()
	  const { summary }: ProfileData = profileData
	  return (
		<section>
		  <div className="max-w-4xl mx-auto mb-10">
		  <p className="text-base md:text-lg text-gray-300 leading-relaxed my-4">
			{summary}
		  </p>
		  </div>
		</section>
	  )
	} catch (error) {
	  console.error('Error fetching profile data:', error)
	  return <div>Error al cargar el perfil</div>
	}
  }