import './App.css';
import GlassCard from './Glasscard';

function App() {
  return (
    <div className="App"
    style={{
      width: "100vw",
      height:"100vh",
      backgroundColor:"gray",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat:"no-repeat",
      display:"flex",
      justifyContent:"center",
      alignItems: "center",
    }
    }>
      <GlassCard />
    </div>
  );
}

export default App;
