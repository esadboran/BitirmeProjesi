import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Card } from 'primereact/card';
import { Fieldset } from 'primereact/fieldset';

const Literature = () => {
    const cardHeader = (
        <div className="flex align-items-center justify-content-between mb-0 p-3 pb-0">
            <h5 className="m-0">Finally</h5>
        </div>
    );

    const tabStyle = {
        paddingLeft: '2em', // Adjust the value as needed for the desired tab width
    };

    return (
        <div className="col-12 md:col-12">
              <p style={tabStyle}>In the literature, deep reinforcement learning models, which learn to track and move UAVs together, provide state-of-the-art results. However, training these models demands extensive data, computational power, and systems to train effectively. Currently, Airsim lacks the reinforcement learning support necessary for such models, or at least support that we could use. The methodology we used for this project encompasses Airsim Simulator, Object Detection Algorithms, Object Tracking Algorithms, Multi-Object Tracking, Simulator-Based Development, and Robustness to Occlusion and Variability. We encountered both successes and failures in these areas. We continued our detailed research on these areas throughout the period.</p>
                <div className="card">
                    <Accordion activeIndex={0}>
                        <AccordionTab header="Airsim">
                        <div>
                            <p>
                                <strong>AirSim,  </strong> 
                                an open-source simulator developed by Microsoft, has become a pivotal tool in the research of multi-vehicle object tracking using drones. Leveraging its high-fidelity simulation capabilities, AirSim provides a realistic virtual environment where researchers can test and refine their algorithms for tracking multiple moving vehicles. This simulator supports advanced features such as realistic vehicle dynamics, sensor models, and environmental interactions, which are crucial for developing robust tracking systems. In the context of drone applications, AirSim allows for the simulation of complex scenarios, including varied terrains, weather conditions, and urban settings, where drones must autonomously navigate and maintain visual contact with multiple targets. By offering a safe and controlled environment for experimentation, AirSim accelerates the development and testing of multi-vehicle tracking technologies, ultimately contributing to advancements in autonomous navigation, surveillance, and traffic monitoring systems.                            
                            </p> 
                        </div>
                        </AccordionTab>
                        <AccordionTab header="Object Detection Algorithms">
                        <div className="card">
                            <h5>YOLOv8:</h5>
                            <Fieldset toggleable collapsed>
                                <p>
                                YOLOv8, one of the most recent versions in the YOLO (You Only Look Once) family of object detection frameworks, expands on the unique ideas established by its predecessors. YOLOv8, like previous versions, addresses object detection as a single regression issue, predicting bounding boxes and class probabilities from entire images in a single evaluation. This approach preserves YOLO's simplicity and quickness, but YOLOv8 adds significant enhancements to improve accuracy and efficiency. It incorporates significant architectural enhancements, such as improved feature extraction and updated anchor-free detection methods, resulting in more precise object localization and categorization. YOLOv8 achieves real-time processing speeds with outstanding precision, making it appropriate for a wide range of applications, including autonomous driving and video surveillance.
                                </p>
                                <p>
                                One of the most notable improvements made to YOLOv8 is its ability to handle small objects and densely packed situations more successfully than prior versions. This is accomplished through a combination of enhanced feature pyramid networks and better handling of spatial relationships within images. Furthermore, YOLOv8 employs more sophisticated training procedures and loss functions, such as advanced augmentation strategies and self-distillation, to improve model robustness and generalizability. YOLOv8 now outperforms advanced object detectors in terms of speed and accuracy, making it a top tool for real-time object detection.
                                </p>
                                <img src={'assets\\demo\\images\\yolov_graph.png'} alt="Yolov8" style={{ width: '50%', height: '50%' }} />
                            </Fieldset>
                        </div>
                        <div className="card">
                            <h5>RetinaNet:</h5>
                            <Fieldset toggleable collapsed>
                                <p>
                                Tsung-Yi Lin et al. introduced <strong>RetinaNet,  </strong> which addresses a critical object detection obstacle known as the class imbalance problem. Traditional one-stage detectors, which process a dense grid of probable object locations, frequently exhibit low accuracy because to the large quantity of background samples compared to object samples. RetinaNet addresses this issue with its new focal loss function, which decreases the loss contribution from simple, well-classified examples while focusing training on difficult, misclassified examples. RetinaNet combines the accuracy of two-stage detectors like Faster R-CNN with the efficiency of single-stage detectors, resulting in great detection performance without sacrificing speed.                                </p>
                                <p>
                                To handle objects of varying sizes, RetinaNet uses a Feature Pyramid Network (FPN) as its backbone, which is built on top of a ResNet architecture. This combination allows the backbone deep neural network such as RetinaNet to maintain great accuracy over a wide variety of object sizes. The network connects two subnetworks to the FPN: one for classifying anchor boxes and the other for regressing from anchor boxes to ground truth object boxes. This architecture enables RetinaNet to perform precise object localization and classification efficiently. RetinaNet is a premier framework for real-time object detection, producing cutting-edge performance on benchmarks like COCO. Its novel focal loss function and powerful FPN backbone contribute to this success                                </p>
                                <img src={'assets\\demo\\images\\retinanet.png'} alt="RetinaNet" style={{ width: '50%', height: '50%' }} />
                            </Fieldset>
                        </div>
                        <div className="card">
                            <h5>ResNet:</h5>
                            <Fieldset toggleable collapsed>
                                <p>
                                The Deep Residual Learning framework, presented by Kaiming He et al., solves the degradation problem faced while training very deep neural networks. The methodology allows for the training of significantly deeper networks without sacrificing performance by providing residual connections, which allow gradients to flow through the network more efficiently. Residual connections are implemented through residual blocks, adding a layer's input to its output before applying the activation function. This allows the network to learn residual functions rather than unreferenced mappings.
                                </p>
                                <p>
                                On benchmarks like ImageNet, residual networks (ResNets) outperformed standard convolutional networks. Beyond image classification, ResNets have been effectively used to tasks such as object detection, semantic segmentation, and image generation, establishing themselves as a core architecture in deep learning. The addition of residual connections has encouraged further developments in network designs, leading to more sophisticated models based on the concepts of residual learning.​
                                </p>                                
                                <img src={'assets\\demo\\images\\resnet1.png'} alt="ResNet" style={{ width: '30%', height: '30%' }} />
                                <img src={'assets\\demo\\images\\resnet2.png'} alt="ResNet" style={{ width: '50%', height: '50%' }} />
                            </Fieldset>
                        </div>
                        <div className="card">
                            <h5>MobileNet</h5>
                            <Fieldset toggleable collapsed>
                                <p>
                                Andrew G. Howard et al. introduced MobileNets, which are efficient convolutional neural networks intended specifically for mobile and embedded vision applications. MobileNets use depth-wise separable convolutions to drastically reduce computational cost and model size, allowing real-time object detection and other vision tasks on resource-constrained devices. MobileNets' flexibility is improved by two hyperparameters: width multiplier and resolution multiplier, which balance model size, latency, and accuracy, making it suitable for varied applications.                                </p>
                                <p>
                                Experiments demonstrate MobileNets' effectiveness across tasks such as ImageNet classification and object detection, maintaining high performance despite their compact size. The success of MobileNets in real-world applications, such as fine-grain classification and face attribute recognition, highlights their suitability for deployment in mobile and embedded systems. Their introduction has influenced both academic research and practical implementations, setting a new benchmark for efficient neural network architectures in computer vision​​.
                                </p>                                
                                <img src={'assets\\demo\\images\\mobilenet.png'} alt="MobileNet" style={{ width: '30%', height: '30%' }} />
                            </Fieldset>
                        </div>
                        </AccordionTab>
                        <AccordionTab header="Object Tracking Algorithms">
                        <div className="card">
                            <h5>DeepSORT:</h5>
                            <Fieldset toggleable collapsed>
                                <p>
                                <strong>DeepSORT  </strong>  enhances the fundamental SORT architecture by using deep appearance features for data association. This addition dramatically enhances DeepSORT's ability to handle occlusions and keep track of identities. DeepSORT uses a pre-trained convolutional neural network (CNN) for person re-identification, allowing for more accurate detecting association across frames. This decreases identity transitions while improving overall tracking performance. DeepSORT's integration of deep appearance metrics with the standard Kalman filter and Hungarian technique leads to efficient and precise tracking, making it a formidable competitor in real-time applications that require high tracking precision.
                                </p>
                                <p>
                                While DeepSORT improves tracking robustness, it increases computing needs due to the extra appearance feature extraction phase. This can result in slower processing speeds than simpler tracking frameworks, especially when dealing with huge amounts of video data. Using pre-trained models for appearance features may limit the tracker's capacity to adapt to new surroundings or object kinds not covered in training data.
                                </p>
                                <img src={'assets\\demo\\images\\deepsort.png'} alt="DeepSORT" style={{ width: '50%', height: '50%' }} />
                            </Fieldset>
                        </div>
                        <div className="card">
                            <h5>ByteTrack:</h5>
                            <Fieldset toggleable collapsed>
                                <p>
                                ByteTrack improves the tracking-by-detection paradigm by concentrating on associating low-confidence detection boxes. This method considerably enhances the recovery of tracklets that would otherwise be lost, which improves tracking accuracy. ByteTrack uses a simple Kalman filter for motion prediction and a strong association method to properly handle long-distance relationships. By combining high- and low-confidence detections, ByteTrack reduces identity switches while maintaining higher IDF1 scores, indicating its adaptability and reliability. ByteTrack excels in many tracking contexts such as MOTA, IDF1, with fewer identity shifts.
                                </p>
                                <p>
                                Although ByteTrack's strategy of using all available detection data enhances accuracy, it could result in additional computing expense. The inclusion of low-confidence detections complicates the association process, potentially reducing tracking performance in real-time applications. ByteTrack's efficiency depends on the quality of the underlying object detector, which may limit its performance in cases with low detection quality or changing confidence levels.
                                </p>
                                <img src={'assets\\demo\\images\\bytetrack.png'} alt="ByteTrack" style={{ width: '50%', height: '50%' }} />
                            </Fieldset>
                        </div>
                        <div className="card">
                            <h5>BoTSORT:</h5>
                            <Fieldset toggleable collapsed>
                                <p>
                                BoT-SORT adds major improvements to standard tracking-by-detection algorithms by incorporating motion and appearance information, as well as camera motion adjustment. This tracker solves significant problems in SORT-like algorithms, particularly in dynamic situations with dense object tracking. BoT-SORT uses an updated Kalman filter state vector to increase the accuracy of bounding box predictions and associations. BoT-SORT improves data association by combining IoU with ReID's cosine-distance fusion, resulting in fewer identity switches and false negatives. The tracker's good results in important metrics like MOTA, IDF1, and HOTA show its robustness and reliability in retaining tracklets during occlusions and complex motion circumstances.
                                </p>
                                <p>
                                Despite its advantages, BoT-SORT has certain drawbacks. The computational complexity of high-density object tracking scenarios grows as advanced modules such as camera motion compensation and deep feature extraction for re-identification are integrated. This can result in reduced processing speeds, which may not be suitable for real-time applications lacking powerful hardware. Camera motion correction relies on accurate background keypoint extraction, which can be problematic in complex scenarios.
                                </p>                                
                                <img src={'assets\\demo\\images\\botsort.png'} alt="ResNet" style={{ width: '30%', height: '30%' }} />
                            </Fieldset>
                        </div>
                        </AccordionTab>
                        <AccordionTab header="Re-identification (ReID)">
                        <div className="card">
                            <h5>OpenAI CLIP:</h5>
                            <Fieldset toggleable collapsed>
                                <p>
                                OpenAI's CLIP (Contrastive Language-picture Pre-training) model has shown great promise for re-identification tasks by utilizing its capacity to generate high-quality picture embeddings. CLIP, which is trained on a broad dataset of text-image pairs, produces embeddings that contain valuable semantic information. These embeddings can be compared for re-identification by calculating the cosine similarity between images. The use of cosine similarity provides an efficient and effective metric for measuring the similarity of embeddings, allowing for strong re-identification across diverse settings and viewpoints. Thanks to its strong discriminative strength and generalization capabilities this technique improves accuracy and reduces false matches in applications like human re-identification and object tracking.
                                </p>
                                <p>
                                The key advantage of using CLIP embeddings with cosine similarity is the model's capacity to recognize complex visual concepts and relationships, which is made possible by its enormous training data. This produces embeddings that are not only accurate but also adaptive to a wide range of contexts, eliminating the need for task-specific fine-tuning. However, one restriction is the computational expense of producing these embeddings, which can be resource-intensive. CLIP excels at capturing semantic information, but may struggle with distinguishing between similar items, which is critical for re-identification tasks                                </p>
                                <img src={'assets\\demo\\images\\ai_clip.png'} alt="OpenAI CLIP" style={{ width: '50%', height: '50%' }} />
                            </Fieldset>
                        </div>
                        <div className="card">
                            <h5>SIFT:</h5>
                            <Fieldset toggleable collapsed>
                                <p>
                                The Scale-Invariant Feature Transform (SIFT) technique is a well-known method for feature extraction and matching, particularly in re-identification applications. SIFT detects and describes local image characteristics that are scale and rotation invariant, as well as partially invariant to affine transformations and light changes. SIFT provides a reliable approach for matching features between images by extracting keypoints and computing their descriptors. This feature is especially important for re-identifying items or individuals in changing situations, such as angles, scales, or lighting.                                </p>
                                <p>
                                SIFT's durability and precision make it an effective re-identification tool, allowing for precise matching even under adverse settings. However, one of SIFT's primary drawbacks is its computational complexity, which can be prohibitively expensive for real-time applications or big datasets. The algorithm's performance can suffer from major viewpoint changes or occlusions, resulting in inconsistent detection and description of local features across images.                                </p>
                            </Fieldset>
                        </div>
                        <div className="card">
                            <h5>LightGlue:</h5>
                            <Fieldset toggleable collapsed>
                                <p>
                                LightGlue is a contemporary feature matching technique that improves the speed and accuracy of conventional methods such as SIFT while lowering computing overhead. It uses innovations in neural network architecture to conduct efficient feature extraction and matching, making it suited for real-time applications. LightGlue improves feature matching with contextual information and learning-based techniques, resulting in more robust and trustworthy matches even in tough settings like variable lighting, scale, and viewpoint.
                                </p>
                                <p>
                                LightGlue's advantages include its ability to function at significantly higher speeds than traditional methods while maintaining great precision. This makes it ideal for applications that require real-time computing, such as surveillance and autonomous driving. LightGlue, on the other hand, relies on neural networks, which necessitates a large amount of training data and computer resources. The efficiency of this technique may be limited in certain re-identification settings due to variations in training data quality and diversity
                                </p>                                
                                <img src={'assets\\demo\\images\\lightglue.png'} alt="LightGlue" style={{ width: '40%', height: '40%' }} />
                            </Fieldset>
                        </div>
                        <div className="card">
                            <h5>Kalman Filter:</h5>
                            <Fieldset toggleable collapsed>
                                <p>
                                The Kalman filter is a popular algorithm for determining the state of a linear dynamic system based on a set of noisy data. It is commonly used in tracking and re-identification operations due to its efficiency and simplicity. The Kalman filter works by anticipating the current state and updating it with fresh measurements, lowering uncertainty and improving the accuracy of the state estimate. This method is most successful for tracking objects or individuals with predictable motion patterns, such as pedestrians or vehicles.
                                 </p>
                                <p>
                                One of the Kalman filter's primary advantages is its computational efficiency, which makes it ideal for real-time applications. It provides a solid framework for coping with measurement noise and successfully manages missing data. However, the Kalman filter is limited to linear systems and Gaussian noise, which may limit its use in more complex re-identification scenarios including non-linearities and non-Gaussian noise. Violations of assumptions about system dynamics and noise characteristics might negatively impact Kalman filter performance.
                                </p>                                
                            </Fieldset>
                        </div>
                        <div className="card">
                            <h5>Extended Kalman Filter:</h5>
                            <Fieldset toggleable collapsed>
                                <p>
                                The Extended Kalman Filter (EKF) is an extension of the Kalman filter that is intended to handle nonlinear systems. By linearizing non-linear functions around the present estimate, the EKF can offer state estimates for systems with non-linear dynamics and observations. This makes the EKF especially effective in more complex re-identification and tracking circumstances when motion patterns and observations cannot be accurately represented by linear equations. The EKF updates the state estimate with fresh measurements, similar to the Kalman filter, but with additional steps to address non-linearities.
                                </p>
                                <p>
                                The EKF retains the Kalman filter's computational efficiency while expanding its application to a wider range of issues. It is commonly employed in robotics, navigation, and other applications that need precise state estimate in the presence of nonlinear dynamics. However, linearization adds complexity and possible sources of mistake. The EKF's performance is subject on linearization correctness, and it may struggle with extremely nonlinear systems or systems with significant model uncertainty. The EKF has a larger computational cost than the regular Kalman filter, potentially limiting its use in real-time applications with limited resources.
                                </p>                                
                            </Fieldset>
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
export default Literature;
