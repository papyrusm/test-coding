function wopen(arg)
{
	window.open(arg, 'Win', '');
}

function wreplace(arg)
{
	var ParentWindow, ParentLocation;
        ParentWindow = window.parent;
        ParentLocation = ParentWindow.location.href;
        ParentLocation = ParentLocation.substring(0, ParentLocation.lastIndexOf('/'));
        ParentWindow.location.replace(ParentLocation + '/' + arg);

}