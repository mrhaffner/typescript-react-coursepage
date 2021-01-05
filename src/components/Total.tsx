import React from 'react'

const Total: React.FC<{ numberExercises: number }> = ({ numberExercises }) => (
    <p>
        Number of exercises{" "}
        {numberExercises}
    </p>
)

export default Total