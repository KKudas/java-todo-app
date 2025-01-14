import Navbar from './components/Navbar';
import TodoTable from './components/TodoTable';

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="mx-8 my-8 lg:mx-24">
          <TodoTable />
        </main>
        <footer className="mt-auto">Insert footer here</footer>
      </div>
    </>
  );
}

export default App;
