import React, { useCallback, useEffect, useState } from 'react';

import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Steps } from 'primereact/steps';

import IntroductionDemo from './menu_intro/IntroductionDemo';
import Literature from './menu_intro/Literature';
import ProblemDemo from './menu_intro/ProblemDemo';

const BitirmeIntroduction = () => {

    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation();

    const wizardItems = [
        { label: 'Introduction', command: () => navigate('/bitirme/introduction') },
        { label: 'Problem Definition', command: () => navigate('/bitirme/introduction/problem') },
        { label: 'Literature Review ', command: () => navigate('/bitirme/introduction/literature') },
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
                    <h4>Introduction, Problem Definition & Literature Review</h4>
                    <Steps model={wizardItems} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
                    <Routes>
                        <Route path={'/'} element={<IntroductionDemo />} />
                        <Route path={'/problem'} element={<ProblemDemo />} />
                        <Route path={'/literature'} element={<Literature />} />
                    </Routes>
                </div>
            </div>
            
    );
};

export default BitirmeIntroduction;
