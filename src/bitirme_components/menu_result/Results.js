import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';


const Results = () => {
    const tabStyle = {
        paddingLeft: '2em', // Adjust the value as needed for the desired tab width
    };
        
    return (
        <div className="col-12 md:col-12">
                <div className="card">
                    <Accordion activeIndex={0}>
                        <AccordionTab header="Real Distance vs Camera Distance:">
                        <div>
                            <p style={tabStyle}>
                            The graph of the actual distance (between the drone and the car) and the distance determined using the camera's data is displayed in the picture below.In this scenario we tracked only one car to demonstrate distance difference . Realistic values have been computed from the camera data, as the graph illustrates. The size of the vector formed by the x and y coordinates between the drone and the car is the distance that is being discussed here.                            </p>
                            <img src={'assets\\demo\\images\\distance_graph.jpg'} style={{ width: '50%', height: 'auto', display: 'block', margin: '1em auto' }} />
                        </div>
                        </AccordionTab>
                        <AccordionTab header="Distance Sensor Results:">
                        <div>
                            <p style={tabStyle}>
                            Below is the graph of the values measured by the distance sensor during this time. Since the drone was following the vehicle from behind, a gap occurred between the measured values and the actual values on the winding and inclined road.
                            </p>
                            <img src={'assets\\demo\\images\\distance_sensor.jpg'} style={{ width: '50%', height: 'auto', display: 'block', margin: '1em auto' }} />
                        </div>
                        </AccordionTab>
                        <AccordionTab header="X Position Sensor Results:">
                        <div>
                            <p style={tabStyle}>
                            Below is the graph of the values measured by the x position sensor during this time. Since the drone was following the vehicle from behind, discrepancies occurred between the measured values and the actual values on the winding and inclined road. The actual x position, which represents the horizontal distance between the drone and the car, fluctuated significantly due to the road's curves and the car's maneuvers. The sensor data, however, captured these fluctuations with some lag and slight inaccuracies. Despite these challenges, the overall trend of the x position sensor closely followed the real-time data, demonstrating the sensor's effectiveness in tracking lateral movements.
                            </p>
                            <img src={'assets\\demo\\images\\x_positions.jpg'} style={{ width: '50%', height: 'auto', display: 'block', margin: '1em auto' }} />
                        </div>
                        </AccordionTab>
                        <AccordionTab header="Y Position Sensor Results:">
                        <div>
                            <p style={tabStyle}>
                            Below is the graph of the values measured by the y position sensor during this time. The y position sensor, representing the vertical distance between the drone and the car, also showed variances from the actual values due to the road's inclines and declines. As the car navigated uphill or downhill, the y position values recorded by the sensor deviated from the true distance. These deviations were particularly noticeable on steep slopes where the drone's altitude adjustments lagged behind the car's movements. Nevertheless, the y position sensor provided a reasonable approximation of the car's vertical position, capturing the general pattern of the car's trajectory despite the inherent delays and inaccuracies.
These paragraphs can be used to describe the x and y positions similar to the distance sensor results provided. If you have specific graphs or data points that need to be included, they can be referenced within these descriptions to provide more detailed insights.
                            </p>
                            <img src={'assets\\demo\\images\\y_positions.jpg'} style={{ width: '50%', height: 'auto', display: 'block', margin: '1em auto' }} />
                            </div>
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
    );
};
export default Results;
