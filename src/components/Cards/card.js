import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchColors, setCurrentColor } from '../../Redux-store/slices/colors';
import { useDispatch } from 'react-redux';
import Personal from './content/Personal';
import Social from './content/Social';

const Card = ({ loding, colors, fetchColors, Color }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchColors();
    document.documentElement.style.setProperty('--theme-color', `rgb(${Color})`);
    document.documentElement.style.setProperty('--light-theme-color', `rgba(${Color}, .25)`);
  }, [Color, fetchColors]);
  return (
    // Card container
    <div className="w-[33vw] h-screen grid place-content-center max-md:hidden themeLgbg card_con_left">
      {/* card */}
      <div className="w-[28vw] rounded-lg mb-5 shadow-card">
        {/* Card Header */}
        <div className='w-[100%] min-h-[14vh] rounded-t-lg themeBg cardHeader'>
        <div className='cardHeaderInner'></div>
        </div>
        {/* Card Body */}
        <div className='w-[100%] min-h-[3.1vh] rounded-b-lg flex flex-col gap-2 bg-white px-4 py-3 pt-6 pb-4'>
        <Personal/>
        <Social/>
        </div>
      </div>
      {/* colors */}
      <ul className="flex flex-wrap flex-row w-[25vw]">
        {!loding && colors.map(color => (
          <li className='mt-[.75rem] ml-[.875rem] relative' key={color.id}>
            <button
              onClick={() => dispatch(setCurrentColor(color.color))}
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
