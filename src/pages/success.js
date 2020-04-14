import React from "react"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

const Success = () => {
  return (
    <ModalRoutingContext.Consumer>
      {() => (
        <>
          <div>Thanks for letting me know :)</div>
        </>
      )}
    </ModalRoutingContext.Consumer>
  )
}

export default Success
