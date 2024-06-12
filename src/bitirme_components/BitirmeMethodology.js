import React, { useCallback, useEffect, useState } from 'react';
import ToolsDemo from './menu/ToolsDemo';
import ConfirmationDemo from '../bitirme_components/menu/ConfirmationDemo';
import DatasetDemo from '../bitirme_components/menu/DatasetDemo';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Steps } from 'primereact/steps';
import TrackingDemo from './menu/TrackingDemo';


const BitirmeMethodology = () => {
    
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation();

    const wizardItems = [
        { label: 'Tools', command: () => navigate('/bitirme/methodology') },
        { label: 'Dataset', command: () => navigate('/bitirme/methodology/dataset') },
        { label: 'Detection and Tracking ', command: () => navigate('/bitirme/methodology/tracking') },
        { label: 'Algorithm Flowchart', command: () => navigate('/bitirme/methodology/flowchart') }
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

    return (
        <div className="col-12 md:col-12">
                <div className="card card-w-title">
                    <h5>Methodology</h5>
                    <Steps model={wizardItems} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
                    <Routes>
                        <Route path={'/'} element={<ToolsDemo />} />
                        <Route path={'/dataset'} element={<DatasetDemo />} />
                        <Route path={'/flowchart'} element={<ConfirmationDemo />} />
                        <Route path={'/tracking'} element={<TrackingDemo />} />

                    </Routes>
                </div>
            </div>
            
    );
};

export default BitirmeMethodology;
