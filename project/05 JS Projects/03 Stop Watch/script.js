let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let displayTime = document.getElementById('displayTime');
let timer = null;

function stopWatch() {
    milliseconds += 1;

    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;

        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let strHrs = hours.toString().padStart(2, '0');
    let strMin = minutes.toString().padStart(2, '0');
    let strSec = seconds.toString().padStart(2, '0');
    let strMili = milliseconds.toString().padStart(2, '0');

    displayTime.innerHTML = `${strHrs}:${strMin}:${strSec}:${strMili}`;
}

function watchStart() {
    if (timer !== null)
        clearInterval(timer);

    timer = setInterval(stopWatch, 10);
}

function watchStop() {
    clearInterval(timer);
    timer = null;
}

function watchReset() {
    clearInterval(timer);
    timer = null;
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    displayTime.innerHTML = '00:00:00:00';
}

/*
{
    {
        {
            {
                {
                    {
                        {
                            {
                                {
                                    {
                                        {
                                            {
                                                {
                                                    {
                                                        {
                                                            {

                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
*/

