export const Navigation = (props) => {
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
            {' '}
            <span className='sr-only'>Переклаючити навігацію</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>

          <a className='navbar-brand page-scroll' href='#page-top'>
            <img src="img/logo.jpg" width="110px" height="50px" alt="Логотип ЦІЛЬ"></img>
          </a>{' '}

        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Особливості
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Про нас
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Послуги
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Зразки
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Що про нас говорять
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Команда офісу
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Контакти
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
