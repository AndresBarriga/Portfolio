import React, { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    // Load the Calendly widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    // Append the script to the document
    document.body.appendChild(script);

    // Remove the script when the component unmounts to avoid memory leaks
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/andresbarriga/30min" style={{ minWidth: '320px', height: '700px' }}></div>
  );
};

export default CalendlyWidget;
