import { getExperience } from "@/app/lib/gets";

type ProfileExperience = {
  name: string;
  startDate: string;
  endDate: string;
  position: string;
  summary: string;
};

export const Experience = async () => {
  try {
    const profileExperience: ProfileExperience[] = await getExperience();
    
    return (
      <div className="max-w-4xl mx-auto text-center mt-4">
        <ul className="space-y-8">
          {profileExperience.map(({ name, startDate, endDate, position, summary }) => {
            const startYear = new Date(startDate).getFullYear();
            const endYear = endDate ? new Date(endDate).getFullYear() : 'Actual';
            const years = `${startYear} - ${endYear}`;

            return (
              <li key={`${name}-${startDate}`} className="border border-gray-200 rounded-lg p-4 text-left">
                <article className="space-y-4">
                  <header className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg text-gray-400">{name}</h3>
                      <h4 className="font-normal text-md text-gray-300">{position}</h4>
                    </div>
                    <time className="text-sm text-gray-200">{years}</time>
                  </header>
                  <footer>
                    <p className="text-base text-gray-200">{summary}</p>
                  </footer>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } catch (error) {
    console.error('Error fetching profile data:', error);
    return <div>Error al cargar el perfil</div>;
  }
};