import React from 'react'

const Blog = () => {
  return (
    <>
    <section id='blogs'>
			{/* Container */}
			<div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
				{/* Title */}
				<h2 className="text-3xl font-bold md:text-5xl">
					The latest and greatest news
				</h2>
				<p className="mb-8 mt-4 text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
					Lorem ipsum dolor sit amet elit ut aliquam
				</p>
				{/* Content */}
				<div className="mb-8 grid gap-0 sm:justify-items-stretch md:mb-12 md:grid-cols-2 md:gap-4 lg:mb-16 lg:gap-8">
					{/* Item */}
					<a href="#" className="flex items-center gap-4 rounded-md p-4">
						<img
						 src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
						 alt=""
							className="inline-block h-36 w-36 max-w-none flex-none object-cover"
						/>
						<div className="flex flex-col items-start py-4">
							<div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
								<p className="text-sm font-semibold text-blue-600">
									CATEGORY NAME
								</p>
							</div>
							<p className="mb-4 text-xl font-bold">
								The latest news with Flowspark
							</p>
							<div className="flex flex-col items-start text-sm text-gray-500 lg:flex-row lg:items-center">
								<p>Laila Bahar</p>
								<p className="mx-2 hidden lg:block">-</p>
								<p>6 mins read</p>
							</div>
						</div>
					</a>
					{/* Item */}
					<a href="#" className="flex items-center gap-4 rounded-md p-4">
						<img
						 src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
						 alt=""
							className="inline-block h-36 w-36 max-w-none flex-none object-cover"
						/>
						<div className="flex flex-col items-start py-4">
							<div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
								<p className="text-sm font-semibold text-blue-600">
									CATEGORY NAME
								</p>
							</div>
							<p className="mb-4 text-xl font-bold">
								The latest news with Flowspark
							</p>
							<div className="flex flex-col items-start text-sm text-gray-500 lg:flex-row lg:items-center">
								<p>Laila Bahar</p>
								<p className="mx-2 hidden lg:block">-</p>
								<p>6 mins read</p>
							</div>
						</div>
					</a>
					{/* Item */}
					<a href="#" className="flex items-center gap-4 rounded-md p-4">
						<img
						 src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
						 alt=""
							className="inline-block h-36 w-36 max-w-none flex-none object-cover"
						/>
						<div className="flex flex-col items-start py-4">
							<div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
								<p className="text-sm font-semibold text-blue-600">
									CATEGORY NAME
								</p>
							</div>
							<p className="mb-4 text-xl font-bold">
								The latest news with Flowspark
							</p>
							<div className="flex flex-col items-start text-sm text-gray-500 lg:flex-row lg:items-center">
								<p>Laila Bahar</p>
								<p className="mx-2 hidden lg:block">-</p>
								<p>6 mins read</p>
							</div>
						</div>
					</a>
					{/* Item */}
					<a href="#" className="flex items-center gap-4 rounded-md p-4">
						<img
						 src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
						 alt=""
							className="inline-block h-36 w-36 max-w-none flex-none object-cover"
						/>
						<div className="flex flex-col items-start py-4">
							<div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
								<p className="text-sm font-semibold text-blue-600">
									CATEGORY NAME
								</p>
							</div>
							<p className="mb-4 text-xl font-bold">
								The latest news with Flowspark
							</p>
							<div className="flex flex-col items-start text-sm text-gray-500 lg:flex-row lg:items-center">
								<p>Laila Bahar</p>
								<p className="mx-2 hidden lg:block">-</p>
								<p>6 mins read</p>
							</div>
						</div>
					</a>
				</div>
				{/* Button */}
				<a
				 href="#"
					className="mx-auto flex w-32 rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
				>
					View More
				</a>
			</div>
		</section>
    </>
  )
}

export default Blog