"use client";

import LeftPanel from "@/components/home/left-panel";
import RightPanel from "@/components/home/right-panel";
import { Authenticated } from "convex/react";
import { useTheme } from "next-themes";



export default function Home() {

	const {setTheme } = useTheme();


	return (<Authenticated>
		<main className='m-5'>
			
	<div className='flex overflow-y-hidden h-[calc(100vh-50px)] max-w-[1700px] mx-auto bg-left-panel'>
		{/* Green background decorator for Light Mode */}
		<div className='fixed top-0 left-0 w-full h-36 bg-blue-primary dark:bg-transparent -z-30' />

		<LeftPanel />
		<RightPanel />
	</div>
	
</main>
</Authenticated>
	);
}