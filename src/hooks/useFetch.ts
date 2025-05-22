import axios, { type Method } from "axios";
import { useEffect, useState } from "react";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function useFetch<T>(method: Method, url: string, requestData?: any) {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const headers: Record<string, string> = {
					Authorization: `Bearer ${process.env.KEY_API}`,
				};

				const response = await axios({
					method,
					url: `${process.env.BASE_API}${url}`,
					data: requestData,
					headers,
				});

				setData(response.data);
			} catch (err) {
				setError(err instanceof Error ? err : new Error(String(err)));
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [method, url, requestData]);

	return { data, loading, error };
}

// How to use:
// const { data, loading, error } = useFetch("GET", "/endpoint");
// const { data, loading, error } = useFetch("POST", "/endpoint", { name: "John" });
