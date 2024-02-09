import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchColors, currentColor } from '../../Redux/actions/action';
import { useDispatch } from 'react-redux';

const Card = ({ loding, colors, fetchColors, Color }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchColors();
  }, [fetchColors]);
  return (
    // Card container
    <div className="w-[36.5vw] h-screen grid place-content-center max-md:hidden" style={{ backgroundColor: `rgba(${Color}, .25)` }}>
      {/* card */}
      <div className="w-[28vw] rounded-lg mb-5 shadow-card">
        {/* Card Header */}
        <div className='w-[100%] min-h-[14vh] rounded-t-lg' style={{ backgroundColor: `rgb(${Color})` }}>
        </div>
        {/* Card Body */}
        <div className='w-[100%] min-h-[13vh] rounded-b-lg bg-white'>
        </div>
      </div>
      {/* colors */}
      <ul className="flex flex-wrap flex-row w-[25vw]">
        {!loding && colors.map(color => (
          <li className='mt-[.75rem] ml-[.875rem] relative' key={color.id}>
            <button
              onClick={() => dispatch(currentColor(color.color))}
              className={`h-[1.5rem] w-[1.5rem] rounded-md outline-offset-[3px] outline-1 outline`}
              style={{
                backgroundColor: `rgb(${color.color})`,
                outlineColor: `${Color === color.color ? color.name : 'transparent'}`,
              }}
            ></button>

          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  colors: state.data.colors,
  Color: state.data.color,
  loding: state.data.loading,
});

export default connect(mapStateToProps, { fetchColors })(Card);
