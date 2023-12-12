"use client";

import { Button } from "./components/shadcn/button";
import { Card } from "./components/shadcn/card";

const Heading = () => {
	return (
		<div className='text-3xl text-red-900'>
			<Button>ShadCN Button</Button>
			<Card>
				<h1>Hello</h1>
			</Card>
		</div>
	);
};

export default Heading;
