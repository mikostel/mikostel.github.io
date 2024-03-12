<script lang="ts">
import FlipgridLogoLight from '$lib/logos/flipgrid-logo-light.svg?raw';
import FlipgridLogoDark from '$lib/logos/flipgrid-logo-dark.svg?raw';
import DuffyLogoDark from '$lib/logos/duffy-logo-dark.svg?raw';
import PlauditLogoDark from '$lib/logos/plaudit-logo-dark.svg?raw';
import OfwLogoDark from '$lib/logos/ofw-logo-dark.svg?raw';
import ParsleyLogoDark from '$lib/logos/ph-logo-dark.svg?raw';
import ThemeBoutiqueLogoDark from '$lib/logos/tb-logo-dark.svg?raw';
import ArrowUpRight from '$lib/icons/arrow-up-right.svg?raw';
import LinkedIn from '$lib/icons/linkedin.svg?raw';
import GitHub from '$lib/icons/github.svg?raw';
import Photo from '$lib/photo.jpg';
import ParsleyCaseStudy from '$lib/studies/parsley.pdf';
import OfwCaseStudy from '$lib/studies/ofw.pdf';
import FlipgridCaseStudy from '$lib/studies/flipgrid.pdf';
import DuffyCaseStudy from '$lib/studies/duffy.pdf';
import PlauditCaseStudy from '$lib/studies/plaudit.pdf';
import ThemeBoutiqueCaseStudy from '$lib/studies/themeboutique.pdf';

 import { base } from "$app/paths";

console.log(base);

let Test = FlipgridLogoLight;
import "../app.css";
</script>

<section class="mx-auto max-w-screen-sm md:max-w-screen-md p-8 min-h-screen">
	<img alt="Photo" src={base + Photo} class="w-32 h-32 mx-auto mb-4 rounded-full ring ring-4 ring-slate-100" />
	<h1 class="text-4xl font-medium tracking-tight text-center">Mitchell Kostelecký</h1>
	<h1 class="pb-8 text-2xl font-medium tracking-tight text-neutral-500 text-center">Frontend Software Engineer</h1>

	<p class="text-xl font-medium pb-4">About</p>
	<p class="text-xl text-neutral-500 pb-4">
		I'm a design-focused frontend engineering leader with experience building teams and products that scale efficiently.
	</p>
	<p class="text-xl text-neutral-500 pb-8">Over the course of my career, I've developed a wide ranging skillset in areas such as system design, software architecture, and web accessibility by building cross-platform, user-centric experiences for education, legal, and healthcare companies.</p>

	<p class="text-xl font-medium pb-4">My Work</p>
		<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
			<a class="logo rounded-lg group" href={ParsleyCaseStudy} target="_blank" rel="noopener">
				{@html ParsleyLogoDark}
				{@html ArrowUpRight}
			</a>

			<a class="logo group rounded-lg" href={OfwCaseStudy} target="_blank" rel="noopener">
				{@html OfwLogoDark}
				{@html ArrowUpRight}
			</a>

			<a class="logo group rounded-lg" href={ThemeBoutiqueCaseStudy} target="_blank" rel="noopener">
				{@html ThemeBoutiqueLogoDark}
				{@html ArrowUpRight}
			</a>

			<a class="logo group rounded-lg" href={FlipgridCaseStudy} target="_blank" rel="noopener">
				{@html FlipgridLogoDark}
				{@html ArrowUpRight}
			</a>

			<a class="logo group rounded-lg" href={DuffyCaseStudy} target="_blank" rel="noopener">
				{@html DuffyLogoDark}
				{@html ArrowUpRight}
			</a>

			<a class="logo group rounded-lg" href={PlauditCaseStudy} target="_blank" rel="noopener">
				{@html PlauditLogoDark}
				{@html ArrowUpRight}
			</a>
		</div>

		<p class="text-xl font-medium pt-8 pb-4">Get in touch</p>
		<p class="text-xl text-neutral-500 pb-8">I'm always open to meeting new people and hearing about interesting projects. Connect with me on LinkedIn to start a conversation.</p>
		
		<div class="flex gap-4 justify-center transition text-neutral-500 group">
			<a href="https://www.linkedin.com/in/mitchkostelecky" target="_blank" rel="noopener">
				{@html LinkedIn}
			</a>
			<a href="https://github.com/mikostel" target="_blank" rel="noopener">
				{@html GitHub}
			</a>
		</div>
</section>

<style>
	.logo {
		@apply p-8;
		@apply flex;
		@apply bg-gradient-to-b;
		@apply from-slate-100;
		@apply to-slate-50;
		@apply items-center;
		@apply justify-center;
		@apply h-[120px];
		@apply rounded-lg;
		@apply relative;
		@apply hover:ring;
		@apply hover:ring-2;
		@apply hover:ring-slate-200;
		@apply hover:cursor-pointer;
		@apply hover:bg-slate-50;
	}
</style>