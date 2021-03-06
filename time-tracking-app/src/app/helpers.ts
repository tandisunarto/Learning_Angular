import * as v4 from '../../node_modules/uuid/v4';

export class Helpers {
  newTimer(attrs) {
    const timer = {
      title: attrs.title || 'Timer',
      project: attrs.project || 'Project',
      id: v4(), // eslint-disable-line no-undef
      elapsed: 0,
      runningSince: 0,
    };

    return timer;
  }

  findById(array, id, cb) {
    array.forEach((el) => {
      if (el.id === id) {
        cb(el);
        return;
      }
    });
  }

  renderElapsedString(elapsed, runningSince) {
    let totalElapsed = elapsed;
    if (runningSince) {
      totalElapsed += Date.now() - runningSince;
    }
    return this.millisecondsToHuman(totalElapsed);
  }

  millisecondsToHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
      this.pad(hours.toString(), 2),
      this.pad(minutes.toString(), 2),
      this.pad(seconds.toString(), 2),
    ].join(':');

    return humanized;
  }

  pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) {
      padded = `0${padded}`;
    }
    return padded;
  }

}
