export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BVJVXWw2.js","app":"_app/immutable/entry/app.DFHUiUl_.js","imports":["_app/immutable/entry/start.BVJVXWw2.js","_app/immutable/chunks/entry.B5onFIFr.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/paths.xlxQdyih.js","_app/immutable/entry/app.DFHUiUl_.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.RM5oWozK.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
