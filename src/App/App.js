const App = () => {
  const onClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393",
      "_blank"
    );
  };

  // Candidate must fill in implementation here
  return (
    <>
      <div className="App">
        <p onClick={onClick}>Click aqui</p>
      </div>
    </>
  );
};

export default App;
