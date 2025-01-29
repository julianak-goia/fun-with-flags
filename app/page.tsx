import { Header, Footer, Card } from "./components";

const countries = [
  {
    id: 1,
    country: "Brasil",
    capital: "Brasília",
    region: "América do Sul",
    population: 214000000
  },
  {
    id: 2,
    country: "Japão",
    capital: "Tóquio",
    region: "Ásia",
    population: 125800000
  },
  {
    id: 3,
    country: "Canadá",
    capital: "Ottawa",
    region: "América do Norte",
    population: 38500000
  }
];

export default function Home() {
  return (
    <>
    <Header />
    <main className="flex-1">main</main>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {countries.map(({id, country, capital, region, population}) => (
        <Card key={id} country={country} capital={capital} region={region} population={population} />

      ))}
    </div>
    <Footer />
      
    </>
  );
}
