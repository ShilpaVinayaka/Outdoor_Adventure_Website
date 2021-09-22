const body = document.getElementsByTagName('body')[0]

function collapseSidebar() {
	body.classList.toggle('sidebar-expand')
}

var sidebar = document.getElementById("mysidebar")

window.onclick = function(e) {
	if(e.target == sidebar) {
		sidebar.style.display = "none";
	}
}