import { cp, rm, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = dirname(new URL(import.meta.url).pathname);

const tw = spawnSync(
	'npx',
	['@tailwindcss/cli', '-i', 'input.css', '-o', 'styles.css', '--minify'],
	{ stdio: 'inherit', cwd: root }
);
if (tw.status !== 0) process.exit(tw.status ?? 1);

const docs = join(root, 'docs');
if (existsSync(docs)) await rm(docs, { recursive: true });
await mkdir(docs, { recursive: true });
await cp(join(root, 'index.html'), join(docs, 'index.html'));
await cp(join(root, 'styles.css'), join(docs, 'styles.css'));
await cp(join(root, 'assets'), join(docs, 'assets'), { recursive: true });
