import React from 'react';
import { Card } from 'primereact/card';
import { Timeline } from 'primereact/timeline';
import { classNames } from 'primereact/utils';

const BitirmeTimeLine = () => {

    const customEvents = [
        { status: 'Step 1: Project Definition and Requirements (Week 1-2)', icon: 'pi pi-pencil', color: '#FFC107', description: 'Define project scope, objectives, and requirements.' },
        { status: 'Step 2: Literature Review, Initial Research, and Review of Previous Project (Week 3-4)', icon: 'pi pi-book', color: '#03A9F4', description: 'Conduct initial research and review related literature and previous projects.' },
        { status: 'Step 3: Preparation of Experiment Environment (Week 4-7)', icon: 'pi pi-desktop', color: '#4CAF50', description: 'Set up the experimental environment and necessary tools.' },
        { status: 'Step 4: Design of Image Processing and Deep Learning Models (Week 8-11)', icon: 'pi pi-chart-line', color: '#E91E63', description: 'Design image processing techniques and deep learning models.' },
        { status: 'Step 5: Model Training and Validation (Week 11-12)', icon: 'pi pi-check-circle', color: '#9C27B0', description: 'Train and validate the deep learning models.' },
        { status: 'Step 6: Development of Object Tracking Algorithm (Week 13-14)', icon: 'pi pi-cog', color: '#607D8B', description: 'Develop and refine the object tracking algorithm.' },
        { status: 'Step 7: Development of Environment in Simulator Program (Week 15-16)', icon: 'pi pi-map', color: '#FF5722', description: 'Create detailed environments in the simulation program.' },
        { status: 'Step 8: Algorithm Enhancement (Week 17-19)', icon: 'pi pi-cog', color: '#673AB7', description: 'Enhance the object tracking algorithms based on simulated results.' },
        { status: 'Step 9: Sensor Occlusion Simulation (Week 20-21)', icon: 'pi pi-eye-slash', color: '#795548', description: 'Simulate and address sensor occlusion scenarios.' },
        { status: 'Step 10: Testing and Evaluation (Week 21-24)', icon: 'pi pi-star', color: '#3F51B5', description: 'Test and evaluate the entire system under various conditions.' },
        { status: 'Step 11: New Algorithms for Special Cases (Week 25-26)', icon: 'pi pi-lightbulb', color: '#FF9800', description: 'Develop and integrate new algorithms for unique scenarios.' },
        { status: 'Step 12: Preparing Project Presentation Documentation', icon: 'pi pi-file', color: '#009688', description: 'Prepare comprehensive documentation and presentation materials.' },
    ];

    const customizedContent = (item) => {
        return (
            <Card title={item.status}>
                <p>{item.description}</p>
                <br></br>
            </Card>
        );
    };

    const customizedMarker = (item) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-2" style={{ backgroundColor: item.color }}>
                <i className={classNames('marker-icon', item.icon)}></i>
            </span>
        );
    };

    return (
        <div className="grid timeline-demo">
            <div className="col-12">
                <div className="card">
                    <h4>Timeline</h4>
                    <Timeline value={customEvents} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
                </div>
            </div>
        </div>
    );
};

export default BitirmeTimeLine;
