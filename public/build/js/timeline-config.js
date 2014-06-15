var paths,
    events = [],
    imageOptions = {};

paths = JOY.paths.split(',');

imageOptions = {
    png: false,
    format: "jpeg",
    size: "l"
};

thumbNailOptions = {
    png: false,
    format: "jpeg",
    size: "small"
};


paths.forEach(function (path) {
    var link,
        thumbnail,
        headLine,
        days,
        date,
        formatedDate;

    link = client.thumbnailUrl(path, imageOptions);
    thumbnail = client.thumbnailUrl(path, thumbNailOptions);

    date = link.match(/(\d{4})(-|\/)(\d{2})(-|\/)(\d{2})/)[0];
    formatedDate = date.split("-").join(",");
    headLine = buildComments(link);
    days = countDays(date);

    var event = {
        'startDate': formatedDate,
        'endDate': formatedDate,
        'headline': headLine,
        'text': '',
        'asset': {
            'media': link,
            'thumbnail': thumbnail,
            'credit': "<p>第"+days.toString()+"天</p>",
            'caption': ''
        }
    };
    events.push(event);
});

function countDays(date) {
    var birthDay,
        photoDate;
    photoDate = new Date(date);
    birthDay = new Date("2014-05-03");
    return Math.ceil((photoDate.getTime() - birthDay.getTime()) / (24 * 3600 * 1000)) + 1;
}

function buildComments(link) {
    var comments = decodeURI(link).match(/\%2B(.*)\./),
        headLine = "开心的成长";

    if (comments && comments[1]) {
        headLine = comments[1];
    }
    return headLine;
}

timelineJson = {
    'timeline': {
        'headline': "Joy's timeline",
        'type': 'default',
        'text': '记录陈霂嫣成长的点点滴滴',
        'startDate': '2014年5月3日',
        'date': events
    }
};

var timeline_config = {
    width: "100%",
    height: "100%",
    source: timelineJson
};
