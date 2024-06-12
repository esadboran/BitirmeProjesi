import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

const ToolsDemo = () => {

    const tabStyle = {
        paddingLeft: '2em', // Adjust the value as needed for the desired tab width
      };
      
    return (
        <div className="col-12 md:col-12">
                <div className="card">
                    <h6>In this project focused on drone-based vehicle detection 
                        and tracking, several key tools were utilized to achieve our objectives
                         efficiently and effectively. These tools include Python, Unreal Engine, AirSim, and Roboflow.</h6>
                    <Accordion activeIndex={0}>
                        <AccordionTab header="Python">
                            <p>
                            <strong>Python</strong> was the primary programming language used throughout the project due to its versatility, ease of use, and the vast array of libraries available. Its extensive ecosystem of tools and libraries made it ideal for a wide range of tasks, from data processing and analysis to the development and deployment of machine learning models.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="Unreal Engine">
                            <div>
                            <p>
                                <strong>Unreal Engine </strong> served as the platform for creating high-fidelity simulation environments. It is a powerful game engine that provides realistic graphics and physics, essential for developing accurate simulation scenarios.
                            </p>
                            <p>
                                <strong style={tabStyle}>Environment Creation: </strong> Custom environments were designed to simulate various driving conditions and scenarios, enhancing the diversity of the training data.
                            </p>
                            <p>
                                <strong style={tabStyle}>Scenario Control: </strong> Unreal Engine's Blueprint system allowed for the creation of interactive scenarios, which were used to test the detection and tracking algorithms under different conditions.
                            </p>
                            <p>
                                Unreal Engine's capabilities ensured that the simulated environments closely mimicked real-world conditions, which was crucial for training robust models.
                            </p>
                            </div>
                        </AccordionTab>
                        <AccordionTab header="AirSim">
                        <div>
                            <p>
                                <strong>AirSim</strong>, developed by Microsoft, is a simulator for drones and other autonomous vehicles. It integrates seamlessly with Unreal Engine and provides a realistic platform for testing and data collection. It is open-source, cross-platform, and supports software-in-the-loop simulation with popular flight controllers such as PX4 & Ardupilot and hardware-in-the-loop with PX4 for physically and visually realistic simulations.

                            </p>
                            <p>
                                <strong style={tabStyle}> High-Fidelity Simulation: </strong> AirSim offers realistic physics and sensor models, including cameras, LiDAR, and GPS, which are critical for developing accurate detection and tracking systems.
                            </p>
                            <p>
                                <strong style={tabStyle}>Data Collection: </strong> 
                                Custom scripts were developed to control the drone, capture sensor data, and store it for further processing                            </p>
                            </div>
                        </AccordionTab>
                        <AccordionTab header="Roboflow">
                        <div>
                            <p>
                                <strong>Roboflow </strong>
                                 is a tool for managing and preprocessing datasets, particularly useful in computer vision projects. It provides an array of features to streamline the preparation of training data.
                            </p>
                            <p>
                                <strong style={tabStyle}>Dataset Annotation: </strong> 
                                Roboflow facilitated the annotation of images, making it easier to create labeled datasets for training object detection models.                            </p>
                            <p>
                                <strong style={tabStyle}> Data Augmentation: </strong> 
                                Various data augmentation techniques, such as rotation, flipping, and scaling, were applied to increase the diversity of the training data and improve model robustness.                           </p>
                            <p>
                                <strong style={tabStyle}>Export and Integration: </strong> 
                                Roboflow allowed for easy export of datasets in formats compatible with popular frameworks such as YOLO.</p>
                            </div>
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
    );
};
export default ToolsDemo;
