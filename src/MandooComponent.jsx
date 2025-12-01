import { Fragment } from "react"

export default function MandooComponent({ width }) {
  return (
    <Fragment>
      <img
        src="/public/images/mandoo.png"
        alt="만두 사진"
        style={{ width: width }}
      />
    </Fragment>
  )
}
