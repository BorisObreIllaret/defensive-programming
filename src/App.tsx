import type {FC} from "react";
import {QueryClient, QueryClientProvider,} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {ShopsListComponent} from "@components/business/shops-list.component.tsx";

const queryClient = new QueryClient();

const App: FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools/>
			<main className="w-full max-w-7xl mx-auto p-4">
				<ShopsListComponent/>
			</main>
		</QueryClientProvider>
	);
};

export {App};
