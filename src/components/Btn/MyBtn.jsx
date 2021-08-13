import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

 const MyBtn = (props) => {
    return (

        <Button className={props.className}>
          {props.btnName}
        </Button>

    );
  };

export default MyBtn;