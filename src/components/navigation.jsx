import React from 'react';
import { Link } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import Image from './image/Image';

export const Navigation = (props) => {
console.log(props)
  const togleMenu = () => {
    const mydat2 = "data-toggle='collapse'";
   const mydat = "data-target='#bs-example-navbar-collapse-1'"
  }
  console.log(props)
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            <span className='sr-only'>Переключити навігацію</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>

          <a className='navbar-brand page-scroll' href='#page-top'>
            <Image 
              src="img/logo.jpg"
              className="img-responsive circle"
              alt="Логотип перекладацького агенства ЦІЛЬ"
              width={110}
              height={110}
            />
          </a>

        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >

          <ul className='nav navbar-nav navbar-right'>
            {
              
              props.navData
                ? props.navData.map((d, i) => (
                  <div key={`${d}-${i}`} className='col-md-12'>
                    <h3>{d}</h3>
                  </div>
                )) : <>
                  <li>
                    <Link to="/" className='page-scroll' data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1' >Головна</Link>
                  </li>
                  <li>
                    <Link onClick={togleMenu} to="/blog" className='page-scroll' data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1' >Блог</Link>
                  </li>
                  <li>
                    <a href='#features' className='page-scroll' data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1' >
                      Особливості
                    </a>
                  </li>
                  <li>
                    <a href='#about' className='page-scroll' data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1' >
                      Про нас
                    </a>
                  </li>
                  <li>
                    <a href='#services' className='page-scroll' data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1' >
                      Послуги
                    </a>
                  </li>
                  <li>
                    <a href='#portfolio' className='page-scroll' data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1' >
                      Зразки
                    </a>
                  </li>
                  <li>
                    <a href='#testimonials' className='page-scroll' data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1' >
                      Відгуки
                    </a>
                  </li>
                  <li>
                    <a href='#team' className='page-scroll' data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1' >
                      Команда
                    </a>
                  </li>
                  <li>
                    <a href='#contact' className='page-scroll' data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1' >
                      Контакти
                    </a>
                  </li>
                </>
            }

          </ul>
        </div>
      </div>
    </nav>
  )
}
