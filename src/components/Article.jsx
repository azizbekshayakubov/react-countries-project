export default function Article({
  flags,
  name,
  population,
  region,
  subregion,
}) {
  return (
    <>
      <article className="rounded-lg bg-white shadow">
        <img src={flags.svg} alt="" className="md: h-72 w-full object-cover" />
        <div className="p-4">
          <h2 className="mb-2 text-lg font-bold text-gray-900">
            {name.common}
          </h2>
          <ul className="flex flex-col items-start justify-start gap-2">
            <li>Population: {population.toLocaleString()}</li>
            <li>Region: {region}</li>
            <li>Subregion: {subregion}</li>
          </ul>
        </div>
      </article>
    </>
  );
}
