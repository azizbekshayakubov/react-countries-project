import { useState, useEffect } from "react";
import Article from "./Article";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCountries();
  }, []);

  return (
    <>
      {!countries ? (
        <h1 className="flex h-screen items-center justify-center text-center text-4xl font-bold uppercase tracking-wide text-gray-900 dark:text-white">
          Loading....
        </h1>
      ) : (
        <section className="container mx-auto p-8">
          {/*for*/}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <Article key={country.name.common} {...country} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
