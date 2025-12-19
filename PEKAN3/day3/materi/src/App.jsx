import React, { useState, Suspense } from 'react';

// Menggunakan React.lazy untuk lazy load komponen
const LazyLoadedComponent = React.lazy(() => import('./component/Lazy'));

// LazyLoadedComponent.jsx (file terpisah)
// import React from 'react';
// function LazyLoadedComponent() {
//   return <div>Ini adalah komponen yang dimuat secara lazy!</div>;
// }
// export default LazyLoadedComponent;


function App() {
  const [showLazy, setShowLazy] = useState(false);

  return (
    <div>
      <h2>Lazy Loading Components</h2>
      <button onClick={() => setShowLazy(true)}>
        Tampilkan Komponen Lazy
      </button>

      {showLazy && (
        <Suspense fallback={<div>Memuat komponen...</div>}>
          {/* Komponen ini hanya akan dimuat saat showLazy true */}
          <LazyLoadedComponent />
        </Suspense>
      )}
    </div>
  );
}

export default App;