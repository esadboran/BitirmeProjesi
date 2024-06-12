import React from 'react';
import { Card } from 'primereact/card';


const Demo = () => {

      return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                <Card title="Video of the Project Result">
                    <div className="video-container" style={{ position: 'relative', paddingBottom: '40%', height: 0, overflow: 'hidden', maxWidth: '70%', margin: '0 auto', background: '#000' }}>
                        <iframe 
                        src="https://www.youtube.com/embed/XB9QJQ73OIs" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen 
                        title="Project Abstract Video"
                        style={{ position: 'absolute', top: 0, left: 0, display: 'block', width: '100%', height: '100%' }}
                        ></iframe>
                    </div>
                </Card>
                </div>
            </div>
        </div>
    );
};
export default Demo;
