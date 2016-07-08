var _ = {
	gebid : function (gebidin) {
		return document.getElementById(gebidin);
	},
	gebcn : function (gebcnin) {
		return document.getElementsByClassName(gebcnin);
	},
	tstr : function (tstrin) {
		return tstrin.toString();
	},
	redir : function (redir) {
		document.location.href=redir;
	},
	duri : function (duriin) {
		return decodeURI(duriin);
	},
	duric : function (duricin) {
		return decodeURIComponent(duricin);
	},
	euri : function (euriin) {
		return encodeURI(euriin);
	},
	euric : function (euricin) {
		return encodeURIComponent(euricin);
	},
	npf : function (pfin) {
		return parseFloat(pfin);
	},
	npi : function (piin) {
		return parseInt(piin);
	},
}