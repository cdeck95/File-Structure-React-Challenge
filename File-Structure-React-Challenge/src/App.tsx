import { useState } from 'react'
import './App.css'

function App() {

  const files =  {
    children: [ 
      {
        name: "node_modules",
        children: [
          {
            name: ".bin"
          }
        ],
      }, 
      {
        name: "src",
        children: [
          {
            name: "assets",
            children: [
              {
                name: "favicon.ico"
              },
              {
                name: "logo.svg"
              }
            ]
          }
        ]
      },
      { 
        name: "yarn.lock"
      },
      {
        name: ".gitignore"
      }
    ]
  }

  type TEntry = {
    name: string,
    children?: TEntry[]
  }
  
  function FileEntry({name, children} : TEntry) {

    const [isExpanded, setExpanded] = useState(false)

    const toggleExpanded = () => {
      setExpanded(!isExpanded)
    }

    return (
    <div className="entry">
      <button onClick={toggleExpanded} className="expandedBtn">
        {children? <div>
          {isExpanded? "-" : "+"}
        </div>
        : <div></div> }
        
      </button>
      {name}
      {isExpanded && children?.map((file) => (
        <FileEntry {...file}/>
      ))}
    </div>
    )
  }

  return (
    <div className="App">
      
      {files.children.map((file) => (
        <FileEntry {...file}/>
      ))}
    </div>
  )
}

export default App
