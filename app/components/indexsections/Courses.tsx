import { getCourses } from "@/app/lib/gets";

type ProfileCourse = {
  name: string;
  date: string;
  issuer: string;
  url: string;
};

export const Courses = async () => {
  try {
    const profileCourses: ProfileCourse[] = await getCourses();

    return (
      <div className="max-w-4xl mt-8 mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {profileCourses.map(({ name, date, issuer, url }, index) => (
            <li key={index} className="border border-gray-200 rounded-lg p-4 flex flex-col">
              <header>
                <h3 className="text-lg text-gray-200 font-semibold">{name}</h3>
                <p className="text-sm text-gray-400">Emitido por: {issuer}</p>
                <p className="text-sm text-gray-400">Fecha: {date}</p>
              </header>
              {url && (
                <footer className="mt-auto">
                  <a
                    href={url}
                    className="text-blue-600 hover:text-blue-800 text-sm no-print"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver certificado
                  </a>
                </footer>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error('Error fetching profile data:', error);
    return <div>Error al cargar el perfil</div>;
  }
};