import React from 'react';
import { Card } from 'primereact/card';

const BitirmeFuture = () => {

    const tabStyle = {
        paddingLeft: '2em', // Adjust the value as needed for the desired tab width
      };


    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <Card title="The Impact and Future Directions">
                        <p style={tabStyle}>
                        Our project, which utilizes the Airsim simulator for vehicle detection and tracking, represents a significant advancement in autonomous surveillance and monitoring systems. By employing artificial intelligence (AI) to identify vehicles, our work addresses critical areas in both research and practical applications.                        </p>
                        <p style={tabStyle}>
                        The AI algorithms used for vehicle detection in Airsim can be adapted to real-world conditions, offering enhanced accuracy in identifying and tracking vehicles. Transitioning from simulation to real-world application means that AI-driven drones can autonomously navigate and perform complex tasks with minimal human intervention, increasing efficiency and reducing operational costs.                        </p>
                        <p style={tabStyle}>
                        One critical next step is embedding the AI algorithms into real-life drone systems. This transition will require rigorous testing and adaptation to ensure that the AI performs reliably under various environmental conditions. Research can focus on how AI algorithms react and adapt when deployed in the embedded systems of drones, accounting for factors such as weather, lighting conditions, and potential obstructions.                        </p>
                        <p style={tabStyle}>
                        Currently, the drone in our project moves at a constant speed. Incorporating reinforcement learning techniques can enhance the drone's navigation capabilities. Reinforcement learning will enable the drone to learn from its environment and dynamically optimize its path, improving efficiency and adaptability in complex and changing environments.                        </p>
                        <p style={tabStyle}>
                        Future research can explore both qualitative and quantitative updates to the existing system. Qualitative improvements might include enhancing the user interface for better interaction and control. Quantitative enhancements could focus on refining the AI algorithms for faster and more accurate vehicle detection. Expanding the dataset used for training the AI models can also lead to improved performance and generalizability.                        </p>
                        <p style={tabStyle}>
                        In conclusion, our project has shown promising results in vehicle detection and tracking using the Airsim simulator, laying a strong foundation for real-world applications. Advancing the AI algorithms and integrating reinforcement learning will significantly enhance the functionality and applicability of autonomous drones. The future direction of this project aims at transitioning to real-life embedded systems, continuous improvement of AI capabilities, and contributing to the scientific community through publications and collaborations. These efforts will ensure that our work remains at the forefront of technological advancements in autonomous surveillance and monitoring systems.                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default BitirmeFuture;
