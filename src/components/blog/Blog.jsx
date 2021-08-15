import { Link } from "react-router-dom";
import MyBtn from "../Btn/MyBtn";

export const Blog = (props) => {
  return (
    <div id='Blog' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Блог</h2>
          <p>
            Те чим хочемо поділитись з вами...
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.Blog_name}-${i}`} className='col-md-12'>
                <h3>{d.Blog_name}</h3>
                <img src={`${d.Blog_img}`} alt={`${d.Blog_alt}`} className='col-md-6'></img>
                <div className='service-desc'>
                  <p>{d.Blog_text}</p>
                  <Link to={`${d.Blog_name}`} className='page-scroll'>
                    <MyBtn btnName="Читати далі" className='btn btn-custom btn-lg page-scroll'/>
                  </Link>
                </div>
                <p>{d.Blog_keyword}</p>
              </div>
            ))
            : 'Loading'}
        </div>
      </div>
    </div>
  );
};
