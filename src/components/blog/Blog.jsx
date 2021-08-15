import { Link } from "react-router-dom";
import MyBtn from "../Btn/MyBtn";
import Image from '../image/Image';

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
        <div id='blog-row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.Blog_name}-${i}`} className='col-md-12'>
                <h3>{d.Blog_name}</h3>
                  <Image
                      src={`${d.Blog_img}`}
                      alt={`${d.Blog_alt}`} 
                      className="img-responsive col-md-6"
                      width={440}
                      height={220}
                  />
                <div className='service-desc'>
                  <p className='text-justify'>{d.Blog_text}</p>
                  <Link to={`${d.Blog_name}`} className='page-scroll'>
                    <MyBtn btnName="Читати далі" className='btn btn-custom btn-lg text-right'/>
                  </Link>
                </div>
                <p className='text-right'> {d.Blog_keyword}</p>
              </div>
            ))
            : 'Loading'}
        </div>
      </div>
    </div>
  );
};
