<script>
	import InstagramIcon from "$assets/InstagramIcon.svelte";
  import LinkedinInIcon from "$assets/LinkedinInIcon.svelte";
  import GithubIcon from "$assets/GithubIcon.svelte";
  import projects from "../lookups/projects-snapshot.json"
</script>

<svelte:head>
	<title>Bahaadine - Product Engineer</title>
	<meta name="description" content="Bahaadine - Product Engineer" />
</svelte:head>

<div class="h-screen bg-primary relative text-primary-text">
  <div class="ps-6 pt-8">
    <h1 class="font-extrabold mb-3 text-start">Ahmed Bahaadine</h1>
    <h3 class="font-bold ms-1">
      Product Engineer
    </h3>

  </div>

  <div class="text-md ps-6 pe-24 mt-24">
    {#each projects as { label, slug }}
      <a href="/project/{slug}" class="text-secondary-text">
        @{ label }
      </a>
    {/each}
  
  </div>

  <div class="p-6 w-2/3">
    <p>
      I'm Ahmed Bahaadine a Frontend developer with more than 6 years of experience building any kind of apps,
       I've worked for 2 years as a backend developer after that I decided to frontend things and it's been 4 years
        now for me as a frontend developer. 
        I'm interested in fintech, blockchain technology, and building media sharing apps.
    </p>
  </div>

  <div class="flex items-center gap-4 ps-6">
    Let's collaborate!
    <button type="button" class="flex justify-center items-center gap-2 text-xs text-secondary-text" >
      Text Me!
    </button>
  </div>

  <div class="absolute end-12 top-1/2 -translate-y-1/2 flex flex-col gap-8">
    <span class="bg-secondary h-4 w-0.5 self-center"></span>
    <a href="https://github.com/bahaa96" class="block h-7 w-7 p-1 text-primary-text transition-colors ease-in-out hover:text-secondary-text">
      <GithubIcon />
    </a>
    <a href="https://www.instagram.com/bahaa_jr/" class="block h-7 w-7 p-1 text-primary-text transition-colors ease-in-out hover:text-secondary-text">
      <InstagramIcon />
    </a>
    <a href="https://www.linkedin.com/in/bahaa1/" class="block h-7 w-7 p-1 text-primary-text transition-colors ease-in-out hover:text-secondary-text">
      <LinkedinInIcon />
    </a>
    <span class="bg-secondary h-4 w-0.5 self-center"></span>
  </div>

  <div data-id='footer'  class="absolute start-0 bottom-0 px-6 py-4">
    <div class="text-2xl font-extrabold">
      #product #hacker. #senior #thinker.
    </div>
  </div>
  
</div>  