import Layout from "@/components/Layout";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import WorkoutCard from "@/components/workoutCard";
import { Button, Col, Grid, Row } from "@nextui-org/react";
import Link from "next/link";

const Statistics = ({ session }) => {
  const supabase = useSupabaseClient();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStatistics();
  }, [session]);

  const onClick = () => {
    <Link href="/create" />;
  };

  async function fetchStatistics() {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setLoading(true);

      let { data, error, status } = await supabase
        .from("dailyWorkout")
        .select()
        .eq("id", user.id);
      console.log(data);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setStats(data);
        setError(null);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      {stats && (
        <div className="stats">
          <div className="workout-grid">
            {stats.map((stat) => (
              <WorkoutCard key={stat} stat={stat} />
            ))}
          </div>
        </div>
      )}
      <div className="button-grid">
        <Button className="workoutButton" color="warning">
          <Link href="create" color="warning">
            Click here to input new workout{" "}
          </Link>
        </Button>
      </div>
    </Layout>
  );
};

export default Statistics;
