import { useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

// components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutContext } from '../hooks/useWorkoutContext';
// import { parse } from 'date-fns';

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();
  const { user } = useAuthContext();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:5000/api/workouts', {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json });
      }
      if (!response.ok) {
        setError(json.error);
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      {workouts ? (
        <div className="workouts">
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </div>
      ) : (
        <p>{error ? error : 'Loading...'}</p>
      )}
      <WorkoutForm />
    </div>
  );
};

export default Home;
