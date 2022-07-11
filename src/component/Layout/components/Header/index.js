import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}

                <img src={images.logo} alt="logo" />

                <div className={cx('search')}>
                    <input placeholder="Search account and videos" spellCheck={false} />
                    {/* clear btn */}
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    {/* loading */}
                    <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                    {/* search btn */}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
