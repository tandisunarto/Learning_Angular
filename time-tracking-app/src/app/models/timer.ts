export class TimerModel {
    title: string;
    project: string;
    elapsed: number;
    id: any;
    runningSince: number;

    constructor(_title: string, _project: string, _elapsed: number, _id: any, _runningSince: number)  {
        this.title = _title;
        this.project = _project;
        this.elapsed = _elapsed;
        this.id = _id;
        this.runningSince = _runningSince;
    }
}
