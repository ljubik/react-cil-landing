export const Blog = (props) => {
  return (
    <div id='Blog' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Блог</h2>
          <p>
            Те чим хочемо поділитись...
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.Blog_title}-${i}`} className='col-md-12'>
                <h3>{d.Blog_title}</h3>
                <img src={`${d.Blog_img}`} alt="" className='col-md-6'></img>
                <div className='service-desc'>
                  <h3>{d.Blog_name}</h3>
                  <p>{d.Blog_text}</p>
                </div>
              </div>
            ))
            : 'Loading'}
        </div>
      </div>
    </div>




  );
};
