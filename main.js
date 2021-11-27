let viewport = document.querySelector('meta[name=viewport]'); //Get meta tag with viewport name attr
let viewportContent = viewport.content; //Get content attr value

if (viewport && viewportContent) {
	viewport.content = viewportContent.split(',').filter(a => !/(maximum-scale|user-scalable)/.test(a)).join(', ');
}