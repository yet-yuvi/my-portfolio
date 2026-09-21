import Image from './components/Image';
import Bio from './components/Bio';

import './App.css';

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300 gap-4">
      <Image />
      <Bio />
      {/* social links */}
    </div>
  );
}

export default App;
