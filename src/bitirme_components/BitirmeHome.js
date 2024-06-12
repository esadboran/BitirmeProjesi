import React , {useState} from 'react';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';


const BitirmeHome = () => {
    const [displayBasic, setDisplayBasic] = useState(false);


    const pdfUrl = 'https://github.com/BBM479-480-DesignProject/Active-Object-Tracking-on-a-Drone/blob/main/Poster.pdf'; 

    const handleDownload = () => {
        window.open(pdfUrl, '_blank');
    };
    

    const basicDialogFooter = (
        <Button
            type="button"
            label="Yes"
            onClick={() => {
                setDisplayBasic(false);
                window.open('https://github.com/BBM479-480-DesignProject/Active-Object-Tracking-on-a-Drone', '_blank'); // Replace with your desired URL
            }}
            icon="pi pi-check"
            className="p-button-secondary"
        />
    );
    

    return (
        <div>
            <div>
               
                <div className="col-12">
                    <h1 className="text-center">BBM 480 : Design Project</h1>
                </div>
                <div className="col-12">
                    <div className="card">
                        <div className="grid">
                            <div className="col-5 flex align-items-center justify-content-center">
                                <div className="p-fluid text-center">
                                    <div className="field">
                                        <span className="p-float-label">
                                            <img src={'assets\\demo\\images\\hacettepe_logo.png'} alt="Hacettepe" className="my-4 md:my-0 w-9 md:w-10rem shadow-2 mr-5"></img>
                                        </span>
                                    </div>

                                    <div className="field">
                                        <span className="p-float-label">
                                            <h1 className="text-center">Active Object Tracking On a Drone</h1>
                                        </span>
                                    </div>
                                    <div className="field">
                                        <span className="p-float-label">
                                            <h4 className="text-center">Esad Boran | Yusuf Koca | Mustafa Emir Peker</h4>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1">
                                <Divider layout="vertical">
                                </Divider>
                            </div>
                            <div className="col-5 align-items-center justify-content-center">
                                <p>
                                The rapid growth of drone technology has created new opportunities for research and practical applications, particularly in the realm of autonomous systems. One of the critical capabilities that enhance the functionality of drones in these applications is their ability to autonomously detect and track objects. Object detection involves identifying and locating objects within a frame, while object tracking involves following the identified object across successive frames. Integrating these capabilities into drones enhances their autonomous navigation, allowing them to interact more intelligently with their environment. This project focused on developing an active object tracking and detection system for drones using the Airsim simulator.                                </p>
                                <Divider layout="horizontal" align="center">
                                </Divider>
                                <p>
                                Our first goal in this project is to create an environment asset on the Airsim Simulator. Initially, we placed multiple vehicles and assets in the environment. After setting up the environment , we implemented multiple vehicle detection and multi object tracking using artificial intelligence models. We implemented a physical tracking algorithm for the drone to follow one selected object acquired from multi object tracking. We also tried to implement a system to seamlessly switch between objects that are followed within the view of the camera. 

                                </p>
                                <Divider align="right">
                                </Divider>
                                <p>
                                As a result of our tests, we decided on the optimal controller and tracking algorithms. We tested these choices on a route identified as the main problem.  Our track starts with a slight right curve and at the apex  of that curve we put a bridge to block the drone's vision. Then the road starts to slope down as a result of this the vehicles gain velocity. When the slope is finished there is a tight left turn. Our track consists of these kinds of elements such as downhill road, uphill road, trees with large leaves and traffic signs that block the drone’s vision, and constantly changing reflection that occurs on the vehicle's body and on the road due to curves and slopes. As vehicles we have 4 different vehicles. 3 of them have the same body with different colors, one of them has the shape of an  SUV. One of the vehicle’s
                                 is coming from the opposite direction. The tracker and algorithms that we used were able to complete this route successfully. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="card p-fluid">
                    <h5>Source Code</h5>
                    <Dialog header="Github" visible={displayBasic} style={{ width: '30vw' }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                        <p>
                            Would you like to see the source code of our project?
                        </p>
                    </Dialog>
                    <div className="grid">
                        <div className="col-12">
                            <Button type="button" label="Github Source Code" icon="pi pi-external-link" onClick={() => setDisplayBasic(true)} />
                        </div>
                    </div>
                </div>
            <div className="card p-fluid">
                <Card title="Project Poster" style={{height: '50%', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <img
                        src={'assets/demo/images/poster.jpeg'}
                        style={{ width: '50%', height: '%50', display: 'block', margin: '1em auto' }}
                        alt="Project Poster"
                    />
                    <Button
                        variant="primary"
                        style={{ width: '50%', height: '%50', display: 'block', margin: '1em auto' }}
                        onClick={handleDownload}
                        download
                    >
                        Download Pdf
                    </Button>
                </Card>
            </div> 
            <div className="card p-fluid">
                <div className="col-12">
                    <Card title="Demo of the Project">
                        <div className="video-container" style={{ position: 'relative', paddingBottom: '40%', height: 0, overflow: 'hidden', maxWidth: '70%', margin: '0 auto', background: '#000' }}>
                            <iframe 
                            src="https://www.youtube.com/embed/4eJiJchDId0" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen 
                            title="Project Abstract Video"
                            style={{ position: 'absolute', top: 0, left: 0, display: 'block', width: '100%', height: '100%' }}
                            ></iframe>
                        </div>
                    </Card>
                </div>
            </div>   
        </div>
    </div>
    );
};

export default BitirmeHome;
