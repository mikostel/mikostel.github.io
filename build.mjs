import { readFile, writeFile, cp, rm, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = dirname(new URL(import.meta.url).pathname);

const template = await readFile(join(root, 'template.html'), 'utf8');
const inlined = await replaceAsync(template, /<!--INLINE:(.+?)-->/g, async (_, p) => {
	return (await readFile(join(root, p.trim()), 'utf8')).trim();
});
await writeFile(join(root, 'index.html'), inlined);

const tw = spawnSync(
	'npx',
	['@tailwindcss/cli', '-i', 'input.css', '-o', 'styles.css', '--minify'],
	{ stdio: 'inherit', cwd: root }
);
if (tw.status !== 0) process.exit(tw.status ?? 1);

const docs = join(root, 'docs');
if (existsSync(docs)) await rm(docs, { recursive: true });
await mkdir(docs, { recursive: true });
await writeFile(join(docs, 'index.html'), inlined);
await cp(join(root, 'styles.css'), join(docs, 'styles.css'));
await cp(join(root, 'assets'), join(docs, 'assets'), { recursive: true });

async function replaceAsync(str, regex, fn) {
	const parts = [];
	let last = 0;
	for (const m of str.matchAll(regex)) {
		parts.push(str.slice(last, m.index), await fn(...m));
		last = m.index + m[0].length;
	}
	parts.push(str.slice(last));
	return parts.join('');
}
