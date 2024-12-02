import { getSkills } from "@/app/lib/gets";

type ProfileSkills = {
  name: string;
};

export const Skills = async () => {
  try {
    const profileSkills: ProfileSkills[] = await getSkills();

    return (
      <div className="max-w-4xl mx-auto mb-32 mt-8">
        <ul className="flex flex-wrap justify-center gap-2">
          {profileSkills.map(({ name }) => (
            <li key={name} className="bg-gray-200 text-black text-sm font-medium rounded-md py-1 px-3">
              <span>{name}</span>
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
