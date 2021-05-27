
/**
 * Author: Lakshman Veti
 * Type: Component
 * Objective: To render footer element for layout
 * Associated Route/Usage: Layout
*/

import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">AonFlow</a>
        <span className="ml-1">&copy; 2021 all rights reserved.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
