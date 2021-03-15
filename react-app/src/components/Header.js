import React from 'react';
import css from './Header.module.css';
import publicUrl from './utils/publicUrl';

function Header(){
    return (
        <div className={css.header}>
            <div className={css.headerItem}>
                <button>
                    <img src={publicUrl('/assets/assets/camera.svg')} alt="Camera"/>
                </button>
            </div>
            <div className={css.headerItem}>
                <button>
                    <img src={publicUrl('/assets/assets/logo.png')} alt="Logo"/>
                </button>
            </div>
            <div className={css.headerItem}>
                <button>
                    <img src={publicUrl('/assets/assets/message.svg')} alt="Message"/>
                </button>
            </div>
            
        </div>
    );
}

export default Header;