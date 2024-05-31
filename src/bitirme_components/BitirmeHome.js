import React from 'react';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';
const BitirmeHome = () => {

    return (
        <div>
            <div>
                <div className="col-12">
                    <h1 className="text-center">BBM 480 : Design Project</h1>
                    {/* <div className="field">
                    <span className="p-float-label">
                    <img src={`assets\\layout\\images\\landing\\landing-header.png`} alt="galleria" className="my-4 md:my-0 w-full max-w-screen-xl shadow-2 mr-5" />
                    </span>
                </div> */}
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
                                    <i className="pi pi-arrow-right"></i>
                                </Divider>
                            </div>
                            <div className="col-5 align-items-center justify-content-center">
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                                </p>
                                <Divider layout="horizontal" align="center">
                                    <span className="p-tag">Badge</span>
                                </Divider>
                                <p>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt
                                    in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                    minus.
                                </p>
                                <Divider align="right">
                                    <Button label="Button" icon="pi pi-search" className="p-button-outlined"></Button>
                                </Divider>
                                <p>
                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                                    reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        </div>
    );
};

export default BitirmeHome;
