function is_night_hours() {
    return (
        timeRange(21,30,23,59) ||
        timeRange(0,0,6,0)
    );
}

function is_school_hours() {
    return (
        weekdayRange("MON", "FRI") &&
        (
            timeRange(9,0,13,30) ||
        )
    );
}

function FindProxyForURL(url, host) {
    if (is_school_hours() || is_night_hours()) {
        return "PROXY {{ virtual_ipaddress }}:3128; DIRECT";
    } else {
        return "DIRECT";
    }
}
