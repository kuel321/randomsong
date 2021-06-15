import logo from './logo.svg';
import './App.css';
import Urlget from './components/urlGet';
import React from 'react';
import ground from './media/background.svg';

function useOnScreen(options) {
  const ref = React.useRef();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setVisible(entry.isIntersecting);
      }, options);

      if (ref.current) {
          observer.observe(ref.current);
      }

      

  }, [ref, options]);

  return [ref, visible];


}

function App() {
  const [ref, visible] = useOnScreen({rootMargin: '-300px'});
  return (
    <div>
    
     <Urlget />
    </div>
  );
}

export default App;
