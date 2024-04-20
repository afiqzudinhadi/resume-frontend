import "dotenv/config";

async function fetchData() {
	try {
		const res = await fetch(`${process.env.API_URL}/api/user/660987be111f99163b03bd46`);

		return res.json();
	} catch (e) {
		console.log(`🚀 ~ fetchData ~ e:`, e);
	}
}

function getSocial(social_medias) {
    let socialsDiv = [];

    for (const social of social_medias) {
		if (social.name === "github") {
			socialsDiv.push(
				<div key={social.id}>
					<a
						class="text-gray-700 hover:text-orange-600"
						href={social.value}
						target="_blank"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="64"
							height="64"
							fill="currentColor"
							// class="bi bi-github"
							class="h-6"
							viewBox="0 0 16 16"
						>
							<path
								fill="currentColor" 
								d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
						</svg>
					</a>
				</div>
			);
		}

		if (social.name === "linkedin") {
			socialsDiv.push(
				<div key={social.id}>
					<a
						class="text-gray-700 hover:text-orange-600"
						href={social.value}
						target="_blank"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							class="h-6"
						>
							<path
								fill="currentColor"
								d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
							></path>
						</svg>
					</a>
				</div>
			);
		}
    }

    return socialsDiv;
}

export default async function Home() {
	const user = await fetchData();
    console.log("🚀 ~ Home ~ user:", user)

	console.log("🚀 ~ Home ~ socials:", user.detail_id.socials);

	return (
		<main>
			<h1 class="text-3xl font-bold underline">Resume</h1>
			{/* <p>Test</p> */}
			{/* <p>{user}</p> */}
			{/* <p>{user[0]._id}</p> */}
			{/* <p>{user[0].username}</p> */}
			<div class="bg-gray-100">
				<div class="container mx-auto py-8">
					<div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
						<div class="col-span-4 sm:col-span-3">
							<div class="bg-white shadow rounded-lg p-6">
								<div class="flex flex-col items-center">
									<img
										src="https://media.licdn.com/dms/image/C5603AQFeBQy6E1tcoA/profile-displayphoto-shrink_800_800/0/1620357886890?e=1718841600&v=beta&t=grPJTu6bC7G4xDbudsyQP5uptcG-s9Gi4EzydBkPUt8"
										class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
									></img>
									<h1 class="text-gray-700 text-xl font-bold">{user.detail_id.first_name}</h1>
									<h2 class="text-gray-700 font-bold">{user.detail_id.last_name}</h2>
									<p class="text-gray-700">Software Engineer</p>
									<div class="mt-6 flex flex-wrap gap-4 justify-center">
										<a
											href={`mailto:${user.detail_id.socials[0].value}`}
											class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
										>
											Contact
										</a>
									</div>
								</div>
								<hr class="my-6 border-t border-gray-300" />
								<div class="flex flex-col">
									<span class="text-gray-700 uppercase font-bold tracking-wider mb-2">
										Skills
									</span>
									<ul>
										<li class="mb-2">JavaScript</li>
										<li class="mb-2">React</li>
										<li class="mb-2">Node.js</li>
										<li class="mb-2">HTML/CSS</li>
										<li class="mb-2">Tailwind Css</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-span-4 sm:col-span-9">
							<div class="bg-white shadow rounded-lg p-6">
								<h2 class="text-xl font-bold mb-4">About Me</h2>
								<p class="text-gray-700">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									finibus est vitae tortor ullamcorper, ut vestibulum velit
									convallis. Aenean posuere risus non velit egestas suscipit.
									Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis
									in faucibus orci luctus et ultrices posuere cubilia Curae;
									Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
									luctus risus rhoncus id.
								</p>
								<h3 class="font-semibold text-center mt-3 -mb-2">Find me on</h3>
								<div class="flex justify-center items-center gap-6 my-6">
                                    {getSocial(user.detail_id.socials)}
									
									<a
										class="text-gray-700 hover:text-orange-600"
										aria-label="Visit TrendyMinds Twitter"
										href=""
										target="_blank"
									>
										<svg
											class="h-6"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path
												fill="currentColor"
												d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
											></path>
										</svg>
									</a>
								</div>

								<h2 class="text-xl font-bold mt-6 mb-4">Experience</h2>
								<div class="mb-6">
									<div class="flex justify-between flex-wrap gap-2 w-full">
										<span class="text-gray-700 font-bold">Web Developer</span>
										<p>
											<span class="text-gray-700 mr-2">at ABC Company</span>
											<span class="text-gray-700">2017 - 2019</span>
										</p>
									</div>
									<p class="mt-2">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
										finibus est vitae tortor ullamcorper, ut vestibulum velit
										convallis. Aenean posuere risus non velit egestas suscipit.
									</p>
								</div>
								<div class="mb-6">
									<div class="flex justify-between flex-wrap gap-2 w-full">
										<span class="text-gray-700 font-bold">Web Developer</span>
										<p>
											<span class="text-gray-700 mr-2">at ABC Company</span>
											<span class="text-gray-700">2017 - 2019</span>
										</p>
									</div>
									<p class="mt-2">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
										finibus est vitae tortor ullamcorper, ut vestibulum velit
										convallis. Aenean posuere risus non velit egestas suscipit.
									</p>
								</div>
								<div class="mb-6">
									<div class="flex justify-between flex-wrap gap-2 w-full">
										<span class="text-gray-700 font-bold">Web Developer</span>
										<p>
											<span class="text-gray-700 mr-2">at ABC Company</span>
											<span class="text-gray-700">2017 - 2019</span>
										</p>
									</div>
									<p class="mt-2">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
										finibus est vitae tortor ullamcorper, ut vestibulum velit
										convallis. Aenean posuere risus non velit egestas suscipit.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
