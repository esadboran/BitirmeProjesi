import { classNames } from 'primereact/utils';
import { useContext } from 'react';
import { RTLContext } from './App';
import { Tooltip } from 'primereact/tooltip';

const AppInlineMenu = (props) => {
    const isRTL = useContext(RTLContext);

    const inlineMenuClassName = classNames(
        'layout-inline-menu',
        {
            'layout-inline-menu-active': props.inlineMenuActive[props.menuKey]
        },
        props.className
    );

    const isSlim = () => {
        return props.menuMode === 'slim';
    };

    return (
        <div className={inlineMenuClassName} style={props.style}>
            {isSlim() && <Tooltip target=".avatarTooltip" />}

            <button
                className={classNames('avatarTooltip layout-inline-menu-action p-link flex flex-row align-items-center', { 'p-3 lg:p-1 py-3': props.horizontal, 'p-3': !props.horizontal })}
            >
                <span className={classNames('flex flex-column', { 'ml-2': !isRTL, 'mr-2': isRTL })}>
                    <span className="font-bold">Hoş Geldiniz!</span>
                    <small>Welcome!</small>
                </span>
                <i className={classNames('layout-inline-menu-icon pi pi-angle-down', { 'ml-auto': !isRTL, 'mr-auto': isRTL })}></i>
            </button>
        </div>
    );
};

export default AppInlineMenu;
