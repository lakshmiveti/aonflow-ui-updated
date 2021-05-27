
/**
 * Author: Lakshman Veti
 * Type: Component
 * Objective: To render dropdown options in header
 * Associated Route/Usage: Header
*/
import React from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import authService from '../services/authService';

//authService.throwBack();

const logout = ()=>{
  authService.logout();
}
var userObj = authService.getUser();

const TheHeaderDropdown = () => {
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={"avatars/2.jpg"}
            className="c-avatar-img"
            alt="avtar"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>{userObj?userObj.userName:""}</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        <CDropdownItem onClick={logout}>
          <CIcon name="cil-ban" className="mfe-2" />
          Logout
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
export default TheHeaderDropdown
