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
        date,
        headLine = "开心的成长",
        text;

    link = client.thumbnailUrl(path, imageOptions);
    thumbnail = client.thumbnailUrl(path, thumbNailOptions);

    date = link.match(/(\d{4})(-|\/)(\d{2})(-|\/)(\d{2})/)[0].split("-").join(",");
    text = decodeURI(link).match(/\%2B(.*)\./);

    if (text && text[1]) {
        headLine = text[1];
    }

    console.log(headLine);
    var event = {
        'startDate': date,
        'endDate': date,
        'headline': headLine,
        'text': '',
        'asset': {
            'media': link,
            'thumbnail': thumbnail,
            'credit': date,
            'caption': ''
        }
    };
    events.push(event);
});

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
