import { Route, Routes } from 'react-router-dom';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={}>
        <Route index element={} />
        <Route path="create" element={} />
        <Route path="quizzes" element={} />
        <Route path="quizzes/:quizId" element={} />
      </Route>
    </Routes>
  );
};
