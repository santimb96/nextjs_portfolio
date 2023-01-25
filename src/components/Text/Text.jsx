import React from 'react'

const Text = ({ text }) => {
  const fixText = text?.split('. ')
  return fixText?.map((sentence, idx) => (
    <p key={idx}>
      {sentence}
      {['!', '.'].includes(sentence?.at(sentence?.length - 1)) && !fixText[idx + 1] ? '' : '.'}
    </p>
  ))
}

export default Text
