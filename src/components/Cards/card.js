import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchColors } from '../../Redux/actions/action';

const Card = ({ colors, fetchColors }) => {
  useEffect(() => {
    fetchColors();
  }, [fetchColors]);
  console.log(colors);
  return (
    // Card container
    <div className="w-[35vw] h-screen grid place-content-center" style={{ border: '2px solid red' }}>
      {/* card */}
      <div className="min-h-64 w-[60vh] rounded-lg" style={{ border: '2px solid blue' }}>
        {/* Card Top Image */}
        <div className='w-[100%] min-h-[50%]' style={{ backgroundColor: 'rgb(244, 90, 87)' }}>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  colors: state.data.colors
});

export default connect(mapStateToProps, { fetchColors })(Card);
