import Image from 'next/image'
import { getProfile } from '../../lib/gets'
import MailIcon from '../../icons/Mail'
import PhoneIcon from '../../icons/Phone'
import WorldMapIcon from '../../icons/WorldMap'
import DownloadIcon from '../../icons/Download'
import LinkedInIcon from '../../icons/LinkedIn'
import GitHubIcon from '../../icons/GitHub'

type Profile = {
  network: string;
  url: string;
}

type Location = {
  city: string;
  region: string;
}

type ProfileData = {
  name: string;
  label: string;
  image: string;
  location: Location[];
  profiles: Profile[];
  phone: string;
  email: string;
}

const SOCIAL_ICONS: { [key: string]: React.ComponentType<{ className?: string }> } = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
}

export const Hero = async () => {
  try {
    const profileData = await getProfile()
    const { name, label, image, location, profiles, phone, email }: ProfileData = profileData

    return (
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-4">
        <figure className="w-32 h-32 md:w-48 md:h-48">
          <Image
            src={image}
            alt={name}
            width={192}
            height={192}
            className="aspect-square object-cover rounded-lg"
          />
        </figure>
        <div className="flex flex-col items-center md:items-start gap-2">
          <h1 className="text-4xl font-bold text-center">{name}</h1>
          <h2 className="text-xl text-gray-400 font-medium">{label}</h2>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <WorldMapIcon className="w-4 h-4" />
            <span>{location[0].city}, {location[0].region}</span>
          </div>
          <footer className="flex gap-2 mt-2">
            {email && (
              <a
                href={`mailto:${email}`}
                title={`Enviar un correo electrónico a ${name} al correo ${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:bg-gray-100 border border-gray-200 p-2 rounded-md transition-colors duration-300"
              >
                <MailIcon className="w-6 h-6" />
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                title={`Llamar por teléfono a ${name} al número ${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:bg-gray-100 border border-gray-200 p-2 rounded-md transition-colors duration-300"
              >
                <PhoneIcon className="w-6 h-6" />
              </a>
            )}
            {profiles.map(({ network, url }: Profile) => {
              const Icon = SOCIAL_ICONS[network]
              return (
                <a
                  key={network}
                  href={url}
                  title={`Visitar el perfil de ${name} en ${network}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:bg-gray-100 border border-gray-200 p-2 rounded-md transition-colors duration-300"
                >
                  <Icon className="w-6 h-6" />
                </a>
              )
            })}
          </footer>
          <div className="mt-4">
            <a
              href="/resources/CV_Giovanni_Rodigo_Salinas_Villa_Programador.pdf"
              title="Descargar CV"
              className="text-gray-300 hover:bg-gray-100 hover:text-slate-950 border border-gray-200 p-2 rounded-md transition-colors duration-300 flex items-center gap-2"
              download
            >
              <DownloadIcon className="w-6 h-6" />
              Descargar CV
            </a>
          </div>
        </div>
      </section>
    )
  } catch (error) {
    console.error('Error fetching profile data:', error)
    return <div>Error al cargar el perfil</div>
  }
}