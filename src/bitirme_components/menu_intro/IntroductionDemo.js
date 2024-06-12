import React from 'react';
import { Card } from 'primereact/card';


const IntroductionDemo = () => {

    const tabStyle = {
        paddingLeft: '2em', // Adjust the value as needed for the desired tab width
      };

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <Card title="Introduction of the Project">
                        <p style={tabStyle}>
                        The rapid growth of drone technology has created new opportunities for research and practical applications, particularly in the realm of autonomous systems. One of the critical capabilities that enhance the functionality of drones in these applications is their ability to autonomously detect and track objects. Object detection involves identifying and locating objects within a frame, while object tracking involves following the identified object across successive frames. Integrating these capabilities into drones enhances their autonomous navigation, allowing them to interact more intelligently with their environment. This project focused on developing an active object tracking and detection system for drones using the Airsim simulator.                      
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
};
export default IntroductionDemo;
