import Layout from "@/components/Layout";
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState, useEffect } from 'react'
import WorkoutCard
 from "@/components/workoutCard";

const Statistics = ({ session }) => {
    const supabase = useSupabaseClient()
    const user = useUser()
    const [ error, setError ] = useState(null)
    const [loading, setLoading] = useState(true)
    const [workout_type, setWorkout_type] = useState(null)
    const [length, setLength] = useState(null)
    const [day, setDay] = useState(null)
    const [id, setId] = useState(null)

    const[stats, setStats] = useState(null)

    useEffect(() => {
        fetchStatistics()  
      }, [session])

    
      async function fetchStatistics()  {

        try {
            
            const { data: { user } } = await supabase.auth.getUser()

            setLoading(true)
        
        let { data, error, status } = await supabase
            .from('dailyWorkout')
            .select()
            .eq('id', user.id)
            // .single()
           console.log(data)

            if (error && status !== 406) {
                throw error
              }

        if(data){
                setStats(data)
                setError(null)
            }
        
        }finally {
           
                setLoading(false)
            
            
        }
    }




    return(
        <Layout>
        {stats &&(
            <div className="stats">
                <div className="workout-grid">
                {stats.map(stat => (
                  <WorkoutCard key={stat.id} stat={stat}/>
                ))}
                </div>
            </div>
        )}
        </Layout>
    )
}

export default Statistics