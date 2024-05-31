import React from 'react';
import { Card } from 'primereact/card';

const BitirmeAbstract = () => {
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <Card title="Abstract of the Project">
                        <p>
                            As drone technology continues to gain traction across multiple industries, the necessity for robust object tracking and detection capabilities becomes increasingly apparent. Traditional methods often prove inadequate, particularly when faced with adverse weather conditions or complex environments filled with obstacles. These limitations constrain the potential applications of drones. Hence, this study, titled "Active Object Tracking on a Drone," explores innovative strategies to elevate drone-based object tracking to new heights.
                        </p>
                        <p>
                            Drawing upon previous research, our project tackles real-world challenges such as trajectory tracking, multi-object detection, and maintaining tracking continuity despite obstacles like bridges, trees, or traffic signs. We harness the power of the Airsim simulator program, providing a virtual environment for meticulous testing and development.
                        </p>
                        <p>
                            Our methodology involves generating bespoke datasets tailored to our specific objectives and strategically utilizing pre-trained models to streamline the training and evaluation processes of our tracking algorithms. By immersing ourselves in diverse simulated scenarios and environmental conditions, our goal is to bolster the performance of our algorithms across a spectrum of real-world settings.
                        </p>
                        <p>
                            Our exploration within the Airsim simulator framework encompasses various environments and conditions. From scenarios with varying lighting conditions to simulations of obstructed vision caused by obstacles, we confront the complexities inherent in real-world drone operations, facilitating the efficient development and rigorous testing of sophisticated tracking algorithms.
                        </p>
                        <p>
                            We aim to demonstrate the efficacy of simulation-based approaches in addressing tangible challenges in drone-based object tracking. By enhancing reliability and adaptability, we empower drones to autonomously navigate and track targets, a capability crucial for operations such as search and rescue missions. Additionally, our work opens avenues for innovative applications, from law enforcement surveillance in urban environments to crowd monitoring during events, ultimately augmenting public safety.
                        </p>
                        <p>
                            In the future stages of the project, after completing development and testing within the Airsim simulator, the focus may shift to real-world implementation and testing. This phase will involve deploying the algorithms on actual drones and conducting tests in real-world conditions. By doing so, we aim to validate the effectiveness of our approaches in enhancing drone autonomy and object tracking capabilities. Through this iterative process of refinement and validation, we anticipate significant advancements in the reliability and adaptability of drone-based tracking systems.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default BitirmeAbstract;
