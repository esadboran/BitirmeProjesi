import React from 'react';
import { Card } from 'primereact/card';
const ProblemDemo = () => {

    const tabStyle = {
        paddingLeft: '2em', // Adjust the value as needed for the desired tab width
      };
      
      return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <Card title="Problem Definition">
                        <p style={tabStyle}>
                        Our first goal in this project is to create an environment asset on the Airsim Simulator. Initially, we placed multiple vehicles and assets in the environment. After setting up the environment , we implemented multiple vehicle detection and multi object tracking using artificial intelligence models. We implemented a physical tracking algorithm for the drone to follow one selected object acquired from multi object tracking. We also tried to implement a system to seamlessly switch between objects that are followed within the view of the camera. As the project progressed, we accounted for environmental variability, occlusion, and sensor clogging.
                        </p>
                        <p style={tabStyle} >
                        Several challenges emerged during the development process. We also faced difficulties with maintaining an appropriate distance between the drone and the tracked vehicle, ensuring the drone made precise turns, and having the drone maintain a consistent altitude during tracking. We also had problems maintaining the same Id for vehicles when there is an occlusion.                        </p>
                        <p style={tabStyle}>
                        Addressing these and similar challenges required optimizing our tracking algorithms for accuracy and speed, adapting to diverse environmental conditions, and ensuring efficient use of drone resources. By overcoming these barriers , we aimed to enhance the  active object tracking and detection system, contributing to the field of autonomous systems and expanding the potential applications of drones and UAV. </p>
                    </Card>
                </div>
            </div>
        </div>
    );
};
export default ProblemDemo;
