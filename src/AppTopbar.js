import React, { useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { useNavigate } from 'react-router-dom';

const AppTopbar = (props) => {
    const navigate = useNavigate();


    // Fixed for 6.1.0
    // eslint-disable-next-line
    const searchPanel = useRef(null);

    useEffect(() => {
        // Fixed for 6.1.0
        /*if (props.searchActive) {
            searchPanel.current.element.focus();
        }*/
    }, [props.searchActive]);




    return (
        <div className="layout-topbar shadow-4">
            <div className="layout-topbar-left">
                <button type="button" style={{ cursor: 'pointer' }} className="layout-topbar-logo p-link" onClick={() => navigate('/')}>
                    <span>BBM 480 : Design Project</span>
                </button>
                <button type="button" className="layout-menu-button shadow-6 p-link" onClick={props.onMenuButtonClick}>
                    <i className="pi pi-chevron-right"></i>
                    
                </button>
                <button type="button" className="layout-topbar-mobile-button p-link">
                    <i className="pi pi-ellipsis-v fs-large" onClick={props.onMobileTopbarButtonClick}></i>
                </button>
            </div>

            <div className={classNames('layout-topbar-right', { 'layout-topbar-mobile-active': props.mobileTopbarActive })}>
                <div className="layout-topbar-actions-left">
                    <span>Active Object Tracking on a Drone</span>
                </div>
                <div className="layout-topbar-actions-right">
                    <ul className="layout-topbar-items">
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AppTopbar;
