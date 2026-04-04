function Results() {

  const downloadExcel = () => {
    window.open("http://127.0.0.1:8000/api/results");
  };

  return (
    <div>
      <button onClick={downloadExcel}>
        📥 Télécharger Excel
      </button>
    </div>
  );
}

export default Results;