import React, { useState } from 'react';

const Hooks = () => {
  const [value1, updateValue1] = useState(1)
  const [value2, updateValue2] = useState(1)
  const [value3, updateValue3] = useState(1)
  return (
    <div>
      <button onClick={() => updateValue1(value1 + 1)}>Clique aqui para alterar a quantidade de tomates</button>
      <p>{value1} &#127813;</p>
      <button onClick={() => updateValue2(value2 + 1)}>Clique aqui para alterar a quantidade de uvas</button>
      <p>{value2} &#127815;</p>
      <button onClick={() => updateValue3(value3 + 1)}>Clique aqui para alterar a quantidade de melancias</button>
      <p>{value3} &#127816;</p>
    </div>
  )
}

export default Hooks