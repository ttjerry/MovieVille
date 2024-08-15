import Headed from './components/header'
const App = () => {

  return (
    <div className="app">
      <div className='main'>
        {/* <Headed /> */}
        <div className='rectangle1'></div>
        <div className='rectangle2'></div>
        <div className='rectangleTransparent'></div>
        <div className='rectangleTransparent2'></div>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <div className='circle3'></div>
        <div className='triangle triangle1'>
          <img src='/assets/img/obj_triangle.png'></img>
        </div>
        <div className='triangle triangle2'>
          <img src='/assets/img/obj_triangle.png'></img>
        </div>
        <div className='triangle triangle3'>
          <img src='/assets/img/obj_triangle.png'></img>
        </div>
        <div className='triangle triangle4'>
          <img src='/assets/img/obj_triangle.png'></img>
        </div>
      </div>
    </div>
  );
};

export default App;