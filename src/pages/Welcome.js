import { Route, Routes } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Routes>
        <Route path="new-user" element={<p>welcome,new user!</p>} />
      </Routes>
    </section>
  );
};

export default Welcome;
