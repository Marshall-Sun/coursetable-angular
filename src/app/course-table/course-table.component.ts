import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css'],
})

export class CoursetableComponent {

  constructor(private http: HttpClient) { }

  MY_JSON: any;
  nzOptions: any;
  values = [2020, 1, 1];
  listOfData = [
    {
      key: 1,
      day: [{}, {}, {}, {}, {}, {}, {}],
    },
    {
      key: 2,
      day: [{}, {}, {}, {}, {}, {}, {}],
    },
    {
      key: 3,
      day: [{}, {}, {}, {}, {}, {}, {}],
    },
    {
      key: 4,
      day: [{}, {}, {}, {}, {}, {}, {}],
    },
    {
      key: 5,
      day: [{}, {}, {}, {}, {}, {}, {}],
    },
    {
      key: 6,
      day: [{}, {}, {}, {}, {}, {}, {}],
    },
  ];

  ngOnInit(): void {
    this.initSemester()
    this.initCourse()
  }

  initSemester(): void {
    this.http.get('https://cdn.jsdelivr.net/gh/marshall-sun/CDN@1.5/coursetable/semesterList.json')
      .subscribe(data => {
        this.nzOptions = data;
      });

    let now = new Date();
    let period: number;
    const SPRING_2020 = new Date('2020-02-23 00:00:00.000');
    const SUMMER_2020 = new Date('2020-06-28 00:00:00.000');
    const FALL_2020 = new Date('2020-09-06 00:00:00.000');

    if (SPRING_2020 <= now && now < SUMMER_2020) {
      period = now.getTime() - SPRING_2020.getTime();
      this.values[1] = 1;
    } else if (now < FALL_2020) {
      period = now.getTime() - SUMMER_2020.getTime();
      this.values[1] = 2;
    } else {
      period = now.getTime() - FALL_2020.getTime();
      this.values[1] = 3;
    }

    this.values[2] = Math.ceil(period / 1000 / 86400 / 7);
  }

  initCourse(): void {
    this.http.get('https://cdn.jsdelivr.net/gh/marshall-sun/CDN@1.5/coursetable/myCourse.json')
      .subscribe(data => {
        this.MY_JSON = data;
        this.onChanges(this.values);
      });
  }


  onChanges(inputValues: number[]): void {
    this.values = inputValues;
    for (const item of this.listOfData) {
      item.day = [{}, {}, {}, {}, {}, {}, {}];
    }

    for (const course of this.MY_JSON) {
      if (
        course.year == this.values[0]
        && course.semester == this.values[1]
        && course.week.indexOf(this.values[2]) != -1
      ) {
        let courseTime = Math.floor(course.time.split('-')[0] / 2);
        this.listOfData[courseTime].day[course.day] = course
      }
    }
  }
}
