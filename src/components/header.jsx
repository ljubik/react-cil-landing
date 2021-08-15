import { Link } from "react-router-dom";
import MyBtn from "../components/Btn/MyBtn";

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <Link to="/services" className='page-scroll'>
                  <MyBtn btnName="Читати далі" className='btn btn-custom btn-lg page-scroll'/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
