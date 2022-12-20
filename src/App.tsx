import Empty from './components/Empty';
import ItemDebug from './components/ItemDebug';
import Layout from './components/Layout';
import { useAppContext } from './context/app-context/app-provider';

function App() {
	const { logs, filtered } = useAppContext();

	if (logs.length === 0) return <Empty />;

	return (
		<Layout>
			{(filtered ?? logs).map(log => (
				<ItemDebug key={log.id} log={log} />
			))}
		</Layout>
	);
}

export default App;
