import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchColors, currentColor } from '../../Redux/actions/action';
import { useDispatch } from 'react-redux';
import Personal from './content/Personal';

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
        <div className='w-[100%] min-h-[3.1vh] rounded-b-lg bg-white px-4 py-3 pt-6 pb-4'>
        <Personal/>
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
  colors: state.colors.colors,
  Color: state.colors.color,
  loding: state.colors.loading
});

export default connect(mapStateToProps, { fetchColors })(Card);
