import React from 'react'

const Content: React.FC<{ name: string, exerciseCount: number }> = ({ name, exerciseCount }) => (
    <p>{name} {exerciseCount}</p>
)

export default Content