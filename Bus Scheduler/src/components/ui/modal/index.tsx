import { FC } from 'react';
import { createPortal } from 'react-dom';

import '@/components/ui/modal/style.scss';

type ModalProps = { show: boolean; close: () => void; title: string; children: JSX.Element };

const Modal: FC<ModalProps> = ({ show, close, title, children }): JSX.Element => {
    return createPortal(
        <>
            <div className={`modalContainer ${show ? 'show' : ''} `} onClick={() => close()}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <header className="modal_header">
                        <span className="modal_header-title">{title}</span>
                        <i className="fa fa-close" onClick={() => close()}></i>
                    </header>
                    <main className="modal_content">{children}</main>
                </div>
            </div>
        </>,
        document.getElementById('modal') as HTMLElement
    );
};

export default Modal;
