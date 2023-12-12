import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Heading from "@repo/ui/heading";
import useGlobalStore from "@repo/ui/useGlobalStore";
function App() {
	// const [count, setCount] = useState(0);
	const { count, incrementCounter, decrementCounter } = useGlobalStore(
		(state) => ({
			count: state?.count,
			incrementCounter: state?.incrementCounter,
			decrementCounter: state?.decrementCounter,
		})
	);
	return (
		<>
			<div className=''>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={incrementCounter}>Increment</button>
				<button onClick={decrementCounter}>Decrement</button>
				<h1>count is {count}</h1>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs '>
				Click on the Vite and React logos to learn more
			</p>
			<Heading />
		</>
	);
}

export default App;
