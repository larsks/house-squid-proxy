function FindProxyForURL(url, host) {
	return "PROXY {{ virtual_ipaddress }}:3128";
}
