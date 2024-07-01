import React from 'react'

const QuestionComponent = ({questionType}) => {
  return (
    <div><h1 className='font-bold py-2'>No {" "}{questionType}{" "}question type</h1></div>
  )
}

export default QuestionComponent;