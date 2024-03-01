import { Country } from "../../interfaces/countries";

interface CountriesTableProps {
  data: Country[];
}

export default function CountriesTable({ data }: CountriesTableProps) {
  return (
    <div>
      <h2>Countries Table</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Country Name</th>
            <th>Capital City</th>
            <th>Contintnet</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: Country, index: number) => {
            return (
              <tr key={item.name.common}>
                <td>{index + 1}</td>
                <td>{item.name.common}</td>
                <td>{item.capital}</td>
                <td>{item.region}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
