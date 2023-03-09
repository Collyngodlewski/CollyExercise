

const WorkoutCard = ({stat}) => {
    return (

        <div>
            <h3>{stat.id}</h3>
            <p>{stat.workout_type}</p>
            <p>You worked out for {stat.length} on {stat.day}</p>
        </div>
    )
}

export default WorkoutCard