import React, { Fragment } from 'react'
import classes from './button.module.css'

const Button = (props) => {
  return (
    <Fragment>
      <button className={classes.button}
        onClick={props.onClick}
        {...props.input}
      >
        {props.children}
      </button>
    </Fragment>

  )
}

export default Button