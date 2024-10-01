let isRainy = false;

const checkWeather = () => {
    return new Promise(function(resolve, reject)
    {
        if (isRainy) {
            resolve("It is raining. Bring an Umbrella.");
        } else {
            reject("It is not raining. No need for an umbrella.");
        }
        }
    )};

    checkWeather().then(function(good) {
        console.log(good);
    }).catch(function(bad) {
        console.log(bad);
    });
    //Warning
    //Danger