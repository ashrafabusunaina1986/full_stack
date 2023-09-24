import React from 'react'
import classes from './textarea.module.css'
const Textarea = (props) => {
  return (
    <div className={classes.textarea} >
        <label htmlFor={props.input.id}>{props.title}</label>
        <textarea {...props.input}></textarea>
    </div>
  )
}

export default Textarea