import { FC } from 'react';
import { createPortal } from 'react-dom';

import '@/components/atoms/modal/style.scss';

type ModalType = { show: boolean };

const Modal: FC<ModalType<T>> = ({ show, close, title, children }): JSX.Element => {
    return createPortal(
        <>
            <div className={`modalContainer ${show ? 'show' : ''} `} onClick={() => close()}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <header className="modal_header">
                        <h4 className="modal_header-title">{title}</h4>
                        <i className="fa fa-close" onClick={() => close()}></i>
                    </header>
                    <main className="modal_content">{children}</main>
                </div>
            </div>
        </>,
        document.getElementById('modal')
    );
};

export default Modal;
