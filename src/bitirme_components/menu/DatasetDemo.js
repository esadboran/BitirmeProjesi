import React, { useRef } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import { Menu } from 'primereact/menu';

const DatasetDemo = () => {
    const menu1 = useRef(null);

    const tabStyle = {
        paddingLeft: '2em', // Adjust the value as needed for the desired tab width
      };

      const cardHeader = (
        <div className="flex align-items-center justify-content-between mb-0 p-3 pb-0">
            <h5 className="m-0">Finally</h5>
            <Button icon="pi pi-plus" className="p-button-text" onClick={(event) => menu1.current.toggle(event)} />
            <Menu
                ref={menu1}
                popup
                model={[
                    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
                    { label: 'Remove', icon: 'pi pi-fw pi-minus' }
                ]}
            />
        </div>
    );

    return (
        <div className="col-12 md:col-12">
                <div className="card">
                    <h6>In this project, several datasets were utilized and evaluated for the task of drone-based vehicle detection and tracking. 
                        The following sections describe each dataset, their sources, and their relevance to our objectives.</h6>
                    <Accordion activeIndex={0}>
                        <AccordionTab header="VisDrone">
                        <div>
                            <p>
                                <strong>VisDrone  </strong> 
                                 is a large-scale dataset specifically designed for visual analysis of drones. It includes annotated images and videos captured by drones, covering various scenes and scenarios.                            </p>
                            <p>
                                <strong style={tabStyle}>Content: </strong>
                                 The dataset contains thousands of images and videos annotated with bounding boxes for various objects, including vehicles.                            </p>
                            <p>
                                <strong style={tabStyle}>Challenges: </strong>
                                Although VisDrone is comprehensive, the diversity and complexity of scenes posed significant challenges for our specific needs, particularly in terms of consistent performance in highway scenarios.                            </p>
                            </div>
                        </AccordionTab>
                        <AccordionTab header="UAVDT">
                            <div>
                            <p>
                                <strong>UAVDT (UAV Detection and Tracking Dataset):  </strong>
                                This dataset, available at UAVDT, provides extensive video sequences captured by UAVs, annotated for various object detection and tracking tasks.
                            </p> 
                            <p>
                                <strong style={tabStyle}>Content: </strong>
                                UAVDT includes video sequences with annotated objects, focusing on vehicle detection and tracking in urban environments.
                            </p> 
                            <p>
                                <strong style={tabStyle}>Challenges: </strong>
                                While the dataset is rich in urban scenarios, it lacked sufficient coverage of highway environments, which limited its applicability for our specific use case.
                            </p>
                            </div>
                        </AccordionTab>
                        <AccordionTab header="EXID ">
                        <div>
                            <p>
                                <strong>EXID: </strong>
                                This dataset, available at EXID, focuses on vehicles on highways, providing high-quality images with detailed annotations.                            </p> 
                            <p>
                                <strong style={tabStyle}>Content: </strong>
                                EXID contains annotated images of vehicles on highways, making it particularly relevant for our project.                            </p> 
                            <p>
                                <strong style={tabStyle}>Challenges: </strong>
                                Despite its relevance, certain aspects of the dataset, such as limited diversity in vehicle types and environmental conditions, posed challenges for training robust models.                            </p>
                        </div>
                        </AccordionTab>
                        <AccordionTab header="YOLOv8 Pre-Trained Dataset">
                        <div>
                            <p>
                                <strong>YOLOv8 Pre-Trained Dataset:  </strong>
                                This dataset includes pre-annotated images used to train the YOLOv8 model, a state-of-the-art object detection framework.                            </p> 
                            <p>
                                <strong style={tabStyle}>Content: </strong>
                                The dataset comprises a wide variety of images annotated with bounding boxes for different objects, including vehicles.                            </p> 
                            <p>
                                <strong style={tabStyle}>Usage: </strong>
                                We utilized this dataset to fine-tune our detection models, leveraging the pre-trained weights to improve detection accuracy and reduce training time.                            </p>
                            <p>
                            <strong style={tabStyle}>Advantages: </strong>
                            Using a pre-trained model significantly enhanced the performance of our vehicle detection algorithms, providing a solid foundation for further refinement.
                            </p>                        
                            </div>
                        </AccordionTab>
                        <AccordionTab header="Custom Dataset from AirSim Environment">
                        <div>
                            <p>
                                <strong>Custom Dataset from AirSim Environment: </strong>
                                 We collected images from the simulated environments  <strong> created in AirSim and used Roboflow </strong> to preprocess and annotate these images, creating a custom dataset.
                            </p>                            <p>
                                <strong style={tabStyle}>Content: </strong>
                                The dataset includes images captured in various simulated driving scenarios, annotated for vehicle detection.                          </p> 
                            <p>
                                <strong style={tabStyle}>Usage: </strong>
                                This custom dataset was used to supplement the YOLOv8 pre-trained model, ensuring that our models were well-adapted to the specific conditions and scenarios relevant to our project.
                                </p>                            <p>
                            <strong style={tabStyle}>Advantages: </strong>
                            The ability to tailor the dataset to our exact requirements and scenarios ensured that the models were robust and performed well in the intended application environment.
                            </p>                        
                            </div>
                        </AccordionTab>
                    </Accordion>
                    <Card header={cardHeader}>
                            <p className="line-height-3 m-0">
                            While initial datasets like VisDrone, UAVDT, and EXID provided valuable insights,
                            they were not fully utilized due to specific challenges and limitations. Instead, we focused on leveraging the YOLOv8 pre-trained dataset and our custom dataset from the AirSim environment. This combination allowed us to train highly accurate and 
                            robust vehicle detection and tracking models, tailored to the specific requirements of our project.
                            </p>
                    </Card>
                </div>
            </div>
    );
};
export default DatasetDemo;
