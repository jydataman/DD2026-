export default function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
        Welcome to the Destinations Admin System
      </h1>
      <p style={{ color: '#666', fontSize: '18px', margin: '5px 0' }}>
        CIM453 Dynamic Data Final Class Assignment
      </p>
      {/* Making your name italic and slightly more spaced out */}
      <p style={{ 
        fontWeight: '300', 
        fontStyle: 'italic', 
        letterSpacing: '1px', 
        color: '#888' 
      }}>
        Joshua Yepes
      </p>
    </div>
  );
}