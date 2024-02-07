import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchColors, currentColor } from '../../Redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';

const Card = ({ loding, colors, fetchColors, newColor }) => {
  const dispatch = useDispatch();
  const color = useSelector(state => state.color);

  useEffect(() => {
    fetchColors();
  }, [fetchColors]);
  return (
    // Card container
    <div className="w-[35%] h-screen grid place-content-center" style={{ backgroundColor: `rgba(${newColor}, .25)` }}>
      {/* card */}
      <div className="min-h-64 w-[60vh] rounded-lg" style={{ backgroundColor: 'white' }}>
        {/* Card Top Image */}
        <div className='w-[100%] min-h-[50%] rounded-t-lg' style={{ backgroundColor: `rgba(${newColor})` }}>
        </div>
      </div>
      {/* colors */}
      <ul className="inline-flex flex-wrap flex-row w-[28vw]">
        {!loding && colors.map(color => (
          <li className='mt-[.75rem] ml-[.875rem] relative' key={color.id}>
            {console.log(newColor)}
            <button
              onClick={() => dispatch(currentColor(color.color))}
              className={`h-[1.5rem] w-[1.5rem] rounded-md colors ${newColor == color.color ? 'after:border-[' + 'rgb(' + newColor + ')]'  : ''}`}
              style={{
                backgroundColor: `rgb(${color.color})`
              }}
            ></button>
            {/* <button
              onClick={() => dispatch(currentColor(color.color))}
              className={`h-[1.5rem] w-[1.5rem] rounded-md colors ${newColor == color.color ?  'after:border-[rgb(100,100,100)]' : ''}`}
              style={{
                backgroundColor: `rgb(${color.color})`
              }}
            ></button> */}

          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  colors: state.data.colors,
  newColor: state.data.color,
  loding: state.data.loading
});

export default connect(mapStateToProps, { fetchColors })(Card);
