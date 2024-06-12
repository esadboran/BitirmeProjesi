import React, { useCallback, useEffect, useState ,useRef} from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Steps } from 'primereact/steps';
import { Card } from 'primereact/card';


import Tests from './menu_result/Tests';
import Results from './menu_result/Results';
import Demo from './menu_result/Demo';


import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';



const BitirmeIntroduction = () => {

    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation();

   
    const op1 = useRef(null);
    const op2 = useRef(null);


    const wizardItems = [
        { label: 'Tests', command: () => navigate('/bitirme/result') },
        { label: 'Results', command: () => navigate('/bitirme/result/results') },
        { label: 'Demo', command: () => navigate('/bitirme/result/demo') },
    ];

    const checkActiveIndex = useCallback(() => {
        const paths = location.pathname.split('/');
        const currentPath = paths[paths.length - 1];

        switch (currentPath) {
            case 'seat':
                setActiveIndex(1);
                break;
            case 'payment':
                setActiveIndex(2);
                break;
            case 'confirmation':
                setActiveIndex(3);
                break;
            default:
                break;
        }
    }, [location]);

    useEffect(() => {
        checkActiveIndex();
    }, [checkActiveIndex]);


    const toggle1 = (e) => {
        op1.current.toggle(e);
    };

    const toggle2 = (e) => {
        op2.current.toggle(e);
    };


    return (
        <div className="col-12 md:col-12">
                <div className="card card-w-title">
                    <h4>Results & Discussion & Demo</h4>
                    <div className="grid">
                        <div className="col-12">
                            <div className="card">
                                <Card>
                                    <p>
                                    As a result of our tests, we decided on the optimal controller and tracking algorithms. We tested these choices on a route identified as the main problem. 
                                     Our track starts with a slight right curve and at the apex  of that curve we put a bridge to block the drone's vision. 
                                     Then the road starts to slope down as a result of this the vehicles gain velocity. When the slope is finished there is a tight left turn. 
                                     Our track consists of these kinds of elements such as downhill road, uphill road, trees with large leaves and traffic signs that block the drone’s
                                      vision, and constantly changing reflection that occurs on the vehicle's body and on the road due to curves and slopes. As vehicles we have 4
                                       different vehicles. 3 of them have the same body with different colors, one of them has the shape of an  SUV. One of the vehicle’s is coming 
                                       from the opposite direction. The tracker and algorithms that we used were able to complete this route successfully. 
                                    </p>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="card p-fluid">
                            <h5>You can see our environment in the images below.</h5>
                            <div className="grid formgrid">
                                <div className="col-6">
                                    <Button type="button" label="Image" onClick={toggle1} className="p-button-success" />
                                    <OverlayPanel ref={op1} appendTo={document.body} showCloseIcon style={{ width: '50%', height: '50%' }}>
                                        <img src={'assets\\demo\\images\\environment.png'} alt="environment" style={{ width: '100%', height: '100%' }} />
                                    </OverlayPanel>
                                </div>
                                <div className="col-6">
                                    <Button type="button" label="Image" onClick={toggle2} className="p-button-success" />
                                    <OverlayPanel ref={op2} appendTo={document.body} showCloseIcon style={{ width: '50%', height: '50%' }}>
                                        <img src={'assets\\demo\\images\\environment1.png'} alt="environment1" style={{ width: '100%', height: '100%' }} />
                                    </OverlayPanel>
                                </div>
                            </div>
                        </div>
                    <Steps model={wizardItems} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
                    <Routes>
                        <Route path={'/'} element={<Tests />} />
                        <Route path={'/results'} element={<Results />} />
                        <Route path={'/demo'} element={<Demo />} />
                    </Routes>
                </div>
            </div>
    );
};


export default BitirmeIntroduction;
