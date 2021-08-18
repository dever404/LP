import logo from './logo.svg';
import './index.css';

function App() {
  return (
    <div className='wrapperBlock'>
      <div className="mt-5 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src={ logo } alt="ChitChat Logo"/>
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500 mb-2">You have a new message!</p>
          <button class="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"> Click me !</button>
        </div>
      </div>
      <div className='my-5 bg-black hover:bg-gray-700 hover:shadow-lg mx-auto max-w-lg space-x-4 shadow-md text-center p-3 text-white rounded-lg'>
        <div>ChitChat</div>
        <p>You have a new message!</p>
        <input className="bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 px-4 py-1 rounded-md mt-2 text-gray-700"></input>
      </div>
      <div className='mx-auto max-w-lg p-5 shadow-md rounded-lg md:grid md:grid-cols-2 hover:shadow-lg'>
        <img className="" src={ logo } alt="ChitChat Logo"/>
        <div className=''>
          <h3 className='mb-2'> Froala Blocks </h3>
          <p className="text-gray-500 text-sm mb-2">You have a new message have a new message have a new message have a new message have a new message have a new message have a new message!</p>
          <a className='px-4 py-1 text-sm text-purple-600 font-semibold border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white' href='google.com'> Download </a>
        </div>
      </div>
    </div>
  );
}

export default App;
