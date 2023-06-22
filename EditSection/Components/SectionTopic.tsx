import React from 'react'

const SectionTopic = ({title,children}:any) => {
  return (
    <details className="collapse collapse-arrow  bg-base-100 border">
          <summary className="collapse-title text-lg font-medium">
            {title}
          </summary>
          <div className="collapse-content">
            {children}
          </div>
    </details>
  )
}

export default SectionTopic