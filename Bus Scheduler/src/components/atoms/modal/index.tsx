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
                        <h2 className="modal_header-title">{title}</h2>
                        <button className="close" onClick={() => close()}></button>
                    </header>
                    <main className="modal_content">{children}</main>
                    <footer className="modal_footer">
                        <button className="modal-close" onClick={() => close()}>
                            Cancel
                        </button>
                        <button className="submit">Submit</button>
                    </footer>
                </div>
            </div>
        </>,
        document.getElementById('modal')
    );
};

export default Modal;
