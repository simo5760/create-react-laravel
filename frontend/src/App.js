import Upload from "./components/Upload";
import Results from "./components/Results";

function App() {
  return (
    <div className="bg-indigo-500">
      <h1>📄 Document Classifier</h1>
      <Upload />
      <Results />
    </div>
  );
}

export default App;