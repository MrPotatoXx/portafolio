import { getEducation } from "@/app/lib/gets";

type ProfileEducation = {
  institution: string;
  startDate: string;
  endDate?: string;
  area: string;
  score?: number;
};

export const Education = async () => {
  try {
    const profileEducation: ProfileEducation[] = await getEducation();

    return (
      <div className="max-w-4xl mx-auto">
        <ul className="flex flex-col gap-8">
          {profileEducation.map(({ institution, startDate, endDate, area, score }) => {
            const startYear = new Date(startDate).getFullYear();
            const endYear = endDate ? new Date(endDate).getFullYear() : "Actual";
            const years = `${startYear} - ${endYear}`;

            return (
              <li key={`${institution}-${startDate}`} className="border border-gray-200 rounded-lg p-4">
                <article className="space-y-2">
                  <header className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-lg text-gray-200">{institution}</h3>
                      <p className="text-sm text-gray-300">{area}</p>
                    </div>
                    <div className="text-right">
                      <time className="text-sm text-gray-300">{years}</time>
                      {score && <p className="text-sm text-gray-300">Promedio: {score}</p>}
                    </div>
                  </header>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error fetching profile data:", error);
    return <div>Error al cargar el perfil</div>;
  }
};
