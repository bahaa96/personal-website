<script>
	/** @type {import('./$types').PageData} */
	export let data;

  import ArrowLeftIcon from "$assets/ArrowLeftIcon.svelte";

</script>

<svelte:head>
	<title>Project { data.title }</title>
	<meta name="description" content={data.description} />
</svelte:head>

<div class="bg-primary text-primary-text min-h-screen">
	
	<div class="navbar p-4 border-b">
		<a class="flex items-center gap-4" aria-label="Close" href="/">
			<div class="w-5 h-5">
				<ArrowLeftIcon />
			</div>
			<p class="text-lg">
				Home
			</p>
		</a>
	</div>


	<div class="grid grid-cols-2 gap-12 py-8">
		<div>
			{#each data.viewports as { imageURL }}
				<img src={imageURL} alt="img" loading="lazy" />
			{/each}
		</div>

		<div>
			<p class="text-secondary-text mb-4"># { data.category }</p>
			<p class="text-2xl mb-10">{ data.title }</p>
			<p class="my-10 pe-10">
				{ data.description }
			</p>

			<div class="mb-10 flex flex-col gap-2">
				{#each data.links as { label, URL }}
				<a href={ URL } target="_blank" class="flex gap-4">
					{ label }
					<i class="fas fa-external-link-alt"></i>
				</a>
				{/each}
			</div>

			<p class="flex gap-4 my-4">
			{#each data.technologies as imageURL}
				<img src={imageURL} alt="react.js logo" class="w-8 h-8"  loading="lazy"/>
			{/each}
			</p>
		</div>
	</div>

</div>
