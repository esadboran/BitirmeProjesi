import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';


const TrackingDemo = () => {


    return (
        <div className="col-12 md:col-12">
                <div className="card">
                    <Accordion activeIndex={0}>
                        <AccordionTab header="Camera Calibration">
                        <div>
                            <p>
                                <strong>Camera Calibration : </strong> 
                                In the Unreal Engine, a camera calibration environment was made. On the ground was a checkerboard. To ensure that the drone could constantly see the checkerboard, the vehicle was pushed in a square-shaped path. The camera's focal length data was extracted from the matrix, which is the calibration's output, independent of the x and y axes. The unreal engine translated the camera's pixel data to the actual distance using these focus lengths.
                            </p> 
                            <img src={'assets\\demo\\images\\focal_length.png'} alt="Camera Calibration Environment" style={{ width: '50%', height: 'auto', display: 'block', margin: '1em auto' }} />
                        </div>
                        </AccordionTab>
                        <AccordionTab header="Object Detection">
                            <div>
                            <p>
                                We use YOLOv8 as our main object detection method. YOLOv8 offers 60 different classes with high speed and accuracy for object detection. As most of the data used for YOLOv8 were not compatible with our case, we first fine tuned YOLOv8-s model with datasets such as visdrone. Then upon seeing it did not perform well with the vehicles in the UE4 environment, we created our own dataset to finetune the model again. As detection is necessary in the tracking approach we took, we needed a solid detection with high accuracy. In the end we accomplished this goal.                            
                                </p> 
                            </div>
                        </AccordionTab>
                        <AccordionTab header="Object Tracking ">
                        <div>
                            <p>
                            We used a tracking by detection approach. Upon research we discovered some of the popular tracking algorithms are deprecated. We decided to use BoTSORT which is well compatible with the detection architecture we chose. BoTSORT provides a robust implementation of kalman filter, camera motion compensation and a simple reid algorithm which uses some IoU operations and basic feature matching in itself. We tried different parameters to run the tracking algorithm we decided to use parameters below in our custom yaml file: 
                            track_high_thresh: 0.6 <br></br>
                            track_low_thresh: 0.2<br></br>
                            new_track_thresh: 0.75<br></br>
                            track_buffer: 900<br></br>
                            match_thresh: 0.85
</p>
                        </div>
                        </AccordionTab>
                        <AccordionTab header="Re-Identification">
                        <div>
                            <p>
                            After the MoT implementation was done a big challenge in our way was the occlusion problem. BoTSORT gives outstanding performance with its simple ReID implementation in clear view but we quickly realized it is ineffective when there’s a complete occlusion. In result we came up with another ReID implementation over the basic one in the tracker.
                            </p>
                            <p>
                            We tried several methods such as image embedding through a second deep learning model, feature matching with algorithms like SIFT, Lightglue. Some of these solutions were inefficient speedwise and some could not fix our problem as all of are objects were some sort of vehicles, each one got pretty similar scores for similarity and feature matching.
                            </p>                           
                            <p>
                            In the end we had to go back to simpler approaches and we implemented a similar approach mentioned in the paper of BoTSORT. We implemented a kalman filter for the center points of each tracked object in the screen. We calculated a car is about 40x60 pixels within the camera's view, so instead of using a xywh kalman filter we used filters for just center points and drew a 40x60 bounding box arround them. We compared IoUs to determine the reid process. We introduced a 30 frames constraint in case of no IoUs to delete unnecessary kalman filters.	However since we did not implement camera movement compensation to this project yet, it still can fail on harsh movements of the camera.
                            </p>                            
                            </div>
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
    );
};
export default TrackingDemo;
