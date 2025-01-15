import React from 'react';
import styled from '../../styles/ui/CheckBox.module.css';

const Switch = () => {
  return (
    <StyledWrapper>
      <div className={styled.checkbox-wrapper-25}>
        <input type="checkbox" />
      </div>
    </StyledWrapper>
  );
}

export default Switch;
