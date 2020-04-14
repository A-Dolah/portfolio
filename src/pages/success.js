import React from "react"
import { Link } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

const Success = () => {
  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <>
          <div>Then I know - Thanks!</div>
        </>
      )}
    </ModalRoutingContext.Consumer>
  )
}

export default Success
