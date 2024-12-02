import { getProjects } from "@/app/lib/gets";

type PorfileProject = {
  url: string;
  description: string;
  highlights: string[] | string;
  name: string;
  isActive: boolean;
};

export const Projects = async () => {
  try {
    const porfileProjects: PorfileProject[] = await getProjects();

    return (
      <div className="max-w-4xl mt-8 mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
          {porfileProjects.map(
            ({ url, description, highlights, name, isActive }, index) => {

              const highlightsArray = Array.isArray(highlights)
                ? highlights
                : highlights
                    .replace(/"/g, "")
                    .split(",");

              return (
                <li
                  key={index}
                  className={`border border-gray-200 rounded-lg p-6 flex flex-col h-full ${
                    porfileProjects.length % 2 !== 0 && index === porfileProjects.length - 1
                      ? "sm:col-start-1 sm:col-span-2"
                      : ""
                  }`}
                >
                  <article className="flex flex-col h-full">
                    <header className="flex-grow">
                      <h3 className="mb-2 text-xl font-semibold">
                        <a
                          href={url}
                          title={`Ver el proyecto ${name}`}
                          className="text-gray-200 hover:underline"
                        >
                          {name}
                        </a>
                        {isActive ? (
                          <span className="text-green-500">• Activo</span>
                        ) : (
                          <span className="text-red-500">• Inactivo</span>
                        )}
                      </h3>
                      <p className="text-base text-gray-300 mb-2">{description}</p>
                    </header>
                    <footer className="flex flex-wrap gap-2 text-sm justify-center pt-4">
                      {highlightsArray.map((highlight: string, hIndex: number) => (
                        <span
                          key={hIndex}
                          className="bg-gray-200 text-gray-900 rounded-md py-1 px-3"
                        >
                          {highlight}
                        </span>
                      ))}
                    </footer>
                  </article>
                </li>
              );
            }
          )}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error fetching profile data:", error);
    return <div>Error al cargar el perfil</div>;
  }
};