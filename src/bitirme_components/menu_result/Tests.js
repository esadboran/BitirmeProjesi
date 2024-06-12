import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
    

const Tests = () => {


    const tabStyle = {
        paddingLeft: '2em', // Adjust the value as needed for the desired tab width
    };
        
    return (
        <div className="col-12 md:col-12">
                <div className="card">
                    <Accordion activeIndex={0}>
                        <AccordionTab header="Drone Altitude Measurement Test ">
                        <div>
                            <p style={tabStyle}>
                            Controlling the drone and accurately determining its distance from the tracked vehicle is critically 
                            dependent on measuring the drone's altitude. We considered three options for this purpose: GPS data, LiDAR sensor, 
                            and distance sensor. Although the GPS sensor provided the highest accuracy, it was unsuitable for our specific needs,
                             as it does not measure the relative height difference between the vehicle and the drone. Consequently, we opted for
                              the distance sensor over the LiDAR sensor. This decision was based on our observations of a strong correlation between 
                              the drone's movements and the data obtained from the distance sensor, making it a more reliable choice for our application.
                               Additionally, the distance sensor offered a more straightforward integration with our existing control systems, enhancing 
                               overall system performance and reliability.
                            </p>
                        </div>
                        </AccordionTab>
                        <AccordionTab header="Drone Control Tests">
                        <div>
                            <p style={tabStyle}>
                            As previously mentioned, the distance between the drone and the car is calculated using camera data.
                             The challenge in the control phase is ensuring the drone can accurately track and follow the car using this distance measurement. 
                             The formula we previously developed proved ineffective in tests, primarily because the camera's 
                             data is significantly affected by the drone's pitch movements, leading to incorrect speed estimations. 
                             To address this, we investigated the distance between the car and the drone during the object tracking 
                             phase and trained a regression model to generalize the entire drone control problem. Additionally, 
                             reinforcement learning presents a potential solution for this issue. However, despite AirSim's support 
                             for reinforcement learning, this approach remains relatively new and is too slow for effectively training a reinforcement model.
                            </p>
                        </div>
                        </AccordionTab>
                        <AccordionTab header="Gimbal Test">
                        <div>
                            <p style={tabStyle}>
                            During control tests, we observed that the pitch movements of the drone adversely affected computer vision tasks.
                             To address this issue, we integrated a gimbal into our camera system, aiming to stabilize the camera in response to the drone's movements.
                              However, we found that the AirSim gimbal extension was not meticulously developed. 
                              The gimbal's performance is controlled by a parameter ranging from 0 to 1. 
                              Setting this parameter to 1 results in an unrealistically perfect gimbal performance. 
                              As we began to reduce the parameter to achieve a more realistic performance, 
                              we discovered that it did not function as intended. Instead of adjusting the gimbal's effectiveness, 
                              this parameter influenced the likelihood of displaying the real image versus the corrected image, 
                              leading to excessively distorted video sequences that hindered data processing.
                            </p>
                        </div>
                        </AccordionTab>
                        <AccordionTab header="Limiting Pitch Angle">
                        <div>
                            <p style={tabStyle}>
                            In the earlier chapters, we discussed the issues caused by the drone's very aggressive pitch movement. 
                            We therefore intended to reduce the issues we encountered by restricting the drone's pitch angle. Nevertheless, 
                            we discovered that the simulation kit we use, Airsim, lacks this feature.
                            </p>
                            </div>
                        </AccordionTab>
                        <AccordionTab header="Tracker Tests">
                        <div>
                            <p style={tabStyle}>
                            Ultimately we tested with two different trackers with different parameters. These parameters were crucial for trackers to associate tracks and match these tracks. Good set of parameters also improved re-identification task on occlusions. After obtaining near optimal parameters we tested the two trackers again.
                
                            </p>
                            <p style={tabStyle}>
                            Bytetrack gave us rather inaccurate shaped bounding boxes. This caused the tracking algorithm to fail on reid task occasionally. So we decided to not use it.                
                            </p>
                            <img src={'assets\\demo\\images\\tracker-test_1.png'} style={{ width: '30%', height: 'auto', display: 'block', margin: '1em auto' }} />
                            <p style={tabStyle}>
                            BoTSORT gave us precise results with the parameters mentioned in the methodology part. So we decided to use this tracker over bytetrack.                            </p>
                            <img src={'assets\\demo\\images\\tracker-test_2.png'} style={{ width: '30%', height: 'auto', display: 'block', margin: '1em auto' }} />

                            </div>
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
    );
};
    
export default Tests;
