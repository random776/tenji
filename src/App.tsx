import { useState } from 'react'

import * as Tenji from 'tenji'

function App() {
  const [sumiji, setSumiji] = useState("教員教務逆評定");

  return (
    <>
    <h2>点字（漢字対応）仮ツール</h2>
      <span>墨字を入力してください。</span>
      <input
        type="text"
        value={sumiji}
        key={"入力1"}
        onChange={(e) => {
          setSumiji(e.target.value);
        }}
      />
      <p>
        結果：{Tenji.toTenji(sumiji, {kanji: true})}
      </p>
    </>
  )
}

export default App
