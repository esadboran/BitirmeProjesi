import React, { useContext } from 'react';
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';
import { RTLContext } from './App';

const AppFooter = (props) => {
    const isRTL = useContext(RTLContext);

    return (
        <div className="layout-footer flex align-items-center p-4 shadow-2">
            <img id="footer-logo" src={`assets/demo/images/hacettepe_logo.png`} alt="Hacettepe Üniversitesi" className="mr-2" style={{ width: '2rem' }} />
            <h6>Hacettepe University | Faculty of Engineering | Department of Computer Engineering </h6>
            <Button className={classNames('p-button-rounded p-button-text p-button-plain', { 'ml-auto mr-2': !isRTL, 'ml-2 mr-auto': isRTL })}></Button>
            <Button className={classNames('p-button-rounded p-button-text p-button-plain', { 'ml-auto mr-2': !isRTL, 'ml-2 mr-auto': isRTL })}></Button>
            <Button className={classNames('p-button-rounded p-button-text p-button-plain', { 'ml-auto mr-2': !isRTL, 'ml-2 mr-auto': isRTL })}></Button>
            <Button className={classNames('p-button-rounded p-button-text p-button-plain', { 'ml-auto mr-2': !isRTL, 'ml-2 mr-auto': isRTL })}></Button>
            <Button className={classNames('p-button-rounded p-button-text p-button-plain', { 'ml-auto mr-2': !isRTL, 'ml-2 mr-auto': isRTL })}></Button>
            <Button className={classNames('p-button-rounded p-button-text p-button-plain', { 'ml-auto mr-2': !isRTL, 'ml-2 mr-auto': isRTL })}></Button>
            <a href="https://github.com/BBM479-480-DesignProject/Active-Object-Tracking-on-a-Drone" target="_blank" rel="noopener noreferrer">
                <i className="pi pi-github mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}></i>
            </a>
        </div>
    );
};

export default AppFooter;
