
/**
 * Author: Lakshman Veti
 * Type: Component
 * Objective: To render header element for layout
 * Associated Route/Usage: Layout
*/

import React from 'react';
import {
  CHeader,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink
} from '@coreui/react';

//import authService from '../services/authService';
//authService.throwBack();

import { 
  TheHeaderDropdown,
}  from './index'

const TheHeader = () => {
  return (
    <CHeader>
      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/home">Home</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <TheHeaderDropdown/>
      </CHeaderNav>
      {/* <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
        />
      </CSubheader> */}
    </CHeader>
  )
}

export default TheHeader
