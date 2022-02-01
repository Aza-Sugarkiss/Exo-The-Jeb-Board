import "./App.css";
import Title from "./components/Title";
import Job from "./components/Job";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Title content="The Jab Board" />
      </div>
      <div className="Jobs">
        <Job
          className="Job-01"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />

        <Job
          className="Job-02"
          title="Agent de Sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        />

        <Job
          className="Job-03"
          title="Responsable d'Atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Paris"
        />

        <Job
          className="Job-04"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        />

        <Job
          className="Job-05"
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        />

        <Job
          className="Job-06"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        />

        <Job
          className="Job-07"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        />

        <Job
          className="Job-08"
          title="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New-York"
        />

        <Job
          className="Job-09"
          title="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </div>
      <div className="Footer"></div>
    </div>
  );
}

export default App;
