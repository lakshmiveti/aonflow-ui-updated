/**
 * Author: Lakshman Veti
 * Type: Component
 * Objective: To provision Layout
 * Associated Route/Usage: Layout
*/

import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {

  return (
  <main className="main-view">
        <TheHeader/>
      <div className="row" style={{marginTop: 80}}>
          <TheSidebar/>
          <TheContent/>
          {/* <TheFooter/> */}
      </div>
      
    </main>
  )
}

export default TheLayout