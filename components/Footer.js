import React from 'react'

import '@css/components/footer.less'

const Footer = (props) => {
  const { isLight } = props

  return (
    <div className={ isLight ? "footer light" : "footer " }>
      <div>系统由 React+Node+Ant Desgin驱动 </div>
      <div>All rights reserved 2020 qinguanghui.com</div>
      <div>鄂ICP备20002086号</div>
    </div>
  )
}

export default Footer
