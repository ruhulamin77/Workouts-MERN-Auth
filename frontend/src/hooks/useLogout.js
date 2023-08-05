import { useAuthContext } from './useAuthContext';
import { useWorkoutContext } from './useWorkoutContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = useWorkoutContext();

  const logout = async () => {
    // remove item from local storage
    localStorage.removeItem('user');
    // dispatch logout action
    dispatch({ type: 'LOGOUT' });
    workoutDispatch({ type: 'SET_WORKOUTS', payload: null });
  };

  return { logout };
};
