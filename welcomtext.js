const welcome = (number, groupname) => {
    return `π¨ππππ ππ πππ πππππ πππ ππππππ π πππππ ππππ πππππππ @${number}. πΊπππ π©ππ π½ππππ π¨ π΅ππππ π―ππππππ π―πππππππ ${groupname} π³πππ π¨π πΉπππππ π·ππ π΅ππ π»πππ πΆ π­πππππ`
}
exports.welcome = welcome

const bye = (number) => {
    return `π¨ππππ @${number}. π½ππ ππππ ππππππ ππππππ πππππ ππ πππ πππ`
}
exports.bye = bye