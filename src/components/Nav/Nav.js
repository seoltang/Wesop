import React, { useState } from 'react';
import CategoryModal from './CategoryModal';
import './Nav.scss';

// import { FiSearch } from 'react-icons/fi';

function Nav() {
  const [isClick, setIsClick] = useState(false);
  const [navClassName, setNavClassName] = useState('nav');
  const handleClick = () => {
    setIsClick(!isClick);
    isClick ? setNavClassName('nav') : setNavClassName('navClick');
  };

  return (
    <div className={navClassName}>
      <nav className="primaryMenu">
        <ul className="mainCategories">
          <li className="mainCategory">
            <button
              onClick={handleClick}
              className={!isClick ? 'mainCategoryBtn' : 'mainCategoryBtnClick'}
            >
              스킨케어
            </button>
          </li>
          <li className="mainCategory">
            <button
              onClick={handleClick}
              className={!isClick ? 'mainCategoryBtn' : 'mainCategoryBtnClick'}
            >
              바디&핸드
            </button>
          </li>
          <li className="mainCategory">
            <button
              onClick={handleClick}
              className={!isClick ? 'mainCategoryBtn' : 'mainCategoryBtnClick'}
            >
              헤어
            </button>
          </li>
          <li className="mainCategory">
            <button
              onClick={handleClick}
              className={!isClick ? 'mainCategoryBtn' : 'mainCategoryBtnClick'}
            >
              향수
            </button>
          </li>
          <li className="mainCategory">
            <button
              onClick={handleClick}
              className={!isClick ? 'mainCategoryBtn' : 'mainCategoryBtnClick'}
            >
              홈
            </button>
          </li>
        </ul>
      </nav>

      <nav className="secondaryMenu">
        <ul className="secondaryMenuList">
          <li className="loginMenu">
            <button className="loginBtn">로그인</button>
          </li>
          <li className="cartMenu">
            <button className="cartBtn">카트</button>
          </li>
        </ul>
      </nav>
      <CategoryModal />
    </div>
  );
}

export default Nav;
