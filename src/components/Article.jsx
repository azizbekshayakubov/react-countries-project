import { Link } from "react-router-dom";
export default function Article({
  flags,
  name,
  population,
  region,
  subregion,
}) {
  return (
    <>
      <Link to={`/${name.common}`}>
        <article className="overflow-hidden rounded-lg bg-white shadow transition-all duration-200 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            src={flags.svg}
            alt=""
            className="md: h-72 w-full object-cover"
          />
          <div className="p-4">
            <h2 className=" mb-2 text-lg font-bold text-gray-900 dark:text-white">
              {name.common}
            </h2>
            <ul className="flex flex-col items-start justify-start gap-2 dark:text-gray-400">
              <li>Population: {population.toLocaleString()}</li>
              <li>Region: {region}</li>
              <li>Subregion: {subregion}</li>
            </ul>
          </div>
        </article>
      </Link>
    </>
  );
}
